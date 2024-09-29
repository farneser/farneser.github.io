import {ArrowLeftIcon, ArrowRightIcon} from "lucide-react";
import {useContext, createContext, useState, useEffect, ReactNode} from "react";

interface SidebarContextType {
    expanded: boolean,
    setExpanded: (val: boolean) => void,
}

export const SidebarContext = createContext<SidebarContextType>({expanded: true, setExpanded: () => null});

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth;
};

const AUTO_CLOSE_WIDTH = 1024;

export default function Sidebar({children}: { children: ReactNode }) {
    const [expanded, setExpanded] = useState(true);
    const [rememberedExpanded, setRememberedExpanded] = useState(true);
    const windowWidth = useWindowWidth();

    useEffect(() => {
        if (windowWidth < AUTO_CLOSE_WIDTH) {
            setExpanded(false);
        } else {
            setExpanded(rememberedExpanded);
        }
    }, [windowWidth, rememberedExpanded]);

    const handleToggle = () => {
        if (windowWidth >= AUTO_CLOSE_WIDTH) {
            setRememberedExpanded((curr) => !curr);
        }

        setExpanded((curr) => !curr);
    };

    const setExpandedHandler = (v: boolean) => {
        setExpanded(v);
    }

    return (
        <aside
            className={`${expanded ? "w-full" : ""} sm:w-auto h-screen fixed right-0 z-30 flex flex-col justify-center lg:block`}>
            <nav
                className={`${expanded ? "h-full" : ""} sm:h-auto bg-card flex flex-col border rounded-xl shadow-sm m-2 lg:m-6`}>
                <SidebarContext.Provider value={{
                    expanded,
                    setExpanded: setExpandedHandler
                }}>
                    <ul className="flex-1 px-1 md:px-3">
                        <SidebarItem
                            icon={expanded ? <ArrowRightIcon/> : <ArrowLeftIcon/>}
                            onClick={handleToggle}
                        />
                        {children}
                    </ul>
                </SidebarContext.Provider>
            </nav>
        </aside>
    );
}

export function SidebarItem({icon, text, active, alert, link, onClick}: {
    icon: ReactNode,
    text?: string,
    active?: boolean,
    alert?: boolean,
    link?: string,
    onClick?: () => void
}) {
    const {expanded, setExpanded} = useContext(SidebarContext)

    const windowWidth = useWindowWidth();

    return (
        <a
            href={link}
            onClick={() => {
                if (onClick) {
                    onClick();
                } else if (windowWidth < AUTO_CLOSE_WIDTH) {
                    setExpanded(false);
                }
            }}
            className={`
                relative flex items-center py-2 px-3 my-1
                font-medium rounded-md cursor-pointer
                transition-colors group
                ${active
                ? "bg-accent from-indigo-200 to-indigo-100 text-accent-foreground"
                : "hover:bg-accent text-accent-foreground"}`
            }
        >
            {icon}
            {text && <span
                className={`overflow-hidden transition-all text-nowrap ${
                    expanded ? "w-28 ml-3" : "w-0"
                }`}
            >
                {text}
            </span>}

            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                        expanded ? "" : "top-2"
                    }`}
                />
            )}

            {!expanded && text && (
                <div
                    className={`
          absolute right-full rounded-md px-2 py-1 mr-6
          bg-accent text-accent-foreground text-sm text-nowrap
          invisible opacity-20 translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
                >
                    {text}
                </div>
            )}
        </a>
    )
}
