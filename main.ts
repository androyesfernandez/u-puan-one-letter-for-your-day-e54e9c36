// One Letter for Your Day — make.fun entry.
//
// The letter is I, and the word behind it is insomnia: a day counted
// in ceiling tiles instead of hours, carried on no sleep at all.
// One letter is the whole diary entry — the judge reads the day in it.
// The program writes that one letter to /output/entry.txt and
// nothing else — no newline, no punctuation, no gloss.

import { mkdirSync, writeFileSync } from "node:fs";

const letter = "I";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
