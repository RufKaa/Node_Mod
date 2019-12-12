let express = require('express');
let app = express();
app.use(express.statis('public'));
app.listen(8080); //http://localhost:8080