import { ArrowLeft } from 'lucide-react';

const RapidPastePrivacyPage = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 py-16">
                <button
                    onClick={() => onNavigate('ios-apps')}
                    className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to iOS Apps
                </button>

                <div className="bg-white rounded-lg shadow-sm p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        RapidPaste Privacy Policy
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">Last Updated: January 11, 2025</p>

                    <div className="space-y-8 text-gray-600">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Data Collection and Storage</h2>
                            <p>RapidPaste is designed with privacy in mind:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>All presets are stored locally on your device</li>
                                <li>No data is sent to external servers</li>
                                <li>Optional iCloud sync for cross-device functionality</li>
                                <li>No analytics or tracking</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Keyboard Extension</h2>
                            <p>The keyboard extension:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Only accesses text when you explicitly paste</li>
                                <li>Does not store or transmit typed text</li>
                                <li>Uses standard iOS keyboard permissions</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Share Extension</h2>
                            <p>The share extension:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Only processes content you explicitly share</li>
                                <li>Does not store shared content</li>
                                <li>Works entirely offline</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. iCloud Usage</h2>
                            <p>If you enable iCloud sync:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Only your presets are synced</li>
                                <li>Sync uses Apple's encrypted iCloud service</li>
                                <li>You can disable sync at any time</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Updates</h2>
                            <p>We will update this Privacy Policy as needed:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Changes will be notified through the app</li>
                                <li>Continued use after changes implies acceptance</li>
                                <li>Previous versions will be archived</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Contact</h2>
                            <p>For privacy-related questions:</p>
                            <p className="mt-2">
                                Email: uziscode@gmail.com<br />
                                Twitter: @uziscode
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RapidPastePrivacyPage;