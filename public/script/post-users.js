function postUser(user) {
  $.post(`${url}/users`, user)
    .then((data) => {
      window.location.reload(true);
    })
}
