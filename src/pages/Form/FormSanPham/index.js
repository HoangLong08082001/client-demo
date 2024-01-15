import React, { useEffect, useState } from "react";
import style from "./FormSanPham.module.scss";
import classNames from "classnames/bind";
import axios from "axios";
import Modal from "../../../components/Modal";
const cx = classNames.bind(style);
export default function FormSanPham() {
  const [listGiamGia, setListGiamGia] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const fetchGiamGia = () => {
    axios.get("http://localhost:3300/giam-gia/doc").then((res) => {
      if (res.data.message === "ok") {
        setListGiamGia(res.data.data);
      }
    });
  };
  const handleYes = () => {
    console.log(name + " " + price + " " + discount);
    axios
      .post("http://localhost:3300/san-pham/them", { name, price, discount })
      .then((res) => {
        if (res.data.message === "ok") {
          setShowModal(false);
          setSuccess(true);
        }
      });
  };
  const handleNo = () => {
    setShowModal(false);
  };
  useEffect(() => {
    fetchGiamGia();
  }, []);
  return (
    <div className={cx("wrapper")}>
      {success && (
        <div className={cx("success")}>
          <p>THANH CONG</p>
        </div>
      )}
      <div className={cx("form")}>
        <label htmlFor="">TEN SAN PHAM</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name=""
          id=""
        />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">GIA SAN PHAM</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          name=""
          id=""
        />
      </div>

      <div className={cx("form")}>
        <label htmlFor="">CHUONG TRINH GIAM GIA</label>
        <select
          id=""
          name={discount}
          onChange={(e) => setDiscount(e.target.value)}
        >
          {listGiamGia.map((l, i) => {
            return <option value={l.id_giamgia}>{l.ten_dotgiamgia}</option>;
          })}
        </select>
      </div>
      <div className={cx("btn")}>
        <button onClick={() => setShowModal(true)}>THEM</button>
      </div>
      {showModal && (
        <Modal
          handleNo={handleNo}
          handleYes={handleYes}
          title={"Ban co muon them moi?"}
        />
      )}
    </div>
  );
}
