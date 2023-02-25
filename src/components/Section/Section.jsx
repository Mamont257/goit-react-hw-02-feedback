import React, { Children } from "react";

const Section = ({ title, children }) => (
    <div>
        <p>{title}</p>
        {children}   
    </div>

)

export default Section;