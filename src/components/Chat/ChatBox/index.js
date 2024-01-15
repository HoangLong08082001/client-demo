import React from "react";
import style from "./ChatBox.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
export default function ChatBox() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("box")}>
        <p className={cx("server")}>Hello, what i can help you?</p>
        <p className={cx("me")}>Hello</p>
      </div>
      <div className={cx("input-send")}>
        <input type="text" placeholder="enter your question" />
        <button className={cx("send")}>SEND</button>
      </div>
    </div>
  );
}
