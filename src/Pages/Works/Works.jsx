import React from 'react';
import '../../Styles/Works.scss'

const Works = () => {
    return (
        <div className="works-containeer">
            <div className="block block-name">
                <h1>Works</h1>
            </div>
            <div className="block block-work-list">
                <div className="work">
                    <h2>Title</h2>
                    <h3>Subtitle</h3>
                    <button>View</button>
                </div>
                <div className="work">
                    <h2>Title</h2>
                    <h3>Subtitle</h3>
                    <button>View</button>
                </div>
                <div className="work">
                    <h2>Title</h2>
                    <h3>Subtitle</h3>
                    <button>View</button>
                </div>
            </div>
        </div>
    );
}

export default Works;
