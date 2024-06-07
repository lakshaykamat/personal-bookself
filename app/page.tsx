"use client";
import useSWR from "swr";
import { Input } from "@/components/ui/input";
import Icons from "@/lib/Icons";
import { useState, useEffect } from "react";
import BookCard from "@/components/BookCard";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    const result = res.json();
    console.log(result);
    return result;
  });
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [data, setData] = useState(undefined);
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  // Debounce the search term to avoid excessive API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // Delay of 500ms

    // Cleanup the timeout if searchTerm changes
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Fetch data using the debounced search term
  const encodedTerm = convertToURLEncoded(debouncedTerm);
  const { data, error, isLoading } = useSWR(
    encodedTerm
      ? `https://openlibrary.org/search.json?q=${encodedTerm}&limit=10&page=1`
      : null,
    fetcher
  );

  function convertToURLEncoded(input: string): string {
    return input.replace(/%20/g, "+");
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(convertToURLEncoded(event.target.value));
  };

  return (
    <main className="mx-7 xl:max-w-5xl xl:mx-auto">
      <h1 className="text-4xl my-7 font-bold text-center ">
        Personal Bookself
      </h1>
      <Input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {isLoading && <h1 className="">Loading...</h1>}
      {data && (
        <div className="my-7">
          <h2 className="mb-3 font-semibold text-xl">
            Search results for {data.q}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            {data.docs.map((item: any, i: number) => (
              <BookCard
                key={i}
                title={item.title}
                image={() => {
                  if (item.cover_edition_key) {
                    return `https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`;
                  } else {
                    return null;
                  }
                }}
                editionCount={item.edition_count}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};
export default HomePage;
