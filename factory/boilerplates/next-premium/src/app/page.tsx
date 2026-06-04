import { HeroEditorial } from "@/sections/hero/HeroEditorial";
import { heroData } from "@/data/hero";

export default function Home() {
  return (
    <main>
      <HeroEditorial {...heroData.editorial} />
    </main>
  );
}
