import React from "react";
import { moveCameraTo, isAnimating } from "./utils/cameraControllerModule";

const hotspots = [
  {
    id: "entrance",
    label: "Entrance",
    position: [0, -8, -10],
    target: [0, -4, 0],
  },
  {
    id: "overview",
    label: "Overview",
    position: [10, 5, -10],
    target: [0, 0, 0],
  },
  {
    id: "left",
    label: "Left",
    position: [-10, 4, -5],
    target: [-4, -4, 0],
  },
  {
    id: "right",
    label: "Right",
    position: [8, -2, 5],
    target: [2, -4, 0],
  },
  {
    id: "top",
    label: "Top",
    position: [0, 15, 0],
    target: [0, -2, 0],
  },
  {
    id: "back",
    label: "Back",
    position: [0, 0.8, 25],
    target: [0, -3, 0],
  },
  {
    id: "close",
    label: "Close-up",
    position: [-2, -3, -2],
    target: [-4, -5, 0],
  },
  {
    id: "front",
    label: "Front",
    position: [-6, -4, 8],
    target: [-4, -5, 0],
  },
  {
    id: "top-left",
    label: "Top-Left",
    position: [-12, 12, -8],
    target: [-4, 0, 0],
  },
  {
    id: "bottom",
    label: "Bottom",
    position: [10, 10, 40],
    target: [0, -10, 0],
  },
];

export default function Hotspots() {
  const handleClick = spot => {
    if (isAnimating()) return; // ignore while animating
    moveCameraTo({ position: spot.position, target: spot.target, duration: 1.25 });
  };

  return (
    <div className='hotspots'>
      {hotspots.map(h => (
        <button key={h.id} className='hotspot-btn' onClick={() => handleClick(h)} title={`Go to ${h.label}`}>
          {h.label}
        </button>
      ))}
    </div>
  );
}
