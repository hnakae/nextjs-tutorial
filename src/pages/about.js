import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <>
      <main className="flex flex-col text-left p-32">
        <div className="text-4xl font-black mb-6">ABOUT</div>
        <h1 className="text-lg font-bold">Events in London</h1>
        <p className="mb-6">
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem
          <br /> ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>

        <h2 className="text-lg font-bold">Events in San Francisco</h2>
        <p className="mb-6">
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem
          <br /> ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>

        <h2 className="text-lg font-bold">Events in Barcelona</h2>
        <p className="mb-6">
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem <br />
          ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>
      </main>
    </>
  );
};

export default about;
