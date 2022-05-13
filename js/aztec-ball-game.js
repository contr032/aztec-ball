$(document).ready(function() {

  // init controller
	var controller = new ScrollMagic.Controller({vertical: false});


	// build scene
	var scene = new ScrollMagic.Scene({triggerElement:'.ulla'})
					.setClassToggle('.ulla', 'move')
					.addTo(controller);

    // build scene
    var scene2 = new ScrollMagic.Scene({triggerElement:'.title9'})
        					.setClassToggle('.title9', 'appear')
        					.addTo(controller);

    // build scene
    var scene3 = new ScrollMagic.Scene({triggerElement:'.title5'})
                      					.setClassToggle('.title5', 'grow')
                      					.addTo(controller);

      // build scene
      var scene5 = new ScrollMagic.Scene({triggerElement:'.rules'})
      .setPlay(".rule1")
      .addTo(controller);

      var rellax = new Rellax('.rellax', {
    horizontal:true

  });

});


$(document).ready(function() {
      $('#content').hide();

});

  $(document).ready(function() {

    $(".dropdown").click(function(){
      $('#content').show()
  });
});

$(document).ready(function() {

  $(".list").click(function(){
    $('#content').hide()
});
});

$(document).ready(function() {

  $(".x").click(function(){
    $('#content').hide()

});
});
