import {
  Check,
  CircleQuestionMark,
  Package,
  Pencil,
  Truck,
} from "lucide-react";

const iconMap = {
  check: Check,
  package: Package,
  pencil: Pencil,
  truck: Truck,
};

export const TimelineIcon = ({ icon }) => {
  const Icon = iconMap[icon] || CircleQuestionMark;

  return (
    <div className="timeline-icon">
      <Icon aria-hidden="true" size={24} />
    </div>
  );
};
