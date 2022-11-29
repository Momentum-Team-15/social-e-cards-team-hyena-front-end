export const Card = (props) => {

    return (
        <div className="flip-card">
            <div className="flipping-card">
                <div className="card-front" style={{
                    border: `${props.border_style} ${props.border_color}`,
                    backgroundColor: props.background_color,
                }}>
                    <p className="title is-4">Corny Cards</p>
                    <p>{props.inner_msg}</p>
                </div>
                <div className="card-back" style={{
                    backgroundColor: props.background_color,
                    border: `${props.border_style} ${props.border_color}`
                }}>
                    <p>{props.outer_msg}</p>
                </div>
            </div>
        </div>
    )
}