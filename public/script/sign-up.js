function signUp(event) {
  event.preventDefault();
  let newUser = {
    name: $('#usr').val(),
    birthday: createDate($('#bday').val()),
    password: $('#pwd').val()
  }
  $.post(`${url}/users`, newUser).then(validateUser)
}

function validateUser(data) {
  if(data.success == true){
    $('#myModal').modal('hide')
    console.log(data.user[0]);
    logIn(data.user[0].id);
  } else {
    showSignUpError(data.message);
  }
}

function showSignUpError(error){
  $('.signUpError').empty().append(error)
  $('.signUpError').css('visibility', 'visible');
}
