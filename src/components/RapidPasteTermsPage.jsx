import { ArrowLeft } from 'lucide-react';

const RapidPasteTermsPage = ({ onNavigate }) => {
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
                        RapidPaste Terms of Service
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">Last Updated: January 11, 2025</p>

                    <div className="space-y-8 text-gray-600">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
                            <p>By downloading and using RapidPaste, you agree to these Terms of Service. If you disagree with any part of these terms, please do not use the application.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. App Usage</h2>
                            <p>RapidPaste provides the following functionality:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Creation and management of text presets</li>
                                <li>Custom keyboard for quick access</li>
                                <li>Share sheet integration</li>
                                <li>Optional iCloud sync</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. User Responsibilities</h2>
                            <p>As a user, you are responsible for:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Content you create and store in presets</li>
                                <li>Maintaining the security of your device</li>
                                <li>Compliance with local laws and regulations</li>
                                <li>Backing up your data as needed</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Limitations</h2>
                            <p>The following limitations apply:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>App is provided "as is" without warranty</li>
                                <li>We are not responsible for data loss</li>
                                <li>Some features require iOS system permissions</li>
                                <li>iCloud sync requires active Apple ID</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Privacy and Data</h2>
                            <p>Your privacy is important:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>We follow our Privacy Policy</li>
                                <li>Data storage is primarily local</li>
                                <li>iCloud sync is optional</li>
                                <li>You control your data</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Changes to Terms</h2>
                            <p>We may update these terms:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Changes will be notified in the app</li>
                                <li>Continued use implies acceptance</li>
                                <li>Previous versions will be archived</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Contact</h2>
                            <p>For questions about these terms:</p>
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

export default RapidPasteTermsPage;