import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Divider() {
  return (
    <div className="flex w-full flex-col">
      <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
        <Navbar />
      </div>
      <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
        <Hero />
      </div>
    </div>
  );
}
