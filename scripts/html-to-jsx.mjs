import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const htmlPath = path.join(root, "index.html");
const outPath = path.join(
  __dirname,
  "..",
  "src",
  "components",
  "landing",
  "landing-body.tsx",
);

const html = fs.readFileSync(htmlPath, "utf8");
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
if (!bodyMatch) throw new Error("No <body> found");
let body = bodyMatch[1].replace(/<script[\s\S]*?<\/script>/gi, "");

const svgAttrs = [
  ["stroke-width", "strokeWidth"],
  ["stroke-dasharray", "strokeDasharray"],
  ["stroke-dashoffset", "strokeDashoffset"],
  ["stroke-linecap", "strokeLinecap"],
  ["stroke-opacity", "strokeOpacity"],
  ["fill-opacity", "fillOpacity"],
  ["stop-color", "stopColor"],
  ["stop-opacity", "stopOpacity"],
  ["text-anchor", "textAnchor"],
  ["font-size", "fontSize"],
  ["font-family", "fontFamily"],
  ["path-length", "pathLength"],
];

let jsx = body;
jsx = jsx.replace(/<!--[\s\S]*?-->/g, "");
jsx = jsx.replace(/\sclass=/g, " className=");
jsx = jsx.replace(/\sfor=/g, " htmlFor=");
jsx = jsx.replace(/\stabindex=/g, " tabIndex=");
jsx = jsx.replace(/\sreadonly\b/g, " readOnly");
jsx = jsx.replace(
  /<input([^>]*?) name="role"([^>]*?) checked([^>]*?)\/?>/gi,
  '<input$1 name="role"$2 defaultChecked$3 />',
);
jsx = jsx.replace(
  /<input([^>]*?) checked([^>]*?) name="role"([^>]*?)\/?>/gi,
  '<input$1 defaultChecked$2 name="role"$3 />',
);
jsx = jsx.replace(/\sautocomplete=/g, " autoComplete=");
jsx = jsx.replace(/\snovalidate\b/g, " noValidate");
jsx = jsx.replace(/\sonsubmit="[^"]*"/gi, "");
jsx = jsx.replace(/\s(src|href)="assets\//g, ' $1="/assets/');
jsx = jsx.replace(
  /\sstyle="--([^":]+):([^"]+)"/g,
  " style={{ '--$1': '$2' } as React.CSSProperties}",
);
jsx = jsx.replace(
  /\sstyle="([^":-][^"]*)"/g,
  (_, raw) => {
    const obj = raw
      .split(";")
      .filter(Boolean)
      .map((pair) => pair.split(":"))
      .map(([k, v]) => `'${k.trim()}': '${v.trim()}'`)
      .join(", ");
    return ` style={{ ${obj} }}`;
  },
);

for (const [from, to] of svgAttrs) {
  jsx = jsx.replace(new RegExp(`\\s${from}=`, "g"), ` ${to}=`);
}

jsx = jsx.replace(/<img([^>]*?)\s*\/?>/gi, "<img$1 />");
jsx = jsx.replace(/<input([^>]*?)\s*\/?>/gi, "<input$1 />");
jsx = jsx.replace(/<br\s*>/gi, "<br />");
jsx = jsx.replace(/&amp;/g, "&");
jsx = jsx.replace(/&hellip;/g, "…");
jsx = jsx.replace(/\sdata-signup(?=[\s/>])/g, " data-signup={true}");
jsx = jsx.replace(/\sdata-close(?=[\s/>])/g, " data-close={true}");
jsx = jsx.replace(/\shidden\b/g, " hidden={true}");
jsx = jsx.replace(/<mpath href=/g, "<mpath xlinkHref=");

const out = `/* Auto-generated from ../../index.html */
import type { CSSProperties } from "react";

export function LandingBody() {
  return (
    <>
${jsx
  .split("\n")
  .map((line) => "      " + line)
  .join("\n")}
    </>
  );
}
`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, out);
console.log("Wrote", outPath);
