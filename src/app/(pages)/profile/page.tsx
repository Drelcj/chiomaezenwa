import { Metadata } from 'next';
import React from 'react';
import { redirect } from 'next/navigation';
import getSession from "@/lib/getSession";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile page",
};

export default async function page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }  

//   return <ProfilePage(If i create a different profile component) user={user} /> ;

return (
    <div className="mx-auto my-10 space-y-3">
        <h1 className="text-3xl font-bold">Update your profile here</h1>
        <p> Work in progress</p>
    </div>
)
}
