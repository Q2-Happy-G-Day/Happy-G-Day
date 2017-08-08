const deleteModal = `
  <section class="container">
    <!-- Comment Modal -->
    <div class="modal fade" id="myDeleteModal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header container">
            <img class="navbar-nav mr-auto m-logo" src="./images/GDay.png" width="100px" alt="">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="usr">Edit your comment:</label>
              <input type="text" class="form-control" id="commentUpdate">
            </div>
          </div>
          <div class="modal-footer">
            <div id="deleteModalId" > </div>
            <button id="updateModalBtn" type="submit" class="btn btn-outline-success my-2 my-sm-0" data-dismiss="modal">Update</button>
            <button id="deleteModalBtn" type="submit" class="btn btn-outline-success my-2 my-sm-0" data-dismiss="modal">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
