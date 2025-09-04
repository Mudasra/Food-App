const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors({
  origin: "http://localhost:1234", 
}));


app.get("/api/swiggy", async (req, res) => {

const swiggyUrl =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9616085&lng=77.5880106&page_type=DESKTOP_WEB_LISTING";


  try {
    const response = await fetch(swiggyUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept": "application/json",
        "Referer": "https://www.swiggy.com/",
        "Origin": "https://www.swiggy.com",
      },
    });

    if (!response.ok) {
      throw new Error(`Swiggy responded with status ${response.status}`);
    }

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error("❌ Error fetching from Swiggy:", error.message);
    res.status(500).json({ error: "Failed to fetch Swiggy data" });
  }
});


app.get("/api/menu/:id", async (req, res) => {
  const restaurantId = req.params.id;

  const swiggyMenuUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9616085&lng=77.5880106&restaurantId=${restaurantId}`;

  try {
    const response = await fetch(swiggyMenuUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        Accept: "application/json",
        Referer: "https://www.swiggy.com/",
        Origin: "https://www.swiggy.com",
      },
    });

    if (!response.ok) {
      throw new Error(`Swiggy Menu API responded with status ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("❌ Error fetching Swiggy menu:", error.message);
    res.status(500).json({ error: "Failed to fetch menu data" });
  }
});




app.listen(PORT, () => {
  console.log(`🚀 Swiggy proxy running at http://localhost:${PORT}`);
});

// cd "C:\A-Programming-course\react\React-now\.1-Projects\swiggy-proxy"
// node swiggyProxy.js
