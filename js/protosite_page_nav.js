var exerciseNumber = 1;
var lessonNumber = 1;

$( "article h2" ).each(function(i) {
  var current = $(this);
  var textNode;
  current.attr("id", "title" + i);

  if(current.html().match("^Exercise")) {
    textNode = "Exercise " + exerciseNumber;
    exerciseNumber++;
  } else {
    textNode = "Lesson " + lessonNumber;
    lessonNumber++;
  }

  $("#toc").append("<a id='link" + i + "' href='#title" +
      i + "' title='" + current.attr("tagName") + "'>" +
      $(this).html() + "</a>");
});

$( "#toc a" ).each(function() {
  var navClass;

  if($(this).text().match("^Exercise")) {
    navClass = "nav__a--exercise";
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
