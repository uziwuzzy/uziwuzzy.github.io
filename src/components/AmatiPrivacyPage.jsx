import { ArrowLeft } from 'lucide-react';

const AmatiPrivacyPage = ({ onNavigate }) => {
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
                        Amati Privacy Policy
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">Last Updated: January 11, 2025</p>

                    <div className="space-y-8 text-gray-600">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Website Monitoring</h2>
                            <p>Amati's website monitoring works as follows:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Only monitors URLs you explicitly add</li>
                                <li>Checks are performed from your device</li>
                                <li>No website content is stored externally</li>
                                <li>Monitor settings are stored locally</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Data Collection</h2>
                            <p>We collect and store locally:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Your monitored URLs</li>
                                <li>Monitoring rules and settings</li>
                                <li>Website change history</li>
                                <li>Notification preferences</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Local Storage</h2>
                            <p>All data is stored on your device:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>No cloud storage used</li>
                                <li>Data remains under your control</li>
                                <li>Optional iCloud backup available</li>
                                <li>Easy data export/import</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Notifications</h2>
                            <p>Regarding notifications:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>All notifications are local</li>
                                <li>No push notification server used</li>
                                <li>Customizable alert settings</li>
                                <li>No tracking of notification interactions</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Website Access</h2>
                            <p>When checking websites:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Only public pages are accessed</li>
                                <li>No login credentials are stored</li>
                                <li>Respects robots.txt</li>
                                <li>Minimal bandwidth usage</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Updates</h2>
                            <p>Policy updates:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Notified through the app</li>
                                <li>Previous versions archived</li>
                                <li>Opt-out option available</li>
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

export default AmatiPrivacyPage;