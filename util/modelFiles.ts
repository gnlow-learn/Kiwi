import { requiredModelFiles } from "./fileList.ts"

const load =
async (f: string) => {
    const model = "https://github.com/bab2min/Kiwi/raw/refs/tags/v0.24.1/models/cong/base/"
    const { default: res } = await import(model + f, { with: { type: "bytes" } })
    return res
}

export const modelFiles = Object.fromEntries(
    await Promise.all(
        requiredModelFiles.map(async f => [f,
            await load(f)
        ])
    )
)

/*
export const modelFiles = Object.fromEntries(
    requiredModelFiles.map(f => [f,
        `https://github.com/bab2min/Kiwi/raw/refs/tags/v0.24.1/models/cong/base/${f}`
    ])
)
*/
