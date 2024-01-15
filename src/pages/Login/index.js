import React, { useState } from "react";
import style from "./Login.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import Forgot from "./Forgot";
const cx = classNames.bind(style);
export default function Login() {
  const [tab, setTab] = useState(1);
  const ClickSignUp = () => {
    setTab(2);
  };
  const ForgotPass = () => {
    setTab(3);
  };
  const ClickLogin = () => {
    setTab(1);
  };

  return (
    <>
      <div className={cx("circle-step")}>
        <div className={cx("step")}>
          <div className={tab === 1 ? cx("circle-active") : cx("circle")}>
            <p>1</p>
          </div>
          <p className={cx("title")}>sign-in</p>
        </div>
        <div className={cx("step")}>
          <div className={tab === 2 ? cx("circle-active") : cx("circle")}>
            <p>2</p>
          </div>
          <p className={cx("title")}>sign-up</p>
        </div>
        <div className={cx("step")}>
          <div className={tab === 3 ? cx("circle-active") : cx("circle")}>
            <p>3</p>
          </div>
          <p className={cx("title")}>forgot password</p>
        </div>
      </div>
      {tab === 1 && (
        <div className={cx("wrapper")}>
          <p className={cx("title")}>LOGIN FORM</p>
          <div className={cx("form-login")}>
            <input type="text" name="" id="" placeholder="ENTER YOUR EMAIL" />
            <input
              type="text"
              name=""
              id=""
              placeholder="ENTER YOUR PASSWORD"
            />
          </div>
          <button className={cx("btn-login")}>LOGIN</button>
          <div>
            <p className={cx("forgot")} onClick={ForgotPass}>
              Forgot password?
            </p>
          </div>
          <p className={cx("create")} onClick={ClickSignUp}>
            You dont have accout?
          </p>
        </div>
      )}
      {tab === 2 && <Signup loginClick={ClickLogin} />}
      {tab === 3 && <Forgot ClickLogin={ClickLogin} />}
    </>
  );
}
