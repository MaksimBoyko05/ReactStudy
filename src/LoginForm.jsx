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
  const [isFocused, setIsFocused] = useState({ email: false, password: false });
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
        <div className="logoDiv">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <h1 className="LogoText">Lysto</h1>
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
            <div
              className={`input-group ${
                email || isFocused.email ? "active" : ""
              }`}
            >
              <label className="labelEmail">Email</label>
              <input
                className={`formInput ${
                  !isFocused.email && emailError ? "input-error" : ""
                }`}
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onFocus={() => {
                  setIsFocused({ ...isFocused, email: true });
                }}
                onBlur={() => {
                  setIsFocused({ ...isFocused, email: false });
                  if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    setEmailError("Невірний формат");
                  } else {
                    setEmailError("");
                  }
                }}
              />
              {!isFocused.email && emailError && email && (
                <p className="error">{emailError}</p>
              )}
            </div>
            <div
              className={`input-group ${
                password || isFocused.password ? "active" : ""
              }`}
            >
              <label className="labelPass">Password</label>
              <input
                className={`formInput ${
                  !isFocused.password && passwordError ? "input-error" : ""
                }`}
                type={showPassword === true ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onFocus={() => setIsFocused({ ...isFocused, password: true })}
                onBlur={() => {
                  setIsFocused({ ...isFocused, password: false });
                  if (password && password.length < 8) {
                    setPasswordError("Пароль має бути від 8 символів");
                  } else {
                    setPasswordError("");
                  }
                }}
              ></input>
            </div>
            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => (prev === false ? true : false))
              }
            >
              {showPassword === true ? "Hide" : "Show"}
            </button>
            {!isFocused.password && passwordError && password && (
              <p className="error">{passwordError}</p>
            )}

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
