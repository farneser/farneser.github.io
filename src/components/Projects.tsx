import {FC} from 'react';
import {DelayProps} from "@/App.tsx";
import BlurFade from "@/components/ui/blur-fade.tsx";
import DATA from "@/data/cv.ts";
import {ProjectCard} from "@/components/project-card.tsx";

const Projects: FC<DelayProps> = ({delay = 0, multiplierStartsFrom = 1}: DelayProps) => {
    return (
        <section id="projects" className="mx-auto w-full max-w-2xl space-y-8">
            <div className="grid items-center justify-center gap-4 text-center w-full">
                <BlurFade delay={delay * multiplierStartsFrom}>
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Latest Projects
                        </h2>
                        <p className="mx-auto max-w-[600px] text-muted-foreground text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            I've worked on a variety of projects, from simple websites to complex web applications. Here
                            are a few of my favorites.
                        </p>
                    </div>
                </BlurFade>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={delay * (multiplierStartsFrom + 1) + id * 0.05}
                        >
                            <ProjectCard
                                href={project.link}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                stack={project.stack}
                                socials={project.socials}
                            />

                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
