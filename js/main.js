$(document).ready(function() {

    $('.amo_burger').on('click', function(){
        $('.amo_nav_menu').toggleClass('jsActive');   
    
    });

	$('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('.menu_a li a').toggleClass('JSTransformA');          
	});


    
    var my_width = $( window ).width();
    window.addEventListener('scroll', function() {
        if(my_width > 991){
            // Компютер
            if(pageYOffset > 150){
                $('.amo_nav_menu').addClass('JSKompMenu');
                $('.menu_a li a').addClass('JSColorBlack');
                $('.amo_logo_menu').addClass('JSColorBlack');
            }
            else {
                $('.amo_nav_menu').removeClass('JSKompMenu');
                $('.amo_logo_menu').removeClass('JSColorBlack');
                $('.menu_a li a').removeClass('JSColorBlack');  
            }
                
        } else {
            // Tel
            if(pageYOffset > 150){
                $('.amo_nav_menu').addClass('jsMobile');
            }
            else {
                $('.amo_nav_menu').removeClass('jsMobile');
            }
        }
  
    });













});