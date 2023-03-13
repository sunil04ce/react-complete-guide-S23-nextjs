import Link from "next/link";
const NewsPage = () => {
  return (
    <>
      <h1>News page.</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great-framework">
            NextJs is a great framework
          </Link>
        </li>
        <li>Something else</li>
      </ul>
    </>
  );
};

export default NewsPage;
