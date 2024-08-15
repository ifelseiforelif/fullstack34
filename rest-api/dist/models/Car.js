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
exports.Car = void 0;
const CarDTO_1 = require("../dto/CarDTO");
class Car {
    static get_all_cars() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CarDTO_1.CarDTO.findAll({
                attributes: [
                    "id",
                    "model",
                    "year",
                    "number",
                    "color",
                    "type",
                    "isnew",
                    "vengine",
                ],
            });
        });
    }
}
exports.Car = Car;
