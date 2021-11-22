import React, { useState } from 'react'
import '../../Styles/Contact.scss'

const Contact = () => {
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipBoard = async copyMe => {
        try {
          await navigator.clipboard.writeText(copyMe);
          setCopySuccess('Copied!');
        }
        catch (err) {
          setCopySuccess('Failed to copy!');
        }
    };

    return (
        <div className="contact-containeer">
            <div className="block block-name">
                <h1>Contact</h1>
            </div>
            <div className="block block-contact-list">
                <div className="contact">
                    <button onClick={() => copyToClipBoard('chorrny228@gmail.com')}>Gmail</button>
                </div>
                <div className="contact">
                    <button onClick={() => copyToClipBoard('https://github.com/VadimChorrny')}>GitHub</button>
                </div>
                <div className="contact">
                    <button onClick={() => copyToClipBoard('https://www.linkedin.com/in/vadim-chorniy-3a066a1b7/')}>Linkedin</button>
                </div> 
            </div>
        </div>
    )
}

export default Contact