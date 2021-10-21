import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import styles from "./PasswordReset.module.scss";
export default function PasswordReset({ modalRef, open }) {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("type email to reset password");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div
      ref={modalRef}
      style={{
        display: open ? "block" : "none",
      }}
    >
      <form onSubmit={handleSubmit} className={styles.inputPasswordReset}>
        {message}

        <input type="text" required ref={emailRef} name="email" id="email" />
        <button
          className={styles.inputPasswordReset} // cos tu nie gra
          disabled={loading}
          onClick={handleSubmit}
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
