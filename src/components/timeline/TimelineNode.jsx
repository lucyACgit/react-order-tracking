import { Children } from "react";
import { TimelineIcon } from "./TimelineIcon";

export const TimelineNode = ({ data, children }) => {
  const { icon } = data;

  return (
    <article className="timeline-node">
      <TimelineIcon icon={icon} />
      {children}
    </article>
  );
};
