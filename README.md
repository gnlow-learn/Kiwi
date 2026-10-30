# Kiwi
Korean Intelligent Word Identifier
```ts
import { kiwi, Match } from "https://gnlow.dev/@learn/Kiwi"

const res = kiwi.analyze(
    "아버지가방에들어가신다",
    Match.allWithNormalizing,
)
console.log(res)
```
