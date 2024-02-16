import { auth } from "@/auth.config";
import { Title } from "@/components";
import Image from "next/image";
import { redirect } from "next/navigation";
import { IoCameraOutline } from "react-icons/io5";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth/login?returnTo=/profile");
  }
  const { user } = session;
  return (
    <>
      <Title>Profile</Title>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={user.image ?? "/images/person.png"}
          alt="Profile Image"
          width={100}
          height={100}
          className="rounded-full object-cover w-32 h-32 bg-gray-200"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 flex justify-center items-center">
          <IoCameraOutline size={20} className="mr-2 inline-block" />
          Change Image
        </button>
      </div>
      <h3 className="text-2xl font-bold">Name</h3>
      <p>{user.name}</p>
      <h3 className="text-2xl font-bold">Email</h3>
      <p>{user.email}</p>
    </>
  );
}
