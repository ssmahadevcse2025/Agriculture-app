import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Weather from "./Weather";
import Crop from "./Crop";
import Market from "./Market";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div style={nav}>
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        🌾 Agro App
      </h2>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <div style={container}>
      <h1>Dashboard</h1>

      <div style={grid}>
        <div style={card} onClick={() => navigate("/weather")}>
          🌦 Weather
        </div>

        <div style={card} onClick={() => navigate("/crop")}>
          🌱 Crop
        </div>

        <div style={card} onClick={() => navigate("/market")}>
          📊 Market
        </div>
      </div>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/weather"
          element={
            <Layout>
              <Weather />
            </Layout>
          }
        />
        <Route
          path="/crop"
          element={
            <Layout>
              <Crop />
            </Layout>
          }
        />
        <Route
          path="/market"
          element={
            <Layout>
              <Market />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// 🎨 Styles
const nav = {
  backgroundColor: "#2E8B57",
  color: "white",
  padding: "10px",
  textAlign: "center"
};

const container = {
  textAlign: "center",
  marginTop: "30px",
  fontFamily: "Arial"
};

const grid = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "30px"
};

const card = {
  padding: "30px",
  backgroundColor: "#f0f0f0",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "18px",
  width: "150px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
};

export default App;
