"use client";

import { PAGES } from "@/config/pages.config";
import { useRouter } from "next/navigation";
export function ProfileFake() {
  const router = useRouter();
  return (
    <div>
      {" "}
      <h1 className="text-3xl font-bold mb-6">Profile Fake</h1>
      <button onClick={() => router.push(PAGES.HOME)}></button>
    </div>
  );
}
