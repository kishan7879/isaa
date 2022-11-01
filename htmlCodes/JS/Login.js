$(document).ready(function () {
    $("#semail").hide();
    $("#spassword").hide();
    $("#submit").click(function () {
        var upassword = $("#password").val();
        var uemail = $("#email").val();
        var emailpatt = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (upassword.length < 7) {
            $("#spassword").show();
            $("#password").focus();
        }
        else {
            $("#spassword").hide();
        }
        if ((!uemail.match(emailpatt))) {
            $("#semail").show();
            $("#email").focus();
            return false;
        }
        else
            $("#semail").hide();
        // alert("Form Submitted Successfuly!");
        // return true;
    });
});