import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <Link to="/analytics">Go to Analytics</Link>
      <br />
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
}