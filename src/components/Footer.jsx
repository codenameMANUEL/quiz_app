import LogoFooter from "../assets/logo_footer.png";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer>
        <div className="footer-container">
            <div className="footer-left">
                <div className="footer-logo">
                    <img src={LogoFooter} alt="Quizify Logo"/>
                    <p>Quizify: Learn and have fun with quizzes on a wide variety of topics, created by experienced teachers.</p>
                    <p>Follow Us</p>
                </div>
                {/* <div className="social-media">
                    <Link className="social-link">
                        <img src="facebook-icon.png" alt="Facebook"/>
                        </Link>
                    <Link className="social-link">
                        <img src="instagram-icon.png" alt="Instagram"/>
                        </Link>
                    <Link className="social-link">
                        <img src="twitter-icon.png" alt="Twitter"/>
                        </Link>
                    <Link className="social-link">
                        <img src="linkedin-icon.png" alt="LinkedIn"/>
                        </Link>
                </div> */}
            </div>
            <div className="footer-center">
                <ul>
                    <h3>Quick Links</h3>
                    <Link>Home</Link>
                    <Link>About us</Link>
                    <Link>FAQ's</Link>
                    <Link>Contact us</Link>
                </ul>
                <ul>
                    <h3>Quiz's Categories</h3>
                    <Link>Science</Link>
                    <Link>Algebra</Link>
                    <Link>Chemistry</Link>
                    <Link>Biology</Link>
                </ul>
            </div>
            <div className="footer-contact">
                <h3>Get in touch</h3>
                <p>We don't send spam so don't worry</p>
                <form action="#">
                    <input type="email" placeholder="Email address"/>
                    <button type="submit">Send</button>
                </form>
                <p>phone number: (434) 546-4356</p>
                <p>Email: Quizify@outbox.com</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>Copyright 2023 Quizify | Developed by Developmentmir. All Rights Reserved</p>
        </div>
    </footer>
        
    )
}