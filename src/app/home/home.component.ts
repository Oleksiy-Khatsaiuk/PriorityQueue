import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  infoForm: FormGroup = this.fb.group({
    email: [[], [Validators.required, this.englishLetters, Validators.pattern("^([!#$%&'*+-/=?^_`{|}~a-zA-Z0-9](\\.[a-zA-Z0-9-])*){1,64}@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*(\\.[a-zA-Z]{2,4})$") ]],
    name: [[], [Validators.required, this.englishLetters]],
    address: ['', [Validators.required, this.englishLetters]],
    country: [[], [Validators.required, this.englishLetters]],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }
  submitForm() {
    console.log(this.infoForm);
  }

  englishLetters(control: AbstractControl) {
    const regexStr1 = /^[A-Za-z0-9_!"#$%&'()*+,-./:;<=>?@[^_`{|}~\]\\]*$/;
    if ((regexStr1.test(control.value) === false) && control.value !== '') {
      return {notTest : true};
    }
  }

  get email(): any {return this.infoForm.get('email'); }
  get name(): any {return this.infoForm.get('name'); }
  get address(): any {return this.infoForm.get('address'); }
  get country(): any {return this.infoForm.get('country'); }
}
