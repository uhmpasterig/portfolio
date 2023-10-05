import axios from 'axios';
import type { ListItemInfo } from '@/types/ListItemInfo';

export const getCmsData = async (): Promise<ListItemInfo[][]> => {
  const cmsData = await axios.get(
    process.env.NEXT_PUBLIC_CMS_URL +
      '?query=*%5B%5D%7B%0A++_type%2C%0A++name%2C%0A++description%2C%0A++color%2C%0A++tags%2C%0A++url%2C%0A++%27image%27%3A+image.asset-%3Eurl%0A%7D&perspective=published'
  );

  return [
    cmsData.data.result.filter((item: any) => item._type == 'language') as ListItemInfo[],
    // made a typo in the CMS, so I have to use 'frameworks' instead of 'framework' dont want to change it now :(
    cmsData.data.result.filter((item: any) => item._type == 'frameworks') as ListItemInfo[],
  ];
};
