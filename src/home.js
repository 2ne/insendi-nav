import { Link } from "react-router-dom";
import Header from "../components/header";
import { Button } from "../../components/button";
import { useState } from "react";
import { Modal } from "../components/modal/modal";
import {
  Search,
  Plus,
  HelpCircle,
  Image,
  Upload,
  UploadCloud
} from "react-feather";
import { Programme } from "../components/programme-card";
import { CourseCard } from "../components/course-card";

export default function Home() {
  const [modalState, setModalState] = useState(false);
  const showModal = () => {
    setModalState(true);
  };
  const hideModal = () => {
    setModalState(false);
  };
  return (
    <>
      <Header home="true" />
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center gap-4">
            <form className="flex-grow">
              <div className="group relative">
                <div className="text-primary pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-neutral-500 transition-color group-focus-within:text-primary" />
                </div>
                <label htmlFor="search" className="sr-only">
                  Search for programmes and courses
                </label>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="!pl-10"
                  placeholder="Filter programmes and courses"
                />
              </div>
            </form>
            <div className="hidden relative md:flex gap-1.5 items-center">
              <input
                id="showHidden"
                aria-describedby="showHidden-description"
                name="showHidden"
                type="checkbox"
                className="h-[1.15rem] w-[1.15rem] border border-neutral-300 text-primary focus-visible:border-primary"
              />

              <div className="text-sm">
                <label
                  htmlFor="showHidden"
                  className="select-none text-neutral-700"
                >
                  Show hidden programmes
                </label>
                <span id="showHidden-description" className="sr-only">
                  Show hidden programmes
                </span>
              </div>
            </div>
            <Button
              preset="primary"
              title="Add Programme"
              iconOnly={true}
              onClick={showModal}
            >
              <Plus />
            </Button>
          </div>
          <div className="mb-10">
            <Programme
              link="/Newsfeed"
              title="Business Analytics Online 2020"
              code="BM202"
              academicYear="2023"
            >
              <CourseCard
                title="Text Mining for Economics and Finance"
                link="/Course/Newsfeed"
              />
              <CourseCard
                title="Text Mining for Economics and Finance"
                link="/Course/Newsfeed"
              />
              <CourseCard
                title="Text Mining for Economics and Finance"
                link="/Course/Newsfeed"
              />
              <CourseCard
                title="Text Mining for Economics and Finance"
                link="/Course/Newsfeed"
              />
            </Programme>
            <Programme
              link="/Newsfeed"
              title="Business Analytics Online 2020"
              code="BM202"
              academicYear="2023"
            >
              <CourseCard
                title="Text Mining for Economics and Finance"
                link="/Course/Newsfeed"
              />
            </Programme>
            <Programme
              link="/Newsfeed"
              title="Business Analytics Online 2020"
              code="BM202"
              academicYear="2023"
            >
              <CourseCard
                title="Text Mining for Economics and Finance"
                link="/Course/Newsfeed"
              />
            </Programme>
            <Programme
              link="/Newsfeed"
              title="Business Analytics Online 2020"
              code="BM202"
              academicYear="2023"
            >
              <CourseCard
                title="Text Mining for Economics and Finance"
                link="/Course/Newsfeed"
              />
            </Programme>
          </div>
        </div>
      </main>
      <Modal
        visible={modalState}
        hide={hideModal}
        dismissableMask={false}
        title="Add Programme"
        sidebar={true}
        content={
          <form className="grid gap-5 mt-1 mb-2" autocomplete="off">
            <div>
              <label htmlFor="programmeLogo" className="mb-1 flex items-center">
                <span className="text-neutral-700">Logo</span>
              </label>
              <div class="overflow-hidden relative shadow-sm group/button">
                <Button label="Upload Logo" fluid="true">
                  <UploadCloud className="w-4 h-4" />
                </Button>
                <input
                  class="cursor-pointer absolute block py-2 px-4 w-full opacity-0 inset-0"
                  type="file"
                  name="documents[]"
                  accept="image/*"
                />
              </div>
              <div className="text-neutral-500 text-xs mt-1.5">
                Valid formats · PNG, JPEG (max. 300 x 300px, 50mb)
              </div>
            </div>
            <div>
              <label htmlFor="programmeName" className="mb-1 flex items-center">
                <span className="text-neutral-700">Programme Title</span>
                <span className="text-neutral-500 mx-1">·</span>
                <span className="text-neutral-500">Required</span>
              </label>
              <input autoFocus id="programmeName" type="text" />
            </div>
            <div>
              <label htmlFor="programmeCode" className="mb-1 block">
                <span className="text-neutral-700">Code</span>
              </label>
              <div className="relative">
                <input id="programmeCode" type="text" />
                <div
                  title="Code is used to differentiate your programme and is only visible to staff."
                  className="absolute top-1/2 -translate-y-1/2 right-2.5"
                >
                  <HelpCircle className="h-5 w-5 text-neutral-500 cursor-pointer" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="programmeAcademicYear" className="mb-1 block">
                  <span className="text-neutral-700">Academic Year</span>
                </label>
                <div className="relative">
                  <input id="programmeAcademicYear" type="text" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="programmeStartDate" className="mb-1 block">
                <span className="text-neutral-700">Start Date</span>
              </label>
              <input id="programmeStartDate" max="9999-12-31" type="date" />
            </div>
            <div>
              <label htmlFor="programmeEndDate" className="mb-1 block">
                <span className="text-neutral-700">End Date</span>
              </label>
              <input id="programmeEndDate" max="9999-12-31" type="date" />
            </div>
          </form>
        }
        footer={
          <>
            <Button preset="secondary" label="Cancel" onClick={hideModal} />
            <Button preset="primary" label="Add" onClick={hideModal} />
          </>
        }
      />
    </>
  );
}
