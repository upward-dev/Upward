

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>


  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
{/* 
    <button class="btn btn-secondary dropdown-toggl" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" > */}
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default Nav

{/* <nav className="navbar  navbar-light bg-light">
  <div className="container-fluid">
      <a className="navbar-brand" href="/">
          <img src="/upward-logo.png" width="150" alt="upward-logo"></img>
       </a>
    {/* <button className="navbar-toggler" type="button" 
      data-bs-toggle="collapse" data-bs-target="#navbarColor03" 
      aria-controls="navbarColor03" aria-expanded="false" 
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}

    {/* <div className="collapse navbar-collapse" id="navbarColor03"> */}
    //   <ul className="nav justify-content-end">
    //     <li className="nav-item">
    //        <a style={{color: "black"}} className="nav-link" href="/about">About</a>
    //     </li>
    //     <li style={{backgroundColor:"#f3ced6",  borderRadius:10}}>
    //     <a 
    //       href="https://docs.google.com/forms/d/e/1FAIpQLSe5XunCtzemmzIZK9VTRMgoueC4_9Q8Ay1PycGxEa5uXgCjNg/viewform" 
    //       className="btn btn- active"
    //       style={{color: "black"}}
    //       >
    //       <i className="glyphicon-floppy-disk" aria-hidden="true"></i> Sign Up
    //     </a> 
    // </li>
    //   </ul>
    // </div>
  {/* </div> 
</nav>  */}