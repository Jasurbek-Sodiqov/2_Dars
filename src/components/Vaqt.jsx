import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}
const marks = [];
let soat = 13;

for (let index = 4; index < 100; index += 4) {
  marks.push({ value: index, label: `${soat}:00` });
  soat++;
  if (soat == 23) {
    soat = 0;
  }
}

export default function Vaqt() {
  const [value, setValue] = React.useState([36, 72]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "auto" }}>
      <label>
        <input type="checkbox" /> Habar yuborilmaydigan vaqt
      </label>
      <Slider
        marks={marks}
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        step={0.00000001}
        sx={{ color: "red" }}
      />
    </Box>
  );
}
