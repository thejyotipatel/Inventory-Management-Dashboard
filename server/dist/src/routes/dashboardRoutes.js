"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashbordController_1 = require("../controllers/dashbordController");
const router = (0, express_1.Router)();
// GET DASHBOARD METRICS
router.get("/", dashbordController_1.getDashboardMetrics);
exports.default = router;
