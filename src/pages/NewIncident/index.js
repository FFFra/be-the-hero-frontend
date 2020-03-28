import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logoImg from "../../assets/logo.svg";
export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Incidents</h1>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Back to home
          </Link>
        </section>
        <form>
          <input placeholder="Title" />
          <textarea placeholder="Description" />

          <input placeholder="Investiment" />

          <button className={"button"} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
