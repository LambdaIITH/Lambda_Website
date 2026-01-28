"use client";

import { useEffect } from "react";

export default function ConsoleBanner() {
  useEffect(() => {
    console.clear();

    console.log(
      `%c██╗      █████╗ ███╗   ███╗██████╗ ██████╗  █████╗
%c██║     ██╔══██╗████╗ ████║██╔══██╗██╔══██╗██╔══██╗
%c██║     ███████║██╔████╔██║██████╔╝██║  ██║███████║
%c██║     ██╔══██║██║╚██╔╝██║██╔══██╗██║  ██║██╔══██║
%c███████╗██║  ██║██║ ╚═╝ ██║██████╔╝██████╔╝██║  ██║

%c██╗██╗████████╗██╗  ██╗
%c██║██║╚══██╔══╝██║  ██║
%c██║██║   ██║   ███████║
%c██║██║   ██║   ██╔══██║
%c██║██║   ██║   ██║  ██║
%c╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝`,
      // LAMBDA (5 lines)
      "color: #ffffff; font-size: 14px; line-height: 1.2;",
      "color: #ffffff; font-size: 14px; line-height: 1.2;",
      "color: #ffffff; font-size: 14px; line-height: 1.2;",
      "color: #ffffff; font-size: 14px; line-height: 1.2;",
      "color: #ffffff; font-size: 14px; line-height: 1.2;",
      // blank line + IITH (6 lines)
      "color: #ffffff; font-size: 13px; line-height: 1.2;",
      "color: #ffffff; font-size: 13px; line-height: 1.2;",
      "color: #ffffff; font-size: 13px; line-height: 1.2;",
      "color: #ffffff; font-size: 13px; line-height: 1.2;",
      "color: #ffffff; font-size: 13px; line-height: 1.2;",
      "color: #ffffff; font-size: 13px; line-height: 1.2;",
    );
  }, []);

  return null;
}
