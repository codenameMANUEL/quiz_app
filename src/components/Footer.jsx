import LogoFooter from "../assets/logo_footer.png";


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
                <div className="social-media">
                    <a href="#"><img src="facebook-icon.png" alt="Facebook"/></a>
                    <a href="#"><img src="instagram-icon.png" alt="Instagram"/></a>
                    <a href="#"><img src="twitter-icon.png" alt="Twitter"/></a>
                    <a href="#"><img src="linkedin-icon.png" alt="LinkedIn"/></a>
                </div>
            </div>
            <div className="footer-center">
                <ul>
                    <h3>Quick Links</h3>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">FAQ's</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
                <ul>
                    <h3>Quiz's Categories</h3>
                    <li><a href="#">Science</a></li>
                    <li><a href="#">Algebra</a></li>
                    <li><a href="#">Chemistry</a></li>
                    <li><a href="#">Biology</a></li>
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