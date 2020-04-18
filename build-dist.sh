#!/bin/bash
rm -rf dist/* reverso.zip
mkdir -p dist/{css,img,js}
cp -r js dist
cp -r img dist
cp css/{ani*,owl*,styles.css} dist/css
cp index.html dist
zip -r reverso.zip dist
