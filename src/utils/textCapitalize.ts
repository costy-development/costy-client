export default function textCapitalize(text: string) {
  if (!text) return "";

  return text
    .split(" ")
    .map((fragment) => fragment[0].toUpperCase().concat(fragment.slice(1)))
    .join(" ");
}
