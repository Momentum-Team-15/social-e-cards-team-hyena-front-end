
export const AllCards = (props) => {

    return (
        <section>
            <h1>All Cards</h1>
        <div className="card-grid">
            {props.data.map((card) => (
            <div className="card">
            <div className={`has-background-${card.style.background}`}>
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