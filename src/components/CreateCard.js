import {useState} from 'react'

export const CreateCard = () => {
    const [open, setOpen] = useState(null)
    let [background, setBackground] = useState('white')
    let [borderThickness, setBorderThickness] = useState('0px')


    return (
        <section>
            <h1 className="title is-4 has-text-centered">Create a Card</h1>
            <div className="coulmns is-flex is-justify-content-space-between">
                <div className="column is-4 is-offset-1 box">

                <div className="dropdown">
                <button className="button" onClick={()=>{ open === 1 ? setOpen(null) : setOpen(1)}}>border thickness</button>
                {open === 1 && (
                <ul className=" ulbtn box menu">
                    <li className="menu-item">
                        <button className="btn button" onClick={()=>{setBorderThickness('0px'); setOpen(false)}}>0</button>
                    </li>
                    <li className="menu-item">
                        <button className="btn button" onClick={()=>{setBorderThickness('1px'); setOpen(false)}}>1</button>
                    </li>
                    <li className="menu-item">
                        <button className="btn button" onClick={()=>{setBorderThickness('3px'); setOpen(false)}}>3</button>
                    </li>
                    <li className="menu-item">
                        <button className="btn button" onClick={()=>{setBorderThickness('5px'); setOpen(false)}}>5</button>
                    </li>
                    <li className="menu-item">
                        <button className="btn button" onClick={()=>{setBorderThickness('7px'); setOpen(false)}}>7</button>
                    </li>
                </ul>
                )}
                </div>
                <br/>
                <button className="button" onClick={()=>{ open === 2 ? setOpen(null) : setOpen(2)}}>background color</button>
                {open === 2  && (
                <ul className="ulbtn box menu">
                    <li className="menu-item">
                        <button className="btn button" onClick={()=>{setBackground('#FFFFFF'); setOpen(false)}}>white</button>
                    </li>
                    <li className="menu-item">
                        <button className="btn button is-danger" onClick={()=>{setBackground('#FF3860'); setOpen(false)}}>red</button>
                    </li>
                    <li className="menu-item">
                        <button className="btn button is-info" onClick={()=>{setBackground('#209CEE'); setOpen(false)}}>blue</button>
                    </li>
                    <li className="menu-item">
                        <button className="btn button is-warning" onClick={()=>{setBackground('#FFDD57'); setOpen(false)}}>yellow</button>
                    </li> 
                    <li className="menu-item">
                        <button className="btn button has-background-danger-light" onClick={()=>{setBackground('#FEECF0'); setOpen(false)}}>pink</button>
                    </li>
                    <li className="menu-item">
                        <button className="btn button has-background-warning-light" onClick={()=>{setBackground('#FFFBEB'); setOpen(false)}}>light yellow</button>
                    </li>
                    <li className="menu-item">
                        <button className="btn button has-background-info-light" onClick={()=>{setBackground('#EEF6FC'); setOpen(false)}}>light blue</button>
                    </li>
                </ul>
                )}
                </div>


                




                <div className="box">
                    <div className="created-card" style={{background: background, 
                        borderWidth: borderThickness, borderStyle: 'solid', borderColor: 'black'}}> 
                </div>
                </div>

   
            </div>


        </section>
    )
}