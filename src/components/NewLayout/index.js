import React from "react";
import style from "./NewLayout.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
export default function NewLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("menu")}>
        <Link to="/form" className={cx("link")}>
          <p>Form</p>
        </Link>
        <Link to="/list" className={cx("link")}>
          <p>Danh sach</p>
        </Link>
        <Link to="/display" className={cx("link")}>
          <p>Hien thi</p>
        </Link>
      </div>
      <div className={cx("container")}>{children}</div>
    </div>
  );
}
