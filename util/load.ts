const download = async (url: string) => {
    const [fileName] = url.match(/(?<=\/)[^/]+$/)!
    await fetch(url).then(async res =>
        res.body!.pipeTo(
            (await Deno.open(
                "kiwi/" + fileName,
                {
                    write: true,
                    truncate: true,
                    create: true,
                },
            )).writable
        )
    )
}

const model = "https://esm.sh/gh/bab2min/kiwi@5a20486f74/ModelGenerator/"

import { requiredModelFiles } from "./modelFiles.ts"

const targets = [
    "https://esm.sh/kiwi-nlp@0.18.0/dist/kiwi-wasm.wasm",
    ...requiredModelFiles.map(x => model + x)
]

await Promise.all(targets.map(download))
