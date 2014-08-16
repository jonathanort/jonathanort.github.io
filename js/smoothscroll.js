$(".navbar-collapse ul li a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top - 50
     }, 300, function(){
       window.location.hash = hash;
     });
});

$("a.navbar-brand[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top -50 
     }, 300, function(){
       window.location.hash = hash;
     });
});