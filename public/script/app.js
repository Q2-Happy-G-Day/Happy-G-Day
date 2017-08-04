var url = '/api/v1/users';

$(document).ready(() => {
  $.get(url)
    .then((data) => {

      $("#myBtn1").click(function(event) {
        event.preventDefault()
        $("#myModal").modal();
      });
    })
});
