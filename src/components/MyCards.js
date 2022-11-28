import axios from 'axios'
import {useEffect, useState} from 'react'
import { Card } from './Card'
import { Favorite } from './Favorite';

export const MyCards = ({data, username, token}) => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get('https://hyena-ecards.onrender.com/ecard/', {
            headers: {
                Authorization: `Token ${token}`,
            }
        })
        .then(res => setCards(res.data))
    }, [token])

    console.log(cards)

    return(
        <div>
            <h1 className="page-title title is-4 has-text-centered">My Cards</h1>
            <div className="card-grid">
            {data.map((card, idx) => (
                <div key={idx}>
                {username === card.user.author && (
                <div className="card">
                
                        <Card card={card}/>
                        <div className="cardlist">
                            <p>by {card.user.author}</p>
                            <Favorite />
                        </div>
                    </div>
                        )}
                </div>
                ))}

                <div>

                        <div className="card-grid">
                            {cards.map((card, idx) => (
                                <div key={idx}>
                                    {username === card.owner && (
                                    <div className="card">
                                        <p>{card.back_message}</p>
                                    </div>
                                    )}
                                </div>
                            ))}
                        </div>

                </div>

            </div>
        </div>
    )
}