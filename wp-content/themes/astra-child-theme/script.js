jQuery(document).ready(function( ) {




jQuery('.box1').hover(
       function(){jQuery('.bg1').addClass('shown') },

 function(){jQuery('.bg1').removeClass('shown') }     
);

jQuery('.box2').hover(
       function(){jQuery('.bg2').addClass('shown') },
 function(){jQuery('.bg2').removeClass('shown') }
     
);

jQuery('.box3').hover(
       function(){jQuery('.bg3').addClass('shown') },
 function(){jQuery('.bg3').removeClass('shown') }
     
);




} );