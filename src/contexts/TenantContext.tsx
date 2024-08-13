import React, { createContext, useContext, useEffect, useState } from 'react';
import { tenants, getTenantByDomain } from '@/config/tenants';

type TenantContextType = {
    tenant: typeof tenants['fl'] | null;
};

const TenantContext = createContext<TenantContextType>({ tenant: null });

export const TenantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tenant, setTenant] = useState<typeof tenants['fl'] | null>(null);

    useEffect(() => {
        const domain = window.location.hostname;
        const tenant = getTenantByDomain(domain) || tenants['fl']; // Fallback to a default tenant
        setTenant(tenant);
    }, []);

    return (
        <TenantContext.Provider value={{ tenant }}>
            {children}
        </TenantContext.Provider>
    );
};

export const useTenant = () => useContext(TenantContext);
