function postComments(comment, birthday_user_id, comment_user_id){
  $.get(url + '/users').then((data) => {
      // let birthday_user_id = 0;
      // let comment_user_id = 0;

        for (var i = 0; i < data.length; i++) {
          if (data[i].id == $(`birthdayUser${data[i].id}`).data('idnumber')) {
            let birthday_user_id = data[i].id;
          }
          if (data[i].id === JSON.parse(localStorage.getItem('currUser')).id) {
            let comment_user_id = data[i].id;
          }
      }
        let newComment = {
        comment: comment,
        birthday_user_id: birthday_user_id,
        comment_user_id: comment_user_id
      }
      console.log(newComment);
      $.post(url + '/comments', newComment).then(data =>{
        // window.location.reload(true);
      })
    });
}
