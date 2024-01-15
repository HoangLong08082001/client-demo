import React from "react";
import style from "./Modal.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
export default function Modal({ title, yes, no, handleNo, handleYes }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("alert")}>
        <p className={cx("title")}>{title}</p>
        <div className={cx("btn")}>
          <button className={cx("no")} onClick={handleNo}>
            no
          </button>
          <button className={cx("yes")} onClick={handleYes}>
            yes
          </button>
        </div>
      </div>
    </div>
  );
}
