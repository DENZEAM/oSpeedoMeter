import "./App.css";
import useNuiEvent from "./hooks/useNuiEvent.jsx";
import ATH from "./views/ATH/Layout.jsx";
import { useState } from "react";

function App() {
  const [hiddenATH, setHiddenATH] = useState(true);

  useNuiEvent("SET_SHOW_ATH", (data) => {
    setHiddenATH(data.show);
  });

  return (
    <div
      style={{
        backgroundImage:
          "url('https://media.discordapp.net/attachments/1156492030596358185/1230151777400393858/image.png?ex=6639875e&is=663835de&hm=58cc79d24e08df3d87153f4ce940a64e4a67014cb081300b793f67c566a22a0b&=&format=webp&quality=lossless&width=1258&height=708')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ opacity: `${hiddenATH ? "1" : "0"}` }}>
        <ATH></ATH>
      </div>
    </div>
  );
}

export default App;
