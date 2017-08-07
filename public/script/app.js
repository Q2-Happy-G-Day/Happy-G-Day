const url = '/api/v1';

$(document).ready(() => {
  $.get(url + '/users').then(inititiatePage);
});

function inititiatePage(data) {
  $('#nav').append(nav);
  $('#modal').append(modal);
  $('#commentModal').append(commentModal);
  $('#deleteModal').append(deleteModal);

   getComments(data[0])

  $('footer').append(footer);
  $("#myBtn1").click(function(event) {
    event.preventDefault();
    $('.signUpError').empty();
    $('.signUpError').css('visibility', 'hidden');
    $("#myModal").modal();
  })
  $("#myBtn2").click(function(event) {
    event.preventDefault();
    $('.logInError').empty();
    $('.logInError').css('visibility', 'hidden');
    $("#myModal2").modal();
  });
  $("#signUpButton").click(signUp)
  $('#commentModalBtn').click(function(commentEvent){
    let comment = $('#comment').val();
    let birthday_user_id = $('#newCommentId').data('profileUser');
    let comment_user_id = $('#newCommentId').data('currUser');
    postComments(comment, birthday_user_id, comment_user_id)
  });

  $("#deleteModalBtn").click(function(deleteEvent){
    deleteComment($('#commentId').data('commentIdNumber'))
  })

  calendar(data);
}
