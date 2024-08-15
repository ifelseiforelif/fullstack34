"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.color_routes = void 0;
const express_1 = require("express");
const Color_1 = require("../models/Color");
const color_routes = (0, express_1.Router)();
exports.color_routes = color_routes;
color_routes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    Color_1.Color.get_all_colors()
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
}));
