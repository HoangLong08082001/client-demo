import React, { useState } from "react";
import style from "./Signup.module.scss";
import classNames from "classnames/bind";
import axios from "axios";
const cx = classNames.bind(style);
export default function Signup({ loginClick }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const register = async () => {
    await axios
      .post("http://localhost:3300/account/register", { username, password })
      .then((res) => {
        if (res && res.message === "exists") {
          setAlert("EMAIL DA TON TAI");
        }
        if (res && res.message === "success") {
          setAlert("TAO TAI KHOAN THANH CONG");
        }
      });
  };
  return (
    <div className={cx("wrapper")}>
      <p className={cx("alert")}>{alert}</p>
      <p className={cx("title")}>SIGNUP FORM</p>
      <div className={cx("form-login")}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="email"
          name=""
          id=""
          placeholder="ENTER YOUR EMAIL"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="ENTER YOUR PASSWORD"
        />
      </div>
      <button className={cx("btn-login")} onClick={register}>
        CREATE
      </button>
      <p className={cx("create")} onClick={loginClick}>
        Login here.
      </p>
    </div>
  );
}
