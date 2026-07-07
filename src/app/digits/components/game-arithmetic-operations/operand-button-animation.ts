import { animate, state, style, transition, trigger } from "@angular/animations"

export const operandButtonAnimation = trigger('operandButtonAnimationMove', 
[
    state("buttonFromA", 
      style({left: '{{ posALeft }}', top: '{{ posATop }}', width: '5.625rem', height: '5.625rem'}), { params: { posALeft: '64.0625rem', posATop: '13.6875rem' }}),
    state("buttonToB", 
      style({left: '{{ posBLeft }}', top: '{{ posBTop }}', width: '5.625rem', height: '5.625rem'}), { params: { posBLeft: '50.3125rem', posBTop: '20.25rem'} }),
    transition("* => buttonToB", animate( "1.5s" )),
]);
