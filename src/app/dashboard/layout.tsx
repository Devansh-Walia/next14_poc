import { isLoggedIn } from "@/utils/helpers";

export default function Layout(props: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  auth: React.ReactNode;
}) {
  const isUserLoggedIn = isLoggedIn();

  return isUserLoggedIn ? props.analytics : props.auth;
}
