import { tenants } from '@/config/tenants';

export const getTenantLogo = (tenantId: string): string => {
    return `${tenants[tenantId].assetsFolder}/logo.png`;
};
