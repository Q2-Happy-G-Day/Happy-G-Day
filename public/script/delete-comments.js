function deleteComment(id){
  $.ajax({
    url: url + "/" + id,
    type: 'DELETE',
    sucess: function (data){
      console.log(data);
      window.location.reload(true);
    }
  });
}
