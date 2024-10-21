
import { Link } from "react-router-dom";
import Imagefirst from "../assets/images/ugec-images/1-1024x576.jpg";
import ImageSecond from "../assets/images/ugec-images/1-768x432.jpg";
const Hero = () => {
  return (
  <section className="hero overlay ">
  <div className="container-fluid h-100">
    <div className="row h-100">
      <div
        id="carouselExampleCaptions"
        className="carousel carousel-fade hero-carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container position-relative h-100">
              <div className="carousel-caption d-flex flex-column justify-content-center">
                <small className="small-title">
                  Introducing UGEC Strategy{" "}
                  
                </small>
                <h1 className="mb-4 fs-3">
                  Explore <span className="text-warning">new ideas</span> for
                  your business
                </h1>
                <div className="d-flex align-items-center ">
										  <Link to={'/projects'} className="custom-btn btn custom-link fs-4" >
                    Get Started
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="carousel-image-wrap">
              <img
                src={Imagefirst}
                className="img-fluid carousel-image"
                alt="image"
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className="container position-relative h-100">
              <div className="carousel-caption d-flex flex-column justify-content-center">
                <small className="small-title">
                  Supporting New Project{" "}
                
                </small>
									  <h6 className="mb-4 text-light">
                  Strategic Planning for your{" "}
                  <span className="text-warning"> project</span>
                </h6>
                <div className="d-flex align-items-center mt-4">
										  <Link to={'/projects'} className="custom-btn btn custom-link fs-4 "  >
                    Explore Capabilities
                  </Link>
                 
                </div>
              </div>
            </div>
            <div className="carousel-image-wrap">
              <img
                src={ImageSecond}
                className="img-fluid carousel-image"
                alt="image"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero