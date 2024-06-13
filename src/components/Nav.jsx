import "../styles/nav.css"
import "../styles/root.css"
import Logo from "../assets/logo.png"

export default function Nav() {
    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="nav_list_items">
                <div className="list_items_left">
                    <ul>
                        <li>Home</li>
                        <li>Why Quizfy</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="list_items_right">
                    <ul>
                        <li>EN</li>
                        <li>Login</li>
                        <button>Sign up</button>
                    </ul>
                </div>
            </div>
        </nav>

    )
}