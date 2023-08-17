import React, { useState } from "react";
import "./App.css";
import "./styles.css";
import logo from "./components/Images/Group 11.png";
import item1 from "./components/Images/Group 8.png";
import item2 from "./components/Images/Group 7.png";
import item3 from "./components/Images/Group 6.png";
import item4 from "./components/Images/Group 5.png";
import item5 from "./components/Images/Group 18.png";
import item6 from "./components/Images/Group 19.png";
import item7 from "./components/Images/Group 20.png";
import item8 from "./components/Images/Group 17.png";
import menu from "./components/Images/menu.png";
import search from "./components/Images/Group 10.png";
import drop from "./components/Images/Group 9.png";
import img1 from "./components/Images/Group 14.png";
import img2 from "./components/Images/Group 15.png";
import img3 from "./components/Images/Group 16.png";
import searchicon from "./components/Images/material-symbols_search.png"
import home from "./components/Images/home.png"
import downArrow from "./components/Images/chevron-down.png"


function App() {
  const [dropDown,setDropDown]=useState(false)
  const handleDropDown=()=>{
    setDropDown(!dropDown)
  }
  return (
    <div className="App">
      {/* <div className="screen"> */}
      <div className="nav">
        <div className="logo" style={{ height: "250px" }}>
          <img src={logo} />
        </div>
        <div className="nav-item first-nav" >
          <img src={item1} />
        </div>
        <div className="nav-item">
          <img src={item2} />
        </div>{" "}
        <div className="nav-item">
          <img src={item3} />
        </div>{" "}
        <div className="nav-item">
          <img src={item4} />
        </div>{" "}
        <div className="nav-item">
          <img src={item5} />
        </div>{" "}
        <div className="nav-item">
          <img src={item6} />
        </div>{" "}
        <div className="nav-item">
          <img src={item7} />
        </div>{" "}
        <div className="nav-item">
          <img src={item8} />
        </div>
      </div>
      <div className="main">
        <div className="header">
          <div>
            <img src={menu} />
          </div>
          <div style={{ display: "flex", gap: "30px", alignItems: "center",padding:"20px" }}>
            <div style={{ display:"flex", background:"white",height:"40px",width:"300px"}}>
              
              <img style={{width:"10%"}}src={searchicon}/>
              <input style={{color:"#9E9E9E",fontSize:"14px",borderRadius:"5px"}} type="text" placeholder="search"/>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
              <img src={home} />
              <span>Shivaji</span>
              <img src={downArrow} onClick={handleDropDown}/>
              {dropDown && <div className="drop-menu">
                <ul style={{listStyleType:"none"}}>
                  <li>one</li>
                  <li>two</li>
                  <li>three</li>
                </ul>
                </div>}
              
            </div>
          </div>
        </div>

        <h1
          style={{
            textAlign: "start",
            fontSize: "40px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "500",
          }}
        >
          Dashboard
        </h1>
        <div className="dashboard">
          <div className="dashboard-item">
            <div>
              <img src={img1} />
            </div>
          </div>
          <div className="dashboard-item">
            <div>
              <img src={img2} />
            </div>
          </div>

          <div className="dashboard-item">
            <div>
              <img src={img3} />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
