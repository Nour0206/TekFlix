import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.scss'
})
export class FormReactiveComponent {

  monFormGroup = new FormGroup ({
    firstname: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl(0, [Validators.required, Validators.min(1)]),
  });

  onSubmit() {
    console.log(this.monFormGroup.value);
  }
}
