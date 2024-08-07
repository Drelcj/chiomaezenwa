import { Metadata } from "next";
import { redirect } from "next/navigation";
import getSession from "@/lib/getSession";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CreatePost from "./CreatePost";

export const metadata: Metadata = {
  title: "Admin",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;
  

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

//   return <AdminPage user={user} />;

  if (user.role !== "admin") {
    return (
        <main className="mx-auto my-10" >
            <p className="text-center"> You are not authorised to view this page</p>
        </main>
    );
  }

  return (
    <main className="mx-auto my-10 space-y-3">
      <h1 className="text-center text-xl font-bold">Admin Page</h1>
      <p className="text-center">Welcome admin,  <CreatePost /> </p>
      
    </main>
  );
}
