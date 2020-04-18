#!/bin/bash
rm -rf dist/*
mkdir -p dist/{css,img,js}
cp -r js dist
cp -r img dist
cp css/{ani*,owl*,styles.css} dist/css
zip -r reverso.zip dist
