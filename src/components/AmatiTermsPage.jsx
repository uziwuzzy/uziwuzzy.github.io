import { ArrowLeft } from 'lucide-react';

const AmatiTermsPage = ({ onNavigate }) => {
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
                        Amati Terms of Service
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">Last Updated: January 11, 2025</p>

                    <div className="space-y-8 text-gray-600">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance</h2>
                            <p>By using Amati, you agree to these terms and our Privacy Policy. If you disagree with any part, please do not use the application.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Service Usage</h2>
                            <p>When using Amati, you agree to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Monitor only publicly accessible websites</li>
                                <li>Respect website terms of service</li>
                                <li>Use reasonable monitoring intervals</li>
                                <li>Not overload monitored websites</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Limitations</h2>
                            <p>Please note that:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Service is provided "as is"</li>
                                <li>We don't guarantee detection</li>
                                <li>Some changes may be missed</li>
                                <li>Website access may be restricted</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. User Responsibilities</h2>
                            <p>You are responsible for:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Websites you choose to monitor</li>
                                <li>Monitoring frequency settings</li>
                                <li>Data backup and management</li>
                                <li>Notification settings</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Fair Usage</h2>
                            <p>To ensure fair usage:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Reasonable check intervals</li>
                                <li>Limited concurrent monitors</li>
                                <li>Bandwidth restrictions</li>
                                <li>Storage limitations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Updates and Changes</h2>
                            <p>We reserve the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Modify these terms</li>
                                <li>Update the application</li>
                                <li>Add or remove features</li>
                                <li>Change monitoring methods</li>
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

export default AmatiTermsPage;