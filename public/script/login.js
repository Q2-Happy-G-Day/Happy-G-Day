
function logIn(id) {
  $.post(url + '/login/' + id).then((data) => {
    localStorage.setItem('token', JSON.stringify(data.token))
    localStorage.setItem('currUser', JSON.stringify(data.user))
    window.location.reload(true);
  })
}
