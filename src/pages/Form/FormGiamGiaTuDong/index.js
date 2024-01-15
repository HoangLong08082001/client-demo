import React, { useEffect, useState } from "react";
import style from "./FormGiamGiaTuDong.module.scss";
import classNames from "classnames/bind";
import Modal from "../../../components/Modal";
import axios from "axios";
const cx = classNames.bind(style);
export default function FormGiamGiaTuDong() {
  const [showModel, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [percent, setPercent] = useState("");
  const handlNo = () => {
    setShowModal(false);
  };
  const handleYes = () => {
    console.log(
      name + content + " " + dateStart + " " + dateEnd + " " + percent
    );
    axios
      .post("http://localhost:3300/giam-gia/them", {
        name,
        content,
        dateStart,
        dateEnd,
        percent,
      })
      .then((res) => {
        if (res.data.message === "ok") {
          setSuccess(true);
        }
      });
    setShowModal(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  }, []);
  return (
    <div className={cx("wrapper")}>
      {success && (
        <div className={cx("success")}>
          <p>THANH CONG</p>
        </div>
      )}
      <div className={cx("form")}>
        <label htmlFor="">TEN DOT GIAM GIA</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name=""
          id=""
        />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">NOI DUNG GIAM GIA</label>
        <input
          type="text"
          name=""
          id=""
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">NGAY BAT DAU</label>
        <input
          type="date"
          name=""
          id=""
          value={dateStart}
          onChange={(e) => setDateStart(e.target.value)}
        />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">NGAY KET THUC</label>
        <input
          type="date"
          name=""
          id=""
          value={dateEnd}
          onChange={(e) => setDateEnd(e.target.value)}
        />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">MUC GIAM GIA</label>
        <input
          type="number"
          name=""
          id=""
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
        />
      </div>
      <div className={cx("btn")}>
        <button onClick={() => setShowModal(!showModel)}>THEM</button>
      </div>
      {showModel === true && (
        <Modal
          handleNo={handlNo}
          handleYes={handleYes}
          title={"Ban co muon Them?"}
        />
      )}
    </div>
  );
}
