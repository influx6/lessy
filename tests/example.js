var b = require('lessy')('./css','./less');
b.syncDir('./css');
b.sync('ball.less'); // just add name of file directly ,path will be resolved with the import path
b.sync('./assets/less/beach.less'); //add the relative directory,path will be resolved with root of dir where its called 
b.bootup();