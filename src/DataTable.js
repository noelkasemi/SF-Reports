// DataTable.js
import React from 'react';

const DataTable = ({ title, data }) => {
    if (!data) return <p className="text-red-500">No data available for {title}</p>;

    // Flatten nested objects into a format suitable for tabular display
    const flattenData = (obj, prefix = '') => {
        return Object.keys(obj).reduce((res, key) => {
            const value = obj[key];
            const newKey = prefix ? `${prefix}.${key}` : key;
            if (typeof value === 'object' && !Array.isArray(value)) {
                Object.assign(res, flattenData(value, newKey));
            } else {
                res[newKey] = value;
            }
            return res;
        }, {});
    };

    const dataArray = Array.isArray(data) ? data : [flattenData(data)];

    // Extract headers from the first item if available
    const headers = dataArray.length > 0 ? Object.keys(dataArray[0]) : [];

    return (
        <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-sm">
                <thead className="bg-gray-200">
                    <tr>
                        {headers.map((header) => (
                            <th key={header} className="py-2 px-4 text-left text-sm font-medium text-gray-700">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataArray.length > 0 ? dataArray.map((item, index) => (
                        <tr key={index} className="border-b">
                            {headers.map((header) => (
                                <td key={header} className="py-2 px-4 text-sm text-gray-700">{item[header]}</td>
                            ))}
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={headers.length} className="py-2 px-4 text-sm text-gray-700">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
