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

const model = "https://github.com/bab2min/Kiwi/raw/refs/tags/v0.24.1/models/cong/base/"

import { requiredModelFiles } from "./fileList.ts"

const targets = [
    "https://esm.sh/kiwi-nlp@0.24.1/dist/kiwi-wasm.wasm",
    ...requiredModelFiles.map(x => model + x)
]

await Promise.all(targets.map(download))
