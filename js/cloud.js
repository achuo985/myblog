$.fn.tagcloud.defaults = {
  size: {start: 34, end: 41, unit: 'px'},
  color: {start: '#cde', end: '#f52'}
};

$(function () {
  $('#myTags a').tagcloud();
});