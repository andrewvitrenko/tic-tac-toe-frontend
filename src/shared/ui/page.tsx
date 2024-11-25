import { FC, PropsWithChildren } from 'react';

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return <div className="size-full p-4">{children}</div>;
};
