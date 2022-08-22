const dotenv = require('dotenv');

dotenv.config();

function apiUrl(rover, opts) {
    let params = '';
    if (opts) {
        params += `?`;
        for (k in opts) {
            params += `${k}=${opts[k]}&`;
        }
        params += `api_key=${process.env.NASA_API_KEY}`;
    }
    return `${process.env.NASA_API}rovers/${rover}/photos${params}`;
}

function formatDate(date) {
    return [
        date.getFullYear(),
        (date.getMonth() + 1).toString().padStart(2, '0'),
        date.getDate().toString().padStart(2, '0')
    ].join('-');
}

module.exports = {
    apiUrl,
    formatDate
}
