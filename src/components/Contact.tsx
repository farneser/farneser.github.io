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
            <div className="grid items-center justify-center gap-4 text-center w-full">
                <BlurFade delay={delay * multiplierStartsFrom}>
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="mx-auto max-w-[600px] text-muted-foreground text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            Want to chat? Feel free and never hesitate to contact me by direct message on a
                            {" "}
                            <a
                                className="text-blue-500 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                href={DATA.contact.dm_url}
                                target="_blank"
                            >
                                Telegram
                            </a>
                            {" "}
                            I&apos;ll reply as soon as I can
                        </p>
                    </div>
                </BlurFade>
                <BlurFade delay={delay * (multiplierStartsFrom + 1)} className="mx-auto">
                    <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl py-3">
                        Connect me
                    </h3>
                    <div className="gap-2 flex flex-wrap">
                        {DATA.socials.map((social) => (
                            <Button onClick={() => navigateTo(social.url)}>
                                <div>
                                    <social.icon className="mr-2 h-4 w-4"/>
                                </div>
                                <div>{social.name}</div>
                            </Button>
                        ))}
                    </div>
                </BlurFade>
            </div>
        </section>
    );
};

export default Contact;
