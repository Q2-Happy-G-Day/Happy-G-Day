function deleteComment(id){
  $.ajax({
    url: url + "/" + id,
    type: 'DELETE',
    sucess: function (data){
      window.location.reload(true);
    }
  });
}
