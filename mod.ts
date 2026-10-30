import { KiwiBuilder, Match } from "npm:kiwi-nlp@0.24.1"
import { modelFiles } from "./util/modelFiles.ts"
import wasm from "https://esm.sh/kiwi-nlp@0.24.1/dist/kiwi-wasm.wasm" with { type: "bytes" }

const filePath = await Deno.makeTempFile()
let builder

try {
    await Deno.writeFile(filePath, wasm)
    
    builder = await KiwiBuilder.create(filePath)
} finally {
    await Deno.remove(filePath)
}

console.log("kiwi-nlp", builder.version())

const kiwi = await builder.build({
    modelFiles
})

export { kiwi, Match }
