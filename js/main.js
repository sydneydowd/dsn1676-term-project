var $tabs = $('.tabs');
var $panels = $('.panel');

$tabs.on('click', 'a', function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    
    $panels.filter(':not([hidden])').attr('hidden', true);
    $(id).removeAttr('hidden');
});