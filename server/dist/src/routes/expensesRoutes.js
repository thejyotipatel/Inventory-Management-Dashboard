"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expensesController_1 = require("../controllers/expensesController");
const router = (0, express_1.Router)();
// GET EXPENSES BY CATEGORY
router.get('/', expensesController_1.getExpensesByCategory);
exports.default = router;
