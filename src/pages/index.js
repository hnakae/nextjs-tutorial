import { HomePage } from "@/components/home/home-page";

//map through data and display data.title

export default function Home({ data }) {
  return (
    <>
      <HomePage data={data} />
    </>
  );
}

// You should use 'getServerSideProps' only if you need to render a page whose data must be fetched at request time. Otherwise, consider client side or 'getStaticProps'. So here, we are using 'getServerSideProps' to showcase how to use it. But in reality, we should use 'getStaticProps' instead. 'getStaticProps' is faster than 'getServerSideProps' because it does not have to fetch data at request time. It fetches data at build time. So, if you have a page that does not need to fetch data at request time, then you should use 'getStaticProps' instead of 'getServerSideProps'.
export async function getServerSideProps() {
  const { events_categories } = await import("../data/data.json");
  //const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //const data = await res.json();
  //
  //const userId = new Cookies(req, res).get('user_id');
  //const projects = await new Promise((resolve, reject) =>
  //pool.query(
  //  SQL`SELECT id, name FROM projects WHERE user_id = ${userId};`,
  //  (err, results) => (err ? reject(err) : resolve(results))
  //)
  //);
  // console.log(data);
  return {
    props: {
      data: events_categories,
      //{projects}
    },
  };
}
