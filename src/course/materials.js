import Navigation from "../../components/navigation";
import Header from "../../components/header";
import CourseNavigation from "../../components/course-navigation";
import { Button } from "../../components/button";
import { MaterialCard } from "../../components/material-card";
import { Link } from "react-router-dom";
import { Plus, MoreVertical } from "react-feather";

export default function CourseMaterials() {
  const cardItems = [
    {
      title: "Session 1",
      link: "Session",
      screenCount: "3",
      duration: "2h 30m",
      type: "Session",
      platform: "Online"
    },
    {
      title: "Session 2",
      link: "Session",
      screenCount: "3",
      duration: "2h 30m",
      type: "Session",
      platform: "Online"
    },
    {
      title: "Session 3",
      link: "Session",
      screenCount: "3",
      duration: "2h 30m",
      type: "Session",
      platform: "Online"
    }
  ];

  return (
    <>
      <Header CourseTitle="Course Title" />
      <Navigation />
      <CourseNavigation />
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <header className="flex gap-3 items-center">
            <nav aria-label="Breadcrumb" className="min-w-0 flex-grow text-xl">
              <ol className="flex gap-2 [&>li:first-child>span]:hidden">
                <li className="min-w-0 flex gap-2">
                  <span aria-hidden="true">/</span>
                  <Link
                    to="/Course/Materials"
                    className="truncate hover:underline"
                    title="Materials"
                  >
                    Materials
                  </Link>
                </li>
              </ol>
            </nav>
            <div className="min-w-0 flex items-center gap-3">
              <Button title="Toggle Menu" iconOnly={true}>
                <MoreVertical className="h-5 w-5" />
              </Button>
              <Button preset="primary" iconOnly={true}>
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </header>
          <section className="mt-6">
            {cardItems.length > 0 && (
              <ul className="grid gap-6 grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(19rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(21rem,1fr))]">
                {cardItems.map((item, i) => (
                  <li key={i}>
                    <MaterialCard
                      count={i + 1}
                      title={item.title}
                      link={item.link}
                      screenCount={item.screenCount}
                      duration={item.duration}
                      type={item.type}
                      platform={item.platform}
                    />
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
