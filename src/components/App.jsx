import React, { Component } from "react";
import Feedback from "./Feedback";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    posFeedback: 0,
  }
  
  render() {
    return (
      <Feedback/>
    )
  }
  

}









// export const App = () => {
//   return (
//     <div>
//       <Feedback/>
//     </div>
//   );
// };
