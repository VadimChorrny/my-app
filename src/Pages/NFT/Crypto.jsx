import React from 'react'
import '../../Styles/Crypto.scss'

export default function Crypto() {
    return (
            <div className="nfc-containeer">
            <div className="block block-name">
                <h1>NFT</h1>
            </div>
            <div className="block block-work-list">
                <div className="token" id="first">
                    <h2>Title</h2>
                    <h3>Subtitle</h3>
                    <button>View</button>
                </div>
                <div className="token" id="second">
                    <h2>Title</h2>
                    <h3>Subtitle</h3>
                    <button>View</button>
                </div>
                <div className="token" id="third">
                    <h2>Title</h2>
                    <h3>Subtitle</h3>
                    <button>View</button>
                </div>
            </div>
        </div>
    )
}
