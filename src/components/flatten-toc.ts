import type { StarlightRouteData } from "@astrojs/starlight/route-data";

type TocItem = NonNullable<StarlightRouteData["toc"]>["items"][number];
type Item = TocItem & { path: string[] };

function flattenItem(item: Item): Item[] {
  const path = [...item.path, item.text];
  const items = item.children.flatMap((c) => flattenItem({ ...c, path }));
  return [{ ...item, path }, ...items];
}

export function flattenToc(items: TocItem[]) {
  return items
    .flatMap((item) => flattenItem({ ...item, path: [] }))
    .sort((a, b) => a.depth - b.depth);
}
