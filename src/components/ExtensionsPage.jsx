import { Mail, Twitter, Clock, Chrome, Eye, X } from 'lucide-react';

const ExtensionsPage = ({ onNavigate }) => {
    const extensions = [
        {
            title: "Momento - YouTube Timestamp Saver",
            description: "Save and manage timestamps while watching YouTube videos with keyboard shortcuts and easy sharing options.",
            icon: <Clock className="w-12 h-12 text-blue-600" />,
            features: [
                "Quick save timestamps with keyboard shortcuts",
                "Manage and organize timestamps easily",
                "Share specific video moments",
                "Export and import timestamp data"
            ],
            chromeStoreLink: "#",
            privacyUrl: "timestamp-privacy"
        },
        {
            title: "YouTube Clean Endings",
            description: "A lightweight extension that removes end screen video recommendations for a cleaner viewing experience.",
            icon: <X className="w-12 h-12 text-red-600" />,
            features: [
                "Remove distracting end screen overlays",
                "Lightweight and focused functionality",
                "No tracking or analytics",
                "Minimal permissions required"
            ],
            chromeStoreLink: "#",
            privacyUrl: "privacy-policy"
        },
        {
            title: "Watch Counter",
            description: "Track your YouTube watching habits with detailed progress tracking and customizable settings.",
            icon: <Eye className="w-12 h-12 text-green-600" />,
            features: [
                "Track watch count for each video",
                "Show real-time watching progress",
                "Customizable watched thresholds",
                "Data persists across sessions"
            ],
            chromeStoreLink: "#",
            privacyUrl: "counter-privacy"
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
                        Chrome Extensions
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Free tools to enhance your YouTube watching experience
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {extensions.map((extension, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center justify-center h-16">
                                    {extension.icon}
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-lg font-medium text-gray-900 text-center">
                                        {extension.title}
                                    </h3>
                                    <p className="mt-2 text-gray-500 text-center">
                                        {extension.description}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <ul className="space-y-3">
                                        {extension.features.map((feature, idx) => (
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
                                        href={extension.chromeStoreLink}
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                                    >
                                        <Chrome className="w-5 h-5 mr-2"/>
                                        Add to Chrome
                                    </a>
                                    {extension.privacyUrl && (
                                        <div className="mt-4 text-center">
                                            <button
                                                onClick={() => onNavigate(extension.privacyUrl)}
                                                className="text-sm text-blue-600 hover:text-blue-800"
                                            >
                                                Privacy Policy
                                            </button>
                                        </div>
                                    )}
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

export default ExtensionsPage;