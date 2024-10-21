import fImage from "../assets/images/ugec-images/5-796x445.jpg"   ;                         
import sImage from "../assets/images/ugec-images/6-768x432.jpg"   ;                         
import thImage from "../assets/images/ugec-images/4.jpg"    ;                         
import fouImage from "../assets/images/ugec-images/3-796x445.jpg"   ;                         
import fifImage from "../assets/images/ugec-images/1-796x445.jpg" ;                         

const ProjectPage = () => {
  return (
   <main>
  <section className="hero section-hero section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12 text-center mx-auto">
          <div className="section-hero-text">
            <small className="small-title text-warning">Projects Detail</small>
            <h1 className="text-white"> Projects</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="projects section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-12 mb-5">
          <h2 className="mb-3">Projects we have crafted so far</h2>
          <p>
            Waso Strategy is a Bootstrap 5 HTML template for your business. You
            may use this template for any purpose. You may not redistribute the
            template ZIP file on any other website.
          </p>
          <p>
            You may support a little PayPal donation to Tooplate by visiting our{" "}
            <a href="#">contact page</a>. Thank
            you.
          </p>
        </div>
        <div className="col-lg-6 col-12 mb-5">
          <img
            src={fImage}
            className="img-fluid projects-image"
            alt=""
          />
          <h2 className="mt-3 mb-1">Ways to start a project</h2>
          <p>
            Mauris in convallis nunc, non facilisis arcu. Nunc sapien interdum
            at diam, aliquam Lorem ipsum Sed eiusmod esse aliqua sed incididunt
            aliqua incididunt mollit id et sit proident dolor nulla.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut dolore
          </p>
        </div>
        <div className="col-lg-6 col-12 mb-5">
          <img
            src={sImage}
            className="img-fluid projects-image"
            alt=""
          />
          <h2 className="mt-3 mb-1">Strategies for next move</h2>
          <p>
            Mauris in convallis nunc, non facilisis arcu. Nunc sapien interdum
            at diam, aliquam Lorem ipsum Sed eiusmod esse aliqua sed incididunt
            aliqua incididunt mollit id et sit proident dolor nulla.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut dolore
          </p>
        </div>
        <div className="col-lg-4 col-12">
          <img
            src={thImage}
            className="img-fluid projects-image"
            alt=""
          />
          <h3 className="mt-3 mb-1">Banana Team</h3>
          <p>
            Mauris in convallis nunc, non facilisis arcu. Nunc sapien interdum
            at diam, aliquam Lorem ipsum Sed eiusmod.
          </p>
        </div>
        <div className="col-lg-4 col-12 my-lg-0 my-5">
          <img
            src={fouImage}
            className="img-fluid projects-image"
            alt=""
          />
          <h3 className="mt-3 mb-1">Meeting Time</h3>
          <p>
            Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id
            et sit proident dolor. That is the new way to start a business.
          </p>
        </div>
        <div className="col-lg-4 col-12">
          <img
            src={fifImage}
            className="img-fluid projects-image"
            alt=""
          />
          <h3 className="mt-3 mb-1">Avocado Work</h3>
          <p>
            You may want to visit Too CSS blog for latest collections of
            Bootstrap Templates. Please tell your friends about our website.
            Thank you.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>

  )
}

export default ProjectPage