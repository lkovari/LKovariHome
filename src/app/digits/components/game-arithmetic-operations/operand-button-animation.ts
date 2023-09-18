import { animate, state, style, transition, trigger } from "@angular/animations"

export const operandButtonAnimation = trigger('operandButtonAnimationMove', 
[
    state("buttonFromA", 
      style({left: '{{ posALeft }}', top: '{{ posATop }}', width: '90px', height: '90px'}), { params: { posALeft: '1025px', posATop: '219px' }}),
    state("buttonToB", 
      style({left: '{{ posBLeft }}', top: '{{ posBTop }}', width: '90px', height: '90px'}), { params: { posBLeft: '805px', posBTop: '324px'} }),
    transition("* => buttonToB", animate( "1.5s" )),
]);
