import { useMobilePreview } from "@/contexts/MobilePreviewContext";

export function MobilePreviewFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mobilePreview } = useMobilePreview();

  if (!mobilePreview) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen w-full bg-muted/30 flex justify-center">
      <div className="w-[390px] min-h-screen bg-background shadow-xl">
        {children}
      </div>
    </div>
  );
}
