import { useState, useEffect } from 'react';
import Homepage from './components/Homepage';
import IosAppsPage from './components/IosAppsPage';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';
import ExtensionsPage from './components/ExtensionsPage';
import NotFoundPage from './components/NotFoundPage';
import RapidPastePrivacyPage from './components/RapidPastePrivacyPage';
import RapidPasteTermsPage from './components/RapidPasteTermsPage';
import KeyboAIPrivacyPage from './components/KeyboAIPrivacyPage';
import KeyboAITermsPage from './components/KeyboAITermsPage';
import AmatiPrivacyPage from './components/AmatiPrivacyPage';
import AmatiTermsPage from './components/AmatiTermsPage';
import LaunchatPrivacyPage from './components/LaunchatPrivacyPage';
import LaunchatTermsPage from './components/LaunchatTermsPage';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [notFound, setNotFound] = useState(false);

    const routes = {
        '': 'home',
        'extensions': 'extensions',
        'ios-apps': 'ios-apps',
        'terms': 'terms',
        'privacy': 'privacy',
        'rapidpaste/privacy': 'rapidpaste-privacy',
        'rapidpaste/terms': 'rapidpaste-terms',
        'keyboai/privacy': 'keyboai-privacy',
        'keyboai/terms': 'keyboai-terms',
        'amati/privacy': 'amati-privacy',
        'amati/terms': 'amati-terms',
        'launchat/privacy': 'launchat-privacy',
        'launchat/terms': 'launchat-terms',
        'youtube-clean-endings/privacy-policy': 'privacy-policy',
        'youtube-timestamp-saver/privacy-policy': 'timestamp-privacy',
        'youtube-watch-counter/privacy-policy': 'counter-privacy',
    };

    const handleNavigate = (page) => {
        const paths = {
            'home': '/',
            'extensions': '/extensions',
            'ios-apps': '/ios-apps',
            'terms': '/terms',
            'privacy': '/privacy',
            'rapidpaste-privacy': '/rapidpaste/privacy',
            'rapidpaste-terms': '/rapidpaste/terms',
            'keyboai-privacy': '/keyboai/privacy',
            'keyboai-terms': '/keyboai/terms',
            'amati-privacy': '/amati/privacy',
            'amati-terms': '/amati/terms',
            'launchat-privacy': '/launchat/privacy',
            'launchat-terms': '/launchat/terms',
            'privacy-policy': '/youtube-clean-endings/privacy-policy',
            'timestamp-privacy': '/youtube-timestamp-saver/privacy-policy',
            'counter-privacy': '/youtube-watch-counter/privacy-policy',
        };

        const newPath = paths[page] || '/';
        setNotFound(false);

        if (getPageFromPath(newPath) !== currentPage) {
            setCurrentPage(page);
            window.history.pushState({}, '', newPath);
        }
    };

    const getPageFromPath = (path) => {
        const cleanPath = path.replace(/^\/+|\/+$/g, '');
        if (cleanPath in routes) {
            setNotFound(false);
            return routes[cleanPath];
        }
        setNotFound(true);
        return 'not-found';
    };

    useEffect(() => {
        const handleLocation = () => {
            const page = getPageFromPath(window.location.pathname);
            setCurrentPage(page);
        };

        handleLocation();
        window.addEventListener('popstate', handleLocation);
        return () => window.removeEventListener('popstate', handleLocation);
    }, []);

    const renderPage = () => {
        if (notFound) {
            return <NotFoundPage onNavigate={handleNavigate} />;
        }

        switch(currentPage) {
            case 'ios-apps':
                return <IosAppsPage onNavigate={handleNavigate} />;
            case 'extensions':
                return <ExtensionsPage onNavigate={handleNavigate} />;
            case 'terms':
                return <TermsPage onNavigate={handleNavigate} />;
            case 'privacy':
                return <PrivacyPage onNavigate={handleNavigate} />;
            case 'rapidpaste-privacy':
                return <RapidPastePrivacyPage onNavigate={handleNavigate} />;
            case 'rapidpaste-terms':
                return <RapidPasteTermsPage onNavigate={handleNavigate} />;
            case 'keyboai-privacy':
                return <KeyboAIPrivacyPage onNavigate={handleNavigate} />;
            case 'keyboai-terms':
                return <KeyboAITermsPage onNavigate={handleNavigate} />;
            case 'amati-privacy':
                return <AmatiPrivacyPage onNavigate={handleNavigate} />;
            case 'amati-terms':
                return <AmatiTermsPage onNavigate={handleNavigate} />;
            case 'launchat-privacy':
                return <LaunchatPrivacyPage onNavigate={handleNavigate} />;
            case 'launchat-terms':
                return <LaunchatTermsPage onNavigate={handleNavigate} />;
            default:
                return <Homepage onNavigate={handleNavigate} />;
        }
    };

    return renderPage();
}

export default App;