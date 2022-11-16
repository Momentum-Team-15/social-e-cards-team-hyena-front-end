export const Header = () => {
    return (
    <header className='hero is-small is-info'>
        <h1 className='hero-body title is-1 has-text-centered'>Corny Cards
            <button className='button is-pulled-right is-danger'>Create Card</button>
        </h1>
        <div className='buttons has-addons'>
            <button className='button is-white is-outlined'>All cards</button>
            <button className='button is-white is-outlined'>My cards</button>
            <button className='button is-white is-outlined'>Friends</button>
            <button className='button is-white is-outlined'>Account</button>
        </div>
    </header >
    )
}