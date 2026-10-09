import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects by Diptanil Sarkar: Expenzo, ShopHub and FitBuddy.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="pt-16">
      <Projects standalone />
    </div>
  );
}
