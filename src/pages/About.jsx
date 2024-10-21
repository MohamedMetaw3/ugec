import fImage from "../assets/images/ugec-images/CEO.jpg";
import sImage from "../assets/images/ugec-images/3.png";
import thImage from "../assets/images/ugec-images/3.jpg";
import fouImage from "../assets/images/ugec-images/3.jpeg";



const About = () => {
	return (
		<>
			<section className="about section-padding" id="section_2">
				<div className="container ">
					<div className="col-lg-12 col-12 d-flex flex-column">
						<div className="about-thumb bg-white shadow-lg">
							<div className="about-info">
								<h4 className="mb-3 text-center">
									TRANSFORMING ENERGY FOR TOMORROW
								</h4>
								<hr
									className="border border-primary border-3 opacity-75 m-auto"
									style={{ width: "7%" }}
								/>
								<p className="pt-2">
									UGEC is an engineering and consulting company with a decade-long
									commitment to innovation in sustainable infrastructure. We
									offers multidisciplinary design and engineering solutions to
									empower our clients and success partners with the knowledge,
									ownership, and confidence they need to make meaningful
									differences. Our talented professionals come with years of
									expertise in the power, transmission and distribution, building,
									and water sectors. We are 100% committed to delivering reliable,
									resilient, and sustainable solutions that serve our thriving
									communities and protect the future of our planet
								</p>
								<p>
									Our expertise extends across diverse geographies, with
									successful projects in Egypt, Saudi Arabia, Iraq, Yemen,
									Mauritania, Burkina Faso, Uganda, and other regions in Africa.
								</p>
							</div>
						</div>
					</div>
					{/* 1 */}
					<div className="row m-3 ">
						<div className="portfolio-title text-center mb-3">
							<h2 className=" display-3 fw-bold">
								<small className="small-title">
									CHAIRMAN <strong className="text-warning">& CO-FOUNDER</strong>
								</small>
							</h2>

							<hr
								className="border border-primary border-3 opacity-75 m-auto"
								style={{ width: "15%" }}
							/>
						</div>
						{/* -------------Row---------------- */}
						<div className="row mt-3 ">
							{/* -- */}
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
										<h6 className="mb-3">PRO. DR.Hossam Eldin Abdalla Talaat</h6>
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

					</div>
					<div className="row m-3 ">
						<div className="portfolio-title text-center mb-3">
							<h2 className=" display-3 fw-bold">
								<small className="small-title">
									OUR LEADERSHIP
								</small>
							</h2>

							<hr
								className="border border-primary border-3 opacity-75 m-auto"
								style={{ width: "15%" }}
							/>
						</div>
						
						
						{/* -------------Row---------------- */}
						<div className="row mt-3 ">
							
							<div className="col-lg-6 col-12 d-flex flex-column">
								<div className="about-thumb bg-white shadow-lg">
									<div className="about-info">
										<small className="small-title">
											EXECUTIVE
											<strong className="text-warning"> MANAGER</strong>
										</small>
										<h6 className="mb-3">SAMEH ABDELAZIZ</h6>
										<p className="mb-3 fs-6">
											Power System Studies, Smart Grid, and Renewable Energy
										</p>
										<p className="mb-2 fs-6">
											DBA & Masters in Business Administration in Small and Medium Enterprises from Arab
											Academy for Science Technology, 2020.
										</p>
										<p className="mb-2 fs-6">
											Sameh holds a Bachelor’s degree in Electrical Engineering and brings over 15 years of expertise in
											Engineering and Project Management. His Extensive Experience Encompasses Power Generation, extra
											high & high voltage Substations, and Water Treatment Projects.
										</p>

									</div>
								</div>
								
							</div>
							{/* -- */}
							<div className="col-12 col-lg-6  teamItem tbEffect shadow-lg">
								<div className=" teamImage ">
									<img src={thImage} alt="" className="img-fluid img-thumbnail" />
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
						</div>
						{/* -------------Row---------------- */}
						<div className="row mt-3 ">
							{/* -- */}
							<div className="col-12 col-lg-6  teamItem tbEffect shadow-lg">
								<div className=" teamImage ">
									<img src={sImage} alt="" className="img-fluid img-thumbnail" />
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
											PROJECT ENGINEERING
											<strong className="text-warning"> MANAGER</strong>
										</small>
										<h6 className="mb-3">HAITHAM EMAM</h6>
										<p className="mb-3 fs-6">
											Power Systems, Extra-Hight & High Voltage Substations
										</p>
										<p className="mb-2 fs-6">
											B. Sc of Power and Machine Engineering, Benha University (2006).
										</p>
										<p className="mb-2 fs-6">
											Haitham has 17 years of experience in power generation and the design and management of extra-high,
											high, and medium voltage Substation. He holds a Project Management Professional (PMP) Certification
											and has been a member of the Project Management Institute (PMI) since January 2022
										</p>
										<p className="mb-2 fs-6">
											B. Sc. in Electrical Power Engineering, Distinction with
											Honors, Ain Shams University, Cairo, Egypt, June 1975.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* -------------Row---------------- */}
					<div className="row mt-3 ">

						<div className="col-lg-6 col-12 d-flex flex-column">
							<div className="about-thumb bg-white shadow-lg">
								<div className="about-info">
									<small className="small-title">
										EXECUTIVE
										<strong className="text-warning"> MANAGER</strong>
									</small>
									<h6 className="mb-3">SAMEH ABDELAZIZ</h6>
									<p className="mb-3 fs-6">
										Power System Studies, Smart Grid, and Renewable Energy
									</p>
									<p className="mb-2 fs-6">
										DBA & Masters in Business Administration in Small and Medium Enterprises from Arab
										Academy for Science Technology, 2020.
									</p>
									<p className="mb-2 fs-6">
										Sameh holds a Bachelor’s degree in Electrical Engineering and brings over 15 years of expertise in
										Engineering and Project Management. His Extensive Experience Encompasses Power Generation, extra
										high & high voltage Substations, and Water Treatment Projects.
									</p>

								</div>
							</div>

						</div>
						{/* -- */}
						<div className="col-12 col-lg-6  teamItem tbEffect shadow-lg">
							<div className=" teamImage ">
								<img src={fouImage} alt="" className="img-fluid img-thumbnail" />
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
					</div>
				</div>



			</section>
		</>
	);
};

export default About;
