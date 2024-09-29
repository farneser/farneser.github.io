import About from "@/components/sections/about.tsx";
import Projects from "@/components/sections/projects.tsx";
import Hero from "@/components/sections/hero.tsx";
import Contact from "@/components/sections/contact.tsx";
import {useTheme} from "@/components/ui/theme-provider.tsx";
import Skills from "@/components/sections/skills.tsx";
import Hire from "@/components/sections/hire.tsx";
import Sidebar, {SidebarItem} from "@/components/ui/sidebar.tsx";
import {AppWindowIcon, ContactIcon, HandshakeIcon, HomeIcon, MoonIcon, SunIcon} from "lucide-react";
import {FC, PropsWithChildren} from "react";
import {cn} from "@/lib/utils.ts";
import SendMessage from "@/components/sections/send-message.tsx";

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
                <SidebarItem icon={<HandshakeIcon/>} text={"Hire me"} link="#hire-me" alert={true}/>
                <SidebarItem
                    icon={theme === "light" ? <SunIcon/> : <MoonIcon/>}
                    text="Switch theme"
                    onClick={() => nextTheme()}
                />
            </Sidebar>
            <main id="content" className="flex flex-col items-center justify-center min-h-screen">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 px-2 space-y-10 sm:px-6">
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
                        <Projects delay={BLUR_FADE_DELAY} multiplierStartsFrom={9} maxProjects={4}/>
                    </Section>
                    <Section id="hire-me">
                        <Hire delay={BLUR_FADE_DELAY} multiplierStartsFrom={11}/>
                    </Section>
                    <Section id="send-me-a-message">
                        <SendMessage/>
                    </Section>
                </div>
            </main>
        </div>
    );
}

export default App;
