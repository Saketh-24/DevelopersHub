import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CgProfile } from "react-icons/cg";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [review, setreview] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8080/api/Profiles/all/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDetails(response.data);
        const reviews = await axios.get(
          `http://localhost:8080/api/review/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setreview(reviews.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, [id]);

  return (
    <div>
      <div className="dev-logo">
        <CgProfile />
      </div>
      <h1>{details.fullname}</h1>
      <h3>{details.email}</h3>
      <div className="skills">
        {details.skills &&
          details.skills
            .split(",")
            .map((skill, index) => <span key={index}>{skill}</span>)}
      </div>
      <p>{details.description}</p>
      <div>{review}</div>
    </div>
  );
};

export default Details;
