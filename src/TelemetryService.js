import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';

class TelemetryService {

    constructor() {
        this.reactPlugin = new ReactPlugin();
    }

    initialize(reactPluginConfig) {
        let INSTRUMENTATION_KEY = '40f3bb2a-b965-4660-a479-8f69017798c5'; // Enter your instrumentation key here
        
        this.appInsights = new ApplicationInsights({
            config: {
                instrumentationKey: INSTRUMENTATION_KEY,
                maxBatchInterval: 0,
                disableFetchTracking: false,
                extensions: [this.reactPlugin],
                extensionConfig: {
                    [this.reactPlugin.identifier]: reactPluginConfig
                }
            }
        });
        this.appInsights.loadAppInsights();
    }
}

export let ai = new TelemetryService();
