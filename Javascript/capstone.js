addEventListener("keypress", function(event) {
  
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("trigger").click();
  }
});

function functionbutton(){

    var ouremail = 'admin';
    var ourpassword = 'admin';

    var email = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    if ( email == ouremail && password == ourpassword){

        window.location.assign("Homepage.html")
        alert("Login Successfully")  
    }
    else{
        alert("       Login Failed \n Invalid email or password ");
        return;
    }  
}


