import {FC} from "react";
import {DelayProps} from "@/App.tsx";
import BlurFade from "@/components/ui/blur-fade.tsx";
import DATA from "@/data/cv.ts";
import {Button} from "@/components/ui/button.tsx";

const Contact: FC<DelayProps> = ({delay = 0, multiplierStartsFrom = 1}: DelayProps) => {
    const navigateTo = (url: string) => {
        window.open(url, "_blank");
    }

    return (
        <section id="contact">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                <BlurFade delay={delay * multiplierStartsFrom}>
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="mx-auto max-w-[600px] text-muted-foreground text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            Want to chat? Feel free and just shoot me a direct message
                            {" "}
                            <a
                                className="text-blue-500 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                href={DATA.contact.dm_url}
                                target="_blank"
                            >
                                on a telegram
                            </a>
                            {" "}
                            and I&apos;ll respond whenever I can.
                        </p>
                    </div>
                </BlurFade>
                <BlurFade delay={delay * (multiplierStartsFrom + 1)} className="space-x-3 py-3">
                    <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl py-3">
                        Connect with me
                    </h3>
                    {DATA.socials.map((social) => (
                        <Button onClick={() => navigateTo(social.url)}>
                            <div><social.icon className="mr-2 h-4 w-4"/></div>
                            <div>{social.name}</div>
                        </Button>
                    ))}
                </BlurFade>
            </div>

        </section>
    );
};

export default Contact;
