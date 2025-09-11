import Header from "../islands/Header.tsx";
import { Interests } from "../components/Interests.tsx";
import ResumeButton from "../components/ResumeButton.tsx";
import SocialLinks from "../components/SocialLinks.tsx";
import Welcome from "../components/Welcome.tsx";
import Footer from "../components/Footer.tsx";
import Tabs from "../islands/Tabs.tsx";

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
