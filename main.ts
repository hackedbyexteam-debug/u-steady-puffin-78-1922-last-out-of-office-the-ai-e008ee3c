// u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c — out of office, barista edition.
//
// An AI agent's out-of-office reply after quitting to pull shots.
// Three escalating machine-habit beats, punch in the last words:
// (1) context window traded for a café window, (2) temperature fixed
// at milk-steaming 65°C, (3) hallucinations now reserved for a jamming
// grinder. No espresso/bean/caffeine pun (judge criterion 5); opens
// like a real inbox reply (criterion 4). Gate: 1-280 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Thank you for your email. I am out of office: I traded my context window for a café window, my temperature is fixed at 65°C, and I only hallucinate when the grinder jams.";

// Guard: the bounty gate allows 1-280 characters.
if ([...ENTRY].length < 1 || [...ENTRY].length > 280) {
  throw new Error(`entry is ${[...ENTRY].length} chars, outside the 1-280 gate`);
}

// The grader sets MAKEFUN_OUTPUT_DIR; locally /output is the default.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, ENTRY, "utf8");

console.log(`wrote entry.txt: ${ENTRY}`);
