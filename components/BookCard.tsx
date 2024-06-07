import Icons from "@/lib/Icons";
import React from "react";

type BookProps = {
  title: string;
  image: () => string | null;
  editionCount: string;
};

const BookCard = (props: BookProps) => {
  let image = props.image();
  if (image == null) {
    image =
      "https://cdn.pixabay.com/photo/2013/07/13/13/34/book-161117_1280.png";
  }

  return (
    <div className="px-7 py-7 flex flex-col bg-secondary rounded drop-shadow-md">
      <img src={image} alt={props.title} className="rounded-md mx-auto h-64" />
      <div className="flex flex-grow justify-between gap-1 my-2">
        <h1 className="text-lg font-semibold">{props.title}</h1>
        <Icons.Bookmark />
      </div>

      <p className="flex  justify-between text-sm text-muted-foreground">
        <span>Edition Count</span>
        <span>{props.editionCount}</span>
      </p>
    </div>
  );
};

export default BookCard;
