import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const apiKey = process.env.REACT_APP_WEATHER_KEY;

  const getWeather = async () => {
  if (!city) {
    alert("Enter city");
    return;
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  const result = await res.json();

  if (result.cod !== 200) {
    alert("Error: " + result.message);
    return;
  }

  setData(result);
};


  return (
    <div style={container}>
      <h2>🌦 Weather</h2>

      <input
        style={input}
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <br /><br />

      <button style={button} onClick={getWeather}>
        Get Weather
      </button>

      {data?.main && (
            <div style={card}>
                <h3>{data.name}</h3>
                <p>🌡 Temperature: {data.main.temp}°C</p>
                <p>☁ Weather: {data.weather?.[0]?.description}</p>
            </div>
       )}
    </div>

    
  );
}

// 🎨 Styles
const container = {
  textAlign: "center",
  marginTop: "50px",
  fontFamily: "Arial"
};

const input = {
  padding: "10px",
  width: "220px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const button = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px"
};

const card = {
  marginTop: "20px",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#f0f0f0",
  display: "inline-block",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
};

export default Weather;
