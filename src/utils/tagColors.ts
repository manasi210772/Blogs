export function getTagColorClass(tag: string): string {
  const normalized = tag.toLowerCase().trim();

  if (normalized.includes("asian") || normalized.includes("first time")) {
    return "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800";
  }
  if (normalized.includes("italian") || normalized.includes("pizza")) {
    return "bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800";
  }
  if (normalized.includes("café") || normalized.includes("cafe") || normalized.includes("coffee")) {
    return "bg-amber-100/80 text-amber-950 border-amber-300/80 dark:bg-yellow-950/60 dark:text-yellow-200 dark:border-yellow-800";
  }
  if (normalized.includes("mexican") || normalized.includes("comfort")) {
    return "bg-orange-100 text-orange-900 border-orange-300 dark:bg-orange-950/60 dark:text-orange-200 dark:border-orange-800";
  }
  if (normalized.includes("indian") || normalized.includes("thali")) {
    return "bg-yellow-100 text-yellow-900 border-yellow-300 dark:bg-yellow-950/60 dark:text-yellow-200 dark:border-yellow-800";
  }
  if (normalized.includes("street") || normalized.includes("drinks")) {
    return "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800";
  }
  if (normalized.includes("bar") || normalized.includes("fine dining") || normalized.includes("restaurant")) {
    return "bg-teal-100 text-teal-900 border-teal-300 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800";
  }

  return "bg-teal-100 text-teal-900 border-teal-300 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800";
}
