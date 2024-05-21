import { useDispatch, useSelector } from "react-redux";
import Shavblon from "./Shavblot";
import cardSlice from "../cardSlice";
import { useState } from "react";

function SongiQism() {
  const data = useSelector((k) => k.url);
  const uz = useSelector((k) => k.uz);
  const ru = useSelector((k) => k.ru);
  const eng = useSelector((k) => k.eng);
  const dispach = useDispatch();
  console.log(uz);
  const [tl, useTl] = useState("uz");

  const uzru = (e) => {
    if (tl == "uz") {
      dispach(cardSlice.actions.fuz(e));
    }
    if (tl == "ru") {
      dispach(cardSlice.actions.fru(e));
    }
    if (tl == "eng") {
      dispach(cardSlice.actions.feng(e));
    }
  };

  return (
    <div className="form ikki">
      <div className="div">
        <h2 className="habar">Habarning korinishi</h2>
        <form action="" className="from_div1">
          <Shavblon />
          <label htmlFor="">Link</label>
          <input
            type="url"
            value={data}
            onChange={(e) => dispach(cardSlice.actions.furl(e.target.value))}
            className="input"
            placeholder="Link"
          />
          <div>
            <div className="habar_div">
              <h3 className="habar">Habar</h3>
              <button className="sh">
                <span
                  style={{
                    border: "1px solid blue",
                    color: "blue",
                    width: "16px",
                    height: "16px",
                    boxSizing: "border-box",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                >
                  +
                </span>{" "}
                <span>Shablon holatida saqlash</span>
              </button>
            </div>
            <div className="tillar">
              <button
                className={`${tl == "uz" ? "tillar_btn" : "bn"}`}
                onClick={(e) => {
                  useTl("uz");
                  e.preventDefault();
                }}
              >
                O'zbekcha
              </button>
              <button
                className={`${tl == "ru" ? "tillar_btn" : "bn"}`}
                onClick={(e) => {
                  useTl("ru");
                  e.preventDefault();
                }}
              >
                Русский
              </button>
              <button
                className={`${tl == "eng" ? "tillar_btn" : "bn"}`}
                onClick={(e) => {
                  useTl("eng");
                  e.preventDefault();
                }}
              >
                English
              </button>
            </div>
            <textarea
              onChange={(e) => uzru(e.target.value)}
              value={tl == "uz" ? uz : tl == "ru" ? ru : eng}
              className="bio"
              placeholder="Habar matni.."
            ></textarea>
          </div>
        </form>
      </div>

      <div>
        <img src="./image 13.png" alt="" />
      </div>
    </div>
  );
}

export default SongiQism;
