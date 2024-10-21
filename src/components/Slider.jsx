import fImage from "../assets/images/ugec-images/CEO.jpg";
import sImage from "../assets/images/ugec-images/3.png";
import thImage from "../assets/images/ugec-images/3.jpg";
import fouImage from "../assets/images/ugec-images/3.jpeg";



const Slider = () => {
	return (
		<>
			{/* Slider image */}
			<section id="slidr" className="slidr text-white">
				<div
					id="carouselExampleIndicators"
					className="carousel slide  mb-2  slide   pb-4"
					data-bs-ride="carousel"
				>
					<div className="carousel-indicators ">
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to={0}
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to={1}
							aria-label="Slide 2"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to={2}
							aria-label="Slide 3"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to={3}
							aria-label="Slide 4"
						/>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active  ">
							<img
								src={fImage}
								className="    rounded-circle "
								alt="testimonial"
							/>
							<div className="">
								<h4 className="fw-semibold my-2  "> DR. HOSSAM TALAAT</h4>
								<p className="lead mb-2 text-white">
									CHAIRMAN & CO-FOUNDER.
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src={sImage}
								className="  rounded-circle "
								alt="testimonial"
							/>
							<div className="">
								<h4 className="fw-semibold my-2">SAMEH ABDELAZIZ</h4>
								<p className="lead mb-2 text-white">
									EXECUTIVE MANAGER
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src={thImage}
								className=" rounded-circle "
								alt="testimonial"
							/>
							<div className="text-white">
								<h4  className="fw-semibold mb-1">HAITHAM EMAM</h4>
								<p className="lead my-2 text-white">
									PROJECT ENGINEERING MANAGER
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src={fouImage}
								className="  rounded-circle "
								alt="testimonial"
							/>
							<div className="">
								<h4 className="fw-semibold my-2">Eng Zizi</h4>
								<p className="lead mb-3 text-white">
									Some representative placeholder content for the first slide.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Slider
