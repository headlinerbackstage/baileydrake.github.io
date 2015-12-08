$(document).ready(function () {
	(function($){

    /* trigger when page is ready */
    $(document).ready(function (){
    
        // your functions go here
        $('#mce-EMAIL').click(function() {
            $(this).addClass("active");
       $(this).attr('placeholder','Enter Email');
            $('#subscribe-button').addClass("show");
        });
    
    });

})(window.jQuery);

});
