import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../services/form-service.service';
import { Form } from '../models/form';

@Component({
  selector: 'app-rsts-form',
  templateUrl: './rsts-form.component.html',
  styleUrls: ['./rsts-form.component.css']
})
export class RSTSFormComponent {
  formData: Form = new Form();
  rstsForm: FormGroup;
  formSubmitted = false;
  showResult = false;
  successModal = false;
  failureModal = false;
  submittedUrl: string = '';
  submittedBrowsers: string[] = [];
  helloMessage: string = "Hi there!";
  browsers!: string;
  isFormProcessing!: boolean;

  constructor(private formService: FormService,private fb: FormBuilder) {
    this.rstsForm = this.fb.group({
      url: ['', Validators.required],
      browsers: this.fb.array([], Validators.required)
    });
  }

  updateBrowsers(browser: string) {
    const browserArray = this.rstsForm.get('browsers') as FormArray;
    console.log("Before clear", browserArray);
    const index = browserArray.value.indexOf(browser);
 
    if (index !== -1) {
      browserArray.removeAt(index);
    } else {
      browserArray.push(this.fb.control(browser));
    }
  }
 
onSubmit() {
  const browserArray = this.rstsForm.get('browsers') as FormArray;
  console.log(browserArray, "Submit Browser Array");
    this.isFormProcessing = true;
    this.formSubmitted = true;
    if (this.rstsForm.invalid) {
      return;
    }

    this.formData = this.rstsForm.value;
    this.submittedUrl = this.formData.url;
    this.submittedBrowsers = this.formData.browsers;
    this.formService.submitFormData(this.formData).subscribe(
      (response) => {
        console.log(response);
        this.isFormProcessing = false;
        this.showResult = true;
        this.successModal = true;
      },
      (error) => {
        this.showResult = true;
        this.failureModal = true;
      }
    );
  }

  closeModal() {
    this.showResult = false;
  }

    resetForm() {
      const browserArray = this.rstsForm.get('browsers') as FormArray;
      console.log("Before clear", browserArray.value);
      browserArray.clear();
      console.log("After clear", browserArray.value);
      this.rstsForm.reset();
      console.log("After reset", browserArray.value);
  }

  }

 

