<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script>
	 jQuery('.hot-deal-slider').addClass('owl-carousel');
    jQuery('.hot-deal-slider').owlCarousel(
			{
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000, 
        items: 2,
       responsive:{
           0:{
            items: 1,
            margin: 20
           },
           
           481:{
            items: 2,
            margin: 30
           },
      
    700:{
            items: 3,
            margin: 30
        },
      

        1442:{
          items: 4,
            margin: 40
        },
               
       }

    });

		jQuery('.welcome-monaco-slider').addClass('owl-carousel');
    jQuery('.welcome-monaco-slider').owlCarousel(
			{
        loop: false,
        nav: false,
        dots: true,
       /* autoplay: true,
        autoplayTimeout: 2000, */
        items: 1,
        margin:0
      
    });


    jQuery('.archive-posts .panel-grid-cell').addClass('owl-carousel');
    jQuery('.archive-posts .panel-grid-cell').owlCarousel({
        loop: false,
        nav: false,
        dots: false,
       /* autoplay: true,
        autoplayTimeout: 2000, */
        items: 2,
       responsive:{
           0:{
            items: 2,
           margin: 800
           },
           
       }

    });
		</script>
