import "../css/work.css";
import { pajara1 } from "../main";
import { pajara2 } from "../main";
import { pajara3 } from "../main";
import { dylan } from "../main";
import { alice } from "../main";
import { trev } from "../main";

const Work = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <img className="image" src={pajara1}></img>
          </div>
          <div className="col-md-6">
            <img className="image" src={dylan}></img>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-3">
            <img className="image" src={alice}></img>
          </div>
          <div className="col-md-3">
            <img className="image" src={trev}></img>
          </div>
          <div className="col-md-3">
            <img className="image" src={pajara2}></img>
          </div>
          <div className="col-md-3">
            <img className="image" src={pajara3}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
