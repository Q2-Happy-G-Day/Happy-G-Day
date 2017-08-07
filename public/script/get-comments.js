function getComments(user) {
  $.get(url + '/comments/' + user.id).then((comments) => {
    console.log(comments);
    let userComment = JSON.parse(localStorage.getItem('currUser'))
    if (userComment) {
      profile(userComment, user, comments)
    } else {
      let defaultUser = [{
          id: 0,
          name: ""
      }]
      profile(defaultUser, user, comments)
    }
  })
}
