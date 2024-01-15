import {
  faMessage,
  faFacebookMessenger,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import style from "./Chat.module.scss";
import classNames from "classnames/bind";
import ChatBox from "./ChatBox";
const cx = classNames.bind(style);
export default function Chat() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className={cx("wrapper")} onClick={handleShow}>
      <FontAwesomeIcon className={cx("icon")} icon={faMessage} />
      {show === true && <ChatBox />}
    </div>
  );
}
