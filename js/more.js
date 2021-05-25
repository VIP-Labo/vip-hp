$(function() {
    $('.more-btn').on('click', function() {
      if( $(this).children().is('.open') ) {
        $(this).html('<button class="btn close">Close</button>').addClass('close-btn');
        $(this).parent().removeClass('slide-up').addClass('slide-down');
      } else {
        $(this).html('<button class="btn open">More</button>').removeClass('close-btn');
        $(this).parent().removeClass('slide-down').addClass('slide-up');
      }
    });
  });