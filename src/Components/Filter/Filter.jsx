import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
// import "./Filter.css";

const Filter = ({ type, setType }) => {
  return (
    <div className="filterConts">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Фильтрация</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel
            value="Samsung"
            control={<Radio />}
            label="Samsung"
          />
          <FormControlLabel value="Xiaomi" control={<Radio />} label="Xiaomi" />
          <FormControlLabel value="Apple" control={<Radio />} label="Apple" />
          <FormControlLabel value="all" control={<Radio />} label="all" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;
