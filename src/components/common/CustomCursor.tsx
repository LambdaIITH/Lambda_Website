"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      className="fixed z-9999 pointer-events-none"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-10%, -10%)", // tweak cursor tip position
      }}
    >
      <Image
        src="/custom_cursor/cursor.png"
        alt="cursor"
        width={32}
        height={32}
        priority
      />
    </div>
  );
}
