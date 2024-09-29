import About from "@/components/About.tsx";
import Projects from "@/components/Projects.tsx";
import Hero from "@/components/Hero.tsx";
import Contact from "@/components/Contact.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useTheme} from "@/components/ui/theme-provider.tsx";
import Skills from "@/components/Skills.tsx";
import Hire from "@/components/Hire.tsx";

const BLUR_FADE_DELAY = 0.04;

export type DelayProps = {
    delay?: number,
    multiplierStartsFrom?: number
}

function App() {
    const {setTheme} = useTheme();
    return (
        <div id="application" className="flex flex-col items-center justify-center min-h-screen">
            <main className="max-w-2xl mx-auto py-12 sm:py-24 px-6 space-y-10">
                <section id="hero">
                    <Hero delay={BLUR_FADE_DELAY}/>
                </section>
                <section id="about">
                    <About delay={BLUR_FADE_DELAY} multiplierStartsFrom={3}/>
                </section>
                <section id="skills">
                    <Skills delay={BLUR_FADE_DELAY} multiplierStartsFrom={7}/>
                </section>
                <section id="contact">
                    <Contact delay={BLUR_FADE_DELAY} multiplierStartsFrom={5}/>
                </section>
                <section id="projects">
                    <Projects delay={BLUR_FADE_DELAY} multiplierStartsFrom={7}/>
                </section>
                <section id="hire-me">
                    <Hire delay={BLUR_FADE_DELAY} multiplierStartsFrom={9}/>
                </section>
            </main>
            <div className="flex flex-row">
                <Button onClick={() => setTheme("light")}>Light</Button>
                <Button onClick={() => setTheme("dark")}>Dark</Button>
                <Button onClick={() => setTheme("system")}>System</Button>
            </div>
        </div>
    );
}

export default App;
