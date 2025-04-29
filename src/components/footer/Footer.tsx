import React from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="bg-black text-white flex px-64 h-40 items-center justify-center">
      <p>© CekDaunTeh {currentYear}</p>
    </div>
  );
}
