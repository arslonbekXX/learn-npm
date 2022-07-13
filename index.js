"use strict";

export function imgLoading(src, element, delay = 1) {
  element.innerHTML = "";
  const loader = createElement("span", "Loading...");
  element.appendChild(loader);

  const img = document.createElement("img");
  img.src = src;

  img.addEventListener("load", (e) => {
    setTimeout(() => {
      element.children[0].remove();
      element.appendChild(img);
    }, delay * 1000);
  });

  img.addEventListener("error", () => {
    setTimeout(() => {
      element.children[0].remove();
      const notFoundElement = createElement("span", "Image not found 🙈");
      element.appendChild(notFoundElement);
    }, 1000);
  });
}

export function createElement(tagName, content) {
  const element = document.createElement(tagName);
  element.innerHTML = content;
  return element;
}
