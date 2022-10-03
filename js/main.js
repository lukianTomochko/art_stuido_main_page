$(document).ready(function(){
    
    $(".menu_burger__btn").on("click", function(){
        $(".menu_burger").toggleClass("menu_burger__active");
    });
    
    $(".ourDirections_item").mouseenter(function(){
        $(this).children(":first").css("transform", "translateX(0%)")
    });
    $(".ourDirections_item").mouseleave(function(){
        $(this).children(":first").css("transform", "translateX(101%)")
    });
    
    // Animate scroll

    new WOW().init();
    
});


