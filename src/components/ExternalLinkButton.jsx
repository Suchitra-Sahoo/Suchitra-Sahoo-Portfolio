import React from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function ExternalLinkButton({ text = "Open Link" }) {
  return (
    <a className="w-36 text-md group flex items-center justify-center gap-1 rounded border border-cyan-500 px-3 py-2 text-white hover:cursor-pointer hover:text-yellow-300">
      <span>{text}</span>
      <ArrowTopRightIcon
        height={20}
        width={20}
        className="opacity-75 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-yellow-300 group-hover:opacity-100"
      />
    </a>
  );
}
