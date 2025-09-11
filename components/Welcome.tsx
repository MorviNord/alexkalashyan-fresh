import { StarIcon } from "../static/Icon/star.tsx";

export default function Welcome() {
  return (
    <section class="mt-8 flex gap-3 bg-purple-100 rounded-2xl px-4 py-4 text-black max-w-md">
      <StarIcon className="flex-shrink-0" />
      <div>
        <h2 class="font-bold">#morvicool</h2>
        <p class="mt-2 text-sm text-gray-600">
          Привет!
          <br />
          Я ПМ команды разработки, занимаюсь управлением проектов и их
          поддержкой. В свободное время увлекаюсь разработкой веб-сайтов и
          изучаю ведение проектов.
        </p>
      </div>
    </section>
  );
}
