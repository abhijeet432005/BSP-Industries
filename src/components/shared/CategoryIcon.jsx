import {
  Drill,
  Forklift,
  CircleGauge,
  Flame,
  HardHat,
  Wrench,
  Handshake,
  ClipboardCheck,
  PackageSearch,
} from "lucide-react";

const icons = {
  Drill,
  Forklift,
  CircleGauge,
  Flame,
  HardHat,
  Wrench,
  Handshake,
  ClipboardCheck,
  PackageSearch,
};

export function DynamicIcon({ name, className }) {
  const Icon = icons[name] || Wrench;
  return <Icon className={className} strokeWidth={1.5} />;
}
