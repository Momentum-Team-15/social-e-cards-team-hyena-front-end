export const Card = (props) => {


    return (
        <div className="flip-card">
            <div className="flipping-card">
                <div className="card-front" style={{
                    border: `${props.card.border_style} ${props.card.border_color}`,
                    backgroundColor: props.card.background_color,
                }}>
                    <p>{props.card.inner_msg}</p>
                </div>
                <div className="card-back" style={{
                    backgroundColor: props.card.background_color,
                    border: `${props.card.border_style} ${props.card.border_color}`
                }}>
                    <p>{props.card.outer_msg}</p>
                </div>
            </div>
        </div>
    )
}