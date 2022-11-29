export const Card = (props) => {

    return (
        <div className="flip-card">
            <div className="flipping-card">
                <div className="card-front" style={{
                    borderWidth: props.card.style.border_width,
                    borderStyle: props.card.style.border_style,
                    borderColor: props.card.style.border_color,
                    backgroundColor: props.card.style.background,
                    fontSize: props.card.style.font_size
                }}>
                    <p className="title is-4" style={{
                        color: props.card.style.text_color
                    }}>Corny Cards</p>
                    <p style={{color:props.card.style.text_color}}>{props.card.info.text_front}</p>
                </div>
                <div className="card-back" style={{
                    backgroundColor: props.card.style.background,
                    color: props.card.style.text_color,
                    border: `${props.card.style.border_width} ${props.card.style.border_style} ${props.card.style.border_color}`
                }}>
                    <p style={{fontSize: props.card.style.font_size}}
                    >{props.card.info.text_back}</p>
                </div>
            </div>
        </div>
    )
}