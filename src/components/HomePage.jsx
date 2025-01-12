import { useState, useEffect } from 'react';
import { Mail, Twitter, Clock, Chrome, Eye, X, Smartphone, Keyboard, Bell, MessageSquare } from 'lucide-react';

const version = '0.0.3';

const Homepage = ({ onNavigate }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const chromeExtensions = [
        {
            icon: <Clock className="w-6 h-6 text-blue-600" />,
            title: "Momento",
            description: "Save YouTube timestamps with keyboard shortcuts",
            url: "https://chromewebstore.google.com/detail/lmmhccmoadghfjemklcimlnmbihniiif?authuser=0&hl=en-GB"
        },
        {
            icon: <X className="w-6 h-6 text-red-600" />,
            title: "Clean Endings",
            description: "Remove YouTube end screen recommendations",
            url: "https://chromewebstore.google.com/detail/klakmmbpaakilkndmdghcmcpieddkhko?authuser=0&hl=en-GB"
        },
        {
            icon: <Eye className="w-6 h-6 text-green-600" />,
            title: "Watch Counter",
            description: "Track YouTube watching progress",
            url: "#"
        }
    ];

    const iosApps = [
        {
            icon: <Keyboard className="w-6 h-6 text-gray-900" />,
            title: "KeyboAI",
            description: "AI keyboard for translations and tone adjustments"
        },
        {
            icon: <Smartphone className="w-6 h-6 text-gray-900" />,
            title: "RapidPaste",
            description: "Clipboard manager with keyboard and share extension"
        },
        {
            icon: <Bell className="w-6 h-6 text-gray-900" />,
            title: "Amati",
            description: "Website change monitoring with notifications"
        },
        {
            icon: <MessageSquare className="w-6 h-6 text-gray-900" />,
            title: "Launchat",
            description: "Send WhatsApp messages without saving contacts"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b">
                <div className="max-w-2xl mx-auto px-4 py-8">
                    <h1 className="text-2xl font-medium text-gray-900 mb-2">
                        uziscode
                    </h1>
                    <p className="text-gray-600">
                        Simple tools to enhance your daily digital experience
                    </p>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-12 space-y-16">
                {/* Chrome Extensions Section */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <Chrome className="w-5 h-5 text-gray-600" />
                            <h2 className="text-lg font-medium text-gray-900">Chrome Extensions</h2>
                        </div>
                        <button
                            onClick={() => onNavigate('extensions')}
                            className="text-blue-600 text-sm hover:text-blue-800"
                        >
                            View details →
                        </button>
                    </div>
                    <div className="space-y-6">
                        {chromeExtensions.map((ext, index) => (
                            <div key={index} className="group border-b pb-6">
                                <div className="flex items-center justify-between gap-3 mb-2">
                                    <div className="flex items-center gap-3">
                                        {ext.icon}
                                        <h3 className="font-medium text-gray-900">{ext.title}</h3>
                                    </div>
                                    {ext.url !== "#" && (
                                        <a
                                            href={ext.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-blue-600 hover:text-blue-800"
                                        >
                                            Add to Chrome →
                                        </a>
                                    )}
                                </div>
                                <p className="text-sm text-gray-600 pl-9">{ext.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* iOS Apps Section */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <Smartphone className="w-5 h-5 text-gray-600" />
                            <h2 className="text-lg font-medium text-gray-900">iOS Apps</h2>
                        </div>
                        <button
                            onClick={() => onNavigate('ios-apps')}
                            className="text-blue-600 text-sm hover:text-blue-800"
                        >
                            View details →
                        </button>
                    </div>
                    <div className="space-y-6">
                        {iosApps.map((app, index) => (
                            <div key={index} className="group border-b pb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    {app.icon}
                                    <h3 className="font-medium text-gray-900">{app.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600 pl-9">{app.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t bg-gray-50">
                <div className="max-w-2xl mx-auto px-4 py-8">
                    <div className="flex flex-col space-y-4">
                        <div className="flex gap-6 justify-center">
                            <a href="mailto:uziscode@gmail.com" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                Email
                            </a>
                            <a href="https://twitter.com/uziscode" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
                                <Twitter className="w-4 h-4" />
                                Twitter
                            </a>
                        </div>
                        <div className="flex gap-6 text-sm text-gray-600 justify-center">
                            <button onClick={() => onNavigate('terms')} className="hover:text-gray-900">
                                Terms
                            </button>
                            <button onClick={() => onNavigate('privacy')} className="hover:text-gray-900">
                                Privacy
                            </button>
                            <span>v{version}</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;