import { kiwi, Match } from "./mod.ts"

console.table(
    kiwi.analyze(
        "아버지가방에들어가신다",
        Match.allWithNormalizing,
    ).tokens,
)
