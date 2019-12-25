import {Directive, Input} from '@angular/core';
import {Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appConfirmPass]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmPassDirective,
    multi: true
  }]
})
export class ConfirmPassDirective implements Validator {
  @Input() appConfirmPass: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = control.parent.get(this.appConfirmPass);
    if (controlToCompare && controlToCompare.value !== control.value) {
      return {'notEqual': true};
    }

    return null;
  }

  constructor() {
  }

}
