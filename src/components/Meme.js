import React from "react"
import memeData from "../data/memeData"
import { useState } from "react"

export default function Meme() {
    const buttonTitle = "Get a new meme"
    const [memeImage, setMemeImage] = useState("")

    function getNewMemeImg() {
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        setMemeImage(memeArray[randomNumber].url)
        console.log(memeArray[randomNumber].url)
    }

    return (
        <div className="main">
            <div className="form">
                <input
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getNewMemeImg}
                >
                    {buttonTitle}
                </button>
            </div>
            <img src={memeImage} alt="" className="meme--img" />
        </div>
    )
}