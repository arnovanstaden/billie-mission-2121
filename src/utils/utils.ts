export const formatNumber = (number: number) => {
    const formatted = number.toLocaleString('de-DE', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    return formatted
}