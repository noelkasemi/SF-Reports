// App.js
import React from 'react';
import Fetcher from './Fetcher';
import DataTable from './DataTable';
import { getYesterdayDate } from './utils'; // Ensure you have this function in utils
import { API_KEY, FOOD_DASHBOARD_URLS, SOCIAL_DASHBOARD_URLS, CUSTOMER_INSIGHTS_URLS, PROMOTION_STATISTICS_URLS, WALLET_STATISTICS_URLS, FEATURE_USAGE_URLS } from './APIConfig';

const App = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-center mb-6">SnapFood Report Date: {getYesterdayDate()}</h1>
            
            <h2 className="text-xl font-semibold mb-4">Food Dashboard</h2>
            <Fetcher url={FOOD_DASHBOARD_URLS.topVendors} apiKey={API_KEY}>
                {data => <DataTable title="Top Vendors" data={data} />}
            </Fetcher>
            <Fetcher url={FOOD_DASHBOARD_URLS.customerReport} apiKey={API_KEY}>
                {data => <DataTable title="New/Repeated Customers" data={data} />}
            </Fetcher>
            <Fetcher url={FOOD_DASHBOARD_URLS.topCustomers} apiKey={API_KEY}>
                {data => <DataTable title="Top Customers" data={data} />}
            </Fetcher>

            {/* Repeat for other categories */}
            <h2 className="text-xl font-semibold mb-4">Social Dashboard</h2>
            <Fetcher url={SOCIAL_DASHBOARD_URLS.generalReport} apiKey={API_KEY}>
                {data => <DataTable title="Social Report" data={data} />}
            </Fetcher>

            <h2 className="text-xl font-semibold mb-4">Customer Insights Dashboard</h2>
            <Fetcher url={CUSTOMER_INSIGHTS_URLS.generalReport} apiKey={API_KEY}>
                {data => <DataTable title="Customer Report" data={data} />}
            </Fetcher>

            <h2 className="text-xl font-semibold mb-4">Promotion Statistics</h2>
            <Fetcher url={PROMOTION_STATISTICS_URLS.coupons} apiKey={API_KEY}>
                {data => <DataTable title="Coupons" data={data} />}
            </Fetcher>
            <Fetcher url={PROMOTION_STATISTICS_URLS.discounts} apiKey={API_KEY}>
                {data => <DataTable title="Discounts" data={data} />}
            </Fetcher>
            <Fetcher url={PROMOTION_STATISTICS_URLS.promotions} apiKey={API_KEY}>
                {data => <DataTable title="Promotions" data={data} />}
            </Fetcher>
            <Fetcher url={PROMOTION_STATISTICS_URLS.cashback} apiKey={API_KEY}>
                {data => <DataTable title="Cashback" data={data} />}
            </Fetcher>

            <h2 className="text-xl font-semibold mb-4">Wallet Statistics</h2>
            <Fetcher url={WALLET_STATISTICS_URLS.credits} apiKey={API_KEY}>
                {data => <DataTable title="Wallet Credits" data={data} />}
            </Fetcher>
            <Fetcher url={WALLET_STATISTICS_URLS.customers} apiKey={API_KEY}>
                {data => <DataTable title="Wallet Customers" data={data} />}
            </Fetcher>

            <h2 className="text-xl font-semibold mb-4">Feature Usage</h2>
            <Fetcher url={FEATURE_USAGE_URLS.stats} apiKey={API_KEY}>
                {data => <DataTable title="Feature Usage" data={data} />}
            </Fetcher>
        </div>
    );
};

export default App;
