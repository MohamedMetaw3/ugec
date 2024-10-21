import { Link } from "react-router-dom"

const TowCols = () => {
  return (
	  <div className="row h-75 m-3">
		  <div className="col-lg-6 col-12">
			  <div className="about-thumb d-flex flex-column justify-content-center bg-danger mb-lg-0 h-100">
				  <div className="about-info">
					  <h5 className="text-white mb-2">TRANSMISSION & DISTRIBUTION</h5>
					  <p className=" text-white mb-0 fs-6">
						  We provide a comprehensive, system-wide solution that includes
						  transmission, distribution, and communication automation to
						  interconnect, visualize, and optimize the grid. By assisting clients in
						  planning, designing, and constructing an intelligent, secure, and resilient
						  grid, we mitigate grid failures and facilitate the integration of diverse,
						  renewable energy sources. This prepares our communities for sustainable,
						  long-term growth
					  </p>
					  <Link to={'/contact'}
						  className="custom-btn btn custom-bg-primary"
						  href="#section_3"
					  >
						  Join us
					  </Link>
				  </div>
			  </div>
		  </div>
		  <div className="col-lg-6 col-12  ">
			  <div className="about-thumb d-flex flex-column justify-content-center bg-warning mb-lg-0 h-100">
				  <div className="about-info">
					  <h5 className="text-white mb-2">POWER STUDIES</h5>
					  <p className="text-white mb-0 fs-6">
						  Our clients rely on our comprehensive engineering
						  solutions to meet the requirements of
						  governments, regulators, and customers. Together,
						  we excel in tackling the challenges involved in
						  delivering safe, reliable, and resilient power for our
						  clients and the communities they serve.
						  <p className="text-white mb-0">we are leveraging our extensive expertise and
							  innovative solutions to address complex
							  challenges in water resource management,
							  treatment, and distribution</p>
					  </p>
				  </div>
			  </div>
		  </div>
	  </div>
  )
}

export default TowCols
