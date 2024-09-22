import {FC} from 'react';
import BlurFadeText from "@/components/ui/blur-fade-text.tsx";
import BlurFade from "@/components/ui/blur-fade.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import DATA from "@/data/cv.ts";
import {DelayProps} from "@/App.tsx";
import WordRotate from "@/components/magicui/word-rotate.tsx";

const Hero: FC<DelayProps> = ({delay = 0, multiplierStartsFrom = 1}: DelayProps) => {
    return (
        <section id="hero">
            <div className="mx-auto w-full max-w-2xl space-y-8">
                <div className="gap-2 flex justify-between">
                    <div className="flex-col flex flex-1 space-y-1.5">
                        <BlurFade
                            delay={delay * multiplierStartsFrom} yOffset={8}
                            className="flex text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                        >
                            Hi, I'm {DATA.hero.name.split(" ")[0]}
                            <WordRotate className="inline" words={["👋", "😊", "❤️", "✨", "❓"]}/>
                        </BlurFade>
                        <BlurFadeText
                            className="max-w-[600px] md:text-xl"
                            delay={delay * multiplierStartsFrom}
                            text={DATA.hero.description}
                        />
                    </div>
                    <BlurFade delay={delay * multiplierStartsFrom}>
                        <Avatar className="size-28 border">
                            <AvatarImage alt={DATA.hero.name} src={DATA.hero.avatar_url}/>
                            <AvatarFallback>{DATA.hero.initials}</AvatarFallback>
                        </Avatar>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
};

export default Hero;
