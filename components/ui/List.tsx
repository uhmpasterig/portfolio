import { ListItemInfo } from '@/types/ListItemInfo';
import ListItem from './ListItem';

export default function List({ listItems }: { listItems: ListItemInfo[] }) {
  return (
    <ul className="w-full grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {listItems.map((listItem, index) => (
        <ListItem key={index} listItem={listItem} />
      ))}
    </ul>
  );
}
