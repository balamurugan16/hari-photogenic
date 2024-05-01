import { useMediaValues } from "@/lib/hooks/use-media-values";

export type MasonryProps<T> = React.ComponentPropsWithoutRef<"div"> & {
  items: T[];
  render: (item: T, idx: number) => React.ReactNode;
  config: {
    columns: number | number[];
    gap: number | number[];
    media?: number[];
  };
};

export function createSafeArray(data: number | number[]) {
  return Array.isArray(data) ? data : [data];
}

export function Masonry<T>({
  items = [],
  render,
  config,
  ...rest
}: MasonryProps<T>) {
  const { columns, gap } = useMediaValues(
    config.media,
    createSafeArray(config.columns),
    createSafeArray(config.gap)
  );

  if (!columns) return null;

  const chunks = createChunks<T>(items, columns);
  const dataColumns = createDataColumns<T>(chunks, columns);

  return (
    <div
      {...rest}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
      className="grid items-start place-items-center gap-4"
    >
      {dataColumns.map((column, idx) => (
        <div key={idx} className="grid gap-4 grid-cols-1">
          {column.map((item, idx) => render(item, idx))}
        </div>
      ))}
    </div>
  );
}

export function createDataColumns<T>(data: T[][] = [], columns = 3) {
  const result = Array.from<T[], T[]>({ length: columns }, () => []);

  for (let idx = 0; idx < columns; idx++) {
    for (let jdx = 0; jdx < data.length; jdx += 1) {
      if (data[jdx][idx]) {
        result[idx].push(data[jdx][idx]);
      }
    }
  }

  return result;
}

export function createChunks<T>(data: T[] = [], columns = 3) {
  const result = [];

  for (let idx = 0; idx < data.length; idx += columns) {
    const slice = data.slice(idx, idx + columns);
    result.push(slice);
  }

  return result;
}
