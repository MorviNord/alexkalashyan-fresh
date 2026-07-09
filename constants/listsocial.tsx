// listsocial.tsx
import { TelegramIcon } from "../components/icons/social/telegram.tsx";
// import { InstagramIcon } from "../components/icons/social/Instagram.tsx";
import { GiteaIcon } from "../components/icons/social/gitea.tsx";

const social = [
  {
    id: 1,
    icon: <TelegramIcon />,
    link: "https://t.me/technoflexer",
    label: "Написать в Telegram",
  },
  {
    id: 2,
    icon: <GiteaIcon />,
    link: "https://github.com/MorviNord?tab=repositories",
    label: "Посмотреть github",
  },
];

export default social;
