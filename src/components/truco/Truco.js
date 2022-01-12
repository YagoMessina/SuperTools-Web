import React, { useRef, useEffect, useState } from "react";
import "./Truco.css";
import Button from "./Button";

const Truco = () => {
  const canvas = useRef();
  let ctx = null;

  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);

  const [color1, setColor1] = useState("#d62828");
  const [color2, setColor2] = useState("red");

  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = 345;
    canvasEle.height = 320;
    ctx = canvasEle.getContext("2d");
    updateCanvas(points1, 30);
    updateCanvas(points2, 220);
  });

  const updateCanvas = (points, playerModifier) => {
    if (points > 15) points -= 15;
    switch (points) {
      case 15:
        drawFive(220, playerModifier);
      case 14:
        drawFour(220, playerModifier);
      case 13:
        drawThree(220, playerModifier, 6);
      case 12:
        drawTwo(220, playerModifier);
      case 11:
        drawOne(220, playerModifier);
      case 10:
        drawFive(110, playerModifier);
      case 9:
        drawFour(110, playerModifier);
      case 8:
        drawThree(110, playerModifier);
      case 7:
        drawTwo(110, playerModifier);
      case 6:
        drawOne(110, playerModifier);
      case 5:
        drawFive(0, playerModifier);
      case 4:
        drawFour(0, playerModifier);
      case 3:
        drawThree(0, playerModifier);
      case 2:
        drawTwo(0, playerModifier);
      case 1:
        drawOne(0, playerModifier, 6);
      default:
        break;
    }
  };

  const drawOne = (startY, playerModifier, width) => {
    drawLine(
      {
        x: 0 + playerModifier,
        y: 0 + startY,
        x1: 100 + playerModifier,
        y1: 0 + startY,
      },
      { color: "#fffcf2", width: width }
    );
  };

  const drawTwo = (startY, playerModifier) => {
    drawLine({
      x: 0 + playerModifier,
      y: 0 + startY,
      x1: 0 + playerModifier,
      y1: 100 + startY,
    });
  };

  const drawThree = (startY, playerModifier, width) => {
    drawLine(
      {
        x: 0 + playerModifier,
        y: 100 + startY,
        x1: 100 + playerModifier,
        y1: 100 + startY,
      },
      { color: "#fffcf2", width: width }
    );
  };

  const drawFour = (startY, playerModifier) => {
    drawLine({
      x: 100 + playerModifier,
      y: 0 + startY,
      x1: 100 + playerModifier,
      y1: 100 + startY,
    });
  };

  const drawFive = (startY, playerModifier) => {
    drawLine({
      x: 0 + playerModifier,
      y: 0 + startY,
      x1: 100 + playerModifier,
      y1: 100 + startY,
    });
  };

  const drawLine = (info, style = {}) => {
    //https://www.cluemediator.com/draw-a-line-on-canvas-using-react
    const { x, y, x1, y1 } = info;
    const { color = "#fffcf2", width = 4 } = style;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  };

  const plusPlayerOne = () => {
    if (points1 >= 15) {
      setColor1("green");
    }
    if (points1 < 30) setPoints1(points1 + 1);
  };

  const minusPlayerOne = () => {
    if (points1 <= 16) {
      setColor1("red");
    }
    if (points1 > 0) setPoints1(points1 - 1);
  };

  const plusPlayerTwo = () => {
    if (points2 >= 15) {
      setColor2("green");
    }
    if (points2 < 30) setPoints2(points2 + 1);
  };

  const minusPlayerTwo = () => {
    if (points2 <= 16) {
      setColor2("red");
    }
    if (points2 > 0) setPoints2(points2 - 1);
  };

  return (
    <div className="truco">
      <div className="head">
        <h3 style={{ marginLeft: "40px", color: color1 }}>Nosotros</h3>
        <h3 style={{ marginLeft: "130px", color: color2 }}>Ellos</h3>
      </div>

      <canvas ref={canvas}></canvas>
      <Button margin="20px" name="+" onClick={plusPlayerOne}></Button>
      <Button margin="90px" name="-" onClick={minusPlayerOne}></Button>
      <Button margin="210px" name="+" onClick={plusPlayerTwo}></Button>
      <Button margin="280px" name="-" onClick={minusPlayerTwo}></Button>
    </div>
  );
};

export default Truco;
