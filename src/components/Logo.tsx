export function Logo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div className="flex items-center justify-center m-0 p-0">
      {collapsed ? (
        <div className="flex h-9 w-9 items-center justify-center overflow-hidden p-0">
          <img
            src="/logo.png"
            alt="TravelCorp"
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        <img
          src="/logo.png"
          alt="TravelCorp"
          className="h-10 w-auto object-contain"
        />
      )}
    </div>
  );
}
