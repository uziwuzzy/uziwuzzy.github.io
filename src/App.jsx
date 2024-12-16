import { useState, useEffect } from 'react';
import { Mail, Twitter, Clock, Chrome, Eye, X, Youtube } from 'lucide-react';

const Homepage = ({ onNavigate }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { label: "Active Users", value: "1,000+" },
        { label: "Total Downloads", value: "5,000+" },
        { label: "Chrome Rating", value: "4.8★" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
            <div className={`text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Youtube className="w-16 h-16 text-red-600 mx-auto mb-6" />
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                    solving personal problems
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
                    Simple, focused Chrome extensions to enhance your YouTube experience.
                    Built with attention to detail and privacy in mind.
                </p>

                {/* Stats */}
                <div className="flex justify-center gap-8 mb-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <a
                        href="mailto:uziscode@gmail.com"
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <Mail className="w-5 h-5 mr-2" />
                        uziscode@gmail.com
                    </a>
                    <a
                        href="https://twitter.com/uziscode"
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <Twitter className="w-5 h-5 mr-2" />
                        @uziscode
                    </a>
                </div>

                {/* Extension Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8 px-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <h3 className="text-sm font-medium">Timestamp Saver</h3>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <X className="w-8 h-8 text-red-600 mx-auto mb-2" />
                        <h3 className="text-sm font-medium">End Screen Blocker</h3>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <Eye className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <h3 className="text-sm font-medium">Watch Counter</h3>
                    </div>
                </div>

                <button
                    onClick={() => onNavigate('extensions')}
                    className="text-blue-600 hover:text-blue-800 font-medium text-lg group flex items-center justify-center mx-auto"
                >
                    View Chrome Extensions
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </button>
            </div>
        </div>
    );
};

// Extensions Page Component
const ExtensionsPage = ({ onNavigate }) => {
    const extensions = [
        {
            title: "Video Timestamp Saver",
            description: "Save and manage timestamps while watching YouTube videos with keyboard shortcuts and easy sharing options.",
            icon: <Clock className="w-12 h-12 text-blue-600" />,
            features: [
                "Quick save timestamps with keyboard shortcuts",
                "Manage and organize timestamps easily",
                "Share specific video moments",
                "Export and import timestamp data"
            ],
            chromeStoreLink: "#" // Replace with actual Chrome Store link
        },
        {
            title: "YouTube End Screen Blocker",
            description: "A lightweight extension that removes end screen video recommendations for a cleaner viewing experience.",
            icon: <X className="w-12 h-12 text-red-600" />,
            features: [
                "Remove distracting end screen overlays",
                "Lightweight and focused functionality",
                "No tracking or analytics",
                "Minimal permissions required"
            ],
            chromeStoreLink: "#" // Replace with actual Chrome Store link
        },
        {
            title: "YouTube Watch Counter",
            description: "Track your YouTube watching habits with detailed progress tracking and customizable settings.",
            icon: <Eye className="w-12 h-12 text-green-600" />,
            features: [
                "Track watch count for each video",
                "Show real-time watching progress",
                "Customizable watched thresholds",
                "Data persists across sessions"
            ],
            chromeStoreLink: "#" // Replace with actual Chrome Store link
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
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

            {/* Extensions Grid */}
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
                                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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
                                        <Chrome className="w-5 h-5 mr-2" />
                                        Add to Chrome
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center space-x-6">
                        <a href="mailto:uziscode@gmail.com" className="text-gray-400 hover:text-gray-500">
                            <Mail className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com/uziscode" className="text-gray-400 hover:text-gray-500">
                            <Twitter className="w-6 h-6" />
                        </a>
                    </div>
                    <p className="mt-4 text-center text-gray-500">
                        © 2024 UzisCode. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const handleNavigate = (page) => {
        setCurrentPage(page);
        // Update the URL without using router
        window.history.pushState({}, '', page === 'home' ? '/' : '/extensions');
    };

    return currentPage === 'home' ? (
        <Homepage onNavigate={handleNavigate} />
    ) : (
        <ExtensionsPage onNavigate={handleNavigate} />
    );
}

export default App;