import { ArrowLeft } from 'lucide-react';

const NotFoundPage = ({ onNavigate }) => (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
            <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
            <button
                onClick={() => onNavigate('home')}
                className="text-blue-600 hover:text-blue-800 font-medium text-lg group flex items-center justify-center mx-auto"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
            </button>
        </div>
    </div>
);

export default NotFoundPage;