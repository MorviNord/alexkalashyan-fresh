import { useSignal } from "@preact/signals";
import { LinkIcon } from "../static/Icon/link.tsx";
import { InterestsData } from "../constants/InterestsData.tsx";
import { tabs } from "../constants/Tabs.tsx";

export default function Tabs() {
  const activeTab = useSignal(1);

  return (
    <section class="text-gray-900 mt-8 w-full">
      <div class="flex p-1 bg-gray-300 rounded-xl gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => activeTab.value = tab.id}
            type="button"
            class={`cursor-pointer flex-1 rounded-lg py-0.5 transition-colors ${
              activeTab.value === tab.id ? "bg-blue" : "hover:bg-gray-400"
            }`}
            aria-pressed={activeTab.value === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div class="mt-4 text-black">
        <ul class="flex flex-col gap-2 w-full">
          {activeTab.value === 1 &&
            (InterestsData.map((item) => (
              <li
                class="bg-gray-200 hover:bg-gray-300 rounded-lg"
                key={item.id}
              >
                <a
                  class="flex justify-between items-center py-3 px-3"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                  <LinkIcon />
                </a>
              </li>
            )))}
        </ul>

        {activeTab.value === 2 &&
          (
            <div class="text-white">
              <p>Скоро...</p>
            </div>
          )}
      </div>
    </section>
  );
}
