
let userName = document.getElementById("txtUserName");
let usePrenom = document.getElementById("txtUserPrenom");
let userEmaiL = document.getElementById("txtUserEmail");
let userNomber = document.getElementById("txtUserNomber");
let userDropdown = document.getElementById("dropdown");
let userselect = document.getElementById("txtUseselectd");
let FromQroup = document.getElementById('select2');


function validateInput(){


  // NAME//////////////////////////////////
  
  if(userName.value.trim()===""){
    onError(userName, "last name cannot be empty");
  }
  else{
    if(!isValidName(userName.value.trim())){
      onError(userName, "last name is not valid");
    }
    else{
      onSuccess(userName);
    }
  }
  
  // PRENOM//////////////////////////////////
  if(usePrenom.value.trim()===""){
    onError(usePrenom, "first name cannot be empty");
  }
  else{
    if(!isValidprenom(usePrenom.value.trim())){
      onError(usePrenom, "first name is not valid");

    }
    else{
      onSuccess(usePrenom);
    }
  }
  
  // EMAIL//////////////////////////////////
  if(userEmaiL.value.trim()===""){
    onError(userEmaiL, "Email cannot be empty");
  }
  else{
    if(!isValidEmaiL(userEmaiL.value.trim())){
      onError(userEmaiL, "Email is not valid");
    }
    else{
      onSuccess(userEmaiL);
    }
  }
  
  // NOMBER//////////////////////////////////
  if(userNomber.value.trim()===""){
    onError(userNomber, "phone number cannot be empty");
  }
  else{
    if(!isValidNombre(userNomber.value.trim())){
      onError(userNomber, "phone number is not valid");
    }
    else{
      return onSuccess(userNomber);
    }
  }

  //  selecte////////////////////////////////////// 
  if(chkcotrol(userselect)){
    onSuccess(userselect);
  }
  else {
    onError(userselect, "clubs is not valid");
  }

  //////GROUPE//////////////////////////////////

  if(check(FromQroup)){
    onSuccess(FromQroup);
  }
  else {
    onError(FromQroup, "clubs is not valid");
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

  // nombre://////////////////////////////////
  function isValidNombre(userNomber){
    return  /^[0-0][5-7][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/gm.test(userNomber);
  }



