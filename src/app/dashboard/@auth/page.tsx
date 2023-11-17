import { InteractiveButton } from "@/components/interactiveButton";
import { cookies } from "next/headers";
type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <h1>Login</h1>
      <form
        action={async () => {
          "use server";
          cookies().set("loggedIn", "true");
        }}
      >
        <button>Login</button>
      </form>

      <InteractiveButton />
    </div>
  );
};

export default Page;
