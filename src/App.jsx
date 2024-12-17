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
                            <h3 className="text-sm font-medium">Timestamp Saver</h3>
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
            title: "Youtube Timestamp Saver",
            description: "Save and manage timestamps while watching YouTube videos with keyboard shortcuts and easy sharing options.",
            icon: <Clock className="w-12 h-12 text-blue-600" />,
            features: [
                "Quick save timestamps with keyboard shortcuts",
                "Manage and organize timestamps easily",
                "Share specific video moments",
                "Export and import timestamp data"
            ],
            chromeStoreLink: "#"
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
            privacyUrl: "/youtube-clean-endings/privacy-policy"
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
            chromeStoreLink: "#"
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
                                                onClick={() => onNavigate('privacy-policy')}
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




const PrivacyPolicyPage = ({onNavigate}) => {
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
                        Privacy Policy - YouTube Clean Endings
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">Last Updated: December 16, 2024</p>

                    <div className="space-y-8 text-gray-600">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Overview</h2>
                            <p>
                                YouTube Clean Endings is committed to protecting your privacy. This privacy policy
                                explains our data collection practices, or more specifically, our lack thereof.
                                Our extension is designed to function without collecting, storing, or transmitting
                                any user data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Collection and Usage</h2>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">What We Collect</h3>
                            <p className="mb-3">YouTube Clean Endings does not collect, store, or transmit any:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Personal information</li>
                                <li>Browsing history</li>
                                <li>Video watching habits</li>
                                <li>Usage statistics</li>
                                <li>Cookies</li>
                                <li>Analytics data</li>
                                <li>User preferences</li>
                                <li>Any other form of user data</li>
                            </ul>

                            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">How the Extension Works</h3>
                            <p className="mb-3">The extension operates entirely within your browser and only:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Runs on YouTube.com domains</li>
                                <li>Modifies the appearance of YouTube end screens</li>
                                <li>Uses standard Chrome extension permissions (activeTab only)</li>
                                <li>Functions locally without external servers</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Technical Operation</h2>
                            <p className="mb-3">Our extension:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Only activates on YouTube.com websites</li>
                                <li>Does not communicate with any external servers</li>
                                <li>Does not store any data, locally or remotely</li>
                                <li>Does not use cookies or any tracking mechanisms</li>
                                <li>Does not modify any user data</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Permissions</h2>
                            <p className="mb-3">The extension requires minimal permissions:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><code className="bg-gray-100 px-2 py-1 rounded">activeTab</code>: Used only to modify YouTube end screen elements</li>
                                <li>No additional permissions are requested or required</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Compliance</h2>
                            <p className="mb-3">This extension complies with:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Chrome Web Store Developer Program Policies</li>
                                <li>General Data Protection Regulation (GDPR)</li>
                                <li>California Consumer Privacy Act (CCPA)</li>
                                <li>Children's Online Privacy Protection Act (COPPA)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Changes to Privacy Policy</h2>
                            <p className="mb-3">If we make any changes to this privacy policy, we will:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Update the "Last Updated" date at the top</li>
                                <li>Post the new policy in the Chrome Web Store</li>
                                <li>Notify users through the extension's store page</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Information</h2>
                            <p>
                                If you have questions about this privacy policy, you can email us at{' '}
                                <a
                                    href="mailto:uziscode@gmail.com"
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    uziscode@gmail.com
                                </a>
                            </p>
                        </section>

                        <footer className="pt-6 mt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-500">
                                This privacy policy is effective as of December 16, 2024 and will remain in effect except
                                with respect to any changes in its provisions in the future.
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};
function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [notFound, setNotFound] = useState(false);

    // Define all valid routes and their corresponding pages
    const routes = {
        '': 'home',
        'extensions': 'extensions',
        'youtube-clean-endings/privacy-policy': 'privacy-policy',
        'youtube-timestamp-saver/privacy-policy': 'timestamp-privacy',
        'youtube-watch-counter/privacy-policy': 'counter-privacy',
        // Add more routes as needed
    };

    // Function to parse the current path and return the corresponding page
    const getPageFromPath = (path) => {
        // Remove leading and trailing slashes and handle empty path
        const cleanPath = path.replace(/^\/+|\/+$/g, '');

        // Check if the path exists in our routes
        if (cleanPath in routes) {
            setNotFound(false);
            return routes[cleanPath];
        }

        // Path not found
        setNotFound(true);
        return 'not-found';
    };

    // Handle initial route and browser navigation
    useEffect(() => {
        const handleLocation = () => {
            const page = getPageFromPath(window.location.pathname);
            setCurrentPage(page);
        };

        // Handle initial load
        handleLocation();

        // Handle browser back/forward buttons
        window.addEventListener('popstate', handleLocation);
        return () => window.removeEventListener('popstate', handleLocation);
    }, []);

    const handleNavigate = (page) => {
        const paths = {
            'home': '/',
            'extensions': '/extensions',
            'privacy-policy': '/youtube-clean-endings/privacy-policy',
            'timestamp-privacy': '/youtube-timestamp-saver/privacy-policy',
            'counter-privacy': '/youtube-watch-counter/privacy-policy',
            // Add more paths as needed
        };

        const newPath = paths[page] || '/';

        // Reset not found state when navigating
        setNotFound(false);

        // Only update if we're actually changing pages
        if (getPageFromPath(newPath) !== currentPage) {
            setCurrentPage(page);
            window.history.pushState({}, '', newPath);
        }
    };

    // 404 Page Component
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

    const renderPage = () => {
        if (notFound) {
            return <NotFoundPage onNavigate={handleNavigate} />;
        }

        switch(currentPage) {
            case 'extensions':
                return <ExtensionsPage onNavigate={handleNavigate} />;
            case 'privacy-policy':
                return <PrivacyPolicyPage onNavigate={handleNavigate} />;
            case 'timestamp-privacy':
                return <PrivacyPolicyPage onNavigate={handleNavigate} product="Timestamp Saver" />;
            case 'counter-privacy':
                return <PrivacyPolicyPage onNavigate={handleNavigate} product="Watch Counter" />;
            default:
                return <Homepage onNavigate={handleNavigate} />;
        }
    };

    return renderPage();
}

export default App;