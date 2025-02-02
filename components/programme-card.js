import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ChevronDown, MoreVertical, Edit2, EyeOff, Plus } from "react-feather";
import { Button } from "./button";

const Programme = ({
  link,
  title,
  code,
  academicYear,
  startDate,
  EndDate,
  programmeLeader,
  children,
  open
}) => {
  const [visible, setVisible] = useState(open);
  return (
    <div
      className={`${
        visible ? " bg-neutral-100 border-neutral-300 " : " border-transparent "
      } -mt-px border border-b-neutral-300 transition-colors`}
    >
      <div
        className={`${
          visible ? " bg-white " : " hover:bg-neutral-75 "
        } relative flex items-center gap-4 p-3 transition-colors`}
      >
        <button
          className="absolute inset-0"
          type="button"
          onClick={() => setVisible(!visible)}
        ></button>
        <div className="relative">
          <ChevronDown
            onClick={() => setVisible(!visible)}
            className={`${
              visible
                ? " rotate-180 text-black "
                : " rotate-0 text-neutral-700 "
            } transition-all duration-300 cursor-pointer`}
          />
        </div>
        <div className="space-y-1">
          <div className="relative flex">
            {link && title && (
              <Link to={link} className="text-lg hover:underline">
                {title}
              </Link>
            )}
          </div>
          <div className="relative inline-flex">
            <div className="text-sm text-neutral-600 flex [&>*:after]:text-neutral-500 [&>*:after]:mx-2 [&>*:after]:content-['|'] [&>*:last-child:after]:hidden">
              {code && <span>{code}</span>}
              {academicYear && <span>{academicYear}</span>}
              {startDate && <span>{startDate}</span>}
              {EndDate && <span>{EndDate}</span>}
              {programmeLeader && <span>{programmeLeader}</span>}
            </div>
          </div>
        </div>
        <div className="relative ml-auto">
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
                <li>
                  <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                    <EyeOff className="text-neutral-400 w-4 h-4" />
                    <span>Hide</span>
                  </button>
                </li>
                <li class="my-1 -mx-1 border-b border-neutral-200"></li>
                <li>
                  <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                    <Plus className="text-neutral-400 w-4 h-4" />
                    <span>Add Course</span>
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
      <div
        className={`${
          visible ? " grid-rows-[1fr] " : " grid-rows-[0fr] "
        } duration-300 transition-[grid-template-rows] grid overflow-hidden`}
      >
        <div
          className={`${
            visible ? " visible " : " invisible "
          } min-h-0 duration-300 transition-[visibility]`}
        >
          <div className="border-t border-neutral-200 grid gap-4 sm:grid-cols-[repeat(auto-fill,minmax(18.5rem,1fr))] p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Programme.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  code: PropTypes.string,
  academicYear: PropTypes.string,
  startDate: PropTypes.date,
  EndDate: PropTypes.date,
  programmeLeader: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.bool
};

export { Programme };
