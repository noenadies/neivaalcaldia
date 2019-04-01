
var nodetodoadmin;
var todolodeadminfire;
var vinpnombre;
var  vpass;
function inicia(){
    var config = {
        apiKey: "AIzaSyDxTBmejHYGwAJmUyCQ_rigxOld748To04",
        authDomain: "neivaalcaldia-70bf0.firebaseapp.com",
        databaseURL: "https://neivaalcaldia-70bf0.firebaseio.com",
        projectId: "neivaalcaldia-70bf0",
        storageBucket: "neivaalcaldia-70bf0.appspot.com",
        messagingSenderId: "39070089394"
      };
      firebase.initializeApp(config);

}


function segundoinicio() {
    
}

  // Initialize Firebase
  inicia();

  funatraefireadmi();
function funatraefireadmi(){
    firebase.database().ref().child(String("admin")).on("value", function(snapshot) {
  
        todolodeadminfire=snapshot.val();
        segundoinicio();


    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }


function fbtlogin(){

 vinpnombre=getv("idinpnombre");
 vpass=String(getv("inppass"));
console.log(vpass+"  aca");
console.log(todolodeadminfire);
    for(var i in todolodeadminfire){
if(todolodeadminfire.nombre==vinpnombre&&todolodeadminfire.clave==vpass){
window.location="index2.html";


}

    }

   
}

function getv(st){
   return document.getElementById(st).value;
}