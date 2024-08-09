// Fetcher.js
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Fetcher = ({ url, apiKey, children }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    headers: {
                        'X-App-Key': apiKey,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log('API Response:', result); // Log API response

                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            }
        };

        fetchData();
    }, [url, apiKey]);

    if (error) return <p className="text-red-500">Failed to fetch data: {error.message}</p>;

    return children(data);
};

Fetcher.propTypes = {
    url: PropTypes.string.isRequired,
    apiKey: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
};

export default Fetcher;
