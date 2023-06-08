var iname=document.getElementById('name').value


regname=('/^[a-zA-Z ]{2,30}$/')

if(regname.test(iname)==false){
    error.innerHTML="please enter your name"
    return false
}