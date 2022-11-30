import { useState } from 'react'


export const CreateCard = ({ username, data }) => {
    const [open, setOpen] = useState(null)
    const [colorOfBackground, setColorOfBackground] = useState('WHITE')
    const [styleOfBorder, setStyleOfBorder] = useState('SOLID')
    const [colorOfBorder, setColorOfBorder] = useState('BLACK')
    const [familyOfFont, setFamilyOfFont] = useState('ARIAL')
    const [colorOfFont, setColorOfFont] = useState('BLACK')
    const [frontTextOfCard, setFrontTextOfCard] = useState('')
    const [backTextOfCard, setBackTextOfCard] = useState('')

    let createContainer = {
        "user": {
            "author": `${ username }`
        },
        "style": {
            "border_style": `${ styleOfBorder }`,
            "border_color": `${ colorOfBorder }`,
            "background": `${ colorOfBackground }`,
            "font": `${ familyOfFont }`,
            "text_color": `${ colorOfFont }`,
        },
        "info": {
            "text_front": `${ frontTextOfCard }`,
            "text_back": `${ backTextOfCard }`
        }
    }

    const handleCreate = () => {
        data.push(createContainer)

        setColorOfBackground('white')
        setStyleOfBorder('solid')
        setColorOfBorder('black')
        setFamilyOfFont('sans-serif')
        setColorOfFont('black')
        setFrontTextOfCard('')
        setBackTextOfCard('')

    }


    return (
        <section>
            <h1 className="page-title title is-4 has-text-centered">Create a Card</h1>
            <div className="columns is-flex is-justify-content-space-around">
                <div className="create-columns column is-3 box has-text-centered">


                    <button className="create-option button" onClick={() => { open === 1 ? setOpen(null) : setOpen(1) }}>background color</button>
                    {open === 1 && (
                        <ul className="ulbtn box menu">
                            <li className="menu-item">
                                <button className="btn button" style={{ background: 'snow' }} onClick={() => { setColorOfBackground('WHITE'); setOpen(false) }}>white</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ background: 'red', color: 'white'  }} onClick={() => { setColorOfBackground('RED'); setOpen(false) }}>red</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ background: 'blue', color: 'white'  }} onClick={() => { setColorOfBackground('BLUE'); setOpen(false) }}>blue</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ background: 'yellow' }} onClick={() => { setColorOfBackground('YELLOW'); setOpen(false) }}>yellow</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ background: 'orange' }} onClick={() => { setColorOfBackground('ORANGE'); setOpen(false) }}>orange</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ background: 'green', color: 'white'  }} onClick={() => { setColorOfBackground('GREEN'); setOpen(false) }}>green</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ background: 'purple', color: 'white'  }} onClick={() => { setColorOfBackground('PURPLE'); setOpen(false) }}>purple</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ background: 'black', color: 'white' }} onClick={() => { setColorOfBackground('BLACK'); setOpen(false) }}>black</button>
                            </li>
                        </ul>
                    )}

                    <br />
                    <button className="create-option button" onClick={() => { open === 3 ? setOpen(null) : setOpen(3) }}>border style</button>
                    {open === 3 && (
                        <ul className="ulbtn box menu">
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderStyle: 'solid' }} onClick={() => { setStyleOfBorder('SOLID'); setOpen(false) }}>solid</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderStyle: 'dotted' }} onClick={() => { setStyleOfBorder('DOTTED'); setOpen(false) }}>dotted</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderStyle: 'groove' }} onClick={() => { setStyleOfBorder('GROOVE'); setOpen(false) }}>groove</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderStyle: 'double' }} onClick={() => { setStyleOfBorder('DOUBLE'); setOpen(false) }}>double</button>
                            </li>
                        </ul>
                    )}


                    <br />
                    <button className="create-option button" onClick={() => { open === 4 ? setOpen(null) : setOpen(4) }}>border color</button>
                    {open === 4 && (
                        <ul className="ulbtn box menu">
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderColor: 'snow' }} onClick={() => { setColorOfBorder('WHITE'); setOpen(false) }}>white</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderColor: 'red' }} onClick={() => { setColorOfBorder('RED'); setOpen(false) }}>red</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderColor: 'blue' }} onClick={() => { setColorOfBorder('BLUE'); setOpen(false) }}>blue</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderColor: 'yellow' }} onClick={() => { setColorOfBorder('YELLOW'); setOpen(false) }}>yellow</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderColor: 'orange' }} onClick={() => { setColorOfBorder('ORANGE'); setOpen(false) }}>orange</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderColor: 'green' }} onClick={() => { setColorOfBorder('GREEN'); setOpen(false) }}>green</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderColor: 'purple' }} onClick={() => { setColorOfBorder('PURPLE'); setOpen(false) }}>purple</button>
                            </li>
                                                        <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderColor: 'black' }} onClick={() => { setColorOfBorder('BLACK'); setOpen(false) }}>black</button>
                            </li>
                        </ul>
                    )}

                    <br />
                    <button className="create-option button" onClick={() => { open === 6 ? setOpen(null) : setOpen(6) }}>text family</button>
                    {open === 6 && (
                        <ul className="ulbtn box menu">
                            <li className="menu-item">
                                <button className="btn button" style={{ fontFamily: 'ubuntu' }} onClick={() => { setFamilyOfFont('UBUNTU'); setOpen(false) }}>ubuntu</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ fontFamily: 'arial' }} onClick={() => { setFamilyOfFont('ARIAL'); setOpen(false) }}>arial</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ fontFamily: 'merriweather' }} onClick={() => { setFamilyOfFont('MERRIWEATHER'); setOpen(false) }}>merriweather</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ fontFamily: 'raleway' }} onClick={() => { setFamilyOfFont('RALEWAY'); setOpen(false) }}>raleway</button>
                            </li>
                        </ul>
                    )}


                    <br />
                    <button className="create-option button" onClick={() => { open === 7 ? setOpen(null) : setOpen(7) }}>text color</button>
                    {open === 7 && (
                        <ul className="ulbtn box menu">
                            <li className="menu-item">
                                <button className="btn button" onClick={() => { setColorOfFont('WHITE'); setOpen(false) }}>white</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ color: 'red' }} onClick={() => { setColorOfFont('RED'); setOpen(false) }}>red</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ color: 'blue' }} onClick={() => { setColorOfFont('BLUE'); setOpen(false) }}>blue</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ color: 'yellow' }} onClick={() => { setColorOfFont('YELLOW'); setOpen(false) }}>yellow</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ color: 'orange' }} onClick={() => { setColorOfFont('ORANGE'); setOpen(false) }}>orange</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ color: 'green' }} onClick={() => { setColorOfFont('GREEN'); setOpen(false) }}>green</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ color: 'purple' }} onClick={() => { setColorOfFont('PURPLE'); setOpen(false) }}>purple</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ color: 'black' }} onClick={() => { setColorOfFont('BLACK'); setOpen(false) }}>black</button>
                            </li>
                        </ul>
                    )}


                    <br />
                    <p>front text</p>
                    <input className="text-box" type='text' value={frontTextOfCard}
                        onChange={e => setFrontTextOfCard(e.target.value)}></input>
                    <p>back text</p>
                    <input className="text-box" type='text' value={backTextOfCard}
                        onChange={e => setBackTextOfCard(e.target.value)}></input>

                    <br /> <br/>              
                    <button className="button is-info is-medium" onClick={handleCreate}>Create</button>
                </div>


                <div className="created-card box">
                <div className="flipping-card">
                    <div className="card-front" style={{
                        background: colorOfBackground,
                        borderStyle: styleOfBorder, borderColor: colorOfBorder
                    }}>
                        <p style={{
                            textAlign: 'center', fontFamily: familyOfFont, color: colorOfFont,
                            padding: '10px'
                        }}>{frontTextOfCard}</p>
                    </div>
                    <div className="card-back" style={{
                        background: colorOfBackground,
                        borderStyle: styleOfBorder, borderColor: colorOfBorder
                    }}>
                        <p style={{
                            textAlign: 'center', fontFamily: familyOfFont, color: colorOfFont,
                            padding: '10px'
                        }}>{backTextOfCard}</p>

                    </div>
                </div>
                </div>


            </div>

        </section>
    )
}