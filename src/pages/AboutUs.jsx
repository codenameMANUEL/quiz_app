import Nav from "../components/Nav";
import "../styles/about.css";
import IMG from "../assets/behindTheScene.webp";
import WhyQuizfy from "../components/WhyQuizfy";
import { Heart } from "lucide-react";
import Footer from "../components/Footer";
import ReviewSlider from "../components/ReviewSlider";

export default function AboutUs() {
  return (
    <>
      <Nav />
      <div className="section_one_about">
        <div>
          <h3>About Us</h3>
          <p>Home &gt; About Us</p>
        </div>
      </div>

      <div className="section_two_about">
        <div className="section_two_about_text">
          <h2>Quizfy: Your Gateway to learning Through quizzes.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            saepe. Saepe neque nobis dicta porro amet. Adipisci ipsum excepturi
            maxime animi omnis dolor maiores, quisquam modi possimus rem
            asperiores itaque.
          </p>
        </div>
        <div className="section_two_about_img">
          <img src={IMG} />
        </div>
      </div>

      <div className="why_quizfy_roll">
      <WhyQuizfy
        icon={Heart}
        title="We CARE about you!"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum dolore, amet repellendus quos voluptatum quidem deserunt sit quod nam minima iste explicabo ratione dolores sint suscipit ea esse alias."
      />
      <WhyQuizfy
        icon={Heart}
        title="We CARE about you!"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum dolore, amet repellendus quos voluptatum quidem deserunt sit quod nam minima iste explicabo ratione dolores sint suscipit ea esse alias."
      />
      <WhyQuizfy
        icon={Heart}
        title="We CARE about you!"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum dolore, amet repellendus quos voluptatum quidem deserunt sit quod nam minima iste explicabo ratione dolores sint suscipit ea esse alias."
      />
      </div>

      <div className="quzzing_platform">
        <div>
            <h3>A Quizzing Platform for Everyone</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, modi aspernatur? Vitae aliquid, veniam totam aliquam atque, natus pariatur expedita fugit optio quaerat ullam dignissimos quo quos fuga dolorum laboriosam.</p>
        </div>
        <div className="section_two_about_btn_roll">
            <button>I'm a Student</button>
            <button>I'm a Teacher</button>
        </div>
        <div className="quzzing_platform_img_text">
            <div className="quzzing_platform_img">
                <img src={IMG} />
            </div>
            <div className="quzzing_platform_list_items">
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At suscipit ipsam quo orporis maiores modi autem nulla, aperiam earum eveniet sapiente obcaecati, soluta dolorem?</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At suscipit ipsam quo illo modi! Debitis ipste obcaecati, soluta dolorem?</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipis maiores modi autem nulla, aperiam earum eveniet sapiente obcaecati, soluta dolorem?</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing el dolorem?</li>
                </ul>
            </div>
        </div>
      </div>

      <div className="vision_mission">
        <div className="our_vision">
            <p>Our Vision</p>
            <h3>Where Engagement and Empoverment meet</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero distinctio iste aliquam dolor officiis qui tenetur nobis, esse sint laboriosam perspiciatis facilis rerum repellendus quos molestias at dolorem ea.</p>
        </div>
        <div className="vision_mission_img">
            <img src={IMG} />
        </div>
        <div className="our_vision">
            <p>Our Mission</p>
            <h3>Engaging Quizzes For Everyone</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero distinctio iste aliquam dolor officiis qui tenetur nobis, esse sint laboriosam perspiciatis facilis rerum repellendus quos molestias at dolorem ea.</p>
        </div>
      </div>
      
      <div className="success_numbers">
        <div>
            <h3>Our success in numbers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, vitae. Obcaecati modi suscipit earum numquam dicta beatae officiis voluptate illo explicabo, sit, qui provident saepe.</p>
            <div className="success_figures">
               <div className="success_figures_roll_one">
                <div className="teacher">
                <p>+30k</p>
                <span>Teacher use Quizify</span>
                </div>
               <div className="student">
               <p>+100k</p>
               <span>student use quizfy</span>
               </div>
               </div>
               <div className="success_figures_roll_two">
                <div className="quiz_created">
                <p>+10k</p>
                <span>Quiz created</span>
                </div>
               <div className="school_grades">
               <p>+24</p>
               <span>School assess granted using Quzify</span>
               </div>
               </div>
            </div>
        </div>
        <div className="success_numbers_img">
            <img src={IMG} />
        </div>
      </div>

      <div className="review_slider">
      <ReviewSlider />
      </div>

      <Footer />
    </>
  );
}
