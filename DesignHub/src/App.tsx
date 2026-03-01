import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type{ RootState } from "./features/Store";
import { setUser, clearUser } from "./features/userSlice";
import { addFile } from "./features/fileSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const files = useSelector((state: RootState) => state.file.files);

  const handleLogin = () => {
    dispatch(setUser({ id: "1", name: "Nikhitha" }));
  };

  const handleAddFile = () => {
    dispatch(
      addFile({
        id: Date.now().toString(),
        name: "New File",
        content: "File Content",
      })
    );
  };

  return (
    <div>
      <h2>User</h2>
      {user ? (
        <div>
          <p>{user.name}</p>
          <button onClick={() => dispatch(clearUser())}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      <h2>Files</h2>
      <button onClick={handleAddFile}>Add File</button>

      <ul>
        {files.map((file) => (
          <li key={file.id}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// run this command : npm install @reduxjs/toolkit react-redux, npm install -D @types/react-redux