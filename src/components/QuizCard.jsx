

export default function QuizCard({ img, subject, quizNum}) {
    return (
        <div className="quiz_card">
            <div>
                <img src={img} alt={subject} />
                <p className="subject" style={{ fontWeight: "700", fontSize: "35px" }}>{subject}</p>
                <p className="quizNum" style={{ paddingTop: "10px", fontWeight: "500", fontSize: "15px"}}>{quizNum}</p>
            </div>
        </div>
    )
}