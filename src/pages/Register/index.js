import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Register</h1>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Back
          </Link>
        </section>
        <form>
          <input placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input placeholder="WhatsApp" />

          <div className="input-group">
            <input placeholder="City" />
            <input placeholder="State" style={{ width: 100 }} />
          </div>

          <button className={"button"} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
