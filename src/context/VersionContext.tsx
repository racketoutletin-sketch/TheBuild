import { createContext, useContext, useState, ReactNode } from "react";

type VersionType = "v1" | "v2" | "v3";

interface VersionContextType {
  version: VersionType;
  setVersion: (v: VersionType) => void;
}

const VersionContext = createContext<VersionContextType | undefined>(undefined);

export const VersionProvider = ({ children }: { children: ReactNode }) => {
  const [version, setVersion] = useState<VersionType>("v1");

  return (
    <VersionContext.Provider value={{ version, setVersion }}>
      {children}
    </VersionContext.Provider>
  );
};

export const useVersion = () => {
  const context = useContext(VersionContext);
  if (!context) throw new Error("useVersion must be used within VersionProvider");
  return context;
};
