import Nav from "../components/Nav";
import "../styles/nav.css";
import "../styles/root.css";
import "../styles/landingPage.css";
import CartoonPenil from "../assets/hadrawnthinking-knowledge.png";
import KidsOnTab from "../assets/introKidsQuiz.webp";
import QuizCard from "../components/QuizCard";
import DNA from "../assets/dna.png";
import Physics from "../assets/physics.png";
import Bacteria from "../assets/bacteria.png";
import WhyQuizfy from "../components/WhyQuizfy";
import BDS from "../assets/behindTheScene.webp";
import { Heart, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import "../styles/footer.css";
import ImageTextLeft from "../components/ImageTextLeft";
import ImageTextRight from "../components/ImageTextRight";

// cartoon-pencil.png

export default function LandingPage() {
  return (
    <>
      <Nav />
      <div className="intro_roll">
        <div className="intro_roll_text">
          <h1>Test Your Skill and Knowledge with Expert Quizzes</h1>
          <p>
            Quizzes help student learn and engage with subjects in a fun and
            challenging wa, expanding general Knowledge and encourage critial
            thinking.
          </p>
          <div className="intro_roll_btn">
            <button>Sign up for free!</button>
            <button>Are you a Teacher?</button>
          </div>
        </div>
        <div className="parent">
          <img src={CartoonPenil} alt="quiz-web-app" className="image1" />
          <img src={KidsOnTab} alt="online-quiz" className="image2" />
        </div>
      </div>

      <div className="stat_figures">
        <div className="stat_figures_roll">
          <div className="flex align-item-center justify-content-center">
            <div className="stat_text flex align-item-center justify-content-center">
              <span className="stat_fig">+1,300</span>
              <span className="stat_fig_text"> Teachers Trust Our Quizzes</span>
            </div>
            <div className="stat_text flex align-item-center justify-content-center stat_text_center">
              <span className="stat_fig">+5,800</span>
              <span className="stat_fig_text">Students use our quizzes</span>
            </div>
            <div className="stat_text flex align-item-center justify-content-center">
              <span className="stat_fig">+21</span>
              <span className="stat_fig_text">
                Use Our Quizzes to Assess Grades
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section_two">
        <div className="section_intro_text">
          <div>
            <h1>
              Explore <span>+4,521</span> Quizzes
            </h1>
            <p>
              Quizzes on a Wide Range of Topics, Created by the Best Teachers in
              the world
            </p>
          </div>
        </div>

        <div className="top_rated_quizzes">
          <div className="top_rated_quizzes_text">
            <div>
              <p>Top-Rated</p>
              <p>Quizzes</p>
            </div>
          </div>
          <div className="flex quiz_card_container">
            <div className="quiz_card_one">
              <QuizCard 
                img={DNA} 
                subject="Biology" 
                quizNum="134 Quizzes" />
            </div>
            <div className="quiz_card_two">
              <QuizCard
                img={Physics}
                subject={"Physics"}
                quizNum={"134 Quizzes"}
              />
            </div>
            <div className="quiz_card_three">
              <QuizCard 
                img={DNA} 
                subject={"Biology"} 
                quizNum={"134 Quizzes"} />
            </div>
            <div className="quiz_card_four">
              <QuizCard
                img={Bacteria}
                subject={"Bacteriology"}
                quizNum={"134 Quizzes"}
              />
            </div>
          </div>
        </div>
        <div className="see_more_quiz">
          <p>see more quizzes </p>
          <span className="see_more_quiz_icon">
            <ArrowRight />
          </span>
        </div>
      </div>

      <div className="why_quizfy">
        <div>
          <p>Why Quizify</p>
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
      </div>

      <div>
        <ImageTextLeft
          img={BDS}
          title="Discover the story behind our quizzess"
          desp="Take a behind the scene look at our quiz website and learn more about the people who create our quiz and the stories behind it."
          btn="Know about us"
        />
      </div>

      <div>
        <ImageTextRight
          img={BDS}
          header="Got a problem?"
          title="We've got solutions."
          desp="Got a problem with your quizzes? Need help understanding a concept? Have a question about our website? No problem! We're here to help. Contact us or read our FAQ to get the answers you need."
          btn1="Contact us"
          btn2="Read FAQ's"
        />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
