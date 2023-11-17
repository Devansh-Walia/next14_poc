import Image from "next/image";

export default function SimpleForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    console.log("on server", formData);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        action={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <Image
          src="/next.svg"
          alt="Logo"
          width={150}
          height={150}
          className="mb-4"
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md p-2 mb-4 text-black"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md p-2 mb-4 text-black"
        />
        <button className="w-full bg-blue-400 text-white rounded-md p-2 mb-4">
          Login
        </button>
      </form>
    </main>
  );
}
