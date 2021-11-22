import React from "react";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
// import Content from "./Content/Content.jsx";
// import Footer from "./Footer/Footer";
// import Skills from "./Skills/Skills";
// import Works from "./Works/Works";

export default function Main(){
    return(
        <div>
            <Header/>
            <Contact />
            {/* <Works/> */}
            {/* <Content/>
            <Footer hours={120} projects={5} skills={12} other={window.screen.width}/> */}

        </div>
    )
}