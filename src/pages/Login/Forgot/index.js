import React, { useState } from "react";
import style from "./Forgot.module.scss";
import classNames from "classnames/bind";
import axios from "axios";
const cx = classNames.bind(style);
export default function Forgot({ ClickLogin }) {
  const [email, setEmail] = useState("");
  const sendEmail = async () => {
    await axios
      .post("http://localhost:3300/account/send-email", { email })
      .then((res) => {
        if (res) {
        }
      });
  };
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>FORGOT PASSWORD</p>
      <div className={cx("form-login")}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="ENTER YOUR EMAIL"
        />
      </div>
      <button className={cx("btn-login")} onClick={sendEmail}>
        SEND MAIL
      </button>
      <p className={cx("create")} onClick={ClickLogin}>
        Login here.
      </p>
    </div>
  );
}
