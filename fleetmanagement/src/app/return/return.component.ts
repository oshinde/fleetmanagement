import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BillingService } from '../Services/billing.service';
import { ActivatedRoute, Router } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Bill } from '../Classes/bill';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {
  
  isChecked: boolean = false;
  myGroup: FormGroup;
  users: any;
  userid:any;
  ufname:any;
  lname:any;
  bill:any;
  constructor(private _userserv:BillingService,private _userCode: ActivatedRoute,
    private router:Router) { }
  


    ngOnInit() {
      this.myGroup = new FormGroup({
        search1: new FormControl(),
        fuserid:new FormControl(),
        ffname:new FormControl(),
        flname:new FormControl(),
        faddr:new FormControl(),
        faadhar:new FormControl(),
        phoneno:new FormControl(),
        fvehicle:new FormControl(),
        fphub:new FormControl(),
        fdhub:new FormControl(),
  
        });
        }
        onSubmit() {
          this.userid = this.myGroup.controls.search1.value;
          this._userserv.getBill(this.userid).subscribe(data=>this.users=data);
          this.bill=JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
       }
       generatePdf(){
        
        
        const documentDefinition = this.pdfinfo();
        pdfMake.createPdf(documentDefinition).open();
       }
       pdfinfo(){
        return{
          
          content:[{text:'bill'},{columns:[[{text:this.bill.name},]]}]
        }
        
      }
    }