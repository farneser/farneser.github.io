import {FC} from "react";
import BlurFade from "@/components/ui/blur-fade.tsx";
import Markdown from "react-markdown";
import DATA from "@/data/cv.ts";
import {DelayProps} from "@/App.tsx";

const About: FC<DelayProps> = ({delay = 0, multiplierStartsFrom = 1}: DelayProps) => {
    return (
        <div>
            <BlurFade delay={delay * multiplierStartsFrom}>
                <h2 className="text-xl font-bold">About me</h2>
            </BlurFade>
            <BlurFade delay={delay * (multiplierStartsFrom + 1)}>
                <Markdown
                    components={{
                        strong: ({children}) => (
                            <strong className="text-gray-800 dark:text-gray-300 font-bold">{children}</strong>
                        ),
                        a: ({href, children}) => (
                            <a
                                href={href}
                                target="_blank"
                                className="text-gray-800 underline dark:text-gray-300 font-bold"
                            >
                                {children}
                            </a>
                        )
                    }}
                    className="prose max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert"
                >
                    {DATA.about.content}
                </Markdown>
            </BlurFade>
        </div>
    );
};

export default About;
