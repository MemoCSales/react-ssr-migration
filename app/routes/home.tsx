import { HeaderSection } from "src/components/HeaderSection/HeaderSection";
import { LatestFromKotlinSection } from "src/components/LatestFromKotlinSection/LatestFromKotlinSection";
import { StartSection } from "src/components/StartSection/StartSection";
import { UsageSection } from "src/components/UsageSection/UsageSection";
import { WhyKotlinSection } from "src/components/WhyKotlinSection/WhyKotlinSection";

export default function HomePage() {
  return (
    <>
      <HeaderSection />
      <LatestFromKotlinSection />
      <WhyKotlinSection />
      <UsageSection />
      <StartSection />
    </>
  )
}