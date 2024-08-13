import { useTenant } from '@/contexts/TenantContext';
import MyComponent from '../components/common/MyComponent';
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
const Home = () => {
    const { tenant } = useTenant();

    return (
        <div>
            <MyComponent />
            <LanguageSwitcher />
        </div>
    );
};

export default Home;
