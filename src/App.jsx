import { useState, useEffect } from 'react';
import React from 'react';
import { Mail, Twitter, Clock, Chrome, Eye, X, Youtube, ArrowLeft } from 'lucide-react';
import { version } from '../package.json';

const Homepage = ({ onNavigate }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { label: "Active Users", value: "-" },
        { label: "Total Downloads", value: "-" },
        { label: "Chrome Rating", value: "-" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
            <div className={`flex-grow flex items-center justify-center`}>
                <div className={`text-center transform transition-all duration-700 px-4 pb-24 sm:pb-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <Youtube className="w-16 h-16 text-red-600 mx-auto mb-6" />
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        solving personal problems
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
                        Simple, focused Chrome extensions to enhance your YouTube experience.
                        Built with attention to detail and privacy in mind.
                    </p>

                    <div className="flex justify-center gap-8 mb-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <a href="mailto:uziscode@gmail.com" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                            <Mail className="w-5 h-5 mr-2" />
                            uziscode@gmail.com
                        </a>
                        <a href="https://twitter.com/uziscode" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                            <Twitter className="w-5 h-5 mr-2" />
                            @uziscode
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
                        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <h3 className="text-sm font-medium">Momento - YouTube Timestamp Saver</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <X className="w-8 h-8 text-red-600 mx-auto mb-2" />
                            <h3 className="text-sm font-medium">YouTube Clean Endings</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Eye className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <h3 className="text-sm font-medium">Watch Counter</h3>
                        </div>
                    </div>

                    <button
                        onClick={() => onNavigate('extensions')}
                        className="text-blue-600 hover:text-blue-800 font-medium text-lg group flex items-center justify-center mx-auto py-4 active:scale-95 transition-transform"
                    >
                        View Chrome Extensions
                        <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
                    </button>
                </div>
            </div>
            <footer className="w-full py-4 text-center text-sm text-gray-500">
                <p>Version {version}</p>
            </footer>
        </div>
    );
};

// Extensions Page Component
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

            {/* Footer */}
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
                    <p className="mt-4 text-center text-gray-500">
                        © 2024 UzisCode. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};



const PrivacyPolicyPage = ({onNavigate, product = "YouTube Clean Endings"}) => {
    // Configure content based on product
    const content = {
        "YouTube Clean Endings": {
            title: "YouTube Clean Endings",
            lastUpdated: "December 16, 2024",
            sections: [
                {
                    title: "Overview",
                    content: "YouTube Clean Endings is committed to protecting your privacy. This privacy policy explains our data collection practices, or more specifically, our lack thereof. Our extension is designed to function without collecting, storing, or transmitting any user data."
                },
                {
                    title: "Data Collection and Usage",
                    content: "YouTube Clean Endings does not collect, store, or transmit any:",
                    bullets: [
                        "Personal information",
                        "Browsing history",
                        "Video watching habits",
                        "Usage statistics",
                        "Cookies",
                        "Analytics data",
                        "User preferences",
                        "Any other form of user data"
                    ]
                },
                {
                    title: "How the Extension Works",
                    content: "The extension operates entirely within your browser and only:",
                    bullets: [
                        "Runs on YouTube.com domains",
                        "Modifies the appearance of YouTube end screens",
                        "Uses standard Chrome extension permissions (activeTab only)",
                        "Functions locally without external servers"
                    ]
                },
                {
                    title: "Technical Operation",
                    content: "Our extension:",
                    bullets: [
                        "Only activates on YouTube.com websites",
                        "Does not communicate with any external servers",
                        "Does not store any data, locally or remotely",
                        "Does not use cookies or any tracking mechanisms",
                        "Does not modify any user data"
                    ]
                }
            ]
        },
        "Momento": {
            title: "Momento - YouTube Timestamp Saver",
            lastUpdated: "December 18, 2024",
            sections: [
                {
                    title: "Zero Data Collection Policy",
                    content: "Momento is designed with complete privacy in mind. We believe your data should stay on your device. This extension:",
                    bullets: [
                        "Collects ZERO personal information",
                        "Stores ZERO data on external servers",
                        "Requires NO account creation",
                        "Uses NO analytics or tracking",
                        "Sends NO data anywhere outside your browser"
                    ]
                },
                {
                    title: "Local Storage Only",
                    content: "",
                    bullets: [
                        "All timestamps are stored exclusively in your browser's local storage",
                        "Data never leaves your device",
                        "You have complete control of your data",
                        "Export/import feature works entirely offline",
                        "You can delete all data at any time through the extension settings"
                    ]
                },
                {
                    title: "Permissions Explained",
                    content: "We use minimal permissions, only what's necessary for basic functionality:",
                    bullets: [
                        '"activeTab": Only to interact with YouTube when you\'re watching a video',
                        '"storage": To save your timestamps locally on your device',
                        '"scripting": To add timestamp buttons on YouTube pages',
                        'YouTube.com host permission: To save timestamps only on YouTube videos'
                    ],
                    additionalContent: "We DO NOT request permissions for:",
                    additionalBullets: [
                        "Your browsing history",
                        "Your personal data",
                        "Your location",
                        "Any external services"
                    ]
                },
                {
                    title: "Transparency",
                    content: "",
                    bullets: [
                        "Our code is focused on privacy",
                        "No external services or APIs are used",
                        "No third-party analytics",
                        "No cookies used",
                        "No user tracking of any kind"
                    ]
                }
            ]
        }
    };

    const productContent = content[product === "Timestamp Saver" ? "Momento" : product];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 py-16">
                <button
                    onClick={() => onNavigate('extensions')}
                    className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Extensions
                </button>

                <div className="bg-white rounded-lg shadow-sm p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Privacy Policy - {productContent.title}
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">Last Updated: {productContent.lastUpdated}</p>

                    <div className="space-y-8 text-gray-600">
                        {productContent.sections.map((section, index) => (
                            <section key={index}>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-3">{section.title}</h2>
                                {section.content && <p className="mb-3">{section.content}</p>}
                                {section.bullets && (
                                    <ul className="list-disc pl-6 space-y-2 mb-3">
                                        {section.bullets.map((bullet, idx) => (
                                            <li key={idx}>{bullet}</li>
                                        ))}
                                    </ul>
                                )}
                                {section.additionalContent && (
                                    <>
                                        <p className="mb-3 mt-6">{section.additionalContent}</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            {section.additionalBullets.map((bullet, idx) => (
                                                <li key={idx}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </section>
                        ))}

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact</h2>
                            <p>
                                For privacy-related questions:
                                <br />
                                Email:{' '}
                                <a
                                    href="mailto:uziscode@gmail.com"
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    uziscode@gmail.com
                                </a>
                                <br />
                                Twitter:{' '}
                                <a
                                    href="https://twitter.com/uziscode"
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    @uziscode
                                </a>
                            </p>
                        </section>

                        <footer className="pt-6 mt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-500">
                                This privacy policy is effective as of {productContent.lastUpdated} and will remain in effect except
                                with respect to any changes in its provisions in the future.
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

// NotFoundPage component
const NotFoundPage = ({ onNavigate }) => (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
            <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
            <button
                onClick={() => onNavigate('home')}
                className="text-blue-600 hover:text-blue-800 font-medium text-lg group flex items-center justify-center mx-auto"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
            </button>
        </div>
    </div>
);

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [notFound, setNotFound] = useState(false);

    const routes = {
        '': 'home',
        'extensions': 'extensions',
        'youtube-clean-endings/privacy-policy': 'privacy-policy',
        'youtube-timestamp-saver/privacy-policy': 'timestamp-privacy',
        'youtube-watch-counter/privacy-policy': 'counter-privacy',
    };

    const handleNavigate = (page) => {
        const paths = {
            'home': '/',
            'extensions': '/extensions',
            'privacy-policy': '/youtube-clean-endings/privacy-policy',
            'timestamp-privacy': '/youtube-timestamp-saver/privacy-policy',
            'counter-privacy': '/youtube-watch-counter/privacy-policy',
        };

        const newPath = paths[page] || '/';
        setNotFound(false);

        if (getPageFromPath(newPath) !== currentPage) {
            setCurrentPage(page);
            window.history.pushState({}, '', newPath);
        }
    };

    const getPageFromPath = (path) => {
        const cleanPath = path.replace(/^\/+|\/+$/g, '');
        if (cleanPath in routes) {
            setNotFound(false);
            return routes[cleanPath];
        }
        setNotFound(true);
        return 'not-found';
    };

    useEffect(() => {
        const handleLocation = () => {
            const page = getPageFromPath(window.location.pathname);
            setCurrentPage(page);
        };

        handleLocation();
        window.addEventListener('popstate', handleLocation);
        return () => window.removeEventListener('popstate', handleLocation);
    }, []);

    const renderPage = () => {
        if (notFound) {
            return <NotFoundPage onNavigate={handleNavigate} />;
        }

        switch(currentPage) {
            case 'extensions':
                return <ExtensionsPage onNavigate={handleNavigate} />;
            case 'privacy-policy':
                return <PrivacyPolicyPage onNavigate={handleNavigate} product="YouTube Clean Endings" />;
            case 'timestamp-privacy':
                return <PrivacyPolicyPage onNavigate={handleNavigate} product="Momento" />;
            case 'counter-privacy':
                return <PrivacyPolicyPage onNavigate={handleNavigate} product="Watch Counter" />;
            default:
                return <Homepage onNavigate={handleNavigate} />;
        }
    };


    return renderPage();
}
export default App;