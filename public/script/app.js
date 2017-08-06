const url = '/api/v1/users';

$(document).ready(() => {
  $.get(url).then(inititiatePage);
});

function inititiatePage(data) {
  $('#nav').append(nav);
  $('#modal').append(modal);
  var currUser = {
    id: 1,
    name: 'Matthew Drumheller'
  }
  var user = {
    id: 1,
    name: 'Matthew Drumheller',
    birthday: '08/27/1984'
  }
  var user2 = {
    id: 2,
    name: 'Someone Else Entirely Other',
    birthday: '08/06/2017'
  }
  var comments = [
    {
      id: 1,
      name: 'Matthew Drumheller',
      message: 'Happy Birthday, loser!'
    },
    {
      id: 2,
      name: 'Someone Else',
      message: "Don't be so hard on yourself, also, happy birthday!"
    },
    {
      id: 3,
      name: 'Matthew Drumheller',
      message: "I can't help it, I'm just that baaaad"
    },
    {
      id: 4,
      name: 'Yet another person',
      message: "Well I still wish you a happy birthday"
    },
    {
      id: 5,
      name: 'Matthew Drumheller',
      message: "Oh alright, I guess I'll enjoy my birthday"
    },
    {
      id: 6,
      name: 'Matthew Drumheller',
      message: "HA! this app is fun!"
    },

  ]
  profile(currUser, user2, comments.reverse())
  profile(currUser, user, comments.reverse())
  calendar(data);
  $('footer').append(footer);
  $("#myBtn1").click(function(event) {
    event.preventDefault();
    $("#myModal").modal();
  })
  $("#myBtn2").click(function(event) {
    event.preventDefault();
    $("#myModal2").modal();
  });
}
