import React, { useEffect, useState } from "react";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import logoImg from "../../assets/logo.svg";

import api from "../../services/api";
import "./styles.css";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();
  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        console.log("response", response);
        setIncidents(response.data);
      });
  }, [ongId]);

  const handleDeleteIncident = async id => {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className={"profile-container"}>
      <header>
        <img src={logoImg} alt="Be the Hero" />
        <span>Welcome, {ongName}</span>
        <Link className="button" to={"/incidents/new"}>
          New issue
        </Link>
        <button onClick={handleLogout} type={"button"}>
          <FiPower size={18} color={"#E02041"} />
        </button>
      </header>

      <h1>Current issues</h1>
      <ul>
        {incidents.map(incident => {
          const { id, title, description, value } = incident;
          return (
            <li key={id}>
              <strong>Issue</strong>
              <p>{title}</p>
              <strong>Description</strong>
              <p>{description}</p>
              <strong>Amount:</strong>
              <p>
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD"
                }).format(value)}
              </p>

              <button type={"button"} onClick={() => handleDeleteIncident(id)}>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
