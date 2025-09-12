import { useTypeWriter } from "../utils/typeWriter.tsx";

export default function Header() {
  const displayText = useTypeWriter("Александр Калашян,", 190);

  return (
    <header class="flex flex-col items-center pt-14">
      <picture class="transition-opacity duration-300">
        <source
          srcset="/ava/ava.jxl"
          type="image/jxl"
        />
        <source
          srcset="/ava/ava.webp"
          type="image/webp"
        />
        <img
          src="/ava/ava.jpg"
          alt="avatar"
          className="rounded-2xl aspect-square w-36 h-36 object-cover"
        />
      </picture>
      <h1 class="max-w-2xs text-3xl mt-5 text-white">
        {displayText} <span class="text-blue">Project manager</span>
      </h1>
    </header>
  );
}
