import BackToTop from "./backToTop";
import HomePage from "./home/page";

export const metadata = {
  title: "Free AI to Human Content Converter - No Errors | OneClickHuman",
  description: "Convert AI Content and make it human in just one click. This free to use tool, humanizes AI content and makes it undetectable.",
};

export default async function Home() {

  return (
    <main>
      <HomePage />
      <BackToTop />
    </main>
  );
}
