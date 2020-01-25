import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.css']
})
export class AddOnComponent implements OnInit {
  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;
  constructor() { }

  ngOnInit() {
  }
ok(k)
{
this.isChecked3=!this.isChecked1;
if(this.isChecked3==true)
{
  localStorage.setItem('item3',k.target.value);
}
else
{
  localStorage.removeItem('item');
}
  var x=k.target.value;
console.log(x);

}


}
