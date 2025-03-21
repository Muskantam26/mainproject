let signUp=() =>{
    let name = document.querySelector("#name").value
    let inpnum = document.querySelector("#num").value
    let passwor = document.querySelector("#password").value
    
    let errname=document.querySelector("#errname")
    let errnum=document.querySelector("#errnum")
    let errpass=document.querySelector("#errpass")


    if(name==""){
        errname.innerHTML="please enter your valid name"
        errname.style.color="red"
        return false;
    }
    if(inpnum==""){
        errnum.innerHTML="please enter your  number"
        errnum.style.color="red"
        return false;

    }
    else if(isNaN(inpnum)){
        errnum.innerHTML="please enter your  number only"
        errnum.style.color="red"
        return false;

    }
    else if(inpnum.length!=10){
        errnum.innerHTML="please enter your valid number"
        errnum.style.color="red"
        return false;

    }
    if(passwor==""){
        errpass.innerHTML="please enter your valid pass"
        errpass.style.color="red"
        return false;

    }
    else if(!(passwor.match(/[1234567890]/)
         && passwor.match(/[!@#$%&*^()]/)
         && passwor.match(/[a-z]/)
         && passwor.match(/[A-Z]/)))
         {
           errpass.innerHTML="please create strong password"
           errnum.innerHTML=""
             errpass.style.color="red"
             return false
         }
    


    
    
    
    localStorage.setItem("name",name)
    localStorage.setItem("number",inpnum)
    localStorage.setItem("password",passwor)


    location.href="login.html"
return false;
}

let login=()=>{
    let loginname=document.querySelector("#namee").value
    let loginpass=document.querySelector("#pass").value

    let localname=localStorage.getItem("name")
   let localpass=localStorage.getItem("password")
if(loginname==localname && loginpass==localpass){
    location.href="home.html"
}

return false;
}



