import { useState } from "react";

function Crop() {
  const [soil, setSoil] = useState("");
  const [temp, setTemp] = useState("");
  const [result, setResult] = useState("");

  const suggestCrop = () => {
    if (!soil || !temp) {
      alert("Enter all details");
      return;
    }

    let crop = "";

    if (soil === "loamy" && temp > 20) {
      crop = "🌾 Wheat";
    } else if (soil === "clay" && temp > 25) {
      crop = "🌱 Rice";
    } else if (soil === "sandy" && temp > 30) {
      crop = "🌽 Maize";
    } else {
      crop = "🌿 Try vegetables or pulses";
    }

    setResult(crop);
  };

  return (
    <div style={container}>
      <h2>🌱 Crop Suggestion</h2>

      <input
        style={input}
        type="text"
        placeholder="Soil type (loamy/clay/sandy)"
        value={soil}
        onChange={(e) => setSoil(e.target.value.toLowerCase())}
      />

      <br /><br />

      <input
        style={input}
        type="number"
        placeholder="Temperature (°C)"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />

      <br /><br />

      <button style={button} onClick={suggestCrop}>
        Suggest Crop
      </button>

      {result && (
        <div style={card}>
          <h3>Recommended Crop:</h3>
          <p>{result}</p>
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
  width: "250px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const button = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#2E8B57",
  color: "white",
  border: "none",
  borderRadius: "5px"
};

const card = {
  marginTop: "20px",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#e8f5e9",
  display: "inline-block"
};

export default Crop;
