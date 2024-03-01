import "../css/home.css";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className="col-md-12">
        <img src="../../public/pajara1.jpg" className="image-home"></img>
      </section>
      <section className="d-flex mt-5 pe-4 ps-4">
        <div className="col-md-3 d-flex justify-content-center ps-2 pe-2">
          <img className="image" src="../../public/pajara2.jpg" />
        </div>
        <div className="col-md-6 d-flex justify-content-center ps-2 pe-2">
          <img className="image" src="../../public/dylan.jpg" />
        </div>
        <div className="col-md-3 d-flex justify-content-center ps-2 pe-2">
          <img className="image" src="../../public/pajara3.jpg" />
        </div>
      </section>
      <section className="mt-3 d-flex justify-content-center">
       <Link to='/work' className="explore-link"> <p > Explore </p> </Link>
      </section>
    </>
  );
};

export default Home;
