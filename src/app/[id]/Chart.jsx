import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({ symbol }) {
    const container = useRef();

    useEffect(() => {
        // Check if the script has already been appended
        if (!container.current.querySelector('script')) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = JSON.stringify({
                "autosize": true,
                "symbol": symbol,  // Use the symbol prop here
                "timezone": "Etc/UTC",
                "theme": "light",
                "style": "2",
                "locale": "en",
                "enable_publishing": false,
                "gridColor": "rgba(17, 85, 204, 0.06)",
                "hide_top_toolbar": true,
                "hide_legend": true,
                "withdateranges": true,
                "range": "5D",
                "save_image": false,
                "calendar": false,
                "hide_volume": true,
                "support_host": "https://www.tradingview.com"
            });
            container.current.appendChild(script);
        }
    }, [symbol]); // Ensure it runs whenever symbol prop changes

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text"></span></a></div>
        </div>
    );
}

export default memo(TradingViewWidget);
