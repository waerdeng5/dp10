const GrundTypeA01 = ({ size1 = 60, size2 = 30, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => ({
    backgroundImage: `linear-gradient(45deg, ${color2} 25%, transparent 25%, transparent 75%, ${color2} 75%, ${color2}), 
    linear-gradient(45deg, ${color2} 25%, ${color1} 25%, ${color1} 75%, ${color2} 75%, ${color2})`,
    backgroundSize: `${size1}px ${size1}px`,
    backgroundPosition: `0 0, ${size2}px ${size2}px`
})
const GrundTypeA02 = ({ size1 = 20, size2 = 45, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => ({
    background: `repeating-linear-gradient(${size2}deg, ${color1}, ${color1} ${size1}px, ${color2} ${size1}px, ${color2} ${size1 * 2}px)`
})

const GrundTypeA03 = ({ size1 = 40, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => ({
    backgroundImage: `linear-gradient(95deg, ${color1} 25%, transparent 25%) -50px 0,
    linear-gradient(-15deg, ${color1} 25%, transparent 25%) -50px 0,
    linear-gradient(25deg, transparent 75%, ${color1} 75%) -50px 0,
    linear-gradient(-45deg, transparent 75%, ${color1} 75%) -50px 0,
    linear-gradient(-15deg, transparent 75%, ${color1} 75%) -50px 0`,
    backgroundColor: color2,
    backgroundSize: `${size1}px ${size1}px`
})

const GrundTypeA04 = ({ size1 = 90, size2 = 135, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => ({
    backgroundImage: `linear-gradient(45deg, ${color2} 25%, transparent 25%, transparent 75%, ${color2} 75%, ${color2}), 
    linear-gradient(135deg, ${color2} 25%, ${color1} 25%, ${color1} 75%, ${color2} 75%, ${color2})`,
    backgroundSize: `${size1}px ${size1}px`,
    backgroundPosition: `0 0, ${size2}px ${size2}px`
})

const GrundTypeA05 = ({ size1 = 200, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)', color3 = 'rgb(244,244,244)' }) => ({
    backgroundImage: `repeating-conic-gradient(from 30deg,#0000 0 120deg,${color3} 0 180deg) calc(0.5 * ${size1}px) calc(0.5 * ${size1}px * 0.577),
    repeating-conic-gradient(from 30deg,${color1} 0 60deg,${color2} 0 120deg,${color3} 0 180deg)`,
    backgroundSize: `${size1}px calc(${size1}px * 0.577)`
})

const GrundTypeA06 = ({ size1 = 60, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => {
    const g = ` radial-gradient(25% 25% at 25% 25%,${color1} 99%,rgba(0, 0, 0, 0) 101%)`
    return ({
        background: `${g} ${size1}px ${size1}px / calc(2 * ${size1}px) calc(2 * ${size1}px),
        ${g} 0 0 / calc(2 * ${size1}px) calc(2 * ${size1}px),
        radial-gradient(50% 50%, ${color2} 98%, rgba(0, 0, 0, 0)) 0 0 / ${size1}px ${size1}px,
        repeating-conic-gradient(${color2} 0 50%, ${color1} 0 100%) calc(0.5 * ${size1}px) 0 / calc(2 * ${size1}px) ${size1}px`
    })
}

const GrundTypeA07 = ({ size1 = 40, size2 = 40, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => ({
    backgroundImage: `linear-gradient(45deg, ${color1} 25%, transparent  25%) -50px 0,
    linear-gradient(-45deg, ${color1} 25%, transparent  25%) -50px 0,
    linear-gradient(45deg, transparent  75%, ${color1} 75%) -50px 0,
    linear-gradient(-45deg, transparent  75%, ${color1} 75%) -50px 0`,
    backgroundColor: `${color2}`,
    backgroundSize: `${size1}px ${size2}px`
})

const GrundTypeA08 = ({ size1 = 55, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => ({
    backgroundColor: color1,
    backgroundImage: `linear-gradient(0deg, transparent 24%, ${color2} 25%, ${color2} 26%, transparent 27%,transparent 74%, ${color2} 75%, ${color2} 76%, transparent 77%,transparent),
        linear-gradient(90deg, transparent 24%, ${color2} 25%, ${color2} 26%, transparent 27%,transparent 74%, ${color2} 75%, ${color2} 76%, transparent 77%,transparent)`,
    backgroundSize: `${size1}px ${size1}px`
})

const GrundTypeA09 = ({ size1 = 100, size2 = 50, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => ({
    backgroundColor: color1,
    backgroundImage: `radial-gradient(${color2} 10%, transparent 10%),radial-gradient(${color2} 10%, transparent 10%)`,
    backgroundSize: `${size1}px ${size1}px`,
    backgroundPosition: ` 0 0, ${size2}px ${size2}px`
})

const GrundTypeA10 = ({ size1 = 30, size2 = 5, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => ({
    backgroundColor: color1,
    backgroundImage: `radial-gradient(${color2} 2px, transparent 0)`,
    backgroundSize: `${size1}px ${size1}px`,
    backgroundPosition: `-${size2}px -${size2}px`,
})

const GrundTypeA11 = ({ size1 = 60, size2 = 70, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => ({
    backgroundImage: `radial-gradient(circle at 0% 50%, transparent 20%, ${color2} 21% 28%, transparent 29%),
    radial-gradient(circle at 50% 50%, transparent 20%, ${color2} 21% 28%, transparent 29%),
    radial-gradient(circle at 100% 50%, transparent 20%, ${color2} 21% 28%, transparent 29%)`,
    backgroundColor: color1,
    backgroundSize: `${size1}px ${size2}px`
})
const GrundTypeA12 = ({ size1 = 40, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => ({
    backgroundImage: `radial-gradient(circle at 10% 10%, ${color2} 5%, transparent 5%),
    radial-gradient(circle at 90% 10%, ${color2} 5%, transparent 5%),
    radial-gradient(circle at 90% 90%, ${color2} 5%, transparent 5%),
    radial-gradient(circle at 10% 90%, ${color2} 5%, transparent 5%)`,
    backgroundColor: color1,
    backgroundSize: `${size1}px ${size1}px`,

})
const GrundTypeA13 = ({ size1 = 80, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)', color3 = 'rgb(244,244,244)' }) => {
    const g = `${color3} 0 120deg, #0000 0`
    return ({
        backgroundImage: `conic-gradient(from -60deg at 50% calc(100% / 3), ${g}),
        conic-gradient(from 120deg at 50% calc(200% / 3), ${g}),
        conic-gradient(from 60deg at calc(200% / 3),${color3} 60deg,${color2} 0 120deg,#0000 0),
        conic-gradient(from 180deg at calc(100% / 3), ${color1} 60deg, ${g}),
        linear-gradient(90deg,${color1} calc(100% / 6),${color2} 0 50%,${color1} 0 calc(500% / 6),${color2} 0)`,
        backgroundSize: `calc(1.732 * ${size1}px) ${size1}px`
    })
}
const GrundTypeA14 = ({ size1 = 106, size2 = 53, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => ({
    backgroundImage: `linear-gradient(45deg,#0000 calc(25% / 3),${color2} 0 calc(50% / 3),#0000 0 calc(250% / 3),${color2} 0 calc(275% / 3),#0000 0),
    linear-gradient(45deg,${color2} calc(25% / 3),#0000 0 calc(50% / 3),${color2} 0 25%,#0000 0 75%,${color2} 0 calc(250% / 3),#0000 0 calc(275% / 3),${color2} 0),
    linear-gradient(-45deg,#0000 calc(25% / 3),${color2} 0 calc(50% / 3),#0000 0 calc(250% / 3),${color2} 0 calc(275% / 3),#0000 0),
    linear-gradient(-45deg,${color2} calc(25% / 3),#0000 0 calc(50% / 3),${color2} 0 25%,#0000 0 75%,${color2} 0 calc(250% / 3),#0000 0 calc(275% / 3),${color2} 0) ${color1}`,
    backgroundSize: `${size1}px ${size1}px`,
    backgroundPosition: `0 0, ${size2}px ${size2}px`
})

const GrundTypeA15 = ({ size1 = 25, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => {
    const c = `#0000 71%, ${color1} 0 79%, #0000 0`
    const s = `calc(${size1}px / 2) / calc(2 * ${size1}px) calc(2 * ${size1}px)`
    return {
        backgroundImage: `linear-gradient(45deg, ${c}) calc(${size1}px / -2) ${s},
        linear-gradient(135deg, ${c}) calc(${size1}px / 2) ${s},
        radial-gradient(${color1} 35%, ${color2} 37%) 0 0 / ${size1}px ${size1}px`
    }
}
const GrundTypeA16 = ({ size1 = 65, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)', color3 = 'rgb(244,244,244)' }) => ({
    backgroundImage: `repeating-radial-gradient(  ${color1} 80%,${color2} 90%,${color3} 90%)`,
    backgroundSize: `${size1}px ${size1}px`
})
const GrundTypeA17 = ({ size1 = 15, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => {
    const ts = `50% / calc(${size1}px * 8) calc(${size1}px * 16)`
    const dot = `${color2} 0 calc(${size1}px * 0.78),#fff0 calc(calc(${size1}px * 0.78) + 1px) 100%`
    const dot2 = `radial-gradient(circle at 90% 0%, ${dot}) ${ts},
    radial-gradient(circle at 65% 0%, ${dot}) ${ts},
    radial-gradient(circle at 40% 0%, ${dot}) ${ts},
    radial-gradient(circle at 15% 0%, ${dot}) ${ts}`
    const cg1 = `conic-gradient(from -90deg at 5% 51%, ${color1} 0 90deg, #fff0 0 100%) ${ts}`
    const cg2 = `conic-gradient(from -90deg at 25% 50%, ${color2} 0 90deg, #fff0 0 100%) ${ts}`
    const cg3 = `conic-gradient(from -90deg at 30% 38.5%,${color1} 0 90deg,#fff0 0 100%) ${ts}`
    const cg4 = `conic-gradient(from -90deg at 50% 37.5%,${color2} 0 90deg,#fff0 0 100%) ${ts}`
    const cg5 = `conic-gradient(from -90deg at 55% 26%, ${color1} 0 90deg, #fff0 0 100%) ${ts}`
    const cg6 = `conic-gradient(from -90deg at 75% 25%, ${color2} 0 90deg, #fff0 0 100%) ${ts}`
    const cg7 = `conic-gradient(from -90deg at 80% 13.5%,${color1} 0 90deg,#fff0 0 100%) ${ts}`
    const cg8 = ` conic-gradient(from -90deg at 100% 12.5%,${color2} 0 90deg,#fff0 0 100%) ${ts}`
    return {
        backgroundImage: `${dot2}, ${dot2},
        radial-gradient(circle at 90% 100%, ${dot}) ${ts},
        radial-gradient(circle at 65% 100%, ${dot}) ${ts},
        radial-gradient(circle at 40% 100%, ${dot}) ${ts},
        radial-gradient(circle at 15% 100%, ${dot}) ${ts},
        radial-gradient(circle at 90% 12.5%, ${dot}) ${ts},
        radial-gradient(circle at 65% 25%, ${dot}) ${ts},
        radial-gradient(circle at 40% 37.5%, ${dot}) ${ts},
        radial-gradient(circle at 15% 50%, ${dot}) ${ts}, ${cg1},
        ${cg1}, ${cg2}, ${cg2}, ${cg3}, ${cg3}, ${cg4},
        ${cg4}, ${cg5}, ${cg5}, ${cg6}, ${cg6}, ${cg7},
        ${cg7}, ${cg8}, ${cg8},
        linear-gradient(-45deg, #fff0 0 32.25%, #0002 50%, #000 77.5%) ${ts},
        linear-gradient(-45deg, #fff0 0 32.25%, #000 60%) ${ts},
        repeating-linear-gradient(90deg, ${color1} 0 5%, ${color2} 0 25%) ${ts}`
    }
}
const GrundTypeA18 = ({ size1 = 100, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => {
    const g = `${color2} 4% 14%, ${color1} 14% 24%, ${color2} 22% 34%,
    ${color1} 34% 44%, ${color2} 44% 56%, ${color1} 56% 66%, ${color2} 66% 76%,
    ${color1} 76% 86%, ${color2} 86% 96%`
    return {
        backgroundImage: `radial-gradient(100% 100% at 100% 0,${color1} 4%,${g},#0008 96%,#0000),
        radial-gradient(100% 100% at 0 100%,#0000,#0008 4%,${g},${color1} 96%)${color1}`,
        backgroundSize: `${size1}px ${size1}px`
    }
}
const GrundTypeA19 = ({ size1 = 150, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => {
    const g = `${color1} 0% 5%, ${color2} 6% 15%, ${color1} 16% 25%, ${color2} 26% 35%,
    ${color1} 36% 45%, ${color2} 46% 55%, ${color1} 56% 65%, ${color2} 66% 75%,
    ${color1} 76% 85%, ${color2} 86% 95%, #0000 96%`
    return {
        backgroundImage: `radial-gradient(50% 50% at 100% 0, ${g}),
        radial-gradient(50% 50% at 0 100%, ${g}),
        radial-gradient(50% 50%, ${g}),
        radial-gradient(50% 50%, ${g}) calc(${size1}px / 2) calc(${size1}px / 2) ${color1} `,
        backgroundSize: `${size1}px ${size1}px `,
    }
}

const GrundTypeA20 = ({ size1 = 50, color1 = 'rgb(108, 231, 221)', color2 = 'rgb(250, 255, 178)' }) => ({
    backgroundImage: `repeating-radial-gradient(${color1} 88%,${color2} 90%)`,
    backgroundSize: `${size1}px ${size1}px`
})

// const GrundTypeA21 = ({ size1, color1, color2 }) => ({
// })


export const BackGrundTypeConfig = {
    GrundTypeA01: { size1: 60, size2: 30, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA02: { size1: 20, size2: 45, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA03: { size1: 40, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA04: { size1: 90, size2: 135, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA05: { size1: 200, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)', color3: '#F4F5FA' },
    GrundTypeA06: { size1: 60, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA07: { size1: 40, size2: 40, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA08: { size1: 55, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA09: { size1: 100, size2: 50, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA10: { size1: 30, size2: 5, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA11: { size1: 60, size2: 70, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA12: { size1: 40, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA13: { size1: 80, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)', color3: '#F4F5FA' },
    GrundTypeA14: { size1: 106, size2: 53, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA15: { size1: 25, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA16: { size1: 65, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)', color3: '#F4F5FA' },
    GrundTypeA17: { size1: 15, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA18: { size1: 100, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA19: { size1: 150, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
    GrundTypeA20: { size1: 50, color1: 'rgb(108, 231, 221)', color2: 'rgb(250, 255, 178)' },
}

export const BackGrundType = {
    GrundTypeA01,
    GrundTypeA02,
    GrundTypeA03,
    GrundTypeA04,
    GrundTypeA05,
    GrundTypeA06,
    GrundTypeA07,
    GrundTypeA08,
    GrundTypeA09,
    GrundTypeA10,
    GrundTypeA11,
    GrundTypeA12,
    GrundTypeA13,
    GrundTypeA14,
    GrundTypeA15,
    GrundTypeA16,
    GrundTypeA17,
    GrundTypeA18,
    GrundTypeA19,
    GrundTypeA20,
}