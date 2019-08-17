import { GET } from "../../axios";

export const myGetHomeList = opt => {
  const _opt = {
    url: `/gethomelist`,
    ...opt
  };
  return GET(_opt);
};
