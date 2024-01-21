export default function useQuill() {
  const getShortContent = (quillValue: string) => {
    const container = document.createElement("div");
    container.innerHTML = quillValue;

    const textElements = container.querySelectorAll("p");
    const thumbnail =
      Array.from(container.querySelectorAll("img"))?.[0]
        ?.getAttribute("src")
        ?.replace(/"/g, "")
        ?.replace(/\\/g, "") || "";

    const description =
      textElements.length > 0
        ? Array.from(textElements)
            .map((element) => element.textContent)
            .join("\n")
        : "";

    return { description, thumbnail };
  };

  return { getShortContent };
}
