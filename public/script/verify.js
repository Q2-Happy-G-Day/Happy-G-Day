function verifyToken() {
  let token = localStorage.getItem('token')
  if (token) {
    $.post(url + '/verify', token)
      .then((data) => {
        localStorage.setItem('currUser', JSON.stringify(data.user));
        localStorage.setItem('token', JSON.stringify(data.token));
        getComments(data.user, 'userProfile');
        $('#userEditButton').text(data.user.name)
        $('#userEditButton').css('display', 'block')
        $('#logOutButton').css('display', 'block')
        $('#myBtn1').css('display', 'none')
        $('#myBtn2').css('display', 'none')
    })
  }
}
