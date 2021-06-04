

const Nav = () => {
  return (

<nav className="navbar  navbar-light bg-light">
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
      <ul className="nav justify-content-end">
        <li className="nav-item">
           <a style={{color: "black"}} className="nav-link" href="/about">About</a>
        </li>
        <li style={{backgroundColor:"#f3ced6",  borderRadius:10}}>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSe5XunCtzemmzIZK9VTRMgoueC4_9Q8Ay1PycGxEa5uXgCjNg/viewform" 
          className="btn btn- active"
          style={{color: "black"}}
          >
          <i className="glyphicon-floppy-disk" aria-hidden="true"></i> Sign Up
        </a> 
    </li>
      </ul>
    </div>
  {/* </div> */}
</nav> 
  )
}

export default Nav

