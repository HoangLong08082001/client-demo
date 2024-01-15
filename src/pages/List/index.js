import React, { useEffect, useState } from "react";
import style from "./List.module.scss";
import classNames from "classnames/bind";
import moment from "moment";
import axios from "axios";
const cx = classNames.bind(style);
export default function List() {
  const [list, setList] = useState([]);
  const [listsp, setListSanPham] = useState([]);
  const [ngaybatdau, setNgayBatDau] = useState([]);
  const [ngayketthuc, setNgayKetThuc] = useState("");
  const [day, setDay] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const fetch = () => {
    axios.get("http://localhost:3300/giam-gia/doc").then((res) => {
      if (res.data.message === "ok") {
        setList(res.data.data);
      }
    });
  };
  const fetchSanPham = () => {
    axios.get("http://localhost:3300/san-pham/doc").then((res) => {
      if (res.data.message === "ok") {
        setListSanPham(res.data.data);
      }
    });
  };
  useEffect(() => {
    fetch();
    fetchSanPham();
  }, []);
  //   let date = new Date();
  //   let ngaynay = list[0].ngaybatdau;
  //   console.log(date.getDate());
  //   console.log(ngaynay.getDate());
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("list-cart")}>
          {list.map((l, i) => {
            let datestart = new Date(l.ngaybatdau).toLocaleDateString("sv-SE");
            let today = new Date().toLocaleDateString("sv-SE");
            let dateend = new Date(l.ngayketthuc).toLocaleDateString("sv-SE");
            console.log(datestart);
            console.log(dateend);
            if (datestart === today && today < dateend) {
              return (
                <div className={cx("cart")}>
                  <p>{l.ten_dotgiamgia}</p>
                  <button>XEM CHI TIET</button>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          {list.map((gg, index) => {
            let datestart = new Date(gg.ngaybatdau).toLocaleDateString("sv-SE");
            let today = new Date().toLocaleDateString("sv-SE");
            let dateend = new Date(gg.ngayketthuc).toLocaleDateString("sv-SE");
            let daystart = new Date(gg.ngaybatdau).getDate();
            let dayend = new Date(gg.ngaybatdau).getDate();
            if (datestart === today && today < dateend) {
              return <span>{gg.ten_dotgiamgia} </span>;
            }
          })}
        </div>
        <div className={cx("list-cart")}>
          {listsp.map((list, index) => {
            let datestart = new Date(list.ngaybatdau).toLocaleDateString(
              "sv-SE"
            );
            let today = new Date().toLocaleDateString("sv-SE");
            let dateend = new Date(list.ngayketthuc).toLocaleDateString(
              "sv-SE"
            );
            if (datestart === today && today < dateend) {
              return (
                <div className={cx("cart")}>
                  <p>{list.ten_sanpham}</p>
                  <p>{list.ten_dotgiamgia}</p>
                  <button>XEM CHI TIET</button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
