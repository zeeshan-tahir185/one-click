import PublicPage from "@/components/cars24/PublicPage";

export const metadata = {
  title: "Login | Cars24 Clone",
  description: "Cars24-inspired login placeholder page for the rebuilt frontend clone.",
};

export default function SignInRoute() {
  return (
    <PublicPage
      eyebrow="Login"
      title="Access your Cars24 account"
      description="This frontend rebuild focuses on the public Cars24 experience. The sign-in route is styled to match the new clone and can be connected to your preferred authentication flow next."
      actions={[
        { label: "Browse used cars", href: "/buy-used-cars-dubai" },
        { label: "Go to homepage", href: "/", variant: "secondary" },
      ]}
    />
  );
}
