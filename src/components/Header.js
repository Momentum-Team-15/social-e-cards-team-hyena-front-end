export const Header = ({setPage, setLogin}) => {
    return (
    <header className='hero is-small is-info'>
        <h1 className='hero-body title is-1 has-text-centered'>Corny Cards
            <button className='button is-pulled-right is-danger'
                onClick={() => setPage('createCard')}>Create Card</button>
        </h1>
        <div className='buttons has-addons'>
            <button className='button is-white is-outlined' 
                onClick={() => setPage('allCards')}>All cards</button>
            <button className='button is-white is-outlined'
                onClick={() => setPage('myCards')}>My cards</button>
            <button className='button is-white is-outlined'
                onClick={() => setPage('friends')}>Friends</button>
            <button className='button is-white is-outlined'
                onClick={() => {setLogin(null); setPage('')}}>Logout</button>
        </div>
    </header >
    )
}