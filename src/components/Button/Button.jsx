import React from "react";

export default function Button({ buttonClickHandle, value }) {
  return <button onClick={buttonClickHandle}>{value}</button>;
}
