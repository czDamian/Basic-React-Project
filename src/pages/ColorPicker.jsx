import { useState } from "react";

const ColorPicker = () => {

  const [color, setColor] = useState("#000080");
  
  function handleColor(e) {
    setColor(e.target.value);
  }
  return (
    <div className="">
      <h1 className="text-center font-bold text-2xl p-2 bg-blue-600 mb-10">
        Color Picker
      </h1>

      <div className="flex justify-center items-center flex-col justify-center">
        <div>Current color: {color}</div>
        <div
          className="rounded-lg p-20 m-2"
          style={{ backgroundColor: `${color}` }}></div>
        <label htmlFor="color">Choose color</label>
        <input type="color" value={color} onChange={handleColor} />
      </div>
    </div>
  );
};

export default ColorPicker;
