import { Link } from "react-router-dom";
import logo from '../assets/images/ugec-images/logo.png'


const Nav = () => {
  return (
   <nav className="navbar navbar-expand-lg bg-white shadow-lg  ">
  <div className="container">
			  <Link className='navbar-brand click-scroll' to={'/'}><img
				  src={logo}
				  width="100" height="100"
				  className="img-thumbnail border-0"
				  alt="logo"
			  /></Link>
     
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to={'/'} className="nav-link click-scroll">
            
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to={'/about'} className="nav-link click-scroll" >
            
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to={'/services'} className="nav-link click-scroll" >
            
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link to={'/projects'} className="nav-link click-scroll" >
           
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to={'/contact'} className="nav-link click-scroll" >
            
            Contact
          </Link>
        </li>
      </ul>
      <div></div>
    </div>
  </div>
</nav>

  )
}

export default Nav