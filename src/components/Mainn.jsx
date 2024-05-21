import { useDispatch, useSelector } from "react-redux";
import Inputs from "./Inputs";
import SongiQism from "./SongiQism";
import Vaqt from "./Vaqt";
import cardSlice from "../cardSlice";

function Mainn() {
  const dispach = useDispatch();
  const dt = useSelector((k) => k);
  const Con = () => {
    if (!dt.url.startsWith("https://")) {
      dispach(cardSlice.actions.furl(""));
      alert("Urlni to'g'ri kiriting.");
      return;
    }
    console.log(dt);
  };
  return (
    <main>
      <div className="main_div1">
        <button className="btn_oq btn">
          <img src="./ic_Plus.svg" alt="" />
          <span>Subloyiha ochish</span>
        </button>
        <button className="btn_kok btn" onClick={Con}>
          <span>Davom etish</span>
          <svg
            className="y360"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.09 19.92L8.57003 13.4C7.80003 12.63 7.80003 11.37 8.57003 10.6L15.09 4.07999"
              stroke="#fff"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div>
        <Inputs />
      </div>
      <Vaqt />
      <SongiQism />
    </main>
  );
}

export default Mainn;
