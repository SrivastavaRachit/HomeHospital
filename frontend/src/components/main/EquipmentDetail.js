import React from "react";
import "../../stylesheet/EquipmentDetail.css";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function EquipmentDetail() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <div>
      <div className="cont">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://image.shutterstock.com/image-photo/medicine-doctor-stethoscope-hand-touching-600w-649070965.jpg" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title"></h5>
                <div class="list-group">
                  <a
                    href="#"
                    class="list-group-item list-group-item-action list-group-item-dark"
                  >
                    Title
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action list-group-item-dark"
                  >
                    Price
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action list-group-item-dark"
                  >
                    Description
                  </a>
                </div>

                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : value]}
                  </Box>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
