import BackToTop from "../backToTop";
import PricingPage from "./index";

export const metadata = {
  title: "Pricing | OneClickHuman",
  description: "",
};

const PricingLayout = () => {
  return (
    <>
      <PricingPage />

      <BackToTop />
    </>
  );
};

export default PricingLayout;
