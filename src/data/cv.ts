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
}

export default DATA;