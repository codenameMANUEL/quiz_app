import LogoFooter from "../assets/logo_footer.png";


export default function Footer() {
    return (
        // <footer>
        //     <div classNameName="footer_roll">
        //     <div classNameName="footer_roll_one">
        //         <img src={LogoFooter} />
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut corrupti reiciendis quia atque officiis praesentium </p>
        //         <p>Follow us</p>
        //         <div>
        //             <img />
        //             <img />
        //             <img />
        //             <img />
        //         </div>
        //     </div>
        //     <div classNameName="list_items_roll">
        //         <ul>
        //             <li>Quick Links</li>
        //             <li>Home</li>
        //             <li>About Us</li>
        //             <li>FAQ's</li>
        //             <li>Contact us</li>
        //         </ul>
        //         <ul>
        //             <li>Quiz's Categories</li>
        //             <li>Science</li>
        //             <li>Algebra</li>
        //             <li>Chemistry</li>
        //             <li>Biology</li>
        //         </ul>
        //     </div>
        //     <div classNameName="footer_contact">
        //         <p>Get in touch</p>
        //         <p>We don't send spam so don't worry</p>
        //         <div>
        //         <input placeholder="Email address"/>
        //         <button>send</button>
        //         </div>
        //         <p>Phone number: (434) 546-4356</p>
        //         <p>Email: Quizfy@outbox.com</p>
        //     </div>

        //     </div>

        //    <div classNameName="copyright">
        //    <p>Copyright 2024 Quizfy | Developmentmisr. All Rights Resevered</p>
        //    </div>
        // </footer>
        <footer>
        <div className="footer-container">
            <div className="footer-left">
                <div className="footer-logo">
                    <img src="logo.png" alt="Quizify Logo" />
                    <p>Quizify: Learn and have fun with quizzes on a wide variety of topics, created by experienced teachers.</p>
                </div>
                <div className="social-media">
                    <a href="#">
                        <img src="facebook-icon.png" alt="Facebook"/></a>
                    <a href="#">
                        <img src="instagram-icon.png" alt="Instagram"/></a>
                    <a href="#">
                        <img src="twitter-icon.png" alt="Twitter"/></a>
                    <a href="#">
                        <img src="linkedin-icon.png" alt="LinkedIn"/></a>
                </div>
            </div>
            <div className="footer-center">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">FAQ's</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
                <h3>Quiz's Categories</h3>
                <ul>
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