import React from "react";
import "../../Styles/Index.scss";

export default function Header() {
    return (
        <div className="header_containeer">
            <div className="block block-row">
                <div class="menu-button">
                    <button>
                        <p>Works</p>
                    </button>
                </div>
                <div class="menu-button">
                    <button>
                        <p>Skills</p>
                    </button>
                </div>
            </div>
            <div className="block block-logo">
                <span>Vadim</span> Chorrny
            </div>
            <div className="block block-contact">
                <div className="menu-button" id="menu-contact">
                    <div class="underline underline-head"></div>
                    <button>
                        <p>Contact</p>
                    </button>
                    <div class="underline underline-down"></div>
                </div>
            </div>
        </div>
    );
}
