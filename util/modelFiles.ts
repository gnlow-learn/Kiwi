import { requiredModelFiles } from "./fileList.ts"

export const modelFiles = Object.fromEntries(
    await Promise.all(
        requiredModelFiles.map(async f => [f,
            await Deno.readFile(`kiwi/${f}`)
        ])
    )
) as Record<string, Uint8Array>

/*
export const modelFiles = Object.fromEntries(
    requiredModelFiles.map(f => [f,
        `https://github.com/bab2min/Kiwi/raw/refs/tags/v0.24.1/models/cong/base/${f}`
    ])
)
*/
