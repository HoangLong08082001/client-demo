import React, { useState } from "react";
import style from "./Form.module.scss";
import classNames from "classnames/bind";
import FormSanPham from "./FormSanPham";
import FormGiamGiaTuDong from "./FormGiamGiaTuDong";
import FormGiamGiaThem from "./FormGiamGiaThem";
const cx = classNames.bind(style);
export default function Form() {
  const links = [
    { name: "San pham", component: FormSanPham },
    { name: "Giam Gia Tu Dong", component: FormGiamGiaTuDong },
    { name: "Giam Gia Them", component: FormGiamGiaThem },
  ];
  const [toggle, setToogle] = useState(0);
  const handleTab = (i) => {
    setToogle(i);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("tab-pannel")}>
        {links.map((l, i) => {
          return (
            <button
              onClick={() => handleTab(i)}
              className={toggle === i ? cx("active") : null}
            >
              {l.name}
            </button>
          );
        })}
      </div>
      <div className={cx("form")}>
        {links.map((link, index) => {
          let Component = link.component;
          if (toggle === index) {
            return <Component />;
          }
        })}
      </div>
    </div>
  );
}
