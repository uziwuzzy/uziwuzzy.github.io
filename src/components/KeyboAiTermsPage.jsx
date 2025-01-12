import { ArrowLeft } from 'lucide-react';

const KeyboAITermsPage = ({ onNavigate }) => {
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
                        KeyboAI Terms of Service
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">Last Updated: January 11, 2025</p>

                    <div className="space-y-8 text-gray-600">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
                            <p>By using KeyboAI, you agree to these terms and our Privacy Policy. If you disagree with any part, please do not use the application.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. OpenAI API Usage</h2>
                            <p>Regarding OpenAI integration:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>You may need to provide your own API key</li>
                                <li>Usage is subject to OpenAI's terms</li>
                                <li>API costs are your responsibility</li>
                                <li>We don't guarantee API availability</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. User Responsibilities</h2>
                            <p>You are responsible for:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Text content you process</li>
                                <li>API key security</li>
                                <li>Custom prompt management</li>
                                <li>Compliance with local laws</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Service Limitations</h2>
                            <p>Please note:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Service is provided "as is"</li>
                                <li>We don't guarantee accuracy</li>
                                <li>API response times may vary</li>
                                <li>Features may change</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Keyboard Privacy</h2>
                            <p>Regarding the keyboard:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Only processes text you submit</li>
                                <li>Requires keyboard permissions</li>
                                <li>No keystroke logging</li>
                                <li>Local processing when possible</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Updates and Changes</h2>
                            <p>We reserve the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Modify these terms</li>
                                <li>Update the application</li>
                                <li>Change feature availability</li>
                                <li>Modify API integration methods</li>
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

export default KeyboAITermsPage;