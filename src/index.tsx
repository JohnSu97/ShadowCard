import React from "react";
import { IShadowCardParams } from "./interface";

export const ShadowCard = (props: IShadowCardParams) => {
  const {
    title,
    subTitle,
    btnTxt,
    onBtnClick,
    data,
    girdle,
    bodyUpperInfo,
    bodyInfos,
  } = props;
  return (
    <div
      style={{
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
      }}
    >
      <div
        style={{
          fontSize: 32,
          fontWeight: 400,
          lineHeight: 48,
          margin: "16px 0",
        }}
      >
        {title}
      </div>
      {subTitle ? (
        <div
          style={{
            color: "#33373b",
            fontSize: "14px",
            fontWeight: 300,
            fontFamily: "Mulish, sans-serif",
            lineHeight: "17.5px",
            width: "100%",
            textAlign: "center",
            wordBreak: "break-word",
          }}
        >
          {subTitle}
        </div>
      ) : null}
      <button
        style={{
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
        }}
        onClick={() => onBtnClick(data)}
      >
        {btnTxt}
      </button>
      {girdle ? (
        <div
          style={{
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
          }}
        >
          {girdle}
        </div>
      ) : null}
      {bodyUpperInfo ? (
        <div
          style={{
            paddingLeft: "24px",
            marginBottom: "10px",
            textAlign: "left",
            width: "100%",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20px",
          }}
        >
          {bodyUpperInfo}
        </div>
      ) : null}
      {bodyInfos?.length ? (
        <div style={{ width: "100%" }}>
          {bodyInfos.map((info, i: number) => {
            return (
              <div
                key={i}
                style={{
                  paddingLeft: "24px",
                  marginBottom: "10px",
                  textAlign: "left",
                  width: "100%",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              >
                {info}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
