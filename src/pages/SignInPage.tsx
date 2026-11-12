import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

export default function SignUp() {
    const [isSignIn, setIsSignIn] = useState(true)

    return (
        <section className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center p-6 text-slate-900 dark:text-slate-100">
            {/* Header Logo */}
            <div className="mb-10 flex items-center gap-3">
                <div className="size-8 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <h1 className="text-xl font-semibold tracking-tight">Linear</h1>
            </div>

            {/* Main Auth Card */}
            <div className="w-full max-w-150 bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark rounded-lg p-8 auth-card-shadow">
                {/* Tab Switcher */}
                <div className="flex gap-6 border-b border-slate-200 dark:border-border-dark mb-8">
                    <button
                        onClick={() => setIsSignIn(true)}
                        className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                            isSignIn
                                ? "border-primary text-slate-900 dark:text-white"
                                : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                        }`}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setIsSignIn(false)}
                        className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                            !isSignIn
                                ? "border-primary text-slate-900 dark:text-white"
                                : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                        }`}
                    >
                        Create Account
                    </button>
                </div>

                {/* Social Buttons */}
                <div className="flex flex-col gap-4">
                    <button className="flex items-center justify-center gap-3 h-11 px-4 rounded border border-slate-200 dark:border-border-dark bg-white dark:bg-input-dark hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium">
                        <svg className="size-5" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        Continue with Google
                    </button>
                    <button className="flex items-center justify-center gap-3 h-11 px-4 rounded border border-slate-200 dark:border-border-dark bg-white dark:bg-input-dark hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium">
                        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                                fillRule="evenodd"
                            />
                        </svg>
                        Continue with GitHub
                    </button>
                </div>

                {/* Divider */}
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200 dark:border-border-dark"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white dark:bg-card-dark px-3 text-slate-500 dark:text-slate-400 font-medium tracking-widest">
                            OR
                        </span>
                    </div>
                </div>

                {/* Conditional Form Rendering */}
                {isSignIn ? (
                    <form className="space-y-4">
                        <div className="space-y-1.5">
                            <label
                                className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                                htmlFor="email"
                            >
                                Email Address
                            </label>
                            <input
                                className="w-full h-11 bg-white dark:bg-input-dark border border-slate-200 dark:border-border-dark rounded px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                id="email"
                                placeholder="name@company.com"
                                type="email"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center">
                                <label
                                    className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <a
                                    className="text-xs font-medium text-primary hover:underline"
                                    href="#"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <input
                                className="w-full h-11 bg-white dark:bg-input-dark border border-slate-200 dark:border-border-dark rounded px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                id="password"
                                placeholder="••••••••"
                                type="password"
                            />
                        </div>
                        <button
                            className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold rounded text-sm transition-all mt-4 flex items-center justify-center gap-2"
                            type="submit"
                        >
                            Sign In
                            <ArrowUpRight className="size-4" />
                        </button>
                    </form>
                ) : (
                    <form className="space-y-4">
                        <div className="space-y-1.5">
                            <label
                                className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                                htmlFor="name"
                            >
                                Full Name
                            </label>
                            <input
                                className="w-full h-11 bg-white dark:bg-input-dark border border-slate-200 dark:border-border-dark rounded px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                id="name"
                                placeholder="John Doe"
                                type="text"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label
                                className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                                htmlFor="signup-email"
                            >
                                Email Address
                            </label>
                            <input
                                className="w-full h-11 bg-white dark:bg-input-dark border border-slate-200 dark:border-border-dark rounded px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                id="signup-email"
                                placeholder="name@company.com"
                                type="email"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label
                                className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                                htmlFor="signup-password"
                            >
                                Password
                            </label>
                            <input
                                className="w-full h-11 bg-white dark:bg-input-dark border border-slate-200 dark:border-border-dark rounded px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                id="signup-password"
                                placeholder="••••••••"
                                type="password"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label
                                className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                                htmlFor="confirm-password"
                            >
                                Confirm Password
                            </label>
                            <input
                                className="w-full h-11 bg-white dark:bg-input-dark border border-slate-200 dark:border-border-dark rounded px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                id="confirm-password"
                                placeholder="••••••••"
                                type="password"
                            />
                        </div>
                        <button
                            className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold rounded text-sm transition-all mt-4 flex items-center justify-center gap-2"
                            type="submit"
                        >
                            Create Account
                            <ArrowUpRight className="size-4" />
                        </button>
                    </form>
                )}

                <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    By continuing, you agree to our <br />
                    <a
                        className="underline hover:text-slate-900 dark:hover:text-white transition-colors"
                        href="#"
                    >
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                        className="underline hover:text-slate-900 dark:hover:text-white transition-colors"
                        href="#"
                    >
                        Privacy Policy
                    </a>
                    .
                </p>
            </div>

            {/* Footer Status */}
            <div className="mt-10 gap-5 flex justify-between items-center pointer-events-none">
                <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400 dark:text-slate-600 uppercase tracking-widest pointer-events-auto cursor-default">
                    <span className="size-2 rounded-full bg-green-500"></span>
                    All systems operational
                </div>
                <div className="flex items-center gap-4 pointer-events-auto">
                    <button className="text-[11px] font-medium text-slate-400 dark:text-slate-600 uppercase tracking-widest hover:text-slate-900 dark:hover:text-white transition-colors">
                        Support
                    </button>
                    <button className="text-[11px] font-medium text-slate-400 dark:text-slate-600 uppercase tracking-widest hover:text-slate-900 dark:hover:text-white transition-colors">
                        Guides
                    </button>
                </div>
            </div>
        </section>
    )
}
