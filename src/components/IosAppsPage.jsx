import { Mail, Twitter, Smartphone, Keyboard, Bell, MessageSquare } from 'lucide-react';

const IosAppsPage = ({ onNavigate }) => {
    const apps = [
        {
            title: "RapidPaste",
            description: "Speed up your copy/paste and sharing workflow with customizable presets and keyboard integration.",
            icon: <Smartphone className="w-12 h-12 text-purple-600" />,
            features: [
                "Create and manage copy/paste presets",
                "Custom keyboard for quick access",
                "Share sheet integration",
                "Organize presets into categories",
            ],
            appStoreLink: "#",
            privacyUrl: "rapidpaste-privacy",
            tosUrl: "rapidpaste-terms"
        },
        {
            title: "KeyboAI",
            description: "AI-powered keyboard that helps you write better with commands for translation, tone adjustment, and more.",
            icon: <Keyboard className="w-12 h-12 text-indigo-600" />,
            features: [
                "Custom AI commands",
                "Text translation",
                "Text formatter",
                "Social Media post generation",
                "Tone adjustment",
                "Create custom prompts",
                "Works in any app"
            ],
            appStoreLink: "#",
            privacyUrl: "keyboai-privacy",
            tosUrl: "keyboai-terms"
        },
        {
            title: "Amati",
            description: "Monitor website changes and receive notifications when updates occur.",
            icon: <Bell className="w-12 h-12 text-yellow-600" />,
            features: [
                "Website change detection",
                "Local notifications",
                "Customizable monitoring intervals",
                "Multiple monitoring rules",
            ],
            appStoreLink: "#",
            privacyUrl: "amati-privacy",
            tosUrl: "amati-terms"
        },
        {
            title: "Launchat",
            description: "Send WhatsApp messages without saving contacts, with message templates and contact notes.",
            icon: <MessageSquare className="w-12 h-12 text-green-600" />,
            features: [
                "Direct message without saving contacts",
                "Message templates",
                "Recent numbers history",
                "Add name or notes to phone number",
            ],
            appStoreLink: "#",
            privacyUrl: "launchat-privacy",
            tosUrl: "launchat-terms"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
                    <button
                        onClick={() => onNavigate('home')}
                        className="text-gray-500 hover:text-gray-700 mb-8 inline-block"
                    >
                        ← Back to Home
                    </button>
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        iOS Apps
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Powerful tools to enhance your iOS experience
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    {apps.map((app, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center justify-center h-16">
                                    {app.icon}
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-lg font-medium text-gray-900 text-center">
                                        {app.title}
                                    </h3>
                                    <p className="mt-2 text-gray-500 text-center">
                                        {app.description}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <ul className="space-y-3">
                                        {app.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600">
                                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none"
                                                     stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M5 13l4 4L19 7"/>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <a
                                        href={app.appStoreLink}
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                                    >
                                        Download on App Store
                                    </a>
                                    <div className="mt-4 flex justify-center space-x-4 text-sm">
                                        <button
                                            onClick={() => onNavigate(app.tosUrl)}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            Terms of Service
                                        </button>
                                        <button
                                            onClick={() => onNavigate(app.privacyUrl)}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            Privacy Policy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center space-x-6">
                        <a href="mailto:uziscode@gmail.com" className="text-gray-400 hover:text-gray-500">
                            <Mail className="w-6 h-6"/>
                        </a>
                        <a href="https://twitter.com/uziscode" className="text-gray-400 hover:text-gray-500">
                            <Twitter className="w-6 h-6"/>
                        </a>
                    </div>
                    <div className="mt-4 flex justify-center space-x-4">
                        <button onClick={() => onNavigate('terms')} className="text-gray-400 hover:text-gray-500">
                            Terms of Service
                        </button>
                        <button onClick={() => onNavigate('privacy')} className="text-gray-400 hover:text-gray-500">
                            Privacy Policy
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default IosAppsPage;