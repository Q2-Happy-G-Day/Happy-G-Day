const updateModal = `
<section class="container">
  <!-- Sign Up Modal -->
  <div class="modal fade" id="myEditModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header container">
          <img class="navbar-nav mr-auto m-logo" src="./images/GDay.png" width="100px" alt="">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="updateUsr">Name:</label>
            <input type="text" class="form-control" id="updateUsr">
          </div>
          <div class="form-group">
            <label for="updateBday">Birthday:</label>
            <input type="date" class="form-control" placeholder="MM/DD/YYYY" required pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}" value="" id="updateBday">
            </div>
          <div class="form-group">
            <label for="updatePwd">Password:</label>
            <input type="password" class="form-control" id="updatePwd">
          </div>
        </div>
        <div class="modal-footer">
          <p class="editUserError"></p>
          <button id="editUserButton" type="button" class="btn btn-outline-success my-2 my-sm-0">Update</button>
        </div>
      </div>
    </div>
  </div>
</section>
`
