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
            <p>Do you really want delete this comment?</p>
          </div>
          <div class="modal-footer">
            <button id="deleteModalBtn" type="submit" class="btn btn-outline-success my-2 my-sm-0" data-dismiss="modal">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
