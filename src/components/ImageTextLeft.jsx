import BDS from "../assets/behindTheScene.webp"


export default function ImageTextLeft ({img, title, desp, btn}) {
    return (
        <>
            <div className="image_text_roll">
                <div >
                    <img src={img} />
                </div>
                <div className="image_text_roll_text">
                <h1>{title}</h1>
                    <p>{desp}</p>
                    <div className="image_text_roll_btn">
                        <button>{btn}</button>
                    </div>
                </div>
            </div>
        </>
    )
}