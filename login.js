function validateForm(){
    let user = document.getElementById("id");
    let pass = document.getElementById("password");

    if (user === "" || pass === ''){
alert("Both fields are required");
return false;
    }
return true
    }
