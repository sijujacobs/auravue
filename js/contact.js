
$(function() {
    $(".btnSend").click(function() {
        var name    = $("#inptName").val();
        var email   = $("#inptEmail").val();
        var subject = "Email from AURAVUE";
    	var message = $("#txtMessage").val();
  
        var text = "failed";
        
        setTimeout(function(){removeNotification() }, 3000);
        $.ajax({
            type: "POST",
            url: "api/contact/contact.php",
            data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
        	success : function(text){
	            if (text == "success"){
                    $("#inptName").val("");
                    $("#inptEmail").val("");
                    $("#txtMessage").val("");
                    $('.emailResponse').addClass("success").text("Email sent successfully.");
                }else{
                    $('.emailResponse').addClass("failed").text("Failed to send email, Please try again later.");
                }
	        }
        });

        function removeNotification(){
            $('.emailResponse').removeClass("success failed").text(""); 
        }
    });//End of Send button Click
});