rm -rf build
mkdir build
cp -r chrosh build/
cd build
rm -rf `find . -name ".git"`
rm -rf `find . -name ".DS_Store"`
rm ~/Desktop/chrosh.zip
cd chrosh
zip -rq ~/Desktop/chrosh.zip *
cd ../../
rm -rf build