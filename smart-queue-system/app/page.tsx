import HeaderPage from "./queue/page";
import connectDB from "../config/database"

export default function Home() {
  connectDB(); // test DB connection
  return (
    <div>
      <HeaderPage />
    </div>
  );
}
