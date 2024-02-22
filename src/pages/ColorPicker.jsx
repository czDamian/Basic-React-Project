import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");
  function handleColor(e) {
    setColor(e.target.value);
  }
  return (<div className="flex text-center justify-center">

    <div className="flex flex-col w-40 justify-center">
      <h1>color picker</h1>
      <div>Current color: {color}</div>
      <div className="p-20 m-2" style={{ backgroundColor: `${color}` }}></div>
      <label htmlFor="color">Select color:</label>
      <input
        type="color"
        value={color}
        onChange={handleColor}
        />
        </div>
    </div>
  );
};

export default ColorPicker;
