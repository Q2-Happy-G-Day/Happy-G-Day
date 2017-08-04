var url = '/api/v1/users';

$(document).ready(() => {
  $('#nav').append(nav);
  $('#modal').append(modal);

  $.get(url)
    .then((data) => {

      $("#myBtn1").click(function(event) {
        event.preventDefault();
        $("#myModal").modal();
      })

      $("#myBtn2").click(function(event) {
        event.preventDefault();
        $("#myModal2").modal();
      });
    });
});
