import React, { useState } from "react";

export default function Test() {
    const [toggle, setToggle] = useState("1")
    const [button, setButton] = useState(true)
    
    function renderText() {
        if(toggle === "1") {
            return <h5>Alvin Valentino</h5>
        } else if(toggle === "2") {
            return <h5>Josevien Wen</h5>
        } else if(toggle === "3") {
            return <h5>Ricky Valentino</h5>
        } else if(toggle === "4") {
            return <h5>Samuel Daslim</h5>
        }
    }

    function renderButton() {
        return (
            <div>
                <button className={toggle === "1" ? "px-5 bg-black text-white" : "px-5"} onClick={() => {setToggle("1")}}>Alvin</button>
                <button className={toggle === "2" ? "px-5 bg-black text-white" : "px-5"} onClick={() => {setToggle("2")}}>Josevien</button>
                <button className={toggle === "3" ? "px-5 bg-black text-white" : "px-5"} onClick={() => {setToggle("3")}}>Ricky</button>
            </div>
        )
    }

    return (
        <div className="flex flex-row">
            {toggle === "4" && button === true ? setToggle("1") : null}
            <div className="mx-auto">
                {button ? 
                    renderButton()
                :
                    <div className="flex flex-row">
                        {renderButton()}
                        <button className={toggle === "4" ? "px-5 bg-black text-white" : "px-5"} onClick={() => {setToggle("4")}}>Samuel</button>
                    </div>
                }
                {renderText()}
            </div>

            <div className="mr-10">
                <button className={button ? "px-5 bg-black text-white" : "px-5"} onClick={() => {setButton(true)}}>Buy</button>
                <button className={button ? "px-5" : "px-5 bg-black text-white"} onClick={() => {setButton(false)}}>Sell</button>
            </div>
        </div>
    )
}