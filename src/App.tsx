import About from "@/components/About.tsx";
import Projects from "@/components/Projects.tsx";
import Hero from "@/components/Hero.tsx";
import Contact from "@/components/Contact.tsx";
import {useTheme} from "@/components/ui/theme-provider.tsx";
import Skills from "@/components/Skills.tsx";
import Hire from "@/components/Hire.tsx";
import Sidebar, {SidebarItem} from "@/components/ui/sidebar.tsx";
import {AppWindowIcon, ContactIcon, HeartIcon, HomeIcon, MoonIcon, SunIcon} from "lucide-react";
import {FC, PropsWithChildren} from "react";
import {cn} from "@/lib/utils.ts";

const BLUR_FADE_DELAY = 0.04;

export type DelayProps = {
    delay?: number,
    multiplierStartsFrom?: number
}

type SectionProps = {
    id: string;
    className?: string;
}

const Section: FC<PropsWithChildren<SectionProps>> = ({children, id, className}: PropsWithChildren<SectionProps>) => {
    return <section id={id} className={cn("scroll-mt-12", className)}>
        {children}
    </section>
}

function App() {
    const {nextTheme, theme} = useTheme();

    return (
        <div id="application">
            <Sidebar>
                <SidebarItem icon={<HomeIcon/>} text={"Me"} link="#hero"/>
                <SidebarItem icon={<ContactIcon/>} text={"Contacts"} link="#contact"/>
                <SidebarItem icon={<AppWindowIcon/>} text={"Projects"} link="#projects"/>
                <SidebarItem icon={<HeartIcon/>} text={"Hire me"} link="#hire-me"/>
                <SidebarItem
                    icon={theme !== "light" ? <SunIcon/> : <MoonIcon/>}
                    text="Switch theme"
                    onClick={() => nextTheme()}
                />
            </Sidebar>
            <main id="content" className="flex flex-col items-center justify-center min-h-screen">
                <div className="max-w-2xl mx-auto py-12 sm:py-24 px-6 space-y-10">
                    <Section id="hero" className="scroll-mt-24">
                        <Hero delay={BLUR_FADE_DELAY}/>
                    </Section>
                    <Section id="about">
                        <About delay={BLUR_FADE_DELAY} multiplierStartsFrom={3}/>
                    </Section>
                    <Section id="skills">
                        <Skills delay={BLUR_FADE_DELAY} multiplierStartsFrom={5}/>
                    </Section>
                    <Section id="contact">
                        <Contact delay={BLUR_FADE_DELAY} multiplierStartsFrom={7}/>
                    </Section>
                    <Section id="projects">
                        <Projects delay={BLUR_FADE_DELAY} multiplierStartsFrom={9}/>
                    </Section>
                    <Section id="hire-me">
                        <Hire delay={BLUR_FADE_DELAY} multiplierStartsFrom={11}/>
                    </Section>
                </div>
            </main>
        </div>
    );
}

export default App;
