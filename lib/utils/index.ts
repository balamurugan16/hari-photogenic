export function createSafeArray(data: number | number[]) {
  return Array.isArray(data) ? data : [data];
}

export const range = (start: number, end: number) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += 1) {
    output.push(i);
  }
  return output;
};
