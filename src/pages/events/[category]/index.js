import CategoryEvent from "@/components/events/categoryEvent";

import React from "react";

const eventsPerCity = ({ data, pageName }) => {
  return <CategoryEvent data={data} pageName={pageName} />;
};

export default eventsPerCity;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");
  // console.log(events_categories);
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        category: ev.id.toString(),
      },
    };
  });
  // console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  const id = context?.params.category;
  const { all_events } = await import("../../../data/data.json");
  const data = all_events.filter((ev) => ev.city === id);
  // console.log(data);
  return {
    props: { data, pageName: id },
  };
}
