$(function () {

    $('.lcns').on('click', lcnsOpenDetails);
    $('.misc').on('click', miscOpenDetails);
});

function lcnsOpenDetails() {
    $('#lcns-grnt').attr('open', 'open');
    $('#avd-dbt').attr('open', 'open');
}
function miscOpenDetails() {
    $('#misc').attr('open', 'open');
}