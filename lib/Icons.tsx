"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

type Props = {
  width: number;
  height: number;
};

const Bookmark = ({ onClick }: { onClick: () => void }) => {
  const [color, setColor] = useState("none");
  return (
    <div
      onClick={() => {
        if (color === "#6d28d9") {
          setColor("none");
        } else {
          setColor("#6d28d9");
        }
        onClick();
      }}
      title="Save"
      className="hover:cursor-pointer"
    >
      <svg
        xlinkTitle="Save"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill={color}
        stroke="#6d28d9"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-bookmark"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      </svg>
    </div>
  );
};
const Bookmark2 = ({ onClick }: { onClick: () => void }) => {
  const [color, setColor] = useState("#6d28d9");
  return (
    <div
      onClick={() => {
        if (color === "#6d28d9") {
          setColor("none");
        } else {
          setColor("#6d28d9");
        }
        onClick();
      }}
      title="Save"
      className="hover:cursor-pointer"
    >
      <svg
        xlinkTitle="Save"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill={color}
        stroke="#6d28d9"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-bookmark"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      </svg>
    </div>
  );
};
const Library = () => {
  return (
    <Button variant={"outline"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-library"
      >
        <path d="m16 6 4 14" />
        <path d="M12 6v14" />
        <path d="M8 8v12" />
        <path d="M4 4v16" />
      </svg>
    </Button>
  );
};

const BookmarkCheck = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-bookmark-check"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
      <path d="m9 10 2 2 4-4" />
    </svg>
  );
};
const Icons = {
  Bookmark,
  Bookmark2,
  BookmarkCheck,
  Library,
};

export default Icons;
