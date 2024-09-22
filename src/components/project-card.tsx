import BlurFade from "@/components/ui/blur-fade.tsx";
import {Badge} from "@/components/ui/badge.tsx";

interface Props {
    title: string;
    href?: string;
    description: string;
    dates: string;
    stack: string[];
    socials?: { name: string, link: string }[];
}

export function ProjectCard({title, href, description, dates, stack, socials}: Props) {
    return (
        <div
            style={{
                opacity: 1,
                filter: "blur(0px)",
                willChange: "auto",
                transform: "translateY(-6px)",
                transition: "all 0.3s ease-out"
            }}
            className="rounded-lg overflow-hidden h-full shadow-md bg-card flex flex-col hover:shadow-lg transition-all duration-300 ease-out ">
            <a href={href}><img
                src="https://cataas.com/cat"
                alt="Project Preview"
                className="w-full h-48 object-cover"
            /></a>

            <div
                className="py-1 px-2 text-left flex-1 flex flex-col border-gray-300 border border-t-0 dark:border-gray-800">
                <h3 className="font-semibold tracking-tight mt-1 text-base">{title}</h3>
                <time className="font-sans text-xs">{dates}</time>
                <div
                    className="prose max-w-full text-pretty font-sans text-s text-muted-foreground dark:prose-invert flex-1">
                    <p>{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {stack.map((skill, id) => (
                        <BlurFade key={skill} delay={0.04 * (1) + id * 0.05}>
                            <Badge variant="secondary" key={skill}>
                                {skill}
                            </Badge>
                        </BlurFade>
                    ))}
                </div>

                {socials &&
                    <div className="mt-4 flex flex-wrap gap-2">
                        {socials.map((social, id) => (
                            <BlurFade key={social.name} delay={0.04 * (1) + id * 0.05}>
                                <a href={social.link} target="_blank">
                                    <Badge variant="default" key={social.name}>
                                        {social.name}
                                    </Badge>
                                </a>
                            </BlurFade>
                        ))}
                    </div>}
            </div>
        </div>
    );
}
