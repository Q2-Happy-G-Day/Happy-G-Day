function postComment(comment){
  $.get(`${url}/validate/comment?comment=${comment}`).then((data) => {
    $.post(`${url}/comment`)
  })
}
