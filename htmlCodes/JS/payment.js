function formValidation() {
    var frm = document.getElementById("payment");
    var name = document.getElementById("fname");
    var email = document.getElementById("email");
    var address = document.getElementById("adr");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var zip = document.getElementById("zip");
    var cardname = document.getElementById("cname");
    var cnum = document.getElementById("ccnum");
    var expmonth = document.getElementById("expmonth");
    var expyear = document.getElementById("expyear");
    var cvv = document.getElementById("cvv");

    if (allLetter(name)) {
        if (ValidateEmail(email)) {
            if (Address(address)) {
                if (City(city)) {
                    if (State(state)) {
                        if (allnumeric(zip)) {
                            if (cname(cardname)) {
                                if (Cardnumber(cnum)) {
                                    if (expMonth(expmonth)) {
                                        if (expYear(expyear)) {
                                            if (Cvv(cvv)) {
                                                frm.submit();
                                                alert("Payment done");
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    function allLetter(uname) {
        var letters = /^[A-Za-z\s]+$/;
        if (uname.value.match(letters)) {
            return true;
        }
        else if (uname.value == null || uname.value == "") {
            alert("Full Name should not be empty");
        }
        else {
            alert("Full name must have alphabet characters only");
            uname.value = "";
            uname.focus();
            return false;
        }
    }

    function cname(uname) {
        var letters = /^[A-Za-z\s]+$/;
        if (uname.value.match(letters)) {
            return true;
        }
        else if (uname.value == null || uname.value == "") {
            alert("Card Holder Name should not be empty");
        }
        else {
            alert("Card Holder Name must have alphabet characters only");
            uname.value = "";
            uname.focus();
            return false;
        }
    }

    function City(uname) {
        var letters = /^[A-Za-z\s]+$/;
        if (uname.value.match(letters)) {
            return true;
        }
        else if (uname.value == null || uname.value == "") {
            alert("City name should not be empty");
        }
        else {
            alert("City name must have alphabet characters only");
            uname.value = "";
            uname.focus();
            return false;
        }
    }

    function Address(uname) {
        var letters = /^[a-zA-Z0-9\s\,\''\-]*$/;
        if (uname.value.match(letters)) {
            return true;
        }
        else if (uname.value == null) {
            alert("Address should not be empty");
        }
        else {
            alert("Invalid Address entered");
            uname.value = "";
            uname.focus();
            return false;
        }
    }

    function State(uname) {
        var letters = /^[A-Za-z\s]+$/;
        if (uname.value.match(letters)) {
            return true;
        }
        else if (uname.value == null || uname.value == "") {
            alert("State name should not be empty");
        }
        else {
            alert("State name must have alphabet characters only");
            uname.value = "";
            uname.focus();
            return false;
        }
    }

    function allnumeric(uzip) {
        var numbers = /^[0-9]{6}$/;
        if (uzip.value.match(numbers)) {
            return true;
        }
        else {
            alert("Invalid zipcode entered");
            uzip.focus();
            return false;
        }
    }

    function ValidateEmail(uemail) {
        var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (uemail.value.match(mailformat)) {
            return true;
        } else {
            alert("You have entered an invalid email address!");
            uemail.focus();
            return false;
        }
    }

    function Cardnumber(uzip) {
        var numbers = /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/;
        if (uzip.value.match(numbers)) {
            return true;
        } else {
            alert("Card number must follow specified format and must be 16 digit");
            uzip.focus();
            return false;
        }
    }
    function expYear(uzip) {
        var numbers = /^[0-9]{4}$/;
        if (uzip.value.match(numbers)) {
            return true;
        } else {
            alert("Enter a valid 4 digit number");
            uzip.focus();
            return false;
        }
    }

    function expMonth(uzip) {
        var numbers = /^[0-9]{2}$/;
        if (uzip.value.match(numbers)) {
            return true;
        } else {
            alert("Enter a valid 2 digit number");
            uzip.focus();
            return false;
        }
    }
    function Cvv(uzip) {
        var numbers = /^[0-9]{3}$/;
        if (uzip.value.match(numbers)) {
            return true;
        } else {
            alert("Enter a valid 3 digit number");
            uzip.focus();
            return false;
        }
    }
}
