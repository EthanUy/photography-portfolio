import { Link } from "react-router-dom";
import { shutterLight } from "../main";
import { github } from "../main";
import { instagram } from "../main";
import { facebook } from "../main";
import "../css/footer.css";

function Footer() {
    return (
    <>
        <footer className="footer">
            
                <span className="footer-content"> 
                    <div className="logo-container">
                        <img src={shutterLight} className="logo"/>
                        <h5>ethanlyleuy@gmail.com</h5>
                    </div>
                    <div className="socials">
                        <div className="row social-item mt-2"><Link className="footer-link" to="https://github.com/EthanUy"><span><img src={github} className="brand-logo"/> Github</span></Link> </div>
                        <div className="row social-item mt-2"><Link className="footer-link" to="https://www.instagram.com/ethanlyleuy/"><span><img src={instagram} className="brand-logo"/> Instagram</span></Link> </div>
                        <div className="row social-item mt-2"><Link className="footer-link" to="https://www.facebook.com/ethanlyle.uy/"><span><img src={facebook} className="brand-logo"/> Facebook</span></Link> </div>
                    </div>
                </span>
           
        </footer>
    </>
    );
}

export default Footer;