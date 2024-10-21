

const firstCard = () => {
	const fImage ="../assets/images/ugec-images/CEO.jpg";
	
  return (
	  <div className="row mt-3 ">
		  {/* ----- */}
		  <div className="col-12 col-lg-6  teamItem tbEffect shadow-lg">
			  <div className=" teamImage ">
				  <img src={fImage} alt="" className="img-fluid img-thumbnail" />
				  <div className="teamOverlay">
					  <a href="#" className="" id="">
						  <li className="icon bi-brands bi-facebook" />
					  </a>
					  <a href="#" className="" id="">
						  <li className="icon  bi-brands bi-twitter" />
					  </a>
					  <a href="#" className="" id="">
						  <li className="icon  bi-brands bi-linkedin" />
					  </a>
				  </div>
			  </div>
			  <div className="teamInfo"></div>
			  {/* ./teamInfo */}
		  </div>
		  {/* -------- */}
		  <div className="col-lg-6 col-12 d-flex flex-column">
			  <div className="about-thumb bg-white shadow-lg">
				  <div className="about-info">
					  <small className="small-title">
						  CHAIRMAN{" "}
						  <strong className="text-warning">& CO-FOUNDER</strong>
					  </small>
					  <h6 className="mb-3">PRO. DR. Hossam Eldin Abdalla Talaat</h6>
					  <p className="mb-3 fs-6">
						  Power System Studies, Smart Grid and Renewable Energy
					  </p>
					  <p className="mb-2 fs-6">
						  Ph. D. in Electrical Power Eng., with the Highest Honor
						  Degree, University of Grenoble, France, Sep. 1986.
					  </p>
					  <p className="mb-2 fs-6">
						  M. Sc. in Electrical Power Eng. and Machines Ain Shams U niv.,
						  Cairo, Egypt, April 1980.
					  </p>
					  <p className="mb-2 fs-6">
						  B. Sc. in Electrical Power Engineering, Distinction with
						  Honors, Ain Shams University, Cairo, Egypt, June 1975.
					  </p>
				  </div>
			  </div>
		  </div>
	  </div>
  )
}

export default firstCard
