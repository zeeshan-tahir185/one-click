import ProfileDetailsPage from "./index";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Profile Details - OneClickHuman",
  description: "",
};

export default async function ProfileDetailsLayout() {
    // Retrieve session server-side
    const session = await getServerSession(authOptions);
    if (!session) {
      redirect(`/api/auth/signin?callbackUrl=${encodeURIComponent("/account")}`);
    }

  return (
    <>
      <ProfileDetailsPage />
    </>
  );
};
