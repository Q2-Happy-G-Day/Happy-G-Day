function signUp(event) {
  event.preventDefault();
  let name = $('#usr').val();
  let bday = createDate($('#bday').val());
  let pwd = $('#pwd').val();
  $.get(`${url}/vaidation?name=${name}&birthday=${bday}&password=${pwd}`).then(validateUser)
  showSignUpError('ERROR: ');
}

function showSignUpError(error){
  $('#myModal').modal('show')
  $('.error').empty().append(error)
  $('.error').css('visibility', 'visible');
}

function validateUser(data){
  if (message === true) {
    postUser(data.user);
  }
}
