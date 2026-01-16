# React Three Fiber + Vite Starter

_A simple React Three Fiber + Vite starter._

![Preview](/public/preview.gif)

### Resources:

- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/): Three.js Renderer
- [Drei](https://github.com/pmndrs/drei): React Three Fiber Helpers
- [Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene): 3D Engine
- [Vite](https://vitejs.dev/guide/): Static Web Server

### Installation

```
npm install
```

### Scripts

```
npm run dev
npm run build
npm run preview
```

---

## Model: C51 Lecture Hall (BIT Sindri College, Dhanbad, Jharkhand)

This project ships with a 3D model named **C51 Lecture Hall**. Key details:

- Model file: `public/finalC51.glb` (loaded in `src/Model.jsx` via `useGLTF("/finalC51.glb")`).
- The scene includes hotspot-driven viewpoints and optional WebXR support (AR/VR). See `src/hotspotConfig.js`, `src/Hotspots.jsx` and `src/utils/cameraControllerModule.js` for configuration and camera animation logic.

### Quick notes

- To run locally: `npm install` then `npm run dev`.
- Hotspots & camera views are editable via `src/hotspotConfig.js`.
- WebXR (AR/VR) availability depends on the browser/device; the UI provides "Enter VR"/"Enter AR" actions which use the WebXR APIs when available.

### Attribution / License

If you have the original author/credit or license for `finalC51.glb`, add it here. Otherwise treat the repository code as MIT (see `package.json`).

---
