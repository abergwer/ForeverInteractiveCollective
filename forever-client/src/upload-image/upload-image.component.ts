import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent {
  @ViewChild('myForm') myForm: NgForm;
  selectedFile: File = null;

  constructor(private http : HttpClient) {}
  name : string;
  locationDescription : string;
  fullDescription : string;
  shortDescription : string;
  location : string;
  imagel : File;

  onSubmit(): void {


    const fileReader = new FileReader();
    fileReader.onload = () => {
      const srcData = fileReader.result;
      let obj = {
        name : this.name,
        location : this.location,
        locationDescription : this.locationDescription,
        shortDescription : this.shortDescription,
        fullDescription : this.fullDescription,
        image : srcData
      }
      this.postData(obj);
    };
    fileReader.readAsDataURL(this.selectedFile);
    this.myForm.reset();
    
    // send the form data to your server using an HTTP POST request
  }
  

  onFileSelected(event: any): void {
    this.selectedFile = <File>event.target.files[0];
  }

  postData(data: any){
    return this.http.post('/api/uploadImage', data);
  }
}
