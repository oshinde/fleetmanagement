import { IRegisteruser } from '../Interfaces/iregisteruser';

export class UserReg implements IRegisteruser{
    userid: string;


    constructor(
        public  userfname:string ,
         public userlname:string ,
          public userdob:string ,
          public userdrivinglisc:string,
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
