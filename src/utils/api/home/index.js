import { GET } from "../../axios";

export const homeGetHomeData = opt => {
  const _opt = {
    url: `/home/getHomeData`,
    ...opt
  };
  return GET(_opt);
};
