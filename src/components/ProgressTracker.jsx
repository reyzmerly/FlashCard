import React from 'react';

function ProgressTracker({ progress }) {
  return (
    <div>
      <h3>Progress: {progress} cards viewed</h3>
    </div>
  );
}

export default ProgressTracker;