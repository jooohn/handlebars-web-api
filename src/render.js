const Handlebars = require('handlebars');

module.exports = ({ template, data }) => Handlebars.compile(template)(data);
