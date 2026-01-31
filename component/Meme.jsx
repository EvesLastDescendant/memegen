import React, {useState, useEffect} from "react"

export default function Form() {
    const [memesData, setMemesData] = useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })
    
    function getRandMemeImg() {
        const randNum = Math.floor(Math.random() * allMemesData.length)
        const url = allMemesData[randNum].url
        setMemesData(prevMemeData => ({
            ...prevMemeData,
            randomImg: url
        }))
        
    }
    
    const [allMemesData, setAllMemesData] = useState([])
    
    function handleInputEvent() {
        const {name, value} = event.target
        setMemesData(prevMemesData => {
            return {
                ...prevMemesData,
                [name]: value
            }
        })
    }
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json()) 
            .then(data => setAllMemesData(data.data.memes))
    }, [])
    
    return(
        <main className="form-box">
            <div className="form">
                <span>
                    <input 
                        type="text" 
                        placeholder="Top text"
                        name="topText"
                        value={memesData.topText}
                        onChange={handleInputEvent}
                    />
                </span>
                <span>
                    <input 
                        type="text" 
                        placeholder="Bottom text"
                        name="bottomText"
                        value={memesData.bottomText}
                        onChange={handleInputEvent}
                />
                </span>
                <br/>
                <button onClick={getRandMemeImg} className={`gen-btn`}>Get a new meme img🖼️</button>
            </div>
            <div className="meme">
                <img src= {memesData.randomImg} loading="lazy" className="meme-img"/>
                <h2 className="meme--text top">{memesData.topText}</h2>
                <h2 className="meme--text bottom">{memesData.bottomText}</h2>
            </div>
        </main>
    )
}
