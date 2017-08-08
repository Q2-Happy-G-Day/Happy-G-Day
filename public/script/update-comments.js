function updateComment(comment, id){
  $.ajax({
    url: url + "/comment/" + id,
    type: 'PUT',
    data: {
      comment: comment
    },
    success: function (data){
      window.location.reload(true);
      console.log(data);
    }
  });
}
