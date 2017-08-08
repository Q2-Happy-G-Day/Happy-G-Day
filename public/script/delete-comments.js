function deleteComment(id){
  $.ajax({
    url: url + "/comments/" + id,
    type: 'DELETE',
    success: function (data){
      window.location.reload(true);
    }
  });
}
