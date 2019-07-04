cd dist/formation-angular

@echo off
setlocal enabledelayedexpansion

rem file name
Set infile=index.html

rem what to find
Set find=./

rem value to replace
Set replace=http://localhost:3000/

@echo off
setlocal enabledelayedexpansion
set COUNT=0
for /F "tokens=* delims=," %%n in (!infile!) do (
set LINE=%%n
set TMPR=!LINE:%find%=%replace%!
Echo !TMPR!>>tmp.txt
)
move tmp.txt %infile%
pause