import Slider from "react-slick";
import "../styles/reviewSlider.css"

export default function ReviewSlider({}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings} className="slider_container">
        <div>
          <h3>Quizfy is an amazing app for quizzes! The questions are challenging and fun, and the user interface is very intuitive.</h3>
        </div>
        <div>
          <h3>I love using Quizfy to test my knowledge. The variety of topics keeps me engaged and learning new things every day.</h3>
        </div>
        <div>
          <h3>Quizfy has become my go-to app for quizzes. The community feature adds a social aspect that's both enjoyable and competitive.</h3>
        </div>
        <div>
          <h3>The best quiz app I've tried! Quizfy offers detailed explanations for each answer, making it a great learning tool as well.</h3>
        </div>
        <div>
          <h3>Quizfy is fantastic for both casual and serious quiz-takers. The frequent updates and new quiz categories keep the experience fresh and exciting.</h3>
        </div>
        <div>
          <h3>Quizfy is perfect for trivia lovers! The app's sleek design and wide range of topics make learning fun and engaging.</h3>
        </div>
      </Slider>
    </>
  );
}
