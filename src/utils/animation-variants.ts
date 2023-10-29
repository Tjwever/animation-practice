export const itemRootContainer = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
    navigating: { opacity: 0, y: -140, scale: 0 },
}

export const itemRootH1 = {
    hidden: { opacity: 0, y: 10, scale: 0 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
                restDelta: 0.001,
            },
        },
    },
}

export const itemRootDiv = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
}

export const itemDetailsContainer = {
    hidden: { opacity: 0, x: 40, scale: 0 },
    show: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.2,
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
    navigating: { opacity: 0, rotate: -50, x: -140 },
}

export const itemDetailsVariants = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}
