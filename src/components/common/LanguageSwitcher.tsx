import React from 'react';
import {useTranslation} from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const {i18n} = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
            Switch to {i18n.language === 'en' ? 'French' : 'English'}
        </button>
    );
};

export default LanguageSwitcher;
