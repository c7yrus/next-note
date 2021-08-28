import Link from "next/link";

const Main = () => {
  const title = "Index Page";
  return (
    <div>
      <h1>{title}</h1>
      <br />
      <Link href="/notes">
        <a>{`Note`}</a>
      </Link>
    </div>
  );
};

export default Main;
