import AllEvents from "@/components/events/events-page";

import React from "react";

const events = ({ data }) => {
  return <AllEvents data={data} />;
};

export default events;

export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");
  // console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
