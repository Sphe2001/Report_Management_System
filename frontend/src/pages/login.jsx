import React from "react";
import "./EasyToUse.css";
import { FaPen, FaClock, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaPen className="icon" />,
    title: "Step 1",
    description: "Type a task into the text box",
  },
  {
    icon: <FaClock className="icon" />,
    title: "Step 2",
    description: "Watch NeuralTask.ai whip up an incredibly intelligent solution.",
  },
  {
    icon: <FaCheckCircle className="icon" />,
    title: "Step 3",
    description: "Complete the task and get back to your day!",
  },
];

const LoginPage = () => {
  return (
    <section className="easy-section">
      <h2 className="easy-title">
        Easy To Use <span className="highlight">!</span>
      </h2>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoginPage;
