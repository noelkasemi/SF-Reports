// apiConfig.js

import { getYesterdayDate } from "./utils";

export const API_KEY = 'PixelBreezeAPIKey_2024_abcd1234efgh5678ijkl9012';

const BASE_URL = 'https://prodapi.snapfood.al/api/v3/public/statistics';

//Returns the date for yesterday
const date = getYesterdayDate()


// URLs for Food Dashboard
export const FOOD_DASHBOARD_URLS = {
    topVendors: `${BASE_URL}/orders/topvendors?start_date=${date}&end_date=${date}`,
    customerReport: `${BASE_URL}/orders/customer-report?start_date=${date}&end_date=${date}`,
    topCustomers: `${BASE_URL}/orders/topcustomers?start_date=${date}&end_date=${date}`,
};

// URLs for Social Dashboard
export const SOCIAL_DASHBOARD_URLS = {
    generalReport: `${BASE_URL}/social/general-report?start_date=${date}&end_date=${date}`,
};

// URLs for Customer Insights Dashboard
export const CUSTOMER_INSIGHTS_URLS = {
    generalReport: `${BASE_URL}/customer-insights/general-report?start_date=${date}&end_date=${date}`,
};

// URLs for Promotion Statistics
export const PROMOTION_STATISTICS_URLS = {
    coupons: `${BASE_URL}/coupons/totalAmount?start_date=${date}&end_date=${date}`,
    discounts: `${BASE_URL}/discounts/totalAmount?start_date=${date}&end_date=${date}`,
    promotions: `${BASE_URL}/promotions/totalAmount?start_date=${date}&end_date=${date}`,
    cashback: `${BASE_URL}/cashback/totalAmountUsed?start_date=${date}&end_date=${date}`,
};

// URLs for Wallet Statistics
export const WALLET_STATISTICS_URLS = {
    credits: `${BASE_URL}/wallet/credits?start_date=${date}&end_date=${date}`,
    customers: `${BASE_URL}/wallet/customers?start_date=${date}&end_date=${date}`,
};

// URLs for Feature Usage
export const FEATURE_USAGE_URLS = {
    stats: `${BASE_URL}/feature-usage/stats?start_date=${date}&end_date=${date}`,
};
