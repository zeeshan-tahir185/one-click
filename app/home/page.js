import HomePage from "./index";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function HomePageLayout() {
        // Retrieve session server-side
        const session = await getServerSession(authOptions);
        if (session) {
          redirect('/humanizer');
        }
  return (
    <>
      <HomePage />
    </>
  );
};
