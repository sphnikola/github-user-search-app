import { Body } from "./Body";
// import { Search } from "./Search";
import { Navbar } from "./Navabr";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="bg-[#f6f8ff]">
        <div className="grid place-content-center min-h-screen mx-auto max-w-3xl lg:max-6xl px-6 font-spaceMono">
          <Navbar />
          {/* <Search /> */}
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
