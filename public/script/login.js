function logIn(id) {
  $.post(url + '/login/:id').then((data) => {
    localStorage.setItem('token', data.token)
    lolcalStorage.setItem('currUser', data.user)
  })
}
