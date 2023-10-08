import Image from "next/image";
import BlogsPage from "./blogs/page";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <BlogsPage />
    </main>
  );
}
