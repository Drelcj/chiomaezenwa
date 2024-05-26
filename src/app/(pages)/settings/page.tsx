import { Metadata } from 'next';
import SettingsPage from "./SettingsPage";
import React from 'react'
import { redirect } from 'next/navigation';
import getSession from "@/lib/getSession";

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings page",
};

export default async function page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/settings");
  }  

  return <SettingsPage user={user} /> ;
}
