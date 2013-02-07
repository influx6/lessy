var b = require('./lib/lessy');
b.sync('./css/css.less');
b.syncDir('./css');
b.bootup();