var url = '/api/v1/users';

$(document).ready(() => {
  $.get(url)
    .then((data) => {
      console.log(data);
    })
});
