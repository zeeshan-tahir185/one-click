import PublicPage from "@/components/cars24/PublicPage";

export const metadata = {
  title: "Create account | Cars24 Clone",
  description: "Join the Cars24-inspired frontend experience.",
};

export default function SignUpPage() {
  return (
    <PublicPage
      eyebrow="Create account"
      title="Create your account to continue"
      description="Set up an account to save cars, track bookings, and continue your buy or sell journey inside this Cars24-inspired frontend clone."
      actions={[
        { label: "Browse used cars", href: "/buy-used-cars-dubai" },
        { label: "Sign in instead", href: "/signin", variant: "secondary" },
      ]}
    />
  );
}
