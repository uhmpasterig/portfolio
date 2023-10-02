import Greeting from '@/components/ui/Sections/Greeting/Greeting';
import Seperator from '@/components/layout/Seperator';
import SeperatorInfo from '@/components/layout/SeperatorInfo';
import AboutMe from '@/components/ui/Sections/AboutMe';
import SoftSkills from '@/components/ui/Sections/SoftSkills';
import axios from 'axios';
import List from '@/components/ui/List';
import type { ListItemInfo } from '@/types/ListItemInfo';

async function getListData() {
  const cmsData = await axios.get(
    process.env.NEXT_PUBLIC_CMS_URL +
      '?query=*%5B%5D%7B%0A++_type%2C%0A++name%2C%0A++description%2C%0A++color%2C%0A++tags%2C%0A++url%2C%0A++%27image%27%3A+image.asset-%3Eurl%0A%7D&perspective=published'
  );

  return [
    cmsData.data.result.filter((item: any) => item._type == 'language') as ListItemInfo[],
    // made a typo in the CMS, so I have to use 'frameworks' instead of 'framework'
    cmsData.data.result.filter((item: any) => item._type == 'frameworks') as ListItemInfo[],
  ];
}

export default async function Home() {
  const [languages, frameworks] = await getListData();
  return (
    <main className="flex flex-col items-center min-h-screen bg-black-900 selection:bg-purple-500/40 selection:text-purple-200 2xl:px-52 lg:px-32 md:px-40 sm:px-20 px-10">
      <Seperator className="2xl:mb-[30rem] lg:mb-[18rem]  lg:mt-16 mb-[12rem] mt-16" />
      <Greeting />
      <Seperator className="2xl:mt-[30rem] lg:mt-[18rem] mt-[12rem]" />
      <SeperatorInfo number={1} title="Who is Luca?" />
      <AboutMe />

      <Seperator className="mt-36" />
      <SeperatorInfo number={2} title="Languages" />
      <List listItems={languages} />

      <Seperator className="mt-36" />
      <SeperatorInfo number={3} title="Frameworks" />
      <List listItems={frameworks} />

      <Seperator className="mt-36" />
      <SeperatorInfo number={4} title="Tools & Technologies" />

      <Seperator className="mt-36" />
      <SeperatorInfo number={5} title="Why should u buy Luca?" />
      <SoftSkills />

      <div className="min-h-screen"></div>
    </main>
  );
}
