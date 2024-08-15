"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cars_routes_1 = require("./routes/cars-routes");
const colors_routes_1 = require("./routes/colors-routes");
const PORT = 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/cars", cars_routes_1.cars_routes);
app.use("/colors", colors_routes_1.color_routes);
app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});
