import {FC, forwardRef, InputHTMLAttributes, useState} from "react";
import BlurFade from "@/components/ui/blur-fade.tsx";
import {DelayProps} from "@/App.tsx";
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';
import {getBaseUrl} from "@/lib/utils.ts";
import {useForm} from "react-hook-form";
import {cn} from "@/lib/utils"

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    ({className, type, ...props}, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)

type MessageData = {
    name: string;
    email: string;
    message: string;
};

const SendMessage: FC<DelayProps> = ({delay = 0, multiplierStartsFrom = 1}) => {
    const {executeRecaptcha} = useGoogleReCaptcha();
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit} = useForm<MessageData>();

    const onSubmit = async (data: MessageData) => {
        setLoading(true);

        if (!executeRecaptcha) {
            console.error("Recaptcha not loaded");

            return;
        }

        const token = await executeRecaptcha('sendMessage');

        try {
            const response = await fetch(`${getBaseUrl()}/send_message`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({...data, token}),
            });

            if (response.status === 200) {
                alert("Message sent successfully!");
            } else {
                alert("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to send message. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="grid items-center justify-center gap-4 text-center w-full">
            <BlurFade delay={delay * multiplierStartsFrom} className="w-full">
                <form className="space-y-3 bg-card w-full"
                      onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Drop me a message!
                    </h2>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-accent-foreground"
                            >
                                What's your name?
                            </label>
                            <Input
                                type="text"
                                id="name"
                                placeholder="Your awesome name"
                                {...register("name", {required: true})}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-accent-foreground"
                            >
                                Your email?
                            </label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Your email address"
                                {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-accent-foreground"
                            >
                                Got something to say?
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Type your message here..."
                                {...register("message", {required: true})}
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full py-2 px-4 ${loading ? 'bg-gray-400' : 'bg-blue-600'} sm:col-span-2 text-white rounded-md hover:bg-blue-700 transition duration-200`}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send it!'}
                        </button>
                    </div>
                </form>
            </BlurFade>
        </div>
    );
}

export default SendMessage;
