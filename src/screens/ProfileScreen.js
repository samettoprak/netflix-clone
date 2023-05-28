import React, { useState } from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../Firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const [choice, setChoice] = useState("none");
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);

  return (
    <div className="profileScreen">
      <Nav></Nav>
      <div className="profileScreen_body">
        <h1> Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans (Current Plan: {choice})</h3>
              <div className="profileScreen_choices">
                <h4>Remowal date: {user.date}</h4>
                <div className="profileScreen_subInfo">
                  <div className="choiceBox">
                    <div className="insideChoiceBox">
                      <h5>Netflix Standard</h5>
                      <h6>1080p</h6>
                    </div>
                    <button
                      className={button1 ? "chosenButton" : ""}
                      onClick={() => {
                        setChoice("Standard");
                        setButton1(true);
                        setButton2(false);
                        setButton3(false);
                        button1 ? console.log("aynennn") : console.log("deva");
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                  <div className="choiceBox">
                    <div>
                      <h5>Netflix Basic</h5>
                      <h6>480p</h6>
                    </div>

                    <button
                      className={button2 ? "chosenButton" : ""}
                      onClick={() => {
                        setChoice("Basic");
                        setButton1(false);
                        setButton2(true);
                        setButton3(false);
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                  <div className="choiceBox">
                    <div>
                      <h5>Netflix Premium</h5>
                      <h6>4k FullHd</h6>
                    </div>

                    <button
                      className={button3 ? "chosenButton" : ""}
                      onClick={() => {
                        setChoice("Premium");
                        setButton1(false);
                        setButton2(false);
                        setButton3(true);
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              <button
                className="profileScreen_signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
