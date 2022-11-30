import { useState } from "react"


export const Card = (props) => {
    const [open, setOpen] = useState(null)

    const handleDetail = () => {
        { open === props.card.id ? setOpen(null) : setOpen(props.card.id) }
    }
    console.log(open)


    return (
        <div>
            <div onClick={handleDetail} className="flip-card">
                <div className="flipping-card">
                    <div className="card-front" style={{
                        border: `${props.card.border_style} ${props.card.border_color}`,
                        backgroundColor: props.card.background_color,
                    }}>
                        <p className="card-sizing" style={{ color: props.card.font_color }}>{props.card.outer_msg}</p>
                    </div>
                    <div className="card-back" style={{
                        backgroundColor: props.card.background_color,
                        border: `${props.card.border_style} ${props.card.border_color}`
                    }}>
                        <p style={{ color: props.card.font_color }}>{props.card.inner_msg}</p>
                    </div>
                </div>
            </div>

            {open && (
                <div className="deets">
                    <button className="is-align-items-flex-end" onClick={() => setOpen(null)}>X</button>
                    <p>{`This card was made by ${props.card.user}`}</p>
                    <div className="flipping-card">
                        <div className="card-front" style={{
                            border: `${props.card.border_style} ${props.card.border_color}`,
                            backgroundColor: props.card.background_color,
                        }}>
                            <p className="card-sizing" style={{ color: props.card.font_color }}>{props.card.outer_msg}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}