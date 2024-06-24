export default function QuizCard({ img, subject, quizNum }) {
  return (
      <div>
        <img src={img} alt={subject} />
        <div className="subject_container">
          <p
            className="subject"
          >
            {subject}
          </p>
          <p
            className="quizNum"
          >
            {quizNum}
          </p>
        </div>
      </div>
  );
}
