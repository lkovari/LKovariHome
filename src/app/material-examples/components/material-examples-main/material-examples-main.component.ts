import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-material-examples-main',
  templateUrl: './material-examples-main.component.html',
  styleUrls: ['./material-examples-main.component.scss']
})
export class MaterialExamplesMainComponent implements OnInit {
  searchSubject$ = new Subject<string>();
  results$: Observable<any>;
  searchString: string;
  searchMode: 'Both' | 'Image' | 'Video' = 'Both';
  showSearchContentFormControl: FormControl = new FormControl(this.searchMode);

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.results$ = this.searchSubject$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((searchString: string) => this.queryAPI(searchString)),
      );
  }

  queryAPI(searchString: string){
    console.log('queryAPI', searchString);
    return this.httpClient.get(`https://www.reddit.com/r/aww/search.json?q=${searchString}`)
      .pipe(
        map((result: any) => result['data']['children'])
      );
  }

  ngModelChange(event: any) {
    console.log('input changed', event);
    this.searchSubject$.next(event);
  }

  findBoth() {
    return this.showSearchContentFormControl.value === 'Both';
  }

  findVideo() {
    return this.showSearchContentFormControl.value === 'Video';
  }

  findImage() {
    return this.showSearchContentFormControl.value === 'Image';
  }

  
  data(data: any) {
    console.log('data', data);
  }
}
