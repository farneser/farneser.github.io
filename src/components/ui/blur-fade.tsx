import {AnimatePresence, motion, useInView, Variants} from "framer-motion";
import React, {FC, PropsWithChildren, useRef} from "react";

interface BlurFadeProps {
    children: React.ReactNode;
    className?: string;
    variant?: {
        hidden: { y: number };
        visible: { y: number };
    };
    duration?: number;
    delay?: number;
    yOffset?: number;
    inView?: boolean;
    inViewMargin?: string;
    blur?: string;
}

const BlurFade: FC<PropsWithChildren<BlurFadeProps>> = (
    {
        children,
        className,
        variant,
        duration = 0.4,
        delay = 0,
        yOffset = 6,
        inView = false,
        inViewMargin = "-50px",
        blur = "6px",
    }: PropsWithChildren<BlurFadeProps>
) => {
    const ref = useRef(null);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const inViewResult = useInView(ref, {once: true, margin: inViewMargin});
    const isInView = !inView || inViewResult;
    const defaultVariants: Variants = {
        hidden: {y: yOffset, opacity: 0, filter: `blur(${blur})`},
        visible: {y: -yOffset, opacity: 1, filter: `blur(0px)`},
    };
    const combinedVariants = variant || defaultVariants;
    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                exit="hidden"
                variants={combinedVariants}
                transition={{
                    delay: 0.04 + delay,
                    duration,
                    ease: "easeOut",
                }}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default BlurFade;