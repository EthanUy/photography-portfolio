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
                        <h6>ethanlyleuy@gmail.com</h6>
                    </div>
                    <div className="socials">
                        <div className="row social-item mt-1"><img src={github} className="brand-logo"/> Github </div>
                        <div className="row social-item mt-1"><img src={instagram} className="brand-logo"/> Instagram </div>
                        <div className="row social-item mt-1"><img src={facebook} className="brand-logo"/> Facebook </div>
                    </div>
                </span>
           
        </footer>
    </>
    );
}

export default Footer;