import { useTranslation } from 'react-i18next';

const MyComponent = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('welcome_message')}</h1>
            <p>{t('home')}</p>
            <p>{t('contact_us')}</p>
        </div>
    );
};
export default MyComponent