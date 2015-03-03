$(document).ready(function() {
    
    $('.welcome').fadeOut(2000, function(){
        $('.main-body').fadeIn(2000);
    });
    
    window.addEventListener("hashchange", function () { scrollBy(0, -50) })
    
    $('#send-email').click(function () {
        // Temp store of values
        var email = $("#inputEmail").val();

        // Regex for email validation
        var validateEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

        // Validation: Exception cases
        if (!validateEmail.test(email)) {
            $('#inputEmail').attr('data-original-title', 'Please fill in a valid email address');
            $('#inputEmail').tooltip('show');
            }

        // Validation: Success
        else {
            var res = "E-mail sent. Thanks for Sharing!";

            //$('#drop').hide();
            $('#submitted').fadeIn(800);
            $('#send-email').hide();
            $('#inputEmail').hide();

            $('#submitted').html(res);
            }
        });

});