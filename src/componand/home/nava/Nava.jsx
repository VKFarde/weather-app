import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { TbCurrentLocation } from "react-icons/tb";
import { FaSearchLocation } from "react-icons/fa";
import { screenSizeContext } from "../../../conetxt/secreenSize";
import "./nava.css";
import { RxCross1 } from "react-icons/rx";
import { setData } from "../../../store/dataApi";
import { useDispatch } from "react-redux";

function Nava() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const { size } = useContext(screenSizeContext);
  const [toggle, setToggle] = useState(false);

  console.log("local", city);

  const handelcurrentcity = () => {
    const getCurrentCityName = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;

        const apiKey = "cdce09fb14dd5180259d2afd1bf40d90";
        const apiUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        const city = data[0].name;
        return city;
      } catch (error) {
        console.error("Error getting current city:", error);
        return null;
      }
    };

    // Example usage
    getCurrentCityName().then((city) => {
      console.log("Current City:", city);
      dispatch(setData(city));
    });
  };

  const handelSubmit = () => {
    setToggle(true);
    dispatch(setData(city));
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="container">
        <div className="search">
          <FaSearchLocation
            className="cpp"
            style={{ scale: "1.2" }}
            onClick={handelSubmit}
            type="submit"
          />
          {size - 30 > 450 ? (
            <input
              type="search"
              name="search"
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search City..."
              autoComplete="off"
            />
          ) : (
            toggle && (
              <>
                <RxCross1
                  className="cpp"
                  onClick={() => setToggle(false)}
                  style={{ scale: "1.2" }}
                />
                <input
                  type="search"
                  name="search"
                  placeholder="Search city..."
                  onChange={(e) => {
                    setCity(e.target.value);
                    setToggle(true);
                  }}
                />
              </>
            )
          )}
        </div>
        <div className="Clocation">
          <TbCurrentLocation style={{ scale: "1.5" }} />
          <span
            className={size - 30 < 450 ? "hidden" : ""}
            onClick={handelcurrentcity}
          >
            Current City
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Nava;
