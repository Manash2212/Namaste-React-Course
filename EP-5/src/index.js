import ReactDOM from "react-dom/client";
import App from "./App";

const domNode = document.getElementById("root");

const root1 = ReactDOM.createRoot(domNode);
// console.log(root1);

root1.render(<App />);
