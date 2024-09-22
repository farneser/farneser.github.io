import {FC} from "react";
import BlurFade from "@/components/ui/blur-fade.tsx";
import DATA from "@/data/cv.ts";
import {DelayProps} from "@/App.tsx";
import {Badge} from "@/components/ui/badge.tsx";

const Skills: FC<DelayProps> = ({delay = 0, multiplierStartsFrom = 1}: DelayProps) => {
    return (
        <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={delay * multiplierStartsFrom}>
                    <h2 className="text-xl font-bold">Skills</h2>
                </BlurFade>
                <div className="flex flex-wrap gap-1">
                    {DATA.skills.map((skill, id) => (
                        <BlurFade key={skill} delay={delay * (multiplierStartsFrom + 1) + id * 0.05}>
                            <Badge key={skill}>{skill}</Badge>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
