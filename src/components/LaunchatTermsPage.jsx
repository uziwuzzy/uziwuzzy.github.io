import { ArrowLeft } from 'lucide-react';

const LaunchatTermsPage = ({ onNavigate }) => {
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
                        Launchat Terms of Service
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">Last Updated: January 11, 2025</p>

                    <div className="space-y-8 text-gray-600">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance</h2>
                            <p>By using Launchat, you agree to these terms and our Privacy Policy. If you disagree with any part, please do not use the application.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. WhatsApp Integration</h2>
                            <p>Regarding WhatsApp integration:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Not affiliated with WhatsApp Inc.</li>
                                <li>Uses only official WhatsApp URL schemes</li>
                                <li>Uses Universal Links for enhanced compatibility</li>
                                <li>Subject to WhatsApp's platform policies</li>
                                <li>Integration may change based on WhatsApp's requirements</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. User Responsibilities</h2>
                            <p>You are responsible for:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>All message content you create and send</li>
                                <li>Managing your message templates</li>
                                <li>Proper use of contact numbers</li>
                                <li>Compliance with local laws and regulations</li>
                                <li>Maintaining the security of your device</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Subscriptions and Payments</h2>
                            <p>All subscriptions and payments are handled through Apple's App Store:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Weekly subscription: $0.99/week</li>
                                <li>Yearly subscription: $14.99/year</li>
                                <li>Lifetime access: One-time payment of $29.99</li>
                                <li>All payments are processed by Apple</li>
                                <li>Subscriptions can be managed in your iOS Settings or App Store account</li>
                                <li>Subscription terms and billing are governed by Apple's policies</li>
                                <li>Refunds are handled through Apple's App Store support</li>
                                <li>Prices may change subject to App Store policies</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Service Limitations</h2>
                            <p>Please note:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Service is provided "as is" without warranty</li>
                                <li>WhatsApp service availability is not guaranteed</li>
                                <li>URL scheme behavior may change</li>
                                <li>Performance depends on your device and WhatsApp</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Acceptable Use</h2>
                            <p>You agree not to use Launchat for:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Sending spam or unwanted messages</li>
                                <li>Harassment or abuse</li>
                                <li>Automated message sending</li>
                                <li>Any illegal activities</li>
                                <li>Commercial messaging without proper consent</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Data & Privacy</h2>
                            <p>Your data rights:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>All data stored locally on your device</li>
                                <li>Full control over your data</li>
                                <li>Right to delete all data</li>
                                <li>Future features will maintain privacy focus</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Updates and Changes</h2>
                            <p>We reserve the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Modify these terms</li>
                                <li>Update the application</li>
                                <li>Add or remove features</li>
                                <li>Change WhatsApp integration methods</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Contact</h2>
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

export default LaunchatTermsPage;