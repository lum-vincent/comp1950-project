
//Adding in dynamic links to the left navigation to assist navigation
//over the page.
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

var windowHeight = $ ( window ).height() - 80;
$( " nav.navbar-left ul").css("height",windowHeight);

$( window ).resize(function() {
  var windowHeight = $ ( window ).height() - 80;
  $( " nav.navbar-left ul").css("height",windowHeight);
});
