import {FC} from "react";
import BlurFade from "@/components/ui/blur-fade.tsx";
import {DelayProps} from "@/App.tsx";

const SendMessage: FC<DelayProps> = ({delay = 0, multiplierStartsFrom = 1}) => {
    function process_form() {
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const message = (document.getElementById("message") as HTMLInputElement).value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all the fields");
            return;
        }

        fetch("https://me.farneser.dev/send_message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
            }),
        }).then((response) => {
            if (response.status === 200) {
                alert("Message sent successfully!");
            } else {
                alert("Failed to send message. Please try again later.");
            }
        }).catch((error) => {
            console.error("Error:", error);
            alert("Failed to send message. Please try again later.");
        });

    }

    return (
        <div className="grid items-center justify-center gap-4 text-center w-full">
            <BlurFade delay={delay * multiplierStartsFrom}>
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Drop me a message! (DEMO)
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                What's your name?
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                                placeholder="Your awesome name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Your email?
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                                placeholder="Your email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Got something to say?
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                                placeholder="Type your message here..."
                            ></textarea>
                        </div>
                        <button
                            onClick={() => process_form()}
                            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            Send it!
                        </button>
                    </div>
                </div>
            </BlurFade>
        </div>
    );
}

export default SendMessage;
