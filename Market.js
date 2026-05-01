import { useState } from "react";

function Market() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPrices = () => {
    setLoading(true);

    setTimeout(() => {
      const prices = [
        { crop: "🌾 Rice", price: "₹2200" },
        { crop: "🌽 Maize", price: "₹1800" },
        { crop: "🌿 Wheat", price: "₹2100" }
      ];

      setData(prices);
      setLoading(false);
    }, 1000); // simulate loading
  };

  return (
    <div style={container}>
      <h2>📊 Market Prices</h2>

      <button style={button} onClick={getPrices}>
        Load Prices
      </button>

      {loading && <p>Loading...</p>}

      {data.length > 0 && (
        <div style={card}>
          {data.map((item, i) => (
            <div key={i} style={row}>
              <span>{item.crop}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Styles
const container = { textAlign: "center", marginTop: "50px" };
const button = { padding: "10px 20px", background: "green", color: "white" };
const card = { marginTop: "20px", padding: "20px", background: "#eee" };
const row = {
  display: "flex",
  justifyContent: "space-between",
  padding: "8px"
};

export default Market;
