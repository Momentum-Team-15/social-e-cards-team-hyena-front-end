import { useState, useEffect } from 'react';
import { Card } from './Card'
import { Favorite } from './Favorite';
import axios from 'axios';

export const AllCards = ({token}) => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get('https://ecard-web-service.onrender.com/cards/', {
            headers: {
                Authorization: `Token ${token}`,
            }
        })
            .then(res => setCards(res.data))
    }, [token])

    return (
        <section>
            <h1 className="page-title title is-4 has-text-centered">All Cards</h1>
            <div className="card-grid">
                {cards.map((card, idx) => (
                    <div className="card" key={idx}>
                        <Card card={card}/>
                        <div className="cardlist">
                            <p>by {card.user}</p>
                            <Favorite />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};