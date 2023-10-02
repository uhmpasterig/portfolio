import List from '../List';
import ListItem from '../ListItem';
import { ListItemInfo } from '@/types/ListItemInfo';

export default function Languages() {
  const skills: ListItemInfo[] = [
    {
      name: "Lua",
      description: "A powerful, efficient, lightweight, embeddable scripting language.",
      tags: ["Language", "Backend"],
      image: "/icons/lua.png",
      url: "https://www.lua.org/",
      className: "hover:bg-blue-900/20 hover:border-blue/50"
    },
  ];

  return (
    <List listItems={skills} />
  );
}
