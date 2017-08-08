function logIn(id) {
  $.post(url + '/login/:id').then((data) => {
    localStorage.setItem('token', JSON.stringify(data.token))
    lolcalStorage.setItem('currUser', JSON.stringify(data.user))
  })
}
