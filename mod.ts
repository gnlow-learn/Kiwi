import { KiwiBuilder, Match } from "npm:kiwi-nlp"
import { modelFiles } from "./util/modelFiles.ts"

const builder = await KiwiBuilder.create("kiwi/kiwi-wasm.wasm")

console.log("hi")
const kiwi = await builder.build({
    modelFiles
})

console.log("hi")

const tokens = kiwi.analyze(
    "다음은 예시 텍스트입니다.",
    Match.allWithNormalizing,
)

console.log(tokens)