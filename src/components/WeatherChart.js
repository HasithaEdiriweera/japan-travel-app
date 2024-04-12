import React, { useEffect } from 'react';

const WeatherWidget = ({ cityId }) => {
    useEffect(() => {
        // Function to load the script and initialize the widget
        const loadWidget = () => {
            if (!window.myWidgetParam) {
                window.myWidgetParam = [];
            }
            window.myWidgetParam.push({
                id: 1,
                cityid: cityId,
                appid: '515be4723e193edc0185e9240370c7c2',
                units: 'metric',
                containerid: 'openweathermap-widget-1',
            });

            const script = document.createElement('script');
            script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
            script.async = true;
            script.charset = "utf-8";
            document.body.appendChild(script);
        };

        // Load the D3 library only if it's not already loaded
        if (!document.querySelector('script[src="//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js"]')) {
            const d3Script = document.createElement('script');
            d3Script.src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js';
            d3Script.async = true;
            d3Script.onload = loadWidget; // Load widget after D3 has loaded
            document.body.appendChild(d3Script);
        } else {
            loadWidget(); // D3 already loaded, load widget directly
        }

        // Optional: Clean up the script when the component unmounts
        return () => {
            const script = document.querySelector('script[src="//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"]');
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, [cityId]);

    return <div id="openweathermap-widget-1"></div>;
};

export default WeatherWidget;
