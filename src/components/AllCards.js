
export const AllCards = (props) => {

    return (
        <section>
            <h1>All Cards</h1>
            <div className="card-grid">
                {props.data.map((card) => (
                    <div className="card">
                        <div className="card-text" style={{
                            borderWidth: card.style.border_width,
                            borderStyle: card.style.border_style,
                            borderColor: card.style.border_color,
                            backgroundColor: card.style.background
                        }}>
                            <p>{card.info.text}</p>
                        </div>
                        <div className="cardlist">
                            <p>by {card.user.author}</p>
                            <button>like</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};