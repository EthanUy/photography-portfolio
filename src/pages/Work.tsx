import "../css/work.css";

const Work = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <img className="image" src="../../public/pajara1.jpg"></img>
          </div>
          <div className="col-md-6">
            <img className="image" src="../../public/dylan.jpg"></img>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-3">
            <img className="image" src="../../public/alice.jpg"></img>
          </div>
          <div className="col-md-3">
            <img className="image" src="../../public/trev.jpg"></img>
          </div>
          <div className="col-md-3">
            <img className="image" src="../../public/pajara2.jpg"></img>
          </div>
          <div className="col-md-3">
            <img className="image" src="../../public/pajara3.jpg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
