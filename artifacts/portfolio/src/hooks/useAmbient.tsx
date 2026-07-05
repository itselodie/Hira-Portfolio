import { createContext, useContext, useState, ReactNode } from 'react';

type AmbientContextType = {
  ambientOn: boolean;
  toggleAmbient: () => void;
};

const AmbientContext = createContext<AmbientContextType | undefined>(undefined);

export function AmbientProvider({ children }: { children: ReactNode }) {
  const [ambientOn, setAmbientOn] = useState(true);

  const toggleAmbient = () => {
    setAmbientOn((prev) => !prev);
  };

  return (
    <AmbientContext.Provider value={{ ambientOn, toggleAmbient }}>
      {children}
    </AmbientContext.Provider>
  );
}

export function useAmbient() {
  const context = useContext(AmbientContext);
  if (context === undefined) {
    throw new Error('useAmbient must be used within an AmbientProvider');
  }
  return context;
}
