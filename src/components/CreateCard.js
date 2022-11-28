import { useState } from 'react'


export const CreateCard = ({ username, data }) => {
    const [open, setOpen] = useState(null)
    const [colorOfBackground, setColorOfBackground] = useState('white')
    const [widthOfBorder, setWidthOfBorder] = useState(0)
    const [styleOfBorder, setStyleOfBorder] = useState('solid')
    const [colorOfBorder, setColorOfBorder] = useState('black')
    const [sizeOfFont, setSizeOfFont] = useState(16)
    const [familyOfFont, setFamilyOfFont] = useState('sans-serif')
    const [colorOfFont, setColorOfFont] = useState('black')
    const [textOfCard, setTextOfCard] = useState('')
    const borderThickness = widthOfBorder + 'px'
    const fontLargeness = sizeOfFont + 'px'

    let createContainer = {
        "user": {
            // "id": `${userId}`,
            "author": `${ username }`
        },
        "style": {
            "border_width": `${ borderThickness }`,
            "border_style": `${ styleOfBorder }`,
            "border_color": `${ colorOfBorder }`,
            "background": `${ colorOfBackground }`,
            "font": `${ familyOfFont }`,
            "text_color": `${ colorOfFont }`,
            "font_size": `${ fontLargeness }`
        },
        "info": {
            // "text_front": `${ frontTextOfCard }`,
            // "text_back": `${ backTextOfCard }`
        }
    }

    const handleCreate = () => {
        data.push(createContainer)
        console.log(data)
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
                                <button className="btn button" onClick={() => { setColorOfBackground('#FFFFFF'); setOpen(false) }}>white</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button is-danger" onClick={() => { setColorOfBackground('#FF3860'); setOpen(false) }}>red</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button is-info" onClick={() => { setColorOfBackground('#209CEE'); setOpen(false) }}>blue</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button is-warning" onClick={() => { setColorOfBackground('#FFDD57'); setOpen(false) }}>yellow</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button has-background-danger-light" onClick={() => { setColorOfBackground('#FEECF0'); setOpen(false) }}>pink</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button has-background-warning-light" onClick={() => { setColorOfBackground('#FFFBEB'); setOpen(false) }}>light yellow</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button has-background-info-light" onClick={() => { setColorOfBackground('#EEF6FC'); setOpen(false) }}>light blue</button>
                            </li>
                        </ul>
                    )}


                    <button className="create-option button" onClick={() => { open === 2 ? setOpen(null) : setOpen(2) }}>border width</button>
                    {open === 2 && (
                        <ul className="ulbtn box menu">
                            <input className="option-box" type="range" value={widthOfBorder} min={0} max={15}
                                onChange={e => setWidthOfBorder(e.target.value)}></input>
                        </ul>
                    )}


                    <br />
                    <button className="create-option button" onClick={() => { open === 3 ? setOpen(null) : setOpen(3) }}>border style</button>
                    {open === 3 && (
                        <ul className="ulbtn box menu">
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderStyle: 'solid' }} onClick={() => { setStyleOfBorder('solid'); setOpen(false) }}>solid</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderStyle: 'dotted' }} onClick={() => { setStyleOfBorder('dotted'); setOpen(false) }}>dotted</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderStyle: 'dashed' }} onClick={() => { setStyleOfBorder('dashed'); setOpen(false) }}>dashed</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderStyle: 'double' }} onClick={() => { setStyleOfBorder('double'); setOpen(false) }}>double</button>
                            </li>
                        </ul>
                    )}


                    <br />
                    <button className="create-option button" onClick={() => { open === 4 ? setOpen(null) : setOpen(4) }}>border color</button>
                    {open === 4 && (
                        <ul className="ulbtn box menu">
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderColor: 'black' }} onClick={() => { setColorOfBorder('black'); setOpen(false) }}>black</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderColor: '#CC0F35' }} onClick={() => { setColorOfBorder('#CC0F35'); setOpen(false) }}>dark red</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderColor: '#1D72AA' }} onClick={() => { setColorOfBorder('#1D72AA'); setOpen(false) }}>dark blue</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ borderWidth: '4px', borderColor: '#947600' }} onClick={() => { setColorOfBorder('#947600'); setOpen(false) }}>dark yellow</button>
                            </li>
                        </ul>
                    )}


                    <br />
                    <button className="create-option button" onClick={() => { open === 5 ? setOpen(null) : setOpen(5) }}>text size</button>
                    {open === 5 && (
                        <ul className="ulbtn box menu">
                            <input className="option-box" type="range" value={sizeOfFont} min={16} max={48}
                                onChange={e => setSizeOfFont(e.target.value)}></input>
                        </ul>
                    )}


                    <br />
                    <button className="create-option button" onClick={() => { open === 6 ? setOpen(null) : setOpen(6) }}>text family</button>
                    {open === 6 && (
                        <ul className="ulbtn box menu">
                            <li className="menu-item">
                                <button className="btn button" style={{ fontFamily: 'sans-serif' }} onClick={() => { setFamilyOfFont('sans-serif'); setOpen(false) }}>sans-serif</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ fontFamily: 'serif' }} onClick={() => { setFamilyOfFont('serif'); setOpen(false) }}>serif</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ fontFamily: 'monospace' }} onClick={() => { setFamilyOfFont('monospace'); setOpen(false) }}>monospace</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ fontFamily: 'cursive' }} onClick={() => { setFamilyOfFont('cursive'); setOpen(false) }}>cursive</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ fontFamily: 'fantasy' }} onClick={() => { setFamilyOfFont('fantasy'); setOpen(false) }}>fantasy</button>
                            </li>
                        </ul>
                    )}


                    <br />
                    <button className="create-option button" onClick={() => { open === 7 ? setOpen(null) : setOpen(7) }}>text color</button>
                    {open === 7 && (
                        <ul className="ulbtn box menu">
                            <li className="menu-item">
                                <button className="btn button" onClick={() => { setColorOfFont('black'); setOpen(false) }}>black</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" onClick={() => { setColorOfFont('white'); setOpen(false) }}>white</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ color: '#CC0F35' }} onClick={() => { setColorOfFont('#CC0F35'); setOpen(false) }}>dark red</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ color: '#1D72AA' }} onClick={() => { setColorOfFont('#1D72AA'); setOpen(false) }}>dark blue</button>
                            </li>
                            <li className="menu-item">
                                <button className="btn button" style={{ color: '#947600' }} onClick={() => { setColorOfFont('#947600'); setOpen(false) }}>dark yellow</button>
                            </li>
                        </ul>
                    )}


                    <br />
                    <input className="text-box" type='text' value={textOfCard}
                        onChange={e => setTextOfCard(e.target.value)}></input>
                </div>


                <div className="create-columns box">
                    <div className="created-card" style={{
                        background: colorOfBackground,
                        borderWidth: borderThickness, borderStyle: styleOfBorder, borderColor: colorOfBorder
                    }}>
                        <p style={{
                            fontSize: fontLargeness, textAlign: 'center', fontFamily: familyOfFont, color: colorOfFont,
                            padding: '10px'
                        }}>{textOfCard}</p>
                    </div>
                </div>


            </div>
            <button onClick={handleCreate}>Create</button>

        </section>
    )
}