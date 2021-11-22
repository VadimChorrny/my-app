import React from "react";
import "../../Styles/Index.scss";

export default function Header() {
    return (
        <div className="header_containeer">
            <div className="block block-row">
                <div class="menu-button">
                    <button>
                        <a href="#">Works</a>
                    </button>
                </div>
                <div class="menu-button">
                    <button>
                        <a href="#">Skills</a>
                    </button>
                </div>
            </div>
            <div className="block block-logo">
                <a href="#"><span>Vadim</span> Chorrny</a>
            </div>
            <div className="block block-contact">
                <div className="menu-button" id="menu-contact">
                    <div class="underline underline-head"></div>
                    <button>
                        <a href="#">Contact</a>
                    </button>
                    <div class="underline underline-down"></div>
                </div>
            </div>
        </div>
    );
}
