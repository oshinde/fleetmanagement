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
  // checked:false;
  constructor() { }

  ngOnInit() {
  }

onClick()
{
  var x=localStorage.getItem('item1');
  var y=localStorage.getItem('item2');
  var z=localStorage.getItem('item3');
  console.log(x+" "+y+ " "+z);
  
}

  ok1(k)
  {
  
  
  if(k.target.checked)
  {
    localStorage.setItem('item1',k.target.value);
  }
  else
  {
    localStorage.removeItem('item1')
    //localStorage.setItem('item1','');
  }
    var x=k.target.value;
  console.log(x);
  
  }


  ok2(k)
  {
  
  
  if(k.target.checked)
  {
    localStorage.setItem('item2',k.target.value);
  }
  else
  {
    localStorage.removeItem('item2')
    //localStorage.setItem('item2','');
  }
    var x=k.target.value;
  console.log(x);
  
  }

ok3(k)
{


if(k.target.checked)
{
  localStorage.setItem('item3',k.target.value);
}
else
{
  localStorage.removeItem('item3')
  // localStorage.setItem('item3','');
}
  var x=k.target.value;
console.log(x);

}






}
