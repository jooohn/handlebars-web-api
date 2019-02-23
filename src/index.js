const polka = require('polka');
const { json } = require('body-parser');
const render = require('./render');
const logger = require('pino')();
const port = parseInt(process.env.PORT || '3000', 10);

const handler = ({ body }, res) => {
  try {
    if (!body.template || !body.data) {
      res.statusCode = 400;
      res.end('"template" and "data" must be specified.\n');
      return;
    }
    const { template, data } = body;
    if (typeof template !== 'string') {
      res.statusCode = 400;
      res.end('"template" must be a string.\n');
      return;
    }
    const rendered = render({ template, data });
    res.statusCode = 200;
    res.end(rendered + '\n');
  } catch(e) {
    logger.error(e);
    res.statusCode = 500;
    res.end('Internal server error.\n');
  }
};

const logging = (req, res, next) => {
  res.on('finish', () => {
    logger.info(`${res.statusCode} ${req.method} ${req.url}`);
  });
  next();
};

polka()
  .use(json(), logging)
  .post('/', handler)
  .listen(port, err => {
    if (err) throw err;
    console.log(`> Running on localhost:${port}`);
  });
