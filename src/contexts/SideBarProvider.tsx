import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { IDefaultContextProps } from './types';

export interface SidebarContextProps {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
  sectionActiveSideBar: string;
  setSectionActiveSideBar: Dispatch<SetStateAction<string>>;
}

const SideBarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps
);

const SideBarProvider = ({ children }: IDefaultContextProps) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [sectionActiveSideBar, setSectionActiveSideBar] = useState<string>('');

  return (
    <SideBarContext.Provider
      value={{
        isSideBarOpen,
        setIsSideBarOpen,
        sectionActiveSideBar,
        setSectionActiveSideBar,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

const useSideBar = (): SidebarContextProps => {
  const context = useContext(SideBarContext);

  if (!context) {
    throw new Error('useSidebar must be used within an SidebarProvider');
  }

  return context;
};

export { SideBarProvider, useSideBar };
