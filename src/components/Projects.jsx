import firstImage from "../assets/images/ugec-images/1-1024x576.jpg"
import secondImage from "../assets/images/ugec-images/1-796x445.jpg"
import ThirdImage from "../assets/images/ugec-images/3-796x445.jpg"
import fifthImage from "../assets/images/ugec-images/6-1024x576.jpg"
import { Link } from "react-router-dom"

const Projects = () => {
  return (
    <section className="projects section-padding pb-0" id="section_4">
            <div className="container">
                <div className="row">

                    <div className="col-lg-10 col-12 text-center mx-auto mb-5">
                        <small className="small-title">TRANSFORMING ENERGY <strong className="text-warning">FOR TOMORROW</strong></small>

                        <h2>Projects we have crafted so far</h2>
                    </div>

                    <div className="col-lg-4 col-12">
                        <div className="projects-thumb projects-thumb-small">
                            <Link to={'/project-page'} >
                                <img src={firstImage} className="img-fluid projects-image" alt="" />

                                <div className="projects-info">
                                    <div className="projects-title-wrap">
                                        <small className="projects-small-title"> Hail area,</small>

                                        <h6 className="projects-title">Saudi Arabia</h6>
                                    </div>

                                    <div className="projects-btn-wrap mt-4">
                                        <span className="custom-btn btn">
                                                <i className="bi-arrow-right"></i>
                                            </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
  <div className="col-lg-4 col-12">
                        <div className="projects-thumb projects-thumb-small">
                            <Link to={'/project-page'} >
                                <img src={firstImage} className="img-fluid projects-image" alt="" />

                                <div className="projects-info">
                                    <div className="projects-title-wrap">
                                        <small className="projects-small-title">Hail area,</small>

                                        <h6 className="projects-title"> Saudi Arabia</h6>
                                    </div>

                                    <div className="projects-btn-wrap mt-4">
                                        <span className="custom-btn btn">
                                                <i className="bi-arrow-right"></i>
                                            </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                      <div className="col-lg-4 col-12">
                        <div className="projects-thumb projects-thumb-small">
                            <Link to={'/project-page'} >
                                <img src={firstImage} className="img-fluid projects-image" alt="" />

                                <div className="projects-info">
                                    <div className="projects-title-wrap">
                                        <small className="projects-small-title">Hail area,</small>

                                        <h6 className="projects-title"> Saudi Arabia</h6>
                                    </div>

                                    <div className="projects-btn-wrap mt-4">
                                        <span className="custom-btn btn">
                                                <i className="bi-arrow-right"></i>
                                            </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="projects-thumb projects-thumb-small">
                            <Link to={'/project-page'}>
                                <img src={secondImage} className="img-fluid projects-image" alt=""/>

                                <div className="projects-info">
                                    <div className="projects-title-wrap">
                                        <small className="projects-small-title">Jubail Area,</small>

                                        <h6 className="projects-title"> Saudi Arabia</h6>
                                    </div>

                                    <div className="projects-btn-wrap mt-4">
                                        <span className="custom-btn btn" href="project-detail.html">
                                                <i className="bi-arrow-right"></i>
                                            </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12">
                        <div className="projects-thumb projects-thumb-small">
                            <Link   to={'/project-page'}>
                                <img src={ThirdImage} className="img-fluid projects-image" alt="project-image" />

                                <div className="projects-info">
                                    <div className="projects-title-wrap">
                                        <small className="projects-small-title">Asir ,</small>

                                        <h6 className="projects-title">  Saudi Arabia</h6>
                                    </div>

                                    <div className="projects-btn-wrap mt-4">
                                        <span className="custom-btn btn" href="project-detail.html">
                                                <i className="bi-arrow-right"></i>
                                            </span>
                                    </div>
                                </div>
                         
                            </Link>
                        </div>
                    </div>

                   

                    <div className="col-lg-4 col-12">
                        <div className="projects-thumb projects-thumb-small">
                            <Link to={'/project-page'}>
                                <img src={fifthImage} className="img-fluid projects-image" alt="" />

                                <div className="projects-info">
                                    <div className="projects-title-wrap">
                                        <small className="projects-small-title">Business</small>

                                        <h6 className="projects-title"> EGYPT</h6>
                                    </div>

                                    <div className="projects-btn-wrap mt-4">
                                        <span className="custom-btn btn" href="project-detail.html">
                                                <i className="bi-arrow-right"></i>
                                            </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
  )
}

export default Projects