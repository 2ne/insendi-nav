import Navigation from "../../components/navigation";
import Header from "../../components/header";
import CourseNavigation from "../../components/course-navigation";
import { Button } from "../../components/button";
import { Plus } from "react-feather";

export default function CourseNewsfeed() {
  return (
    <>
      <Header CourseTitle="Course Title" />
      <Navigation />
      <CourseNavigation />
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-6 flex items-center justify-between">
            <div className="text-xl">Newsfeed</div>
            <Button preset="primary" title="Add Post" iconOnly={true}>
              <Plus />
            </Button>
          </header>
          <div class="lg:grid lg:grid-cols-4 lg:gap-6">
            <div className="lg:col-span-3">
              <section className="bg-white p-6 space-y-6">
                <div className="text-xl">
                  Text Mining for Economics and Finance
                </div>
                <p>
                  Welcome to your new course. This is the course newsfeed where
                  you can post news for students. Click below to add your first
                  post.
                </p>
                <Button preset="primary" label="Add Post"></Button>
              </section>
            </div>
            <aside className="hidden lg:block">
              <div class="self-start grid gap-6">
                <section class="bg-white p-6">
                  <div class="text-lg mb-3">Summary</div>
                  <div>
                    This is a course summary. It is usually longer than this.
                  </div>
                </section>
                <section class="bg-white p-6">
                  <div class="text-lg mb-3">Progress</div>
                  <div>Progress goes here...</div>
                </section>
                <section class="bg-white p-6">
                  <div class="text-lg mb-3">Team</div>
                  <ul className="text-sm divide-y text-neutral-500 -mb-3">
                    <li class="group flex items-center space-x-3 py-3">
                      <img
                        src="https://randomuser.me/api/portraits/women/79.jpg"
                        alt="Team member"
                        class="h-10 w-10 flex-none rounded-full"
                      />
                      <div class="flex-auto">
                        <p class="text-neutral-900">Leslie Alexander</p>
                        <p>Course Leader</p>
                      </div>
                    </li>
                    <li class="group flex items-center space-x-3 py-3">
                      <img
                        src="https://randomuser.me/api/portraits/men/79.jpg"
                        alt="Team member"
                        class="h-10 w-10 flex-none rounded-full"
                      />
                      <div class="flex-auto">
                        <p class="text-neutral-900">Mark Mathews</p>
                        <p>Course Support</p>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
