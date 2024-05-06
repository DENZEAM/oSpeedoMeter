import "./App.css";
import ATH from "./views/ATH/Layout.jsx";
import { useState } from "react";

function App() {
  const [hiddenATH, setHiddenATH] = useState(true);

  window.addEventListener("message", (event) => {
    const eventData = event.data;

    if (eventData.type === "SET_SHOW_ATH") {
      setHiddenATH(eventData.show);
    }
  });

  return (
    <div
    // style={{
    //   backgroundImage:
    //     "url('https://cdn.discordapp.com/attachments/1156492030596358185/1230139530175320145/image.png?ex=66323bb6&is=661fc6b6&hm=f6c9a9189fad4e62470414bbc98ae803bb99995c73729c36379496169eea1223&')",
    // }}
    >
      <div style={{ opacity: `${hiddenATH ? "1" : "0"}` }}>
        <ATH></ATH>
      </div>
    </div>
  );
}

export default App;
