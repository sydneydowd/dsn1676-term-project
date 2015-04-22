var $tabs = $('.tabs');
var $panels = $('.panel');

var $footer = $('.footer');
var $nav = $('.nav');
var $animatedbanner = $('.animatedbanner');

var $cupSection = $('.cup');

$tabs.on('click', 'a', function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    
    $panels.filter(':not([hidden])').attr('hidden', true);
    $(id).removeAttr('hidden');
});


$footer.localScroll();
$nav.localScroll();
$animatedbanner.localScroll();

$cupSection.waypoint(function () {
  $cupSection.toggleClass('js-active');
},{offset: '60%' });
