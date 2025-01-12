import { ArrowLeft } from 'lucide-react';

const LaunchatPrivacyPage = ({ onNavigate }) => {
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
                        Launchat Privacy Policy
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">Last Updated: January 11, 2025</p>

                    <div className="space-y-8 text-gray-600">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Data Collection</h2>
                            <p>Launchat is designed with privacy in mind and collects minimal data:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Message templates are stored only on your device</li>
                                <li>Recent numbers are stored only on your device</li>
                                <li>Contact notes are stored only on your device</li>
                                <li>No message content is stored or transmitted</li>
                                <li>No analytics or tracking is implemented</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. WhatsApp Integration</h2>
                            <p>Our WhatsApp integration works as follows:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Uses WhatsApp's official URL scheme to open chats</li>
                                <li>Uses Universal Links for enhanced compatibility</li>
                                <li>No access to WhatsApp data or messages</li>
                                <li>No access to your WhatsApp contacts</li>
                                <li>No message interception or monitoring</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Data Storage and Payments</h2>
                            <p>Your data security is important:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>All app data is stored locally on your device</li>
                                <li>No external servers are used</li>
                                <li>No cloud storage is currently implemented</li>
                                <li>Data remains completely under your control</li>
                                <li>You can delete all data at any time</li>
                            </ul>
                            <p className="mt-4">Regarding payments and subscriptions:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>All payment processing is handled exclusively by Apple through StoreKit</li>
                                <li>We never have access to your payment information</li>
                                <li>No payment data is collected or stored by our app</li>
                                <li>Subscription management and receipts are handled by Apple</li>
                                <li>For payment issues or refunds, please contact Apple Support</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Future Features</h2>
                            <p>If we implement additional features in the future:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Any cloud sync features will be optional</li>
                                <li>You will be notified of privacy policy updates</li>
                                <li>New features will prioritize privacy</li>
                                <li>Data sharing will always be opt-in</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Your Rights</h2>
                            <p>You have complete control over your data:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>View all stored data in the app</li>
                                <li>Delete individual items</li>
                                <li>Clear all data at once</li>
                                <li>Export your data (templates and notes)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Changes to This Policy</h2>
                            <p>Policy updates:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Changes will be notified through the app</li>
                                <li>Major changes will require acknowledgment</li>
                                <li>Previous versions will be available</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Contact</h2>
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

export default LaunchatPrivacyPage;