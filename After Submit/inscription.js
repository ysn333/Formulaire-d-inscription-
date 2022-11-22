let userName = document.getElementById("txtUserName");
let usePrenom = document.getElementById("txtUserPrenom");
let userEmaiL = document.getElementById("txtUserEmail");
let userNomber = document.getElementById("txtUserNomber");
let userDropdown = document.getElementById("dropdown");
let userselect = document.getElementById("txtUseselectd");
let FromQroup = document.getElementById('select2');
var ok1,ok2,ok3,ok4,ok5,ok6,ok7;

function validateInput(){

  // NAME//////////////////////////////////
  if(userName.value.trim()===""){
    onError(userName, "last name cannot be empty");
    ok1 = false;
  }
  else{
    if(!isValidName(userName.value.trim())){
      onError(userName, "last name is not valid");
      ok1 = false;
    }
    else{
      onSuccess(userName);
      ok1 = true;
    }
  }
  
  // PRENOM//////////////////////////////////
  if(usePrenom.value.trim()===""){
    onError(usePrenom, "first name cannot be empty");
    ok1 = false;
  }
  else{
    if(!isValidprenom(usePrenom.value.trim())){
      onError(usePrenom, "first name is not valid");
      ok1 = false;

    }
    else{
      onSuccess(usePrenom);
      ok1 = true;
    }
  }
  
  // EMAIL//////////////////////////////////
  if(userEmaiL.value.trim()===""){
    onError(userEmaiL, "Email cannot be empty");
    ok1 = false;
  }
  else{
    if(!isValidEmaiL(userEmaiL.value.trim())){
      onError(userEmaiL, "Email is not valid");
      ok1 = false;
    }
    else{
      onSuccess(userEmaiL);
      ok1 = true;
    }
  }
  
  // NOMBER//////////////////////////////////
  if(userNomber.value.trim()===""){
    onError(userNomber, "phone number cannot be empty");
    ok1 = false;
  }
  else{
    if(!isValidNombre(userNomber.value.trim())){
      onError(userNomber, "phone number is not valid");
      ok1 = false;
    }
    else{
      ok1 = true;
      return onSuccess(userNomber);
    
    }
  }

  //  selecte////////////////////////////////////// 
  if(chkcotrol(userselect)){
    onSuccess(userselect);
    ok1 = true;
  }
  else {
    onError(userselect, "clubs is not valid");
    ok1 = false;
  }

  //////GROUPE//////////////////////////////////

  if(check(FromQroup)){
    onSuccess(FromQroup);
    ok1 = true;
  }
  else {
    onError(FromQroup, "clubs is not valid");
    ok1 = false;
  }


}

  document.querySelector("button").addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
  });


  function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility="hidden";
    parent.classList.remove("error")
    parent.classList.add("success");
  }

  function onError(input, message) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.style.color="red";
    messageEle.innerText=message;
    parent.classList.add("error")
    parent.classList.remove("success");
  }

  // EMAIL//////////////////////////////////
  function isValidEmaiL(userEmaiL){
    return /^([a-zA-Z]+\.+[a-zA-Z]+(@ofppt\.ma))$/gm.test(userEmaiL);
  }

    // NAME//////////////////////////////////
  function isValidName(userName){
    return /^([a-z]{3,15})$/.test(userName);
  }

  // PRENOM//////////////////////////////////
  function isValidprenom(usePrenom){
    return /^([a-z]{3,15})$/.test(usePrenom);
  }

  // NOMBRE//////////////////////////////////
  function isValidNombre(userNomber){
    return  /^[0-0][5-7][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/gm.test(userNomber);
  }
  // SELECT//////////////////////////////////
  function chkcotrol(userselect){

      var total=0
  for (var i=0 ; i<userselect.length;i++){
  if(userselect[i].selected)
  total=total+1
            
    }
    console.log(total);
          if(total>3 || total<1) 
            return false;
          else
            return true;

}

// GROUPE//////////////////////////////////
  function check(FromQroup){
  
   if(FromQroup.checked){
    document.getElementById("resultat").style.color="red";
      document.getElementById("resultat").innerHTML='Group cannot be empty';
      
    }
    else {
      document.getElementById("resultat").style.color=" rgb(0, 255, 51)";
      document.getElementById("resultat").innerHTML='group is not valid';
      output10.innerHTML ="vous devez choisir un groupe";
      output11.innerHTML = " ";
      output12.innerHTML = " ";
      output13.innerHTML = " ";
      output14.innerHTML = " ";
      output15.innerHTML = " ";
      document.getElementById("resultat").innerHTML='Group isvalid';
      }  
  }


  ok = ok1&&ok2&&ok3&&ok4&&ok5&&ok6;
  if(ok===false){
      e.preventDefault()
  }else if(ok==true){
  
  }else {
      e.preventDefault()
  }

