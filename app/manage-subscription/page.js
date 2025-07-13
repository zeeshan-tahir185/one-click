import ManageSubscriptionPage from "./index";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Manage Subscription | One Click Human",
  description: "",
};

export default async function ManageSubscriptionLayout() {
      // Retrieve session server-side
      const session = await getServerSession(authOptions);
      if (!session) {
        redirect(`/api/auth/signin?callbackUrl=${encodeURIComponent("/manage-subscription")}`);
      }
  return (
    <>
      <ManageSubscriptionPage />
    </>
  );
};
