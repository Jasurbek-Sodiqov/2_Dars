import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import cardSlice from "../cardSlice";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 150,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function Shavblon() {
  const [personName, setPersonName] = React.useState([]);
  const dispach = useDispatch();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    dispach(cardSlice.actions.fsh(value));
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}
    >
      <label htmlFor="tg">
        <input type="checkbox" /> Qancha vaqtda habar yuboriladi?
      </label>
      <FormControl sx={{ mt: "8px", width: 672, height: 56 }}>
        <InputLabel id="demo-multiple-checkbox-label">O'sha zahoti</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          sx={{
            height: "49px",
            border: "1px solid rgba(235, 234, 237, 1)",
            bgcolor: "#fff",
          }}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
