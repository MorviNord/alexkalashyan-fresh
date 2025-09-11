import { resumeData } from "../constants/ResumeData.tsx";
import { ArrowIcon } from "../static/Icon/arrow.tsx";
import ExperienceSection from "../components/ExperienceSection.tsx";
import Footer from "../components/Footer.tsx";

export default function About() {
  return (
    <>
      <section class="text-white">
        <a class="flex mt-8" href="/">
          <ArrowIcon />
          Home
        </a>
        <div class="mt-12">
          <h2 class="font-bold text-3xl">{resumeData.name}</h2>
        </div>
        <div class="mt-4 flex flex-col gap-2">
          <h2 class="text-2xl">{resumeData.title}</h2>
          <p class="font-mono">{resumeData.summary}</p>
        </div>
        <div class="flex flex-col gap-3 mt-3">
          <h3 class="text-2xl text-gray-500 font-bold">Технические навыки</h3>
          <ul>
            <span class="text-blue">Инструменты:</span>
            {resumeData.skills.util.map((item, index) => (
              <li key={index}>
                — {item}
              </li>
            ))}
          </ul>
          <ul>
            <span class="text-blue">Web:</span>
            {resumeData.skills.web.map((item, index) => (
              <li key={index}>
                — {item}
              </li>
            ))}
          </ul>
          <div class="flex flex-col gap-3">
            <h3 class="text-2xl text-gray-500 font-bold">Социальные навыки</h3>
            <ul>
              {resumeData.skills.social.map((item, index) => (
                <li key={index}>
                  — {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ExperienceSection />
      <Footer />
    </>
  );
}
