import { IRegisteruser } from '../Interfaces/iregisteruser';

export class UserReg implements IRegisteruser{
 
    userid: string;


    constructor(
        public  userfirstname:string ,
         public userlastname:string ,
          public userdob:string ,
          public userdrivinglicenceno:string,
          public useraadharno:string,
          public userpassportno:string,
          public userphoneno:string,
          public useremailid:string,
          public useraddress1:string,
          public useraddress2:string,
          public userpassword: string
          )
          {}

}
