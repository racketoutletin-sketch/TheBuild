import * as V1UI from "../components/v1/";
import * as V2UI from "../components/v2/";
import * as V3UI from "../components/v3/";
import { useVersion } from "@/context/VersionContext";

export const useUIComponents = () => {
  const { version } = useVersion();
  if (version === "v1") return V1UI;
  if (version === "v2") return V2UI;
  return V3UI;
};
