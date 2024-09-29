import {ChevronLast, ChevronFirst} from "lucide-react"
import {useContext, createContext, useState, ReactNode} from "react"

const SidebarContext = createContext({expanded: true});

export default function Sidebar({children}: { children: ReactNode }) {
    const [expanded, setExpanded] = useState(true)

    return (
        <aside className="h-screen fixed bg-card right-0 z-30">
            <nav className="h-full flex flex-col border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg"
                    >
                        {expanded ? <ChevronLast/> : <ChevronFirst/>}
                    </button>
                </div>

                <SidebarContext.Provider value={{expanded}}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>
            </nav>
        </aside>
    )
}

export function SidebarItem({icon, text, active, alert, link, onClick}: {
    icon: ReactNode,
    text: string,
    active?: boolean,
    alert?: boolean,
    link?: string,
    onClick?: () => void
}) {
    const {expanded} = useContext(SidebarContext)

    return (
        <a
            href={link}
            onClick={onClick}
            className={`
                relative flex items-center py-2 px-3 my-1
                font-medium rounded-md cursor-pointer
                transition-colors group
                ${active
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                : "hover:bg-indigo-50 text-gray-600"}`
            }
        >
            {icon}
            <span
                className={`overflow-hidden transition-all text-nowrap ${
                    expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
        {text}
      </span>
            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                        expanded ? "" : "top-2"
                    }`}
                />
            )}

            {!expanded && (
                <div
                    className={`
          absolute right-full rounded-md px-2 py-1 mr-6
          bg-indigo-100 text-indigo-800 text-sm
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
