import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import axios from "axios";
import DevCard from "./DevCard";

const DevPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8080/api/Profiles/all",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in headers
            },
          }
        );
        console.log(response.data);
        setData(response.data); // Access the data property of the response
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Calling the async function to fetch all profiles
  }, []);

  return (
    <div>
      <Nav />
      <div className="dev-list">
        {data.map((dev, index) => (
          <DevCard key={index} dev={dev} /> // Ensure each item has a unique key
        ))}
      </div>
    </div>
  );
};

export default DevPage;
