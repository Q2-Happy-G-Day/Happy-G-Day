function profile(currUser, user, comments, target) {
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
          <h4 id="birthdayUser${user.id}" class="card-title" data-idnumber="${user.id}">${user.name}</h4>
          <p class="card-text"><b>${user.birthday.slice(0,5)}</b></p>
          <button id="myCommentBtn${user.id}" type="button" class="btn btn-default comment-button button">Comment</button>
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
$(`#${target}`).append(profile)
$(`#myCommentBtn${user.id}`).click(function(event) {
  event.preventDefault();
  // pass user id and curruser id to the modal for the event handler
  $("#commentModalId").empty().append(`<p id="newCommentId" data-profileUser="${user.id}" data-currUser="${localStorage.getItem('currUser')}"</p>`)
  $("#myCommentModal").modal();
});
let sortComments = comments.sort((a,b)=>{
  if (a.id < b.id) {
    return 1;
  }if (a.id > b.id) {
    return -1;
  }return 0;
});
  sortComments.forEach((e) => {
    let deleteTemplate = `<button id="myDeleteBtn${e.id}" class=“btn btn-default delete-button” type=“button” name=“deleteComment”>✖︎</button>`
    let deleteButton = currUser.name == e.name ? deleteTemplate : '';
    let tableRow =
    `<tr>
      <td><p class=“comment” ><b class="commentName">${e.name}</b><br>${e.comment}</p></td>
      <td>${deleteButton}</td>
    </tr>`

    $(`#${userCodeName}table`).append(tableRow)
    $(`#myDeleteBtn${e.id}`).click(function(event) {
      event.preventDefault();
      // pass comment id to the modal so that the event handler has access to it
      $('#deleteModalId').empty().append(`<p id="commentId" data-commentIdNumber="${e.id}">${e.id}</p>`)
      $("#myDeleteModal").modal();
    });
  })
}
