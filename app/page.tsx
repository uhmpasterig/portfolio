import Greeting from '@/components/ui/Sections/Greeting/Greeting';
import Seperator from '@/components/layout/Seperator';
import SeperatorInfo from '@/components/layout/SeperatorInfo';
import Frameworks from '@/components/ui/Sections/Frameworks';
import AboutMe from '@/components/ui/Sections/AboutMe';
import SoftSkills from '@/components/ui/Sections/SoftSkills';
import axios from 'axios';
import List from '@/components/ui/List';
import type { ListItemInfo } from '@/types/ListItemInfo';

async function getLanguageList(): Promise<ListItemInfo[]> {
  const languages = await axios.get(
    'https://x2qcnu3g.api.sanity.io/v2023-10-01/data/query/production?query=*%5B_type%3D%3D%22language%22%5D%7B%0A++name%2C%0A++description%2C%0A++className%2C%0A++tags%2C%0A++url%2C%0A++%27image%27%3A+image.asset-%3Eurl%0A%7D&perspective=published'
  );
  return languages.data.result as ListItemInfo[];
}

export default async function Home() {
  const languages = await getLanguageList();

  return (
    <main className="flex flex-col items-center min-h-screen bg-black-900 selection:bg-purple-500/40 selection:text-purple-200 lg:px-52 md:px-40 sm:px-20 px-10">
      <Seperator className="lg:mt-20 lg:mb-[30rem] mb-[19rem] mt-16" />
      <Greeting />
      <Seperator className="lg:mt-[30rem] mt-[19rem]" />
      <SeperatorInfo number={1} title="Who is Luca?" />
      <AboutMe />

      <Seperator className="mt-36" />
      <SeperatorInfo number={2} title="Languages" />
      <List listItems={languages} />

      <Seperator className="mt-36" />
      <SeperatorInfo number={3} title="Frameworks" />
      <Frameworks />

      <Seperator className="mt-36" />
      <SeperatorInfo number={4} title="Tools & Technologies" />
      
      <Seperator className="mt-36" />
      <SeperatorInfo number={5} title="Why should u buy Luca?" />
      <SoftSkills />

      <div className="min-h-screen"></div>
    </main>
  );
}
