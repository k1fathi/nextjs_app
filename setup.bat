@echo off
REM Create directories
mkdir pages\api
mkdir components
mkdir context
mkdir lib
mkdir public\images
mkdir styles

REM Create files
echo.>"pages\api\send-email.js"
echo.>"pages\api\subscribe.js"
echo.>"pages\contact.js"
echo.>"pages\features.js"
echo.>"pages\games.js"
echo.>"pages\index.js"

echo.>"components\Footer.js"
echo.>"components\Header.js"
echo.>"components\Layout.js"
echo.>"components\Subscribe.js"
echo.>"components\Carousel.js"

echo.>"context\ThemeContext.js"

echo.>"lib\mongodb.js"

echo.>"styles\globals.css"

echo.>.env.local
echo.>"next.config.js"
echo.>"package.json"
echo.>"postcss.config.js"
echo.>"tailwind.config.js"

echo Project files created.
pause