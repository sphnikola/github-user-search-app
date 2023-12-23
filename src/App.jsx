import { Body } from "./Body";
// import { Search } from "./Search";
import { Navbar } from "./Navabr";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="grid place-content-center min-h-screen mx-auto max-w-3xl lg:max-6xl px-6 ">
        <Navbar />
        {/* <Search /> */}
        <Body />
      </div>
    </>
  );
}

export default App;
