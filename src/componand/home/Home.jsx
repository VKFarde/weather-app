import React, { useEffect, useState } from "react";
import Nava from "./nava/Nava";
import Aside from "./aside/Aside";
import "./home.css";
import Main from "./main/Main";
import { selectData } from "../../store/dataApi";
import { useSelector } from "react-redux";

function Home() {
  const [data, setData] = useState(null);
  const [forcas, setForcas] = useState(null);
  var value = useSelector(selectData);
  console.log(value, "ksjfsfksh");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = value
          ? `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=cdce09fb14dd5180259d2afd1bf40d90`
          : "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=cdce09fb14dd5180259d2afd1bf40d90";
        const urlApi = value
          ? `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=cdce09fb14dd5180259d2afd1bf40d90&units=metric`
          : "https://api.openweathermap.org/data/2.5/forecast?q=Mumbai&appid=cdce09fb14dd5180259d2afd1bf40d90&units=metric";
        const response = await fetch(apiUrl);
        const res = await fetch(urlApi);

        if (!response.ok && !res.ok) {
          throw new Error("Failed to fetch data");
        }

        const weatherData = await response.json();
        const forDa = await res.json();

        setData(weatherData);
        setForcas(forDa);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error as needed, e.g., set an error state
      }
    };

    fetchData();
  }, [value]);

  if (!data) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  return (
    <div className="Home">
      <header>
        <Nava />
      </header>
      <aside>
        <Aside data={data} foreD={forcas} />
      </aside>
      <main>
        <Main data={data} foreD={forcas} />
      </main>
    </div>
  );
}

export default Home;
