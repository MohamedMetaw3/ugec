

const Counter = () => {
  return (
   <>
  {/* --------------#Counter Section-------------------- */}
  <section id="counter" className="counter gy-4 py-5">
    <div className="container ">
      <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2">
        <div className="col">
          <div className="counter-content opacity-75">
            <span className="icon-counter">
              <i className="bi bi-check circle-icon" />
            </span>
            <div>
              {" "}
              <span d="">567</span>
              <p className="fs-3">WORKS COMPLETED</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="counter-content  opacity-75">
            <span className="icon-counter">
              <i className="bi bi-journal-richtext circle-icon" />
            </span>
            <div>
              {" "}
              <span>232</span>
              <p className="fs-3">YEARS OF EXPERIENCE</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="counter-content opacity-75">
            <span className="icon-counter">
              <i className="bi bi-people circle-icon" />
            </span>
            <div>
              {" "}
              <span>879</span>
              <p className="fs-3">TOTAL CLIENT</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="counter-content opacity-75">
            <span className="icon-counter">
              <i className="bi bi-award circle-icon" />
            </span>
            <div>
              <span>376</span>
              <p className="fs-3">AWARD WON</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Counter