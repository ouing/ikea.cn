import './jQuery.js';



// $(document).ready(function(e) {
//     $(".but").click(function(e) {
//         $(".abc").toggle();
//     });
// });

// $("#btn").click(function () {
//     $("#div2").show();
//     $("#div1").hide();
    
// });


$(
    $('.all-goods').on('click',()=>{
          $('.hide-allgoods').show();
        $('.menu-first').hide();
    }),

    $('.btn').on('click',()=>{
        $('.hide-allgoods').hide();
        $('.menu-first').show();
        $('.menu').css({'width':'480px'})
        $('.hide').removeClass('jiant')


        

    }),


    $('.room').on('click',()=>{
        $('.hide-room').show();
        $('.menu-first').hide();
    }),

    $('.btn-room').on('click',()=>{
        $('.hide-room').hide();
        $('.menu-first').show();
    }),



    $('.shopping').on('click',()=>{
        $('.hide-shopping').show();
        $('.menu-first').hide();
    }),

    $('.btn-shopping').on('click',()=>{
        $('.hide-shopping').hide();
        $('.menu-first').show();
    }),


    $('.hide').on('click',()=>{
        $('.menu').css({'width':'800px'})
        // $('.gt').show();
    }),
    
    $('.btn-jiaj').on('click',()=>{ 
        $('.subnav').css({'opacity':'0'})
        $('.subnav-jiaj').css({'opacity':'1'})
        $('.hide').removeClass('jiant')
        $('.btn-jiaj').addClass('jiant')

       
    }),


    $('.btn-chuw').on('click',()=>{
         $('.subnav').css({'opacity':'0'})
        $('.subnav-chuw').css({'opacity':'1'})
        $('.hide').removeClass('jiant')
        $('.btn-chuw').addClass('jiant')
        //console.log(this)
    }),


    $('.btn-chuang').on('click',()=>{
        $('.subnav').css({'opacity':'0'})
        $('.subnav-chuang').css({'opacity':'1'})
        $('.hide').removeClass('jiant')
        $('.btn-chuang').addClass('jiant')

    }),

    $('.btn-chug').on('click',()=>{
        $('.subnav').css({'opacity':'0'})
        $('.subnav-chug').css({'opacity':'1'})
        $('.hide').removeClass('jiant')
        $('.btn-chug').addClass('jiant')

    }),
   

)


   

