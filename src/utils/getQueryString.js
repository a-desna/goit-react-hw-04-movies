import queryString from 'query-string';

const getQueryString = string => queryString.parse(string);

export default getQueryString;
