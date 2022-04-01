  let pass = document.getElementById('password');
  let form = document.getElementById('form');
  let email = document.getElementById('email');
  let emailid="abc@gmail.com";
  let emailpass="12345678";
  let flag=1;

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  function validform(){
    if(email.value == ''){
        document.getElementById("e-msg").innerHTML=("email cannot be empty !");
        flag=0;
       }else if(!email.value.match(mailformat))
            { 
              document.getElementById("e-msg").innerHTML=("invalid email !");
              flag=0;
            }else{
              document.getElementById("e-msg").innerHTML=("");
            }


            if(pass.value == ''){
              document.getElementById("p-msg").innerHTML=("password cannot be empty !"); 
              flag=0;
            }else if((pass.value.length <= 7 && pass.value.length!=0) || pass.value.length >= 9) {
                document.getElementById("p-msg").innerHTML=("Password should be 8 charecters");
                flag=0;
              }else{
                document.getElementById("p-msg").innerHTML=("");
              }



                if(email.value.match(mailformat)){
                    if(pass.value.length==8){
                        if(email.value == emailid && pass.value == emailpass)
                        {
                         console.log("sgsrg");
                         window.location.href="report.html";
                         }else{
                               alert("invalid credentials");
                               flag=0;
                        }
                     }
                    }

    //    if(flag){
    //        return true;
    //    }else{
           return false;
    //    }
  }