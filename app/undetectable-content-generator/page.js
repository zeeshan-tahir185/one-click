import UndetectableContentGenerator from "./index";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Undetectable Content generator | OneClickHuman",
  description: "",
};

export default async function UndetectableContentGeneratorLayout() {
      // Retrieve session server-side
      const session = await getServerSession(authOptions);
      if (!session) {
        redirect(`/api/auth/signin?callbackUrl=${encodeURIComponent("/undetectable-content-generator")}`);
      }
  return (
    <>
      <UndetectableContentGenerator />
    </>
  );
};
