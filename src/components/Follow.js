import { requestUserInfo, requestAddFriend } from "./Requests"
import { useState } from "react"

export const Follow = ({token, author}) => {
    const [friendId, setFriendId] =useState(null)

const handleClick = () => {
    requestUserInfo(token, author)
        .then((res) => {setFriendId(res.data[0].id); 
            friendId && (requestAddFriend(token, friendId))})
}

return <div><button onClick={handleClick}>follow</button></div>

}