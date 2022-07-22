import "./profile.css"
import React from "react";
import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";

export default function profile(){
    return (
        <>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className="profileCoverImg" src="assets/post/3.jpeg" alt=""/>
                <img className="profileUserImg" src="assets/post/3.jpeg" alt=""/>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Niaj Mahmud Pial </h4>
                <span className="profileInfoDesc">hello </span>
            </div>
            </div>
            <div className="profileRightBottom">
          <Feed />
          <Rightbar profile/>
        </div>
        </div>
        </div>
      </>
    );
}