import {
    Heart,
} from 'lucide-react'


export default function WhyQuizfy({ icon: Icon, title, description }) {
    return (
        <div className="why_quiz_container">
            <div className="content">
            {Icon && <Icon className="icon_bg" />}
                <p className="title">{title}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}