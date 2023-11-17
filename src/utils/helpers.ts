import { cookies } from "next/headers";

export const isLoggedIn = () => {
  const isLoggedIn = cookies().get("loggedIn");
  return isLoggedIn?.value === "true";
};
