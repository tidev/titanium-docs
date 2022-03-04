const express = require('express');
const app = express();
app.use(express.static(`${__dirname}/docs/.vuepress/dist`));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
