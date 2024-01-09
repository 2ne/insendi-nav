import Navigation from "../components/navigation";
import Header from "../components/header";

export default function Grades() {
  return (
    <>
      <Header />
      <Navigation />
      <main className="p-6">
        <div className="max-w-7xl mx-auto">Grades Page</div>
      </main>
    </>
  );
}
