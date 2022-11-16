
export const AllCards = (props) => {
    return (
        <div className="card-grid">
            {props.data.map((card) => (
            <div className={`${card.style.border} ${card.style.border_color} ${card.style.background}`}>
                <p>{card.info.text}</p>
        </div>
            ))}
        </div>
    )
};