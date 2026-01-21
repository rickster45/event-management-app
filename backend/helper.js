// Helper function for error handling
function handleError(error) {
    console.error('An error occurred:', error);
    // Additional error handling logic can go here
}

// Utility function for converting a string to a date
function convertToDate(dateString) {
    return new Date(dateString);
}

// Exporting the functions
module.exports = {
    handleError,
    convertToDate
};