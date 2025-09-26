import { useVersion } from "@/context/VersionContext";

const Navbar = () => {
  const { version, setVersion } = useVersion();

  return (
    <div className="fixed top-24 right-4 z-50">
      <nav className="flex gap-2 p-2 bg-background border border-border rounded-md shadow-md">
        <button
        onClick={() => setVersion("v1")}
          className={`px-3 py-1 rounded text-sm ${version === "v1" ? "bg-primary text-white" : "bg-muted"}`}
      >
        v1
      </button>
      <button
        onClick={() => setVersion("v2")}
          className={`px-3 py-1 rounded text-sm ${version === "v2" ? "bg-primary text-white" : "bg-muted"}`}
      >
        v2
      </button>
      <button
        onClick={() => setVersion("v3")}
          className={`px-3 py-1 rounded text-sm ${version === "v3" ? "bg-primary text-white" : "bg-muted"}`}
      >
        v3
      </button>
    </nav>
    </div>
  );
};

export default Navbar;
