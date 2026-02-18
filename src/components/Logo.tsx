export function Logo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div className=" m-0 p-0">
      {collapsed ? (
        <div className="flex h-9 w-9 items-center justify-center overflow-hidden p-0">
          <img
            src="/logo.png"
            alt="TravelCorp"
            className="w-full object-contain"
          />
        </div>
      ) : (
        <img
          src="/logo.png"
          alt="TravelCorp"
          className="w-full object-contain"
        />
      )}
    </div>
  );
}
