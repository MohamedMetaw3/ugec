import { Link } from "react-router-dom"


const Header = () => {
  return (
   <header className="site-header  ">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-3 col-md-5 col-7">
         <a href="#" className="navbar-brand">
    
    </a>
      </div>
      <div className="col-lg-3 col-md-3 col-12 ms-auto">
        <ul className="social-icon">
          

          <li>
            <a
              href="#"
              className="social-icon-link bi-facebook"
            />
              
          
          </li>
          <li>
							  <Link to={'https://www.linkedin.com/company/ugec/'}
              
								  className="social-icon-link bi-linkedin"
            />
          </li>
          <li>
            <a
              href="#"
              className="social-icon-link bi-twitter"
            />
          </li>
          <li>
            <a
              href="#"
              className="social-icon-link bi-youtube"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>

</header>

  )
}

export default Header