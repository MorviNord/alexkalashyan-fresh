// listsocial.tsx
import { TelegramIcon } from "../static/Icon/social/telegram.tsx";
import { InstagramIcon } from "../static/Icon/social/Instagram.tsx";
import { GiteaIcon } from "../static/Icon/social/gitea.tsx";

const social = [
  {
    id: 1,
    icon: <TelegramIcon />,
    link: "https://t.me/abbascool",
    label: "Написать в Telegram",
  },
  {
    id: 2,
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/abbasnord/",
    label: "Instagram",
  },
  {
    id: 3,
    icon: <GiteaIcon />,
    link: "https://github.com/MorviNord?tab=repositories",
    label: "Посмотреть github",
  },
];

export default social;
