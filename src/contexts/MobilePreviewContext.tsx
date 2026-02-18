import { createContext, useContext, useState } from "react";

type MobilePreviewContextType = {
  mobilePreview: boolean;
  toggleMobilePreview: () => void;
};

const MobilePreviewContext = createContext<MobilePreviewContextType | null>(
  null
);

export function MobilePreviewProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobilePreview, setMobilePreview] = useState(false);

  const toggleMobilePreview = () => {
    setMobilePreview((v) => !v);
  };

  return (
    <MobilePreviewContext.Provider
      value={{ mobilePreview, toggleMobilePreview }}
    >
      {children}
    </MobilePreviewContext.Provider>
  );
}

export function useMobilePreview() {
  const ctx = useContext(MobilePreviewContext);
  if (!ctx) throw new Error("useMobilePreview must be used inside provider");
  return ctx;
}
