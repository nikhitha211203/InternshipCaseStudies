import React from "react";
 function ProfileSettings() {
  return (
    <div>
      <h2>Profile Settings</h2>
      <form>
        <div>
          <label>
            Username:
            <input type="text" placeholder="Enter username" />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" placeholder="Enter email" />
          </label>
        </div>
        <div>
          <label>
            Theme:
            <select>
              <option>Light</option>
              <option>Dark</option>
            </select>
          </label>
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}
export default ProfileSettings;