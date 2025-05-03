import React, { useState } from "react";

function Bulb() {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => setIsOn(prev => !prev);

  return (
    <div className="text-center">
      <h2 className="text-2xl mb-4 font-semibold">Light Bulb Toggle</h2>
      <div className="text-6xl mb-2">
        {isOn ? "💡" : "💤"} {/* glowing bulb vs off/dim bulb emoji */}
      </div>
      <p className="mb-4 text-lg">
        {isOn ? "Light is ON" : "Light is OFF"}
      </p>
      <button
        onClick={toggleBulb}
        className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded text-black font-semibold"
      >
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default Bulb;
