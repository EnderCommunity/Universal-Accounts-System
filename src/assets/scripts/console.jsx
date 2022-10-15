/**
 * 
 * Manage console logs
 * 
 **/

export function log() {
    // Check 'https://vitejs.dev/guide/env-and-mode.html#modes'
    if (import.meta.env.MODE == "development") {
        console.log.apply(null, arguments);
    }
}

export function detectDevTools(callback) {
    if (import.meta.env.MODE != "development") {
        let userWarned = false,
            dDevTool = (allow) => {
                if(!userWarned){
                    if (isNaN(+allow)) allow = 100;
                    var start = +new Date();
                    debugger;
                    var end = +new Date();
                    if (isNaN(start) || isNaN(end) || end - start > allow) {
                        callback();
                        userWarned = true;
                        window.removeEventListener('load', dDevTool);
                        window.removeEventListener('resize', dDevTool);
                        window.removeEventListener('mousemove', dDevTool);
                        window.removeEventListener('focus', dDevTool);
                        window.removeEventListener('blur', dDevTool);
                    }
                }
            };
        window.addEventListener('load', dDevTool);
        window.addEventListener('resize', dDevTool);
        window.addEventListener('mousemove', dDevTool);
        window.addEventListener('focus', dDevTool);
        window.addEventListener('blur', dDevTool);
    }
}