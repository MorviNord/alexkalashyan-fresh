import Header from "../../islands/Header.tsx";
import { Interests } from "../../components/sections/Interests.tsx";
import ResumeButton from "../../components/sections/ResumeButton.tsx";
import SocialLinks from "../../components/sections/SocialLinks.tsx";
import Welcome from "../../components/sections/Welcome.tsx";
import Footer from "../../components/layout/Footer.tsx";
import Tabs from "../../islands/Tabs.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <main class="x-4 mx-auto flex flex-col items-center mb-8">
        <Welcome />
        <Interests />
        <ResumeButton />
        <SocialLinks />
        <Tabs />
      </main>
      <Footer />
    </>
  );
}
