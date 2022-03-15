 $(document).ready(function(){
 	$('#hotel-form').show();
 	$('#Ticket-form').hide();
 	$('#place-form').hide();
 });

 $(document).ready(function(){
        $('#second-cursor').owlCarousel({
              loop:true,
              margin:10,
              nav:true,
              autoplay:true,
              autoplayTimeout:1000,
              autoplayHoverPause:true,
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:2
                  },
                  1000:{
                      items:3
                  }
              }
       }), 

         $('.owl-carousel').owlCarousel({
              loop:true,
              margin:10,
              nav:true,
              autoplay:true,
              autoplayTimeout:1000,
              autoplayHoverPause:true,
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:1
                  },
                  1000:{
                      items:1
                  }
              }
       }) 
 });


 
//search form code start here
$(document).ready(function(){
  
   $('#hotel-form').show();
   $('#ticket-form').hide();
   $('#place-form').hide();

   $('#hotel-item span').addClass('line');

   //click on ticket
   $('ticket-item').click(function(){
      
     $('#hotel-form').hide();
     $('#ticket-form').show();
     $('#place-form').hide();
    
    $('#hotel-item span').removeClass('line');
    $('#ticket-item span').addClass('line');
    $('#place-item span').removeClass('line');

   });

    //click on place
   $('place-item').click(function(){
      
     $('#hotel-form').hide();
     $('#ticket-form').hide();
     $('#place-form').show();
    
    $('#hotel-item span').removeClass('line');
    $('#ticket-item span').removeClass('line');
    $('#place-item span').addClass('line');

   });

     //click on hotel
   $('hotel-item').click(function(){
      
     $('#hotel-form').show();
     $('#ticket-form').hide();
     $('#place-form').hide();
    
    $('#hotel-item span').addClass('line');
    $('#ticket-item span').removeClass('line');
    $('#place-item span').removeClass('line');

   });
     
});
