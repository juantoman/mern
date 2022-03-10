import React from 'react'


const Layout = () => {

  return (
    <div class="container">
      <nav class="navbar fixed-top navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Sticky top</a>
        </div>
      </nav>
      <div class="row row-cols-auto">
        <div class="col">
          <div class="card text-center" style={{width:"18rem"}}>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
      </div>
      <nav class="navbar fixed-bottom navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Fixed bottom</a>
        </div>
      </nav>
    </div>
  )
}

export default Layout