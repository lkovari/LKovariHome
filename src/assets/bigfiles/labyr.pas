(* PROGRAM:         Labyrinth with recursive backtracking algorythm
 * FILE NAME:       LABYR.PAS
 * AUTHOR:          László Kővári
 * LAST UPDATE:     1991.07.25.
 * COPYRIGHT:       Copyright (C) 1991 by László Kővári #364121033
 * DESCRIPTION:
                    A program véletlenszerű pontokból 4 irányba irányított fákat rajzol.
                    A farajzoló algoritmus irányított fát rajzol, tehát a megadott iránytól csak jobbra balra 
                    tárhet el.
                    Visszafele nem! Egy pontból a 3 irányt úgy választja ki hogy generál egy véletlenszámot 1-6-ig
                    és ez a szája 3 nak az egyik ismétlés nélküli permutációját választja ki. 
                    Ez a permutáció lesz az irányok vizsgálatának sorrendje. (ahova tud vonalat húzni)
                    A program alapja, hogy vizsgálja egy leendö ágvég állapotát. Ha az nem
                    háttér szinü akkor oda már lett húzva ág valamely irányból. 
                    Ez biztositja hogy a labirintus szabályos lesz.
 *)

program Labyr;
uses crt,graph;
const
                         dn: array [1..6,1..3] of integer=((1,2,3),(1,3,2),(2,1,3),(2,3,1),(3,1,2),(3,2,1));
var
               sx,sy,
               depth,dp,plr,
                   sel,p,fd,
               maxx,maxy,av,
               backgr,xp,yp,
                   maxcolor,
            maxpalette,Step,
                graphdriver,
                  graphmode: integer;
                  copyright,
                 driverpath,
                gdrivername: string;
            grapherror,cmdl: boolean;
{*
        DEPTH           fastruktúra mélysége
        DP              mélységszámláló
        PLR             oldalra való ágrajzolást korlátozza
        SEL             értéke 1-4 a 4 irányt reprezentálja
        P               ágrajzolást korlátozza
        MAXX            maximális képpontok száma X irányban
        MAXY            maximális képpontok száma Y irányban
        AV              segédváltozó numerikus értékké alakitáshoz
        BACKGR          háttér szine
        XP
        YP              segédváltozó koordinátapár
        MAXCOLOR        maximálisan használható szinek száma
        MAXPALETTE      paletták száma
        STEP            ág hossza képpontban
*}

{$M 65520,20000,65520}
{* Grafika alaphelyzetbe *}
procedure initg;
  begin
    randomize;
    grapherror:=false;
    driverpath:='\';
    graphdriver:=detect;
    graphmode:=0;
    {* Graphich mode set*}
    initgraph(graphdriver,graphmode,driverpath);
    if graphresult <>0 then
      grapherror:=true
    else
      begin
        {* Képernyö törlése *}
        cleardevice;
        maxx:=getmaxx;
        maxy:=getmaxy;
        maxcolor:=getmaxcolor;
        maxpalette:=getpalettesize;
        backgr:=getbkcolor;
      end;
  end;

{* Koordináták módositása a következö pont vizsgálatához *}
procedure posnext(var pwx,pwy,sl,ls: integer; ox,oy,stp,dto: integer);

  {*
     PWX-PWY   Megfelel a POSWX POSWY-nak
     OX-OY     Eredeti koordináták
     DFROM     Legutolsó irány
     DTO       Amelyik irányba éppen vizsgálni kell
     STP       Lépés
     SL        Megfelel a SEL-nek
     LS        Megfelel a LASTSEL-nek
   *}

  begin
    case sl of
      1:{* Legutolsó irány FEL *}
          case dto of
            1:{* Aktuális iránytól BALra *}
              begin
                pwx:=ox-stp;                    {* Egy fal végpontja *}
                pwy:=oy;
                ls:=sl;                         {* Elözö irány *}
                sl:=3;                          {* Jelenlegi irány *}
              end;
            2:{* Aktuális irányba *}
              begin
                pwy:=oy-stp;
                pwx:=ox;
                ls:=sl;
                sl:=1;
              end;
            3:{* Aktuális iránytól JOBBra *}
              begin
                pwx:=ox+stp;
                pwy:=oy;
                ls:=sl;
                sl:=4;
              end;
          end;
      2:{* Legutolsó irány LE *}
          case dto of
            1:{* Aktuális iránytól BALra *}
              begin
                pwx:=ox+stp;
                pwy:=oy;
                ls:=sl;
                sl:=4;
              end;
            2:{* Aktuális irányba *}
              begin
                pwy:=oy+stp;
                pwx:=ox;
                ls:=sl;
                sl:=2;
              end;
            3:{* Aktuális iránytól JOBBra *}
              begin
                pwx:=ox-stp;
                pwy:=oy;
                ls:=sl;
                sl:=3;
              end;
          end;
      3:{* Legutolsó irány BAL *}
          case dto of
            1:{* Aktuális iránytól BALra *}
              begin
                pwy:=oy+stp;
                pwx:=ox;
                ls:=sl;
                {* LE *}
                sl:=2;
              end;
            2:{* Aktuális irányba *}
              begin
                pwx:=ox-stp;
                pwy:=oy;
                ls:=sl;
                sl:=3;
              end;
            3:{* Aktuális iránytól JOBBra *}
              begin
                pwy:=oy-stp;
                pwx:=ox;
                ls:=sl;
                {* FEL *}
                sl:=1;
              end;
          end;
      4:{* Legutolsó irány JOBB *}
          case dto of
            1:{* Aktuális iránytól BALra *}
              begin
                pwy:=oy-stp;
                pwx:=ox;
                ls:=sl;
                {* FEL *}
                sl:=1;
              end;
            2:{* Aktuális irányba *}
              begin
                pwx:=ox+stp;
                pwy:=oy;
                ls:=sl;
                sl:=4;
              end;
            3:{* Aktuális iránytól JOBBra *}
              begin
                pwy:=oy+stp;
                pwx:=ox;
                ls:=sl;
                {* LE *}
                sl:=2;
              end;
          end;
    end;
  end;

{* Visszalépés iránytól függöen *}
procedure backstep(var wx,wy,s: integer;xo,yo,sfrom,sto,st: integer);
  {*
  SFROM   Legutóbbi irány ami LASTSEL-ben van
  STO     Vizsgálat iránya ami DOTNUM-ban van
  *}
  begin
    {* Visszalépés *}
    case sfrom of
      1:{* Utolsó irány FEL *}
          case sto of
            1:{* Utolsó vizsgálat iránya BAL *}
              begin
                wx:=wx+st;
                wy:=yo;
              end;
            2:{* Utolsó vizsgálat iránya az utolsó irány FEL *}
              begin
                wy:=wy+st;
                wx:=xo;
              end;
            3:{* Utolsó vizsgálat iránya JOBB *}
              begin
                wx:=wx-st;
                wy:=yo;
              end;
          end;
      2:{* Utolsó irány LE *}
          case sto of
            1:{* Utolsó vizsgálat iránya BAL *}
              begin
                wx:=wx-st;
                wy:=yo;
              end;
            2:{* Utolsó vizsgálat iránya az utolsó irány LE *}
              begin
                wy:=wy-st;
                wx:=xo;
              end;
            3:{* Utolsó vizsgálat iránya JOBB *}
              begin
                wx:=wx+st;
                wy:=yo;
              end;
          end;
      3:{* Utolsó irány BAL *}
          case sto of
            1:{* Utolsó vizsgálat iránya BAL *}
              begin
                wy:=wy-st;
                wx:=xo;
              end;
            2:{* Utolsó vizsgálat iránya az utolsó irány BAL *}
              begin
                wx:=wx+st;
                wy:=yo;
              end;
            3:{* Utolsó vizsgálat iránya JOBB *}
              begin
                wy:=wy+st;
                wx:=xo;
              end;
          end;
      4:{* Utolsó irány JOBB *}
          case sto of
            1:{* Utolsó vizsgálat iránya BAL *}
              begin
                wy:=wy+st;
                wx:=xo;
              end;
            2:{* Utolsó vizsgálat iránya az utolsó irány JOBB *}
              begin
                wx:=wx-st;
                wy:=yo;
              end;
            3:{* Utolsó vizsgálat iránya JOBB *}
              begin
                wy:=wy-st;
                wx:=xo;
              end;
          end;
    end;
    s:=sfrom;                           {* Elözö irány az aktuális *}
  end;

{* Megállapitja egy pontról hogy halad-e rajta keresztül vonal, vagy sem *}
function dotchk(px,py : integer): boolean;
  var
      dot: boolean;
     auxv: integer;
  begin
    auxv:=getpixel(px,py);
    if auxv=backgr then
      begin
        {* Ebbe a pontba még nincs vonal húzva *}
        dotchk:=true;
      end
    else
      dotchk:=false;
  end;

{* Koordináta ellenörzés TRUE ha képernyön belül van a pont *}
function poschk(xx,yy: integer): boolean;
  var
    lv: boolean;
  begin
    {* Tartományellenörzés *}
    if (((xx>=1) and (xx<=maxx)) and ((yy>=1) and (yy<=maxy))) then
      poschk:=true
    else
      poschk:=false;
  end;

{* Jelenlegi irány viszonya az eredetihez cél hogy az eredeti *}
{* iránnyal szembe ne hozzon létre faágat *}
function chkd(d: integer):boolean;
  begin
    chkd:=true;
    case fd of
      1:{* Fel *}
        if d=2 then
          chkd:=false;
      2:{* Le *}
        if d=1 then
          chkd:=false;
      3:{* Bal *}
        if d=4 then
          chkd:=false;
      4:{* Jobb *}
        if d=3 then
          chkd:=false;
    end;
  end;

{* Ha a megadott farajzolási iránytól balra vagy jobbra rajzolna
   nem mindig engedélyezi, mert inkább a rajzolás irányába nö-
   vessze a fa ágait *}
function lrd(ss: integer):boolean;
  var
    vr: integer;
  begin
    vr:=random(101);
    case fd of
      1:{* Fel *}
        case sel of
          3:{* Balra *}
            if vr<plr then
              lrd:=true
            else
              lrd:=false;
          4:{* Jobbra *}
            if vr<plr then
              lrd:=true
            else
              lrd:=false;
        end;
      2:{* Le *}
        case sel of
          4:{* Balra *}
            if vr<plr then
              lrd:=true
            else
              lrd:=false;
          3:{* Jobbra *}
            if vr<plr then
              lrd:=true
            else
              lrd:=false;
        end;
      3:{* Fel *}
        case sel of
          2:{* Balra *}
            if vr<plr then
              lrd:=true
            else
              lrd:=false;
          1:{* Jobbra *}
            if vr<plr then
              lrd:=true
            else
              lrd:=false;
        end;
      4:{* Fel *}
        case sel of
          1:{* Balra *}
            if vr<plr then
              lrd:=true
            else
              lrd:=false;
          2:{* Jobbra *}
            if vr<plr then
              lrd:=true
            else
              lrd:=false;
        end;
    end;
  end;

{* A rekurziv rutint meghivja ha TRUE *}
function call: boolean;
   var
     vl: integer;
   begin
     vl:=random(100);
     if vl<=p then
       call:=true
     else
       call:=false;
   end;

{* Egy vonal huzása egy adott pontba rekurziv algoritmus *}
procedure wall(var posx,posy: integer);
  var
          lastsel,
      poswx,poswy,
      pposx,pposy,
       dotn,dotnm,
           dotnum:      integer;

      {*
      LASTSEL           elözö irány
      POSWX
      POSWY             munkaváltozó koordinátapár
      PPOSX
      PPOSY             átadó koordinátapár
      DOTNUM            vizsgálandó irány
      *}

  begin
    {* Kezdöpozició *}
    pposx:=posx;
    pposy:=posy;
    if not keypressed then
      begin
        {* Ha nem volt lenyomva billentyü *}
        poswx:=0;
        poswy:=0;
        dp:=dp+1;
        dotnm:=1;
        repeat
          dotn:=random(7);
        until dotn<>0;
        while dotnm<=3 do
          begin
            dotnum:=dn[dotn,dotnm];
            {* Irány meghatározása *}
            posnext(poswx,poswy,sel,lastsel,pposx,pposy,step,dotnum);
            {* Koordináták ellenörzése *}
            if (poschk(poswx,poswy) and dotchk(poswx,poswy)) and chkd(sel) and lrd(sel) then
              begin
                {* Vonal huzása *}
                line(pposx,pposy,poswx,poswy);
                if (call and (dp<=depth)) then
                  {* Rekurziv hivás *}
                  wall(poswx,poswy);
              end;
            {* Visszalépés *}
            backstep(poswx,poswy,sel,pposx,pposy,lastsel,dotnum,step);
            dotnm:=dotnm+1;
          end;
      end;
  end;

{* Véletlenszerü szin *}
function rndcolor: integer;
  var
    clr: integer;
  begin
    repeat
      clr:=random(maxcolor+1);
    until clr<>backgr;
    rndcolor:=clr;
  end;

{* Egy véletlenszerü pontból irányitott fát rajzol *}
procedure drawtree;
  begin
    repeat
      repeat
        sx:=random(trunc(maxx+step/step))*step;
      until ((sx>=0) and (sx<=trunc(maxx+step/step)*step));
      repeat
        sy:=random(trunc(maxy+step/step))*step;
      until ((sy>=0) and (sy<=trunc(maxy+step/step)*step));
      sel:=1;
      while sel<=4 do
        begin
          dp:=0;
          setcolor(rndcolor);
          wall(sx,sy);
          sel:=sel+1;
        end;
    until keypressed;
  end;

{* FôPROGRAM *}
begin
  copyright:='Copyright (C) 1991 by László Kővári #3641321033';
  {* Alaphelyzet *}
  initg;
  if not grapherror then
    begin
      {* Ha a grafikus rendszer üzemkész *}
      if paramcount=4 then
        begin
          val(paramstr(1),step,av);
          if ((step>100) or (step<1)) then
            step:=10;
          val(paramstr(2),p,av);
          if ((p>100) or (p<1)) then
            p:=70;
          val(paramstr(3),depth,av);
          if ((depth>1000) or (depth<1)) then
            depth:=100;
          val(paramstr(4),plr,av);
          if ((plr>100) or (plr<1)) then
            plr:=100;
          {* Ha volt parancssor paraméter *}
          cmdl:=false;
        end
      else
        begin
          Step:=10;             {* èghossz *}
          p:=70;                {* Random<P akkor meghúz egy ágat *}
          cmdl:=true;
          depth:=100;           {* Fastruktura mélysége *}
          plr:=100;              {* Random<PLR akkor valamely oldalra meg- *}
                                {* huz egy ágat *}
        end;
      setcolor(green);
      {* Keret rajzolása *}
      line(0,0,trunc(maxx/step)*step,0);
      line(trunc(maxx/step)*step,0,trunc(maxx/step)*step,(trunc(maxy/step)*step)-step);
      line(trunc(maxx/step)*step,trunc(maxy/step)*step,0,trunc(maxy/step)*step);
      line(0,trunc(maxy/step)*step,0,step);
      drawtree;
      repeat

      until keypressed;
    end;
  closegraph;
  if cmdl then
    begin
      writeln;
      writeln('Usage: LABYR WallLength Probability Depth LeftRightLength');
      writeln;
      writeln('            Wall Length = 1-100');
      writeln('                        Probability = 1-100');
      writeln('                                    Depth = 1-1000');
      writeln('                                        Left Right Length = 1-100');
      writeln;
      writeln(copyright);
    end;
end.
