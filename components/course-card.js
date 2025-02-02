import { Button } from "./button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { MoreVertical, Edit2, Share, Link2, Copy, Trash } from "react-feather";

const CourseCard = ({
  link,
  title,
  image,
  code,
  academicYear,
  startDate,
  EndDate,
  courseLeader
}) => {
  return (
    <div className="relative">
      <Link
        to={link}
        className="relative border border-neutral-200 bg-white p-3 flex group cursor-pointer"
      >
        <div className="shrink-0 -m-3 mr-0 relative">
          <img
            className="m-px aspect-square w-[6.75rem] object-cover"
            src={image}
            alt={title}
          />
          {code ||
            (academicYear && (
              <div className="px-2 py-1.5 text-white text-sm absolute top-px left-px right-px bg-primary/90">
                {code && <div className="truncate">{code}</div>}
                {academicYear && (
                  <div className="truncate text-primary-light">
                    {academicYear}
                  </div>
                )}
              </div>
            ))}
        </div>
        <div className="flex-grow pl-3 min-w-0 flex flex-col justify-between">
          {title && (
            <div className="line-clamp group-hover:underline">{title}</div>
          )}
          <div className="text-sm text-neutral-600 pr-8">
            {courseLeader && <div className="truncate">{courseLeader}</div>}
            {startDate ||
              (EndDate && (
                <div className="truncate">
                  <span className="">{startDate}</span>
                  <span className="">{EndDate}</span>
                </div>
              ))}
          </div>
        </div>
      </Link>
      <div className="absolute bottom-2 right-2">
        <Button
          preset="plain"
          size="small"
          iconOnly={true}
          popover={true}
          popoverWidth="w-40"
          popoverContent={
            <ul className="-m-4 p-1">
              <li>
                <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                  <Edit2 className="text-neutral-400 w-4 h-4" />
                  <span>Edit</span>
                </button>
              </li>
              <li class="my-1 -mx-1 border-b border-neutral-200"></li>
              <li>
                <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                  <Share className="text-neutral-400 w-4 h-4" />
                  <span>Share</span>
                </button>
              </li>
              <li>
                <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                  <Link2 className="text-neutral-400 w-4 h-4" />
                  <span>Link</span>
                </button>
              </li>
              <li>
                <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                  <Copy className="text-neutral-400 w-4 h-4" />
                  <span>Copy to...</span>
                </button>
              </li>
              <li class="my-1 -mx-1 border-b border-neutral-200"></li>
              <li>
                <button className="text-red-600 text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                  <Trash className="text-red-600/50 w-4 h-4" />
                  <span>Delete</span>
                </button>
              </li>
            </ul>
          }
          popoverPlacement="bottom-right"
        >
          <MoreVertical className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  code: PropTypes.string,
  academicYear: PropTypes.string,
  startDate: PropTypes.date,
  EndDate: PropTypes.date,
  courseLeader: PropTypes.string
};

CourseCard.defaultProps = {
  link: "",
  title: "Course Title",
  image: "https://i.ibb.co/6gT1WVt/Course-image-16x9-01.png",
  code: "",
  academicYear: "",
  startDate: "",
  EndDate: "",
  courseLeader: ""
};

export { CourseCard };
