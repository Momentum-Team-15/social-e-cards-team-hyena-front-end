import { Card } from './Card'

export const AllCards = (props) => {

    return (
        <section>
            <h1 className="page-title title is-4 has-text-centered">All Cards</h1>
            <div className="card-grid">
                {props.data.map((card) => (
                    <div className="card">
                        <Card card={card}/>
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