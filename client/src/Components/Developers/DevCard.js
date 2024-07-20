import React from "react";
import { CgProfile } from "react-icons/cg";
import "./DevCard.css";
import { useNavigate } from "react-router-dom";

const DevCard = ({ dev }) => {
  const navigate = useNavigate();

  const handleProfile = (id) => {
    navigate(`/devPage/${id}`);
  };

  return (
    <div>
      <div className="dev-card">
        <div className="dev-logo">
          <CgProfile />
        </div>
        <div className="dev-details">
          <h1>{dev.fullname}</h1>
          <h3>{dev.email}</h3>
          <button
            onClick={() => {
              handleProfile(dev._id);
            }}
            className="viewProfile-btn"
          >
            View Profile
          </button>
        </div>
        <div className="skills">
          {dev.skills.split(",").map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevCard;
