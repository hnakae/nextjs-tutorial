import SingleEvent from "@/components/events/single-event";
import Image from "next/image";
import React from "react";

const event = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default event;

export async function getStaticPaths() {
  const data = await import("../../../data/data.json");
  const allEvents = data.all_events;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        category: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { all_events } = await import("../../../data/data.json");
  const eventData = all_events.find((ev) => id === ev.id);

  return {
    props: { data: eventData },
  };
}
