#!/bin/bash

echo "Copying html"
cat index_packing.html > final.html
echo "<script>" >> final.html

echo "Compressing js"
echo -n "j=\"" >> final.html
cat minmd.js main.js | terser -m -c | pigz -11 -f - | base64 --wrap=0 | sed -z 's/\n/\"/g' >> final.html
#echo "\"" >> final.html

echo "Compressing css"
echo -n ";k=\"" >> final.html
minify style.css | pigz -11 -f - | base64 --wrap=0 | sed -z 's/\n/\"/g' >> final.html
#echo "\"" >> final.html
echo -n ";" >> final.html

echo "Adding decompression script"
terser decomp.js -m -c >> final.html
echo -n "</script>" >> final.html
