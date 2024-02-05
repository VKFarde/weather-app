import React from "react";

function Part2({ data, foreD }) {
  const m = foreD.list.filter((data, index) => index < 6);

  return (
    <div className="Part2">
      <h2>Today at</h2>
      <div className="part2a">
        {m.map((data, index) => {
          return (
            <div key={index} className="part2t">
              <h4>
                {(() => {
                  const options = {
                    hour: "numeric",
                    hour12: true, // Use 12-hour format
                  };
                  const formattedTime = new Date(
                    data?.dt_txt
                  ).toLocaleTimeString("en-US", options);
                  return <span>{formattedTime}</span>;
                })()}
              </h4>
              <img src={`/${data?.weather[0]?.icon}.png`} alt="logo" />
              <h4>{Math.floor(data?.main?.temp)}&deg;</h4>
            </div>
          );
        })}
      </div>
      <div className="part2a">
        {m.map((data, index) => {
          return (
            <div key={index} className="part2t">
              <h4>
                {(() => {
                  const options = {
                    hour: "numeric",
                    hour12: true, // Use 12-hour format
                  };
                  const formattedTime = new Date(
                    data?.dt_txt
                  ).toLocaleTimeString("en-US", options);
                  return <span>{formattedTime}</span>;
                })()}
              </h4>
              <img
                src={`/direction.png`}
                alt="logo"
                style={{ transform: `rotate(${data?.wind?.deg}deg)` }}
              />
              <h4>{Math.floor(data?.wind?.speed)} km/hr</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Part2;
