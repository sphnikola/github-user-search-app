import { Body } from "./Body";
import { Navbar } from "./Navabr";

function App() {
  return (
    <>
      <div className="bg-[#f6f8ff]">
        <div className="grid place-content-center min-h-screen mx-auto max-w-3xl lg:max-6xl px-6 font-spaceMono">
          <Navbar />
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
