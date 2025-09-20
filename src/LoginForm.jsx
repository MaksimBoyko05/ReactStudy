import { useState } from "react";
import "./styles/LoginForm.css";
import logo from "./loginlogo.png";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [activeButton, setActiveButton] = useState("signin");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeButton === "signup") {
      if (!confirmPassword) {
        setMessage("Будь ласка, підтвердіть пароль.");
        return;
      }
      if (password !== confirmPassword) {
        setMessage("Паролі не співпадають.");
        return;
      }
    }
    if (email && password) {
      if (activeButton === "signup") {
        setMessage("Реєстрація успішна!");
      } else {
        setMessage("Вхід успішний!");
      }
    } else {
      setMessage("Будь ласка, заповніть всі поля.");
    }
  };

  return (
    <div className="parent-container">
      <div className="formBlock">
        <img className="logo" src={logo} alt="logo" />
        <div className="formContainer">
          <div className="chooseblock">
            <div
              className={
                activeButton === "signin" ? "choose-active" : "inactive"
              }
              onClick={() => setActiveButton("signin")}
            >
              <p>Sign In</p>
            </div>
            <div
              className={
                activeButton === "signup" ? "choose-active" : "inactive"
              }
              onClick={() => setActiveButton("signup")}
            >
              <p>Sign Up</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="labelEmail">Email</label>
            <input
              className={`formInput ${emailError ? "input-error" : ""}`}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!regex.test(e.target.value)) {
                  setEmailError("Невірний формат");
                } else {
                  setEmailError("");
                }
                console.log(emailError);
              }}
            />
            {emailError && <p className="error">{emailError}</p>}
            <label className="labelPass">Password</label>
            <input
              className={`formInput ${passwordError ? "input-error" : ""}`}
              type={showPassword === true ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value.length < 8) {
                  setPasswordError("Пароль має бути від 8 символів");
                } else {
                  setPasswordError("");
                }
              }}
            ></input>
            <button
            type="button"
              onClick={() =>
                setShowPassword((prev) => (prev === false ? true : false))
              }
            >
              {showPassword === true ? "Hide" : "Show"}
            </button>
            {passwordError && <p className="error">{passwordError}</p>}
            {activeButton === "signup" && (
              <>
                <label className="labelPass">Confirm Password</label>
                <input
                  className="formInput"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </>
            )}
            <div className="buttoncontainer">
              <button
                className="sbmbutton"
                type="submit"
                disabled={
                  !email ||
                  !password ||
                  emailError ||
                  passwordError ||
                  (activeButton === "signup" && !confirmPassword)
                }
              >
                {activeButton === "signin" ? "Sign In" : "Sign Up"}
              </button>
            </div>
            {message && <p>{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
