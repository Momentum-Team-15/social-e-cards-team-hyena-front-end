import { Card } from './Card'
import { Favorite } from './Favorite';

export const AllCards = (props) => {

    return (
        <section>
            <h1 className="page-title title is-4 has-text-centered">All Cards</h1>
            <div className="card-grid">
                {props.data.map((card, idx) => (
                    <div className="card" key={idx}>
                        <Card card={card}/>
                        <div className="cardlist">
                            <p>by {card.user.author}</p>
                            <Favorite />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};