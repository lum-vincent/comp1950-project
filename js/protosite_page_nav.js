var exerciseNumber = 1;
var lessonNumber = 1;

$( "article h2" ).each(function(i) {
  var current = $(this);
  var textNode;
  current.attr("id", "title" + i);

  $("#toc").append("<li><a id='link" + i + "' href='#title" +
      i + "' title='" + current.attr("tagName") + "'>" +
      $(this).html() + "</a></li>");
});

$( "#toc li a" ).each(function() {
  var navClass;

  if($(this).text().indexOf("Exercise") > -1) {
    navClass = "nav__a--exercise";
  } else if($(this).text().indexOf("Quiz") > -1){
    navClass = "nav__a--quiz";
  } else {
    navClass = "nav__a--lesson";
  }

  $(this).addClass(navClass);
})

$(window).scroll( function () {
  $heightOfHeader = 100;
  if($(window).scrollTop() <= $heightOfHeader) {
    $( "#toc" ).removeClass('nav--fixed--left');
    $( ".nav--right").removeClass('nav--fixed--right');
  } else {
    $( "#toc" ).addClass('nav--fixed--left');
    $( ".nav--right").addClass('nav--fixed--right');
  }
});
