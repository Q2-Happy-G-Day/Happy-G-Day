const url = '/api/v1/users';

$(document).ready(() => {
  $.get(url).then(inititiatePage);
});

function inititiatePage(data) {
  $('#nav').append(nav);
  $('#modal').append(modal);
  $('footer').append(footer);
  $("#myBtn1").click(function(event) {
    event.preventDefault();
    $("#myModal").modal();
  })
  $("#myBtn2").click(function(event) {
    event.preventDefault();
    $("#myModal2").modal();
  });
}
