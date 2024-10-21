import fImage from "../assets/images/services/young-entrepreneurs-mature-investor-watching-presentation-discussing-project.jpg";
import sImage from "../assets/images/ugec-images/2-768x432.jpg";
import thImage from "../assets/images/ugec-images/1-796x445.jpg";
const Services = () => {
  return (
   <section className="services section-padding" id="section_3">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 col-12 text-center mx-auto mb-5">
        <small className="small-title">
          Services <strong className="text-warning">03/05</strong>
        </small>
        <h2>How can we help you?</h2>
      </div>
      <div className="col-lg-6 col-12">
        <nav>
          <div
            className="nav nav-tabs flex-column align-items-baseline"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link active"
              id="nav-business-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-business"
              type="button"
              role="tab"
              aria-controls="nav-business"
              aria-selected="true"
            >
              <h3>The Mission</h3>
              <span>
                We are committed to provide our customers with the best
                consultancy service in the field of electrical power systems’
                transmission&amp; distribution. This can be achieved by
                utilizing the expertise of our staff.
              </span>
            </button>
            <button
              className="nav-link"
              id="nav-strategy-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-strategy"
              type="button"
              role="tab"
              aria-controls="nav-strategy"
              aria-selected="false"
            >
              <h3>The Vision</h3>
              <span>
                We aim to be amongst the highest engineering consultancy firms
                working in the Middle East and Africa within the next five
                years.
              </span>
            </button>
            <button
              className="nav-link"
              id="nav-video-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-video"
              type="button"
              role="tab"
              aria-controls="nav-video"
              aria-selected="false"
            >
              <h3>Services</h3>
              <span>Conventional Energy Systems</span>
              <span>Power System Studies and Research Projects</span>
              <span>
                Renewable Energy Systems (Under Construction Department)
              </span>
              <span>
                Power System Studies and Research ProjectsSmart Grid
                Technologies (Under Construction Department)
              </span>
            </button>
          </div>
        </nav>
      </div>
      <div className="col-lg-6 col-12">
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-business"
            role="tabpanel"
            aria-labelledby="nav-intro-tab"
          >
            <img
              src={fImage}
              className="img-fluid"
              alt=""
            />
            <h5 className="mt-4 mb-2">Who we are</h5>
            <p>
              n this section you should note your site URL, as well as the name
              of the company, organization, or individual behind it, and some
              accurate contact information.
            </p>
            <ul>
              <li>
                The amount of information you may be required to show will vary
                depending on your local or national business regulations
              </li>
              <li>
                You may, for example, be required to display a physical address,
                a registered address, or your company registration number.
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade show"
            id="nav-strategy"
            role="tabpanel"
            aria-labelledby="nav-strategy-tab"
          >
            <img
              src={sImage}
              className="img-fluid"
              alt=""
            />
            <h5 className="mt-4 mb-2">Conventional Energy Systems</h5>
            <div className="row">
              <div className="col-lg-6 col-12">
                <p>
                  Design of Transmission substations up to 380 &amp; 500 kV.
                </p>
                <p>HV &amp; EHV Testing and commissioning..</p>
              </div>
              <div className="col-lg-6 col-12">
                <p>Design of Distribution Substations.</p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade show"
            id="nav-video"
            role="tabpanel"
            aria-labelledby="nav-video-tab"
          >
            <img
              src={thImage}
              className="img-fluid"
              alt=""
            />
            <h5 className="mt-4 mb-2">
              Our areas of expertise in energy fields includes:
            </h5>
            <p>Design services.</p>
            <p>Consultancy services.</p>
            <p>Researches and development services.</p>
            <p>Management services.</p>
            <p>
              All our services can be provided independently or can be
              integrated as parts of an overall project package.
            </p>
            <p>Management services.</p>
            <p>
              Since its inception has achieved a great measure of success as an
              engineering consultancy firm providing design, engineering and
              supervision for power and distribution substation projects within
              the Kingdom of Saudi Arabia.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <>
  {/* ----------------Services Section-------- */}
  <section id="services" className="services py-5">
    <div className="services-title text-center ">
      <h2 className="title-text fs-1 fw-bold text-uppercase">Services</h2>
      <p className="reume-title-p my-4 fs-4">
						  ENGINEERING
						  POWER SOLUTIONS
						  FOR A RELIABLE
						  TOMORROW
      </p>
      <hr
        className="border border-primary border-5 opacity-75 m-auto my-4 "
        style={{ width: "10%" }}
      />
    </div>
    {/* ----Cards-------- */}
    <div className="container cards">
      <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3  gy-4 ">
        {/*----------- Cards ----------*/}
        {/* Card */}
        <div className=" col   ">
          <div className=" d-flex flex-column gap-3 align-items-center  text-center card-sevices    bg-white    shadow-sm  p-4">
            <div className="card-icon ">
              <span className="icon-circle ">
                <i className="bi bi-briefcase " />
              </span>
            </div>
								  <h3 className="card-title"> POWER PROJECT STUDIES </h3>
          
									
								  <ul className="text-start">
										  <li>  Feasibility Studies</li>
										  <li>    Power Flow Studies</li>
										  <li>  Short Circuit Analysis</li>
										  <li>   Voltage Stability Analysis</li>
										  <li>  Transient Stability Analysis </li>
										  <li>  Power Quality Measurement &
									  Evaluation </li>
										  <li>  Transient Stability Analysis </li>
										  <li>  Transient Stability Analysis </li>
										
									  </ul>
       
          </div>
        </div>
        {/* Card */}
        <div className=" col   ">
          <div className=" d-flex flex-column gap-3 align-items-center  text-center card-sevices    bg-white    shadow-sm  p-4">
            <div className="card-icon ">
              <span className="icon-circle ">
                <i className="bi bi-card-checklist " />
              </span>
            </div>
								  <h3 className="card-title"> POWER PROJECT STUDIES </h3>
								  <ul className="text-start">
									  <li>  Power Loss Assessment </li>
									  <li>   Power Factor Correction</li>
									  <li>   Protection Coordination &
										  Relay Setting</li>
									  <li>   Arc Flash Study </li>
									  <li>  Harmonic Analysis </li>
									  <li>  Insulation Coordination Study
										  </li>
									
								  </ul>
          </div>
        </div>
        {/* Card */}
        <div className=" col   ">
          <div className=" d-flex flex-column gap-3 align-items-center  text-center card-sevices    bg-white    shadow-sm  p-4">
            <div className="card-icon ">
              <span className="icon-circle ">
                <i className="bi bi-bar-chart" />
              </span>
            </div>
								  <h3 className="card-title">ENGINEERING</h3>
								  <ul className="text-start">
									  <li>  Design of HV & EHV Substations </li>
									  <li>   Design of HV & EHV Transmission
										  Lines</li>
									  <li>    Design of Power Generation
										  Plants</li>
									  <li>    Design of Pump Stations </li>
									  <li>   Design of Wastewater Treatment Plants </li>
									  

								  </ul>
           
          </div>
        </div>
        </div>
        </div>
       
  </section>
  {/*-End Service Section*/}
</>

</section>

  )
}

export default Services