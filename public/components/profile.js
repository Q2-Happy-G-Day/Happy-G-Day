function profile(currUser, user, comments) {
  let userCodeName = user.name.split(' ').join('') + user.id
  let header = '';
  if (user.birthday.slice(0,2) == new Date().getMonth() + 1 && user.birthday.slice(3,5) == new Date().getDate()) {
    header = 'Happy Birthday!'
  } else {
    header = 'Coming Soon...'
  }
  let profile =
  `<article class="profilecomponent">
    <div class="panel panel-primary col-xs-2 col-md-3 profilebox">
      <div class="card text-center">
        <div class="card-header">
          <h4>${header}</h4>
        </div>
        <div class="card-block">
          <h4 class="card-title" data-idnumber="${user.id}">${user.name}</h4>
          <p class="card-text"><b>${user.birthday.slice(0,5)}</b></p>
          <button type="button" class="btn btn-default comment-button button">Comment</button>
        </div>
      </div>
    </div>
    <div class="comment-section">
      <table class=“table”>
        <tbody id="${userCodeName}table">
        </tbody>
      </table>
    </div>
  </article>
  `
$('#profiles').append(profile)

  comments.forEach((e, i) => {
    let deleteTemplate = `<button class=“btn btn-default delete-button” type=“button” name=“deleteComment”>X</button>`
    let deleteButton = currUser.name == comments[i].name ? deleteTemplate : '';
    let tableRow =
    `<tr>
      <td><p class=“comment” data-idnumber="${comments[i].id}"><b class="commentName">${comments[i].name}</b><br>${comments[i].message}</p></td>
      <td>${deleteButton}</td>
    </tr>`
    $(`#${userCodeName}table`).append(tableRow)
  })
}
