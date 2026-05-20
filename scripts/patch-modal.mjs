import fs from "fs";

const path = new URL("../src/components/landing/landing-body.tsx", import.meta.url);
let c = fs.readFileSync(path, "utf8");
const s = c.indexOf('            <div className="modal-step modal-step-form"');
const endMarker =
  "            </div>\n          </div>\n        </div>\n      \n        \n      \n    </>";
const end = c.indexOf(endMarker, s);
if (s < 0 || end < 0) {
  console.error("markers not found", { s, end });
  process.exit(1);
}
const before = c.slice(0, s);
const after = c.slice(end);
c = before + "            <WaitlistModal />\n" + after;
if (!c.includes('import { WaitlistModal }')) {
  c = c.replace(
    'import type { CSSProperties } from "react";',
    'import type { CSSProperties } from "react";\nimport { WaitlistModal } from "./WaitlistModal";',
  );
}
fs.writeFileSync(path, c);
console.log("patched");
