import React, { useEffect, useState } from "react";
import { FaThemeco, FaWind } from "react-icons/fa";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { WiHumidity, WiSandstorm } from "react-icons/wi";
import { GiWindSlap } from "react-icons/gi";
import { MdVisibility } from "react-icons/md";
import { PiThermometerHotDuotone } from "react-icons/pi";

function Part1({ data }) {
  const lon = data?.coord?.lon;
  const lat = data?.coord?.lat;
  const [pol, setPol] = useState(null);
  const [polS, setPolS] = useState(null);

  useEffect(() => {
    const m = async () => {
      try {
        const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=cdce09fb14dd5180259d2afd1bf40d90`;
        const res = await fetch(url);
        const data = await res.json();

        setPol(data?.list[0]?.components);

        const ps = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
        setPolS(ps[data?.list[0]?.main?.aqi - 1]);
      } catch (err) {
        console.log(err);
      }
    };

    m();
  }, [lon, lat]);

  return (
    <div className="Part1">
      <h3>Todays Highlights</h3>
      <div className="part-a">
        <div className="part-a-a part2t">
          <div className="part-a-head">
            <div>Air Quality Index</div>
            <div className="part-a-head-p">{polS}</div>
          </div>
          <div className="part-a-group">
            <div className="part-a-subgroup">
              <FaWind className="fill" />
            </div>

            <div className="part-a-subgroup">
              <span>PM250</span>
              <h1>{pol?.pm2_5}</h1>
            </div>
            <div className="part-a-subgroup">
              <span>SO2</span>
              <h1>{pol?.so2}</h1>
            </div>
            <div className="part-a-subgroup">
              <span>NO2</span>
              <h1>{pol?.no2}</h1>
            </div>
            <div className="part-a-subgroup">
              <span>O3</span>
              <h1>{pol?.o3}</h1>
            </div>
          </div>
        </div>
        <div className="part-a-a part-a-c part2t">
          <div className="part-a-head">
            <div>Sunrise & Sunset</div>
          </div>
          <div className="part-a-b">
            <div className="part-a-bb">
              <div className="part-a-b-logo">
                <FaRegSun />
              </div>
              <div className="part-a-b-con">
                <span>Sunrise</span>
                <h1>
                  {(() => {
                    const options = {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true, // Use 12-hour format
                    };
                    const formattedTime = new Date(
                      data?.sys?.sunrise
                    ).toLocaleTimeString("en-US", options);
                    return <span>{formattedTime}</span>;
                  })()}
                </h1>
              </div>
            </div>
            <div className="part-a-bb">
              <div className="part-a-b-logo">
                <FaRegMoon />
              </div>
              <div className="part-a-b-con">
                <span>Sunset</span>
                <h1>
                  {(() => {
                    const options = {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true, // Use 12-hour format
                    };
                    const formattedTime = new Date(
                      data?.sys?.sunset
                    ).toLocaleTimeString("en-US", options);
                    return <span>{formattedTime}</span>;
                  })()}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="part-b">
        <div className="part-b-a ">
          <div className="part-bb part2t">
            <span>Humidity</span>
            <div className="part-bbb">
              <div className="part-b-logo">
                <WiHumidity />
              </div>
              <h1>{data.main.humidity}%</h1>
            </div>
          </div>

          <div className="part-bb part2t">
            <span>Pressure</span>
            <div className="part-bbb">
              <div className="part-b-logo">
                <GiWindSlap />
              </div>
              <h1>{data.main.pressure}hPa</h1>
            </div>
          </div>
          <div className="part-bb part2t">
            <span>Visibility</span>
            <div className="part-bbb">
              <div className="part-b-logo">
                <MdVisibility />
              </div>
              <h1>{data.visibility / 1000}km</h1>
            </div>
          </div>
          <div className="part-bb part2t">
            <span>Feels like</span>
            <div className="part-bbb">
              <div className="part-b-logo">
                <PiThermometerHotDuotone />
              </div>
              <h1>{Math.floor(data?.main?.feels_like)}&deg;</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Part1;
