import { redirect } from "next/navigation"

export default function Home() {
  redirect("/dashboard/counter")
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
