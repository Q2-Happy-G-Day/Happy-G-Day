const modal = `
  <section class="container">
    <!-- Sign Up Modal -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header container">
            <img class="navbar-nav mr-auto m-logo" src="./images/GDay.png" width="100px" alt="">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="usr">Name:</label>
              <input type="text" class="form-control" id="usr">
            </div>
            <div class="form-group">
              <label for="pwd">Birthday:</label>
              <input type="date" class="form-control" placeholder="MM/DD/YYYY" required pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}" value="" id="pwd">
              </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd">
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-outline-success my-2 my-sm-0" data-dismiss="modal">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  </div>

  <section class="container">
    <!-- Login Modal  -->
    <div class="modal fade" id="myModal2" role="dialog">
      <div class="modal-dialog">

      <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header container">
            <img class="navbar-nav mr-auto m-logo" src="./images/GDay Logo.png" width="100px" alt="">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body" id="line">
            <div class="form-group2">
              <label for="usr">Name:</label>
              <input type="text" class="form-control" id="usr">
            </div>
            <div class="form-group2">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd">
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-outline-success my-2 my-sm-0" data-dismiss="modal">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  `
