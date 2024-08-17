export const requiredModelFiles = [
    "combiningRule.txt",
    "default.dict",
    "extract.mdl",
    "multi.dict",
    "sj.knlm",
    "sj.morph",
    "skipbigram.mdl",
    "typo.dict",
]

export const modelFiles = Object.fromEntries(
    await Promise.all(
        requiredModelFiles.map(async f => [f,
            await Deno.readFile(`kiwi/${f}`)
        ])
    )
) as Record<string, Uint8Array>
