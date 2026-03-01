"use client";

import { useEffect } from "react";

export default function ConsoleArt() {
  useEffect(() => {
    const art = `
█░░ ▄▀█ █▀▄▀█ █▄▄ █▀▄ ▄▀█
█▄▄ █▀█ █░▀░█ █▄█ █▄▀ █▀█

██╗██╗████████╗██╗  ██╗
██║██║╚══██╔══╝██║  ██║
██║██║   ██║   ███████║
██║██║   ██║   ██╔══██║
██║██║   ██║   ██║  ██║
╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝
`;

    console.log(
      "%c" + art,
      "color: #9433EC; font-family: monospace; font-size: 16px; line-height: 1.2; font-weight: bold;",
    );
  }, []);

  return null;
}
