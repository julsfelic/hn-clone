export function formatDate(time) {
  return new Date(time * 1000).toLocaleString("en-US", {
    dateStyle: "short",
    timeStyle: "short"
  });
}
