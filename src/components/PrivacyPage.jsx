import { ArrowLeft } from 'lucide-react';

const PrivacyPage = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 py-16">
                <button
                    onClick={() => onNavigate('home')}
                    className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </button>

                <div className="bg-white rounded-lg shadow-sm p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Privacy Policy
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">Last Updated: January 11, 2025</p>

                    <div className="space-y-8 text-gray-600">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
                            <p>We are committed to protecting your privacy. This Privacy Policy explains our data collection, use, and protection practices.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Data Collection</h2>
                            <p>Our applications collect only essential data necessary for their core functionality:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>RapidPaste: Stores your presets locally on your device</li>
                                <li>KeyboAI: Processes text input locally before sending to OpenAI</li>
                                <li>Amati: Stores website monitoring settings locally</li>
                                <li>Launchat: Stores message templates and recent numbers locally</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Data Storage</h2>
                            <p>We prioritize local storage whenever possible:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Data is primarily stored on your device</li>
                                <li>iCloud sync is optional and user-initiated</li>
                                <li>No third-party analytics services</li>
                                <li>No tracking or user profiling</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Third-Party Services</h2>
                            <p>Some apps may use third-party services:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>KeyboAI uses OpenAI's API for text processing</li>
                                <li>Launchat interacts with WhatsApp through official APIs</li>
                                <li>All third-party interactions are transparent and user-initiated</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. User Rights</h2>
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Access your data stored in our apps</li>
                                <li>Delete your data at any time</li>
                                <li>Opt out of iCloud sync</li>
                                <li>Export your data in standard formats</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Contact Information</h2>
                            <p>For privacy-related questions or concerns, please contact us at:</p>
                            <p className="mt-2">
                                Email: uziscode@gmail.com<br />
                                Twitter: @uziscode
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Changes to This Policy</h2>
                            <p>We reserve the right to update or modify this Privacy Policy at any time. We will notify users of any material changes through our applications or website.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;