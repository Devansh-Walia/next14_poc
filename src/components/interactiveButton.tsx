"use client";

import { useState } from "react";

type Props = {};

export const InteractiveButton = (props: Props) => {
  const [isClient, setIsClient] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        setIsClient((prev) => !prev);
      }}
    >
      {isClient ? "Client" : "Server"}
    </button>
  );
};
