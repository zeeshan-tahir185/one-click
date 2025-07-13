import StyleGuidePage from "./index";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata = {
  title: "API || OneClickHuman",
  description: "",
};

export default async function StyleGuideLayout() {
      // Retrieve session server-side
      const session = await getServerSession(authOptions);
      if (!session) {
        redirect(`/api/auth/signin?callbackUrl=${encodeURIComponent("/developer/api")}`);
      }

  return (
    <>
      <StyleGuidePage />
    </>
  );
};
