import {ArrowLeftIcon, ArrowRightIcon} from "lucide-react";
import {useContext, createContext, useState, useEffect, useMemo, ReactNode} from "react";

interface SidebarContextType {
    expanded: boolean;
    setExpanded: (val: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextType>({
    expanded: true,
    setExpanded: () => null,
});

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowWidth;
};

const AUTO_CLOSE_WIDTH = 1024;
const EXTRA_SLIM_WIDTH = 768;

export default function Sidebar({children}: { children: ReactNode }) {
    const [expanded, setExpanded] = useState(false);
    const [rememberedExpanded, setRememberedExpanded] = useState(true);
    const windowWidth = useWindowWidth();

    useEffect(() => {
        setExpanded(windowWidth >= AUTO_CLOSE_WIDTH ? rememberedExpanded : false);
    }, [windowWidth, rememberedExpanded]);

    const handleToggle = () => {
        if (windowWidth >= AUTO_CLOSE_WIDTH) {
            setRememberedExpanded((prev) => !prev);
        }
        setExpanded((prev) => !prev);
    };

    const contextValue = useMemo(
        () => ({
            expanded,
            setExpanded,
        }),
        [expanded]
    );

    const sidebarClass = expanded ? "w-full" : "";
    const containerClass = `sm:w-auto h-screen fixed right-0 z-30 flex flex-col justify-center lg:block`;

    if (windowWidth < EXTRA_SLIM_WIDTH) {
        return (
            <aside className="w-screen fixed bottom-0 z-30 flex justify-center">
                <nav className="sm:h-auto bg-card flex flex-col border rounded-xl shadow-sm m-2 lg:m-6">
                    <SidebarContext.Provider value={contextValue}>
                        <ul className="flex px-1 md:px-3">{children}</ul>
                    </SidebarContext.Provider>
                </nav>
            </aside>
        );
    }

    return (
        <aside className={`${sidebarClass} ${containerClass}`}>
            <nav className="sm:h-auto bg-card flex flex-col border rounded-xl shadow-sm m-2 lg:m-6">
                <SidebarContext.Provider value={contextValue}>
                    <ul className="flex-1 px-1 md:px-3">
                        <SidebarItem icon={expanded ? <ArrowRightIcon/> : <ArrowLeftIcon/>} onClick={handleToggle}/>
                        {children}
                    </ul>
                </SidebarContext.Provider>
            </nav>
        </aside>
    );
}

interface SidebarItemProps {
    icon: ReactNode;
    text?: string;
    active?: boolean;
    alert?: boolean;
    link?: string;
    onClick?: () => void;
}

const SidebarItem = (
    {
        icon,
        text,
        active,
        alert,
        link,
        onClick,
    }: SidebarItemProps
) => {
    const {expanded, setExpanded} = useContext(SidebarContext);
    const windowWidth = useWindowWidth();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (windowWidth < AUTO_CLOSE_WIDTH) {
            setExpanded(false);
        }
    };

    const Tag = link ? 'a' : 'button';

    return (
        <Tag
            href={link}
            onClick={handleClick}
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                active ? "bg-accent text-accent-foreground" : "hover:bg-accent text-accent-foreground"
            }`}
        >
            {icon}
            {text && (
                <span className={`overflow-hidden transition-all text-nowrap ${expanded ? "w-28 ml-3" : "w-0"}`}>
                    {text}
                </span>
            )}
            {alert && <div className="absolute right-2 w-2 h-2 rounded bg-indigo-400"/>}
            {!expanded && windowWidth > EXTRA_SLIM_WIDTH && text && (
                <div
                    className="absolute right-full rounded-md px-2 py-1 mr-6 bg-accent text-accent-foreground text-sm text-nowrap invisible opacity-20 translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                    {text}
                </div>
            )}
        </Tag>
    );
}

export {SidebarItem};