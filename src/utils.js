export const getYesterdayDate = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const yyyy = yesterday.getFullYear();
    const mm = String(yesterday.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const dd = String(yesterday.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};
;