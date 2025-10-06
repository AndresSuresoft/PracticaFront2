// src/components/App.tsx
import { useState, Suspense, lazy } from "react";

// Carga diferida del modal
const LazyModal = lazy(() => import("./component/LazyModal"));

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Exercise 3 - Lazy Modal</h1>
      <button onClick={handleOpen}>Open Modal</button>

     
      <Suspense fallback={<p>Loading modal...</p>}>
        {showModal && (
          <LazyModal
            message="Lazy loaded only when needed"
            onClose={handleClose}
          />
        )}
      </Suspense>
    </div>
  );
}
