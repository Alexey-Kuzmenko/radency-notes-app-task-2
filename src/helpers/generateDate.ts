export const generateDate = (): string => {
    const currentDate = new Date();

    return currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

};