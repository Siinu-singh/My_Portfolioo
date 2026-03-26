'use client';

import React, { Suspense } from 'react';
// Removed Canvas import as a temporary step to ensure it's not the direct cause at import time.
// If this resolves the import error, the issue lies deeper within react-three/fiber setup or dependencies.
// import { Canvas } from '@react-three/fiber';
// import { Stars, OrbitControls } from '@react-three/drei';

// Simple Starry Background Component - Moved into its own client component
const StarryBackgroundClient = () => {
  // Temporarily return a simple div instead of Canvas to see if the error persists.
  // This helps isolate whether the error happens during component rendering or specifically due to Canvas.
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%', backgroundColor: 'black' }}>
      {/* Placeholder content */}
      <p style={{ color: 'white' }}>Starry Background Placeholder</p>
    </div>
  );

  /*
  // Original Canvas implementation (commented out for testing)
  return (
    <Canvas
      // camera={{ position: [0, 0, 1] }} // Keep camera settings if needed
      style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%' }}
    >
       { /* Temporarily remove all children to test basic Canvas rendering * / }
       { /*
       <Suspense fallback={null}>
         <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
         <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.2} />
       </Suspense>
       <ambientLight intensity={0.1} />
       <pointLight position={[10, 10, 10]} />
       * / }
    </Canvas>
  );
  */
};

export default StarryBackgroundClient;
