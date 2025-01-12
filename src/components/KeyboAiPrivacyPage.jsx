import { ArrowLeft } from 'lucide-react';

const KeyboAIPrivacyPage = ({ onNavigate }) => {
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
                        KeyboAI Privacy Policy
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">Last Updated: January 11, 2025</p>

                    <div className="space-y-8 text-gray-600">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Data Collection and Usage</h2>
                            <p>KeyboAI processes your text with privacy in mind:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Text processing is done through OpenAI's API</li>
                                <li>No text content is stored on our servers</li>
                                <li>Custom prompts are stored locally</li>
                                <li>No usage analytics are collected</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Keyboard Extension</h2>
                            <p>Our keyboard extension:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Only processes text you explicitly submit</li>
                                <li>Does not log or store keyboard input</li>
                                <li>Uses secure connections for API calls</li>
                                <li>Requires standard iOS keyboard permissions</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. OpenAI Integration</h2>
                            <p>When using OpenAI services:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Text is transmitted securely to OpenAI</li>
                                <li>We follow OpenAI's data usage guidelines</li>
                                <li>No personal data is shared with OpenAI</li>
                                <li>API calls are made directly from your device</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Local Storage</h2>
                            <p>On your device, we store:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Your custom AI prompts</li>
                                <li>Keyboard preferences</li>
                                <li>API key (if provided)</li>
                                <li>No message history is kept</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Your Rights</h2>
                            <p>You have control over:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Text processing settings</li>
                                <li>Custom prompt data</li>
                                <li>Keyboard permissions</li>
                                <li>API key management</li>
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

export default KeyboAIPrivacyPage;