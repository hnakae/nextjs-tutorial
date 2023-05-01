import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HomePage = ({ data }) => (
  <div className="flex flex-col text-left p-32">
    <div className="text-4xl font-black mb-6">HOME</div>

    {data.map((ev) => (
      <Link
        key={ev.id}
        href={`/events/${ev.id}`}
        className="hover:outline mb-6"
      >
        <h2 className="text-lg font-bold"> {ev.title} </h2>
        <Image src={ev.image} alt={ev.title} width={300} height={300} />
        <p> {ev.description} </p>
      </Link>
    ))}
  </div>
);
