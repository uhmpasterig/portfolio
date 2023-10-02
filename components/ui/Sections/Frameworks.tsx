import List from '../List';
import ListItem from '../ListItem';
import { ListItemInfo } from '@/types/ListItemInfo';

export default function Frameworks() {
  const skills: ListItemInfo[] = [
    {
      name: 'Next.js',
      description: 'The React Framework for Production.',
      tags: ['Web', 'Js/Ts','Framework', 'Frontend', 'Backend'],
      image: '/icons/typescript.png',
      url: 'https://nextjs.org/',
      className: 'hover:bg-neutral-950',
    },
    {
      name: 'Svelte & SvelteKit',
      description: 'Cybernetically enhanced web apps.',
      tags: ['Web', 'Js/Ts','Framework', 'Frontend', 'Backend'],
      image: '/icons/typescript.png',
      url: 'https://svelte.dev/',
      className: 'hover:bg-red-500/20 hover:border-red/50',
    },
    {
      name: 'Nest.js',
      description: 'A progressive Node.js framework for efficient and scalable server-side applications.',
      tags: ['Js/Ts', 'Framework', 'Backend'],
      image: '/icons/typescript.png',
      url: 'https://nestjs.com/',
      className: 'hover:bg-pink-500/20 hover:border-pink/50',
    },
    {
      name: 'Prisma',
      description: 'Next-generation Node.js and TypeScript ORM for PostgreSQL, MySQL, MariaDB, etc.',
      tags: ['Js/Ts', 'Framework', 'Database'],
      image: '/icons/typescript.png',
      url: 'https://prisma.io/',
      className: 'hover:bg-green-950/20 hover:border-green/50',
    },
    {
      name: 'React',
      description: 'A JavaScript library for building user interfaces.',
      tags: ['Web', 'Js/Ts','Framework', 'Frontend'],
      image: '/icons/typescript.png',
      url: 'https://reactjs.org/',
      className: 'hover:bg-blue-500/20 hover:border-blue/50',
    },
    {
      name: 'TailwindCSS',
      description: 'A utility-first CSS framework for rapid UI development.',
      tags: ['Web', 'Framework', 'Frontend'],
      image: '/icons/typescript.png',
      url: 'https://tailwindcss.com/',
      className: 'hover:bg-emerald-800/20 hover:border-emerald/50',
    },
    {
      name: 'Entity Framework Core',
      description: 'A modern object-database mapper for .NET.',
      tags: ['C#', 'Framework', 'Database'],
      image: '/icons/typescript.png',
      url: 'https://docs.microsoft.com/en-us/ef/core/',
      className: 'hover:bg-purple-500/20 hover:border-purple/50',
    },
    {
      name: 'WinForms',
      description: 'A graphical (GUI) class library included as a part of Microsoft .NET Framework.',
      tags: ['C#', 'Framework', 'Frontend'],
      image: '/icons/typescript.png',
      url: 'https://docs.microsoft.com/en-us/dotnet/desktop/winforms/?view=netdesktop-5.0',
      className: 'hover:bg-blue-500/20 hover:border-blue/50',
    },
    {
      name: 'WPF',
      description: 'A graphical subsystem for rendering user interfaces in Windows-based applications.',
      tags: ['C#', 'Framework', 'Frontend'],
      image: '/icons/typescript.png',
      url: 'https://docs.microsoft.com/en-us/dotnet/desktop/wpf/?view=netdesktop-5.0',
      className: 'hover:bg-blue-500/20 hover:border-blue/50',
    },
    {
      name: 'ASP.NET Core',
      description: 'A cross-platform, high-performance, framework for building modern, cloud-based applications.',
      tags: ['C#', 'Framework', 'Backend'],
      image: '/icons/typescript.png',
      url: 'https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-5.0',
      className: 'hover:bg-blue-500/20 hover:border-blue/50',
    },
  ];

  return <List listItems={skills} />;
}
