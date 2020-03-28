import React from "react";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";
import "./styles.css";

export default function Profile() {
  return (
    <div className={"profile-container"}>
      <header>
        <img src={logoImg} alt="Be the Hero" />
        <span>Welcome!</span>
        <Link className="button" to={"/incidents/new"}>
          New issue
        </Link>
        <button type={"button"}>
          <FiPower size={18} color={"#E02041"} />
        </button>
      </header>

      <h1>Current issues</h1>
      <ul>
        <li>
          <strong>Issue</strong>
          <p>Test</p>
          <strong>Description</strong>
          <p>Test</p>
          <strong>Amount:</strong>
          <p>$100</p>

          <button type={"button"}>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Issue</strong>
          <p>Test</p>
          <strong>Description</strong>
          <p>Test</p>
          <strong>Amount:</strong>
          <p>$100</p>

          <button type={"button"}>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Issue</strong>
          <p>Test</p>
          <strong>Description</strong>
          <p>Test</p>
          <strong>Amount:</strong>
          <p>$100</p>

          <button type={"button"}>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Issue</strong>
          <p>Test</p>
          <strong>Description</strong>
          <p>Test</p>
          <strong>Amount:</strong>
          <p>$100</p>

          <button type={"button"}>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
