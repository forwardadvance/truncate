/**
Easily and unobtrusively truncate long blocks of text with a more link.
Simply add a data-truncate attribute to any element you would like to truncate.
Nicholas Johnson - www.nicholasjohnson.com
for
Streetbank - www.streetbank.com
*/
(function () {
  $.fn.truncate = function (length) {
    this.each(function () {

      length = length || 50;

      var el = $(this),
        content = el.html(),
        split = _.filter(content.split(" "), function (i) {
          return i;
        }),
        truncated,
        moreLink;

      if (split.length > length) {
        truncated = split.slice(0, length).join(" ");
        moreLink = $('<a href="#"> more...</a>');
        el.html(truncated);
        el.find('> :last-child').append(moreLink);
        moreLink.click(function (e) {
          el.html(content);
          e.preventDefault();
        });
      }
    });
    return this;
  };
}());

$(function () {
  $('[data-truncate]').each(function () {
    var el = $(this),
      length = parseInt(el.attr('data-truncate'), 10);
    el.truncate(length);
  });
});

