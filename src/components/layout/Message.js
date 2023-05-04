import { useState, useEffect } from "react";

import styles from "./Message.module.css";

function Message({ type, msg }) {

  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  )
}

export default Message;
