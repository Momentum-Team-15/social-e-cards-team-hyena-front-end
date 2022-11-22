export const Card = (props) => {

    return (
        <div className="flip-card">
            <div className="flipping-card">
                <div className="card-front" style={{
                    borderWidth: props.card.style.border_width,
                    borderStyle: props.card.style.border_style,
                    borderColor: props.card.style.border_color,
                    backgroundColor: props.card.style.background
                }}>
                    <p className="title is-4" style={{
                        color: props.card.style.text_color
                    }}>Corny Cards</p>
                </div>
                <div className="card-back" style={{
                    backgroundColor: props.card.style.background,
                    color: props.card.style.text_color
                }}>
                    <p>{props.card.info.text}</p>
                </div>
            </div>
        </div>
    )
}