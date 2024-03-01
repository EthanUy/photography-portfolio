import "../css/home.css";
import { Link } from 'react-router-dom';
import { pajara2} from "../main";
import { pajara1} from "../main";
import { dylan}   from "../main";
import { pajara3} from "../main";

const Home = () => {
  return (
    <>
      <section className="col-md-12">
        <img src={pajara1} className="image-home"></img>
      </section>
      <section className="d-flex mt-5 pe-4 ps-4">
        <div className="col-md-3 d-flex justify-content-center ps-2 pe-2">
          <img className="image" src={pajara2} />
        </div>
        <div className="col-md-6 d-flex justify-content-center ps-2 pe-2">
          <img className="image" src={dylan} />
        </div>
        <div className="col-md-3 d-flex justify-content-center ps-2 pe-2">
          <img className="image" src={pajara3} />
        </div>
      </section>
      <section className="mt-3 d-flex justify-content-center">
       <Link to='/work' className="explore-link"> <p > Explore </p> </Link>
      </section>
    </>
  );
};

export default Home;
