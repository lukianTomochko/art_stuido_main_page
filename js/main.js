$(document).ready(function(){
    
    $(".menu_burger__btn").on("click", function(){
        $(".menu_burger").toggleClass("menu_burger__active");
    });
    
    $(".outDirections_item").mouseenter(function(){
        $(this).children(":first").css("transform", "translateX(0%)")
    });
    $(".outDirections_item").mouseleave(function(){
        $(this).children(":first").css("transform", "translateX(101%)")
    });
    
    
    
    
    
    
    
    
});