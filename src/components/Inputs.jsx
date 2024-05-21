import { useDispatch, useSelector } from "react-redux";
import HabarVaqti from "./HabarVaqti";
import TanInput from "./TanInput";
import cardSlice from "../cardSlice";

function Inputs() {
  const dispach = useDispatch();
  const { ln, bv } = useSelector((k) => k);
  return (
    <div className="from">
      <form className="form" action="">
        <div className="from_div1">
          <label htmlFor="">Loyha nomi</label>
          <input
            className="input"
            value={ln}
            onChange={(e) => dispach(cardSlice.actions.fln(e.target.value))}
            type="text"
            placeholder="Loyha nomi"
          />
          <label htmlFor="loy">
            <input type="checkbox" /> Loyha nomi
          </label>
          <input
            className="input"
            type="time"
            id="loy"
            value={bv}
            onChange={(e) => dispach(cardSlice.actions.fbv(e.target.value))}
            placeholder="Boshanish vaqti"
          />
        </div>
        <div className="from_div1">
          <TanInput />
          <HabarVaqti />
        </div>
      </form>
    </div>
  );
}

export default Inputs;
