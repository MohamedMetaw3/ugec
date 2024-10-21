

const Contact = () => {
  return (
   <section className="contact" id="section_5">
       <h2 className="text-center fs-1 fw-bold">Get In Touch</h2>
                <hr
                  className="border border-primary border-5 opacity-75 m-auto my-4"
                  />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#f9c10b"
      fillOpacity={1}
      d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
  </svg>
  <div className="contact-container-wrap">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12">
          <form
            className="custom-form contact-form"
            action=""
            method="post"
            role="form"
          >
            <small className="small-title">
              Contact <strong className="text-white">05/05</strong>
            </small>
            <h2 className="mb-5">Say Hi to us</h2>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <input
                  type="email"
                  name="email"
                  id="email"
                  pattern="[^ @]*@[^ @]*"
                  className="form-control"
                  placeholder="your@company.com"
                  required=""
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  rows={7}
                  id="message"
                  name="message"
                  placeholder="Message"
                  defaultValue={""}
                />
                <button type="submit" className="form-control">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-12">
          <div className="contact-thumb">
            <div className="contact-info bg-white shadow-lg">
								  <h4 className="mb-4">New Cairo, Egypt</h4>
								  <h4 className="mb-4"> Khobar, Kingdom of Saudi Arabia</h4>
              <h4 className="mb-2">
                <a href="tel: 240-480-9600">
										  <i className="bi-telephone contact-icon me-2" /> +966-54-438-2047
										  <br />
										  <i className="bi-telephone contact-icon me-2" /> +20 10 1102 2650
                </a>
              </h4>
              <h5>
                <a href="mailto:info@company.com" className="footer-link">
                  <i className="bi-envelope-fill contact-icon me-2" />{" "}
                  info@ugec.com
				  <br />
										  <i className="bi-envelope-fill contact-icon me-2" />{" "}
										  zizi.elgamal@ugec-eg.com
                </a>
              </h5>
              {/* Copy "embed a map" HTML code from any point on Google Maps -> Share Link  */}
              <iframe
                className="google-map mt-4"
									  src="https://maps.app.goo.gl/6UfdfM2hJpNF5P2c6"
                width="100%"
                height={300}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact