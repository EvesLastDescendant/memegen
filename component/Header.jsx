import React from "react"
import troll from "../troll.png"

export default function Header() {
    return(
        <nav>
            <img src={troll} alt="troll" loading="lazy" className="troll"/>
            <p className="name">Meme Generator</p>
            <p>React Course - Project 3</p>
        </nav>
    )
}