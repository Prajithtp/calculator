// document ready event syntax (main syntax)


// $(document).ready(function(){

// })


// $(document).ready(()=>{


// })

// --------------//

// $() - selector syntax
// $(selector).event(callback);

// $(document).ready(function(){
//     $("#btn").click(function(){
//         alert("hello");
//     })
// });

// $(selector).action(speed?,callback?)

$(document).ready(function(){
    $("#btn").click(function(){
        $("#box").hide(1000,function(){
            alert("element is hidden");
        });
    });


    $("#btn-show").click(function(){
        $("#box").show(1000,()=>{
            alert("element is visible");
        });
    });


    $("#btn-toggle").click(function(){
        $("#box").toggle(1000,);
    });





});

// ---------------//








