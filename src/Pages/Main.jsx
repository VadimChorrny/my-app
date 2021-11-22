import React from "react";
import Header from "./Header/Header";
// import Content from "./Content/Content.jsx";
// import Footer from "./Footer/Footer";
import Skills from "./Skills/Skills";

export default function Main(){
    return(
        <div>
            <Header/>
            <Skills />
            {/* <Content/>
            <Footer hours={120} projects={5} skills={12} other={window.screen.width}/> */}
        </div>
    )
}