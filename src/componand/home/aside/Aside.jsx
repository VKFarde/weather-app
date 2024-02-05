import React, { useState, useEffect } from "react";
import "./aside.css";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

function Aside({ data, foreD }) {
  const da = foreD?.list.filter((data, index) => index % 8 === 0);

  return (
    <div className="asiide">
      <div className="currenttemp part2t">
        <div className="cpt-1 ">
          <div className="cpt-sub-1">
            <span>Now</span>
            <h1>
              {Math.floor(data?.main?.temp)}
              <sup>&deg;c</sup>
            </h1>
            <span>{data?.name}</span>
          </div>
          <div className="cpt-sub-2">
            <img src={`/${data?.weather[0]?.icon}.png`} alt="logo"></img>
          </div>
        </div>
        <div className="cpt-2">
          <div className="cpt-sub-3">
            <BsFillCalendar2DateFill />
            <span>
              {(() => {
                const date = new Date();
                const tzString = data?.timeZone;
                return date.toLocaleString("en-US", { timeZone: tzString });
              })()}
            </span>
          </div>
          <div className="cpt-sub-4">
            <FaLocationDot /> <span>{data?.name}</span>
          </div>
        </div>
      </div>
      <h3>5 Day Forecast</h3>
      <div className="currenttemp part2t ">
        <ul>
          {da.map((data, index) => {
            return (
              <li key={index}>
                <div>
                  <img src={`/${data?.weather[0]?.icon}.png`} alt="logo" />
                  <h3>{Math.floor(data?.main?.temp)}&deg;c</h3>
                </div>
                <div>
                  {(() => {
                    const formattedDate = new Date(
                      data.dt_txt
                    ).toLocaleDateString("en-US", {
                      day: "numeric",
                    });
                    return <span>{formattedDate}</span>;
                  })()}
                  {(() => {
                    const formattedDate = new Date(
                      data.dt_txt
                    ).toLocaleDateString("en-US", {
                      month: "long",
                    });
                    return <span>{formattedDate}</span>;
                  })()}
                </div>
                <div>
                  {(() => {
                    const options = {
                      weekday: "long", // Display the full name of the day of the week
                      timeZone: "UTC", // Specify your desired time zone
                    };
                    const formattedDate = new Date(
                      data.dt_txt
                    ).toLocaleDateString("en-US", options);
                    return <span>{formattedDate}</span>;
                  })()}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Aside;
