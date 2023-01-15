"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowCard = void 0;
var react_1 = __importDefault(require("react"));
var ShadowCard = function (props) {
    var title = props.title, subTitle = props.subTitle, btnTxt = props.btnTxt, onBtnClick = props.onBtnClick, data = props.data, girdle = props.girdle, bodyUpperInfo = props.bodyUpperInfo, bodyInfos = props.bodyInfos;
    return (react_1.default.createElement("div", { style: {
            display: "flex",
            height: "800px",
            flexDirection: "column",
            margin: "8px",
            background: "white",
            border: "4px transparent solid",
            boxShadow: "0 4px 20px rgb(0 0 0 / 12%)",
            borderRadius: "10px",
            width: "260px",
            padding: "12px",
            boxSizing: "border-box",
            textAlign: "center",
            fontFamily: "Pacaembu, sans-serif",
            alignItems: "center",
        } },
        react_1.default.createElement("div", { style: {
                fontSize: 32,
                fontWeight: 400,
                lineHeight: 48,
                margin: "16px 0",
            } }, title),
        subTitle ? (react_1.default.createElement("div", { style: {
                color: "#33373b",
                fontSize: "14px",
                fontWeight: 300,
                fontFamily: "Mulish, sans-serif",
                lineHeight: "17.5px",
                width: "100%",
                textAlign: "center",
                wordBreak: "break-word",
            } }, subTitle)) : null,
        react_1.default.createElement("button", { style: {
                background: "#2250f4",
                border: "1px solid #2250f4",
                color: "#e5edff",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: 24,
                cursor: "pointer",
                padding: "8px 24px",
                margin: "16px 0 40px 0",
                width: "fit-content",
                borderRadius: "6px",
            }, onClick: function () { return onBtnClick(data); } }, btnTxt),
        girdle ? (react_1.default.createElement("div", { style: {
                background: "#fafbfb",
                padding: "12px",
                width: "260px",
                color: "#151a1e",
                margin: "16px 0 32px 0",
                fontSize: "48px",
                fontWeight: 500,
                lineHeight: "60px",
                minHeight: "112px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
            } }, girdle)) : null,
        bodyUpperInfo ? (react_1.default.createElement("div", { style: {
                paddingLeft: "24px",
                marginBottom: "10px",
                textAlign: "left",
                width: "100%",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20px",
            } }, bodyUpperInfo)) : null,
        (bodyInfos === null || bodyInfos === void 0 ? void 0 : bodyInfos.length) ? (react_1.default.createElement("div", { style: { width: "100%" } }, bodyInfos.map(function (info, i) {
            return (react_1.default.createElement("div", { key: i, style: {
                    paddingLeft: "24px",
                    marginBottom: "10px",
                    textAlign: "left",
                    width: "100%",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "20px",
                } }, info));
        }))) : null));
};
exports.ShadowCard = ShadowCard;
