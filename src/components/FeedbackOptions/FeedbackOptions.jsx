import React from "react";

const FeedbackOptions = ({onLeaveFeedback}) => (
    <div>
        <button type="button" onClick={onLeaveFeedback} name="good">Good</button>
        <button type="button" onClick={onLeaveFeedback} name="neutral">Neutral</button>
        <button type="button" onClick={onLeaveFeedback} name="bad">Bad</button>
    </div>
)

export default FeedbackOptions;