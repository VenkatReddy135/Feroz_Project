import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from './services/backend.service';
// import { NgOtpInputModule } from 'ng-otp-input';
declare var $;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  registerForm: FormGroup;
  registerForm2: FormGroup;
  submitted = false;
  formData:any;
  constructor(private formBuilder: FormBuilder,private service:BackendService) { }

  ngOnInit() {
    this.registerForm2 = this.formBuilder.group({
     mobile: [''], 
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm2.controls; }
  onSubmit(){

  }

  onSubmit2() {
     this.submitted = true;
     alert("hello world")
      
    // stop here if form is invalid  
       let data={
         "mobile":this.registerForm2.value.mobile,
         "device_id":123456,
         "device_token":123456
       }

      this.service.getData(data).subscribe(data=>{
        console.log(data);
        this.formData=data;
        if(this.formData.status==200){
          document.getElementById("num1").setAttribute("data-target","#otp");
        }
        
      })
    

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  cancel(){
    location.reload();
  }
}