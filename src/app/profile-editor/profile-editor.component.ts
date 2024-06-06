import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule,Validators,FormArray  } from '@angular/forms';



@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
  
})
export class ProfileEditorComponent {

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['',Validators.required],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')])
  })  

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  onSubmit(){
    console.warn(this.profileForm.value)
  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address:{
        street: '123 Drew Street'
      }
    })
  }
  constructor(private formBuilder: FormBuilder){}
  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias(){
    this.aliases.push(this.formBuilder.control(''));
  }
}
