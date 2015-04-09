var $tabs = $('.tabs');
var $panels = $('.panel');

var $footer = $('.footer');
var $nav = $('.nav');
var $animatedbanner = $('.animatedbanner');



$tabs.on('click', 'a', function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    
    $panels.filter(':not([hidden])').attr('hidden', true);
    $(id).removeAttr('hidden');
});


$footer.localScroll();
$nav.localScroll();
$animatedbanner.localScroll();

var $teaSection = $('.tea');

$teaSection.waypoint(function () {
  $teaSection.toggleClass('js-active');
},{offset: '60%' });