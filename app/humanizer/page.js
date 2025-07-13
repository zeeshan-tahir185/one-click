import TextGeneratorPage from "./index";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Free AI to Human Content Converter - No Errors | OneClickHuman",
  description: "Convert AI Content and make it human in just one click. This free to use tool, humanizes AI content and makes it undetectable.",
};

export default async function TextGeneratorLayout() {
  // Retrieve session server-side
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect(`/api/auth/signin?callbackUrl=${encodeURIComponent("/humanizer")}`);
  }

  return (
    <>
      <TextGeneratorPage />
    </>
  );
};
