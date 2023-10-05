'use client';

export default function InfoSection({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-evenly items-center lg:flex-row lg:gap-96 md:flex-row md:gap-10 sm:flex-col gap-10 flex-col">{children}</div>;
}
