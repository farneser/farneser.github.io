import {FC} from "react";
import {DelayProps} from "@/App.tsx";
import BlurFade from "@/components/ui/blur-fade.tsx";

const Hire: FC<DelayProps> = ({delay = 0, multiplierStartsFrom = 1}: DelayProps) => {
    const getLink = (url: string, text: string, target: "_self" | "_blank" | "_parent" | "_top" | string) => {
        return (
            <a
                className="text-blue-500 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                href={url}
                target={target}
            >
                {text}
            </a>
        );
    }
    return (
        <div className="grid items-center justify-center gap-4 text-center w-full">
            <BlurFade delay={delay * multiplierStartsFrom}>
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Hire Me
                    </h2>
                    <p className="mx-auto text-muted-foreground text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                        Interested in working together? I would love to hear from you!
                        Please feel free to reach out via
                        {" "}
                        {getLink("#contact", "my contacts", "_self")}
                        {", "}
                        {" "}
                        or check my
                        {" "}
                        {getLink("cv.pdf", "resume", "_blank")}
                        {" "} for more details.
                    </p>
                </div>
            </BlurFade>
        </div>
    );
};

export default Hire;
