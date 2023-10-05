// Components
import Greeting from '@/components/ui/Sections/Greeting/Greeting';
import Seperator from '@/components/layout/Seperator';
import SeperatorInfo from '@/components/layout/SeperatorInfo';
import AboutMe from '@/components/ui/Sections/AboutMe';
import SoftSkills from '@/components/ui/Sections/SoftSkills';
import List from '@/components/ui/List';

// Utils
import { getCmsData } from '@/utils/cms-getter';

export default async function Home() {
  const [languages, frameworks] = await getCmsData();
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
      <SeperatorInfo number={5} title="Why should u Hire me?" />
      <SoftSkills />

      <div className="h-96"></div>
    </main>
  );
}
