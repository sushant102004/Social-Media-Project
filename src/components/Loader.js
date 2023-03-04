import React from "react";

export default function Loader() {
  return (
    <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
      <div className="h-20 w-20 border-solid border-8 rounded-full border-gray-300 border-t-gray-700 animate-spin"></div>
    </div>
  );
}
