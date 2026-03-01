import React, { useState, Suspense, lazy } from "react";
import ErrorBoundary from "./ErrorBoundary";

const ProfileSettings = lazy(() => import("./ProfileSettings"));

function ProfilePage() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={() => setShowSettings(true)}>Open Settings</button>

      {showSettings && (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading settings...</div>}>
            <ProfileSettings />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
}
export default ProfilePage;