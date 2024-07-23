import Register from "./register/page";
import Connect from "@/db/db";

export default function Home() {

  Connect()

  return (
    <main >
      <Register></Register>
    </main>
  );
}
