function profile (user, comments) {
 let profile =`
<div class="profilecomponent">
  <div class="panel panel-primary col-xs-2 col-md-3 profilebox">
    <div class="card text-center">
      <div class="card-header">
        Happy Birthday!
      </div>
      <div class="card-block">
        <h4 class="card-title">${user.name}</h4>
        <p class="card-text">${user.birthday}</p>
        <button type="button" class="btn btn-default comment-button">Leave Comment</button>
      </div>
    </div>
  </div>
  <section class="comment-section">
    <table class=“table”>
      <tbody id=“table-body”>
      </tbody>
    </table>
  </section>
</div>
`
$('#profiles').append(profile)
for (var i = 0; i < comments.length; i++) {
  $('#table-body').append(
  `<tr>
    <td><p class=“comment”>${comments[i].name}<br>${comments[i].message}</p></td>
    <td><button class=“btn btn-default delete-button” type=“button” name=“deleteComment”>X</button></td>
  </tr>`
    )
  }
}






<tr>
  <td><p class=“comment”>User Name <br>Happy Birthday!</p></td>
  <td><button class=“btn btn-default delete-button” type=“button” name=“deleteComment”>X</button></td>
</tr>
<tr>
  <td><p class=“comment”>User Name <br>Happy Birthday, Buddy!</p></td>
  <td></td>
</tr>
<tr>
  <td><p class=“comment”>User Name <br>Happy Birthday, my friend!</p></td>
  <td><button class=“btn btn-default delete-button” type=“button” name=“deleteComment”>X</button></td>
</tr>
<tr>
  <td><p class=“comment”>User Name <br>Happy Birthday!</p></td>
  <td><button class=“btn btn-default delete-button” type=“button” name=“deleteComment”>X</button></td>
</tr>
<tr>
  <td><p class=“comment”>User Name <br>Happy Birthday, Buddy!</p></td>
  <td></td>
</tr>
<tr>
  <td><p class=“comment”>User Name <br>Happy Birthday, my friend!</p></td>
  <td><button class=“btn btn-default delete-button” type=“button” name=“deleteComment”>X</button></td>
</tr>
