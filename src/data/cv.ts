import sha256 from "crypto-js/sha256";
import {Icons} from "@/components/ui/icons.tsx";

const hashedEmail = sha256("avatar@farneser.dev");
const gravatarUrl = `https://gravatar.com/avatar/${hashedEmail}`;

const DATA = {
    hero: {
        name: "Alex Chernov",
        description: "Backend Developer exploring new tech. I enjoy building open-source projects and solving complex problems. Always learning.",
        initials: "AC",
        avatar_url: gravatarUrl
    },
    about: {
        content: "**I’m a backend developer** specializing in **Java** and **Kotlin**, focused on building scalable web applications. My background includes developing [open-source projects](https://github.com/farneser) and interning at EPAM Systems, where I enhanced my **skills** in **microservices**. I enjoy **learning** new **technologies** and solving real-world problems through code."
    },
    contact: {
        dm_url: "https://t.me/farneser"
    },
    socials: [
        {
            name: "Email",
            url: "mailto:web@farneser.dev",
            icon: Icons.email
        },
        {
            name: "GitHub",
            url: "https://github.com/farneser",
            icon: Icons.github
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/farneser",
            icon: Icons.linkedin
        },
        {
            name: "Telegram",
            url: "https://t.me/farneser",
            icon: Icons.globe
        }
    ],
    skills: [
        "Java",
        "Kotlin",
        "Spring",
        "OOP",
        "Architect patterns",
        "Clean code",
        "DDD",
        "Python",
        "React",
        "TypeScript",
        "SCSS",
        "Microservices",
        "Nginx",
        "Bash",
        "RabbitMQ",
        "PostgreSQL",
        "Redis",
        "Spring JPA"
    ],
    projects: [
        {
            title: "File2Link",
            dates: "2024",
            description: "A telegram bot that processes files/photos/videos and downloads them to the server, providing a direct download link.",
            stack: ["Rust", "Axum", "Teloxide"],
            link: "https://github.com/farneser/file2link",
            socials: [
                {
                    name: "GitHub",
                    link: "https://github.com/farneser/file2link",
                }
            ]
        },
        {
            title: "Task Tracker",
            dates: "2023",
            description: "Multi-user project management system, task scheduler inspired by Trello.",
            stack: ["Spring Boot", "RabbitMq", "React", "Java", "TypeScript"],
            link: "https://github.com/farneser/task-tracker",
            socials: [
                {
                    name: "Website",
                    link: "https://tt.farneser.dev",
                },
                {
                    name: "GitHub",
                    link: "https://github.com/farnser/task-tracker",
                }
            ]
        },
        {
            title: "Cloud File Storage",
            dates: "2023",
            description: "Multi-user cloud storage, inspired by Google Drive.",
            stack: ["Spring Boot", "Minio", "Postgres"],
            link: "https://github.com/farneser/cloud-file-storage",
            socials: [
                {
                    name: "Website",
                    link: "https://cloud-file-storage.farneser.dev",
                },
                {
                    name: "GitHub",
                    link: "https://github.com/farneser/cloud-file-storage",
                }
            ]
        },
        {
            title: "Lab work system",
            dates: "2023",
            description: "A web-application for uploading laboratory works by professors and their submission by students. The system has an administrative part that allows to create groups, manage disciplines, and track progress.",
            stack: ["ASP.NET 7", "React", "SQLite"],
            link: "https://github.com/farneser/lab-submission",
            socials: [
                {
                    name: "GitHub",
                    link: "https://github.com/toninety.one/ToNinetyOneDocker"
                }
            ]
        },
        {
            title: "Telegram timetable processing",
            dates: "2022",
            description: "Telegram bot to view and update timetable. Import from XLSX file to database, administration adds substitutions. Users can see the current schedule with substitutions, without accessing other sources.",
            stack: ["Python", "Aiogram", "Sqlite"],
            link: "https://github.com/farneser/timetable-bot"
        },
    ]
}

export default DATA;