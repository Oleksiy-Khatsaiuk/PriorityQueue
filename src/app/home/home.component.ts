import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { CoreService } from '../core/services/core.service';
import {Country} from '@angular-material-extensions/select-country';

interface Country {
  name: 'Germany',
  alpha2Code: 'DE',
  alpha3Code: 'DEU',
  numericCode: '276',
  callingCode: '+49'
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  infoForm: FormGroup = this.fb.group({
    email: [[], [Validators.required, this.englishLetters, Validators.pattern("^([!#$%&'*+-/=?^_`{|}~a-zA-Z0-9](\\.[a-zA-Z0-9-])*){1,64}@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*(\\.[a-zA-Z]{2,4})$") ]],
    name: [[], [Validators.required]],
    address: ['', [Validators.required, this.englishLetters]],
    country: [[], [Validators.required, this.englishLetters]],
  });

  constructor(
    private fb: FormBuilder,
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
  }
  submitForm() {
    if (!this.infoForm.invalid) {
      this.coreService
        .sendInfo(this.infoForm.value)
        .pipe(take(1))
        .subscribe((res) => {
          if (res.result === "ok") {
            alert("Information has been sent");
            this.infoForm.reset();
          }
        });
    } else {
      return;
    }
  }

  onCountrySelected(country: Country) {
    console.log(country);
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
