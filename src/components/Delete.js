import { requestDeleteCard } from "./Requests"


export const Delete = ({ token, cardId }) => {

    return (
        <button onClick={() => requestDeleteCard(token, cardId)} className="button is-small is-danger">DELETE</button>
    )
}