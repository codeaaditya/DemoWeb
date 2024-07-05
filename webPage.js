function validfun() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = document.getElementById("n3").value;
    var d = document.getElementById("n4").value;
    var e = document.getElementById("n5").value;


    if(a =="" || b =="" || c =="" || d =="" || e ==""){
        alert("**ALL FIELDS ARE MANDATORY**");
        return false;
    }
    else if(b.length<10 || b.length>10){
        alert("**NUMBER SHOULD BE OF 10 DIGITS**")
        return false;
    }
    else if(isNaN(b)){
        alert("**ONLY NUMBERS ARE ALLOWER ! PLEASE ENTER A VALID NUMBER**")
        return false;
    }
    else if(isNaN(d)){
        alert("**PLEASE ENTER A VALID AGE**")
        return false;
    }
    else if(d.length>=3 || d.length<=1){
        alert("**PLEASE ENTER A VALID AGE**")
        return false;
    }
    else{
        true;
    }

    // if()
}