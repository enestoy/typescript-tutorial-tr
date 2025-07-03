"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Priority = exports.TaskStatus = void 0;
// Görev durumları enum ile tanımlandı
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["New"] = "Yeni";
    TaskStatus["InProgress"] = "Devam Ediyor";
    TaskStatus["Completed"] = "Tamamland\u0131";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
// Öncelik derecesi enum
var Priority;
(function (Priority) {
    Priority["Low"] = "D\u00FC\u015F\u00FCk";
    Priority["Medium"] = "Orta";
    Priority["High"] = "Y\u00FCksek";
})(Priority || (exports.Priority = Priority = {}));
