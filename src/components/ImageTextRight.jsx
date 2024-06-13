


export default function ImageTextRight({ img, header, title, desp, btn1, btn2 }) {
    return (
        <>
            <div className="image_text_left">
                <div className="image_text_left_roll">
                    <h1>{header}</h1>
                    <h1>{title}</h1>
                    <p>{desp}</p>
                    <div className="image_text_left_btn">
                        <button>{btn1}</button>
                        <button>{btn2}</button>
                    </div>
                </div>
                <div >
                    <img src={img} />
                </div>
            </div>
        </>
    )
}