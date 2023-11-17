import { cookies } from "next/headers";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <h1>analytics</h1>
      <form
        action={async () => {
          "use server";
          cookies().set("loggedIn", "false");
        }}
      >
        <button>Logout</button>
      </form>
    </div>
  );
};

export default Page;
