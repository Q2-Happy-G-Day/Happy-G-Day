const url = '/api/v1';

$(document).ready(() => {
  $.get(url + '/users').then(inititiatePage);
});

function inititiatePage(data) {
  $('#nav').append(nav);
  $('#modal').append(modal);
  $('#commentModal').append(commentModal);
  $('#deleteModal').append(deleteModal);
  $('#updateModal').append(updateModal);
  verifyToken()
  calendar(data);
  showProfiles(data);

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
  $("#loginButton").click((event) => {
    event.preventDefault();
    let data = {
      name: $('#logInUsr').val(),
      password: $('#logInPwd').val()
    }
    $.post(url + '/password', data).then((data) => {
      if(data.success == true) {
        logIn(data.userId)
      } else {
        $('.logInError').empty().append(data.message)
        $('.logInError').css('visibility', 'visible')
      }
    })
  })
  $('#commentModalBtn').click(function(event){
    console.log("hello");
    event.preventDefault();
    let loggedInUser = JSON.parse(localStorage.getItem('currUser'))
    if (loggedInUser) {
      let comment = $('#comment').val();
      let birthday_user_id = $('#newCommentId').data('profileUser');
      let comment_user_id = $('#newCommentId').data('currUser');
      postComments(comment, birthday_user_id, comment_user_id)
    } else {
      $('.signUpError').empty();
      $('.signUpError').css('visibility', 'hidden');
      $("#myModal").modal();
    }
  });

  $("#deleteModalBtn").click(function(deleteEvent){
    deleteComment($('#commentId').data('commentidnumber'))
  });
  $("#updateModalBtn").click(function(Event){
    updateComment($('#commentUpdate').val() ,$('#commentId').data('commentidnumber'))
    console.log($('#commentUpdate').val() ,$('#commentId').data('commentidnumber'));
  });
  $("#logOutButton").click((event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('currUser');
    window.location.reload(true);
  })
  $('#userEditButton').click((event) => {
    event.preventDefault();
    $('.editUserError').css('visibility', 'hidden')
    $("#myEditModal").modal();
  })
  $('#editUserButton').click((event) => {
    event.preventDefault();
    let currUser = JSON.parse(localStorage.getItem('currUser'));
    if (currUser) {
      let name = $('#updateUsr').val();
      let birthday = createDate($('#updateBday').val());
      let password = $('#updatePwd').val();
      $.ajax({
        url: url + '/users/' + currUser.id,
        type: 'PUT',
        data: {
          name: name,
          birthday: birthday,
          password: password
        },
        success: (data) => {
          if (data.success == false) {
            $('.editUserError').empty().append(data.message)
            $('.editUserError').css('visibility', 'visible')
          } else {
            logIn(currUser.id)
          }
        }
      })
    }
  })
}
