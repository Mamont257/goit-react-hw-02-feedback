import React, { Component } from "react";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div>
        <div>Good: <span>{good}</span></div>
        <div>Neutral: <span>{neutral}</span></div>
        <div>Bad: <span>{bad}</span></div>
        <div>Total: <span>{total}</span></div>
        <div>Positive feedback: <span>{positivePercentage}%</span></div>
    </div>
)

export default Statistics;