import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { FaGithub, FaGlobe, FaLinkedin, FaStar, FaCodeBranch } from "react-icons/fa";
import { mkdirSync, writeFileSync } from "fs";

const icons = {
  github: FaGithub,
  website: FaGlobe,
  linkedin: FaLinkedin,
  star: FaStar,
  fork: FaCodeBranch,
};

mkdirSync("icons", { recursive: true });

for (const [name, Icon] of Object.entries(icons)) {
  const svg = renderToStaticMarkup(
    createElement(Icon, { size: 16, color: "#24292f" })
  ).replace(/currentColor/g, "#24292f");
  writeFileSync(`icons/${name}.svg`, svg);
}

console.log("Icons written to ./icons");