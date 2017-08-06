const commentModal = `
  <section class="container">
    <!-- Comment Modal -->
    <div class="modal fade" id="myCommentModal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header container">
            <img class="navbar-nav mr-auto m-logo" src="./images/GDay.png" width="100px" alt="">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="usr">Comment:</label>
              <input type="text" class="form-control" id="comment">
            </div>
          </div>
          <div class="modal-footer">
            <button id="commentModalBtn" data-currUserId="" type="submit" class="btn btn-outline-success my-2 my-sm-0" data-dismiss="modal">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
