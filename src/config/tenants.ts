type Tenant = {
    id: string;
    name: string;
    domain: string;
    assetsFolder: string;
};

export const tenants: Record<string, Tenant> = {
    fl: {
        id: 'fl',
        name: 'Tenant FL',
        domain: 'en.example.com',
        assetsFolder: '/en-assets',
    },
    lfg: {
        id: 'lfg',
        name: 'Tenant LFG',
        domain: 'fr.example.com',
        assetsFolder: '/fr-assets',
    },
};

export const getTenantByDomain = (domain: string): Tenant | undefined => {
    return Object.values(tenants).find((tenant) => domain.includes(tenant.domain));
};
