# Lessy 
	Is Less-Touch reborn to be more functional and fast and less redundant

#Install 
	' npm install lessy '

#Example
	"
		var lessy = require('lessy');
		//get a lessy object, it requires two arguments
			-	output : where you wish your generated css files to be saved
			- imports : where you keep your other less files( usually in the same as the less folder,if u seprate your less files though(note thats a bad idea generally)),supply the directory path so it can handle less @imports directives

		var compiler = lessy('./css','./less');
		
		//to watch a single file
		compiler.sync('./less/style.less');
		
		//supply a second arguments if u wish to rename the file
		compiler.sync('./less/style.less','styledup.css');
		
		//to watch a directory
		compiler.syncDir('./less');

		//if u wish to change the update timer( the interval it watches the files and folders)
		
		compiler.ms = 1000; //make it one second,instead of half the second(500) default time

		//then startup your compiler
		compiler.bootup();
	"
# Features
	- capable of watching only a single file
	- capable of dealing with @import directives by requiring you to specify your location for your less files
	- capable of watching a directory and updating itself with the lists of files added
	- a better time based loop 

# License: Released under Mit Licence
"
The MIT License (MIT)

Copyright (c) 2011 - 2012 Christoph Martens

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do so, subject
to the following conditions:

The above copyright notice and this permission notice shall be included in all copies
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.

"