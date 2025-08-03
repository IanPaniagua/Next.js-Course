import { Navbar } from "../components/navbar/Navbar";


export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col text-center items-center p-24">
        {children}</main>

    </div>
  );
}