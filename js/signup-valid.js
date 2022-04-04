  let pass = document.getElementById('password');
  let form = document.getElementById('form');
  let email = document.getElementById('email');
  let mob= document.getElementById('mob-number');
  let uname= document.getElementById('uname');
  let flag=1;

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  function signupvalid(){
    if(email.value == ''){
        document.getElementById("email-err").innerHTML=("email cannot be empty !");
        setTimeout(clear_email_error,3000);
        flag=0;
       }else if(!email.value.match(mailformat))
            { 
              document.getElementById("email-err").innerHTML=("invalid email !");
              setTimeout(clear_email_error,3000);
              flag=0;
            }else{
              document.getElementById("email-err").innerHTML=("");
            }

            function clear_email_error(){
            document.getElementById("email-err").innerHTML=("");
           }
            // -----------------------------------------------------------------------------------
            if(pass.value == ''){
              document.getElementById("pass-err").innerHTML=("password cannot be empty !"); 
              setTimeout(clear_pass_error,3000);
              flag=0;
            }else if((pass.value.length <= 7 && pass.value.length!=0) || pass.value.length >= 9) {
                document.getElementById("pass-err").innerHTML=("Password should be 8 charecters");
                setTimeout(clear_pass_error,3000);
              }else{
                document.getElementById("pass-err").innerHTML=("");
              }
              function clear_pass_error(){
              document.getElementById("pass-err").innerHTML=("");
              }

            //   -----------------------------------------------------------------
              if(uname.value== ''){
                document.getElementById("uname-err").innerHTML=("username cannot be empty !"); 
                setTimeout(clear_uname_error,3000); 
              }else if(uname.value.length >= 20){
                document.getElementById("uname-err").innerHTML=("username should be 20 charecter or less !"); 
                setTimeout(clear_uname_error,3000); 
              }
              function clear_uname_error(){
                document.getElementById("uname-err").innerHTML=("");
                }

                // -----------------------------------------------------------------
                if(mob.value== ''){
                    document.getElementById("mob-num-err").innerHTML=("mobile number cannot be empty !"); 
                    setTimeout(clear_mob_error,3000); 
                  }else if(mob.value.length != 10){
                    document.getElementById("mob-num-err").innerHTML=("mobile number should be 10 charecter !"); 
                    setTimeout(clear_mob_error,3000); 
                  }
                  function clear_mob_error(){
                    document.getElementById("mob-num-err").innerHTML=("");
                    }
           return false;
  }
