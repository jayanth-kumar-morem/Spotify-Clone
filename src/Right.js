import React from "react"
import Banner from "./Banner";
import Header from "./Header";
import "./Right.css"
import SongsList from "./SongsList";

const Right=()=>{
    return(
        <div className="right">
            <Header />
            <Banner className="banner" title={"Better"} author={"JK"}/>
            <SongsList />
        </div>
    )
}
export default Right;