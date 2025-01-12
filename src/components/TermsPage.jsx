import { ArrowLeft } from 'lucide-react';

const TermsPage = ({ onNavigate }) => {
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
                        Terms of Service
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">Last Updated: January 11, 2025</p>

                    <div className="space-y-8 text-gray-600">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
                            <p>By accessing and using our applications and services, you agree to be bound by these Terms of Service.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Use License</h2>
                            <p>We grant you a personal, non-transferable license to use our applications for personal, non-commercial purposes.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Restrictions</h2>
                            <p>You may not:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Modify or distribute the applications</li>
                                <li>Reverse engineer or decompile the applications</li>
                                <li>Use the applications for illegal purposes</li>
                                <li>Transfer the license to another party</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Privacy</h2>
                            <p>Your use of our applications is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Updates and Changes</h2>
                            <p>We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of our applications following any changes constitutes your acceptance of such changes.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Contact</h2>
                            <p>For any questions regarding these Terms, please contact us at:</p>
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

export default TermsPage;