import { requestDeleteCard } from "./Requests"

export const Delete = ({ token, cardId }) => {


    const deleteCard = () => {
        requestDeleteCard(token, cardId)
    }

    return (
        <button onClick={deleteCard} className="button is-small is-danger">DELETE</button>
    )
}