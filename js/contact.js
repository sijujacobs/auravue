
$(function() {
    
    $(".btnSend").click(function() {
        var name    = $("#inptName").val();
        var email   = $("#inptEmail").val();
        var subject = "Email from AURAVUE";
        var message = $("#txtMessage").val();
        
        setTimeout(function(){removeNotification() }, 5000);
        if(isValidEmail(email) && message.length > 0){
            $.ajax({
                type: "POST",
                url: "api/contact/contact.php",
                data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
                success : function(emailResponse){
                    if (emailResponse == "success"){
                        $("#inptName").val("");
                        $("#inptEmail").val("");
                        $("#txtMessage").val("");
                        $('.emailResponse').removeClass("success").text("Email sent successfully. We'll get back to you soon.");
                    }else{
                        $('.emailResponse').addClass("error").text("Failed to send email, Please try again.");
                    }
                }
            });
        }else{
            $('.emailResponse').addClass("error").text("Failed to send email, Please verify email/message, and try again.");
        }

        function removeNotification(){
            $('.emailResponse').removeClass("success failed").text(""); 
        }
    });//End of Send button Click

    function isValidEmail (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});