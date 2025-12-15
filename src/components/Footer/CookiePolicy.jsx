import React from "react";

export default function CookiePolicy() {
    return (
        <div className="min-h-screen text-gray-200">
            <div className="max-w-4xl mx-auto bg-gray-800 p-5 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-pink-400 mb-6">Cookie Policy</h1>

                <p className="mb-4">
                    Last updated: <span className="font-semibold">19 November 2025</span>
                </p>

                <p className="mb-6">
                    This Cookie Policy explains how we use cookies and similar tracking
                    technologies when you visit our website. By using our site, you agree
                    to the use of cookies as described below.
                </p>

                {/* --- What Are Cookies --- */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-pink-300 mb-2">
                        What Are Cookies?
                    </h2>
                    <p>
                        Cookies are small text files stored on your device that help improve
                        your browsing experience. They allow websites to remember your
                        actions, preferences, and sessions.
                    </p>
                </section>

                {/* --- Types of Cookies We Use --- */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-pink-300 mb-2">
                        Types of Cookies We Use
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Essential Cookies:</strong> Required for website
                            functionality.
                        </li>
                        <li>
                            <strong>Analytics Cookies:</strong> Help us understand website
                            usage and improve performance.
                        </li>
                        <li>
                            <strong>Preference Cookies:</strong> Store your settings (language,
                            theme, etc.).
                        </li>
                        <li>
                            <strong>Advertising Cookies:</strong> Show personalized ads based
                            on your browsing activity.
                        </li>
                    </ul>
                </section>

                {/* --- Why We Use Cookies --- */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-ppink-300 mb-2">
                        Why We Use Cookies
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>To improve website speed and performance</li>
                        <li>To analyze how users interact with our website</li>
                        <li>To provide a personalized experience</li>
                        <li>To enable secure login and account-related features</li>
                    </ul>
                </section>

                {/* --- Third Party Cookies --- */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-pink-300 mb-2">
                        Third-Party Cookies
                    </h2>
                    <p>
                        We may use third-party services such as Google Analytics, social
                        media platforms, or advertisers that place cookies to track your
                        behavior across websites. These third parties follow their own
                        privacy policies.
                    </p>
                </section>

                {/* --- Cookie Control --- */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-pink-300 mb-2">
                        How You Can Control Cookies
                    </h2>
                    <p className="mb-2">
                        You can control or delete cookies anytime through your browser
                        settings. You may:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Disable all cookies</li>
                        <li>Block third-party cookies</li>
                        <li>Clear stored cookies</li>
                        <li>Receive warnings before cookies are stored</li>
                    </ul>
                </section>

                {/* --- Impact --- */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-pink-300 mb-2">
                        Impact of Disabling Cookies
                    </h2>
                    <p>
                        If you disable cookies, some features of our website may not work
                        properly — such as login, preferences, and personalized content.
                    </p>
                </section>

                {/* --- Contact --- */}
                <section>
                    <h2 className="text-xl font-semibold text-pink-300 mb-2">
                        Contact Us
                    </h2>
                    <p>
                        If you have questions about this Cookie Policy, contact us at:{" "}
                        <span className="font-semibold text-pink-400">
                            <a href="mailto:online.bazzar@gmail.com">online.bazzar@gmail.com</a>
                        </span>
                    </p>
                </section>
            </div>
        </div>
    );
}
