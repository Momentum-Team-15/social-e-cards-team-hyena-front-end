import { useState, useEffect } from 'react';
import { Card } from './Card'
import { Favorite } from './Favorite';
import { requestAllCards } from './Requests';
import { Delete } from './Delete';

export const AllCards = ({ token, username }) => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        requestAllCards(token)
            .then(res => setCards(res.data))
    }, [token])

    return (
        <section>
            <h1 className="page-title title is-4 has-text-centered">All Cards</h1>
            <div className="card-grid">
                {cards.map((card, idx) => (
                    <div className="card" key={idx}>
                        <Card token={token} card={card} username={username} />
                        <div className="cardlist">
                            <p>by {card.user}</p>
                            {username === card.user ? (<Delete token={token} cardId={card.id} />):(null)}
                            <Favorite />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};