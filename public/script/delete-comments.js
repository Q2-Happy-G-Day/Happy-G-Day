function deleteComment(id){
  $.ajax({
    url: url + "/" + id,
    type: 'DELETE',
    success: function (data){
      window.location.reload(true);
    }
  });
}
