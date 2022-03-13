import React, { useState } from "react";
import "../../stylesheet/BrowsEquipment.css";

import { useEffect } from "react";
import app_config from "../../config";
import EquipmentDetail from "./EquipmentDetail";
import { CircularProgress } from "@mui/material";

export default function BrowsEquipment() {
  const url = app_config.api_url;

  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url + "/equipment/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEquipmentList(data);
        setLoading(false);
      });
  }, []);

  const showEquipmentList = () => {
    if (loading) {
      return <CircularProgress color="primary" />;
    } else {
      return (
        <div className="row">
          {equipmentList.map((equipment) => {
            return (
              <div class="col-md-3">
                <div class="card shadow-sm">
                  <img
                    src={url + "/uploads/" + equipment.thumbnail}
                    className="card-img-top"
                  />
                  <div class="card-body">
                    <p className="h5">{equipment.title}</p>
                    <p class="card-text">{equipment.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-muted"></small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">{showEquipmentList()}</div>
        </div>
      </div>
    </div>
  );
}
