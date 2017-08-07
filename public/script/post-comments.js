function postComments(comment, birthday_user_id, comment_user_id){
  $.get(url + '/users').then((data) => {
      let birthday_user_id = 0;
      let comment_user_id = 0;
      data.forEach((user) => {
        if (user.id == birthday_user_id) {
          birthday_user_id = user.id;
        }
        if (user.id === comment_user_id) {
          comment_user_id = user.id;
        }
      })
      let newComment = {
        comment: comment,
        birthday_user_id: birthday_user_id,
        comment_user_id: comment_user_id
      }
      $.post(url + '/comments', newComment).then(data =>{
        window.location.reload(true);
      })
    });
}
