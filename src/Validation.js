
import handleClick from "./Home";
export default function Validation(input){
     console.log("Validation");
 //  debugger;
    const errMsg = {}
    // if(Validation){
    //     {handleClick()}
    // }

    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$%^&*-])(?=.*[0-9])(?=.{8,})/;
    const email_pattern= /[A-Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-za-z.]{2,6}/;
    // const password_pattern = /^Mehul@123$/;
    // console.log(password_pattern.test(input.password))

    if(input.fName === ""){
        errMsg.fName = "First name is required";

    }
    if(input.lName === ""){
        errMsg.lName = "Last Name is Required";
    }
       
    if(input.password === ""){
        errMsg.password = "password is required";
    }
    else if(!password_pattern.test(input.password))
    {
       // debugger;
        errMsg.password ="Password is not valid";

    }

    if(input.email === ""){
        errMsg.email = "email is required";
    }
    else if(!email_pattern.test(input.email)){
        errMsg.email="email is not valid";
    }
     return errMsg;


}