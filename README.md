# Code Watchman Node.js SDK

## Overview

Code Watchman is a powerful logging and monitoring system, designed for developers and small teams. This Node.js SDK allows you to seamlessly integrate Code Watchman's functionality into your Node.js applications, enabling real-time insights, instant alerts, and flexible monitoring of your code's performance.

## Features

- Real-time logging and monitoring
- Instant alerts for critical events
- Flexible integration with your existing Node.js codebase
- Mobile access to your logs and notifications
- Team collaboration tools
- Color-coded console output for local debugging

## Installation

Install the Code Watchman Node.js SDK using npm:

```
npm install codewatchman
```

Or using yarn:

```
yarn add codewatchman
```

## Usage

### With a Code Watchman Account

1. Download the Code Watchman mobile app from the App Store or Google Play Store
2. Create an account and a new project within the app
3. Obtain your API key and secret from the project settings in the mobile app
4. Initialize the Code Watchman logger in your Node.js code:

```javascript
import CodeWatchman from 'codewatchman';

const logger = new CodeWatchman({
  name: "MyProject",
  level: "info",
  projectId: "YOUR_PROJECT_ID",
  apiKey: "YOUR_API_KEY",
  apiSecret: "YOUR_API_SECRET"
});
```

5. Use the logger to send logs and notifications:

```javascript
logger.info("Application started");
logger.error("An error occurred", new Error("Sample error"));
logger.notify("Critical issue detected", { priority: "high" });

// success and failure methods to end the current log entry
logger.success("Operation completed successfully");
logger.failure("Operation failed");
```

### Without a Code Watchman Account

The Code Watchman SDK can also be used as a standalone logging solution without connecting to the Code Watchman service:

```javascript
import CodeWatchman from 'codewatchman';

const logger = new CodeWatchman({
  name: "MyProject",
  level: "info"
});

logger.info("This log will be handled locally");
```

When used without an account, logs will be processed locally and output to the console with color coding.

## Configuration

The `CodeWatchman` constructor accepts the following options:

- `name`: The name of your application or component
- `level`: The logging level (e.g., "debug", "info", "warn", "error")
- `projectId`: The ID of your project (obtained from the mobile app)
- `apiKey`: Your Code Watchman API key (obtained from the mobile app)
- `apiSecret`: Your Code Watchman API secret (obtained from the mobile app)

## Log Levels

Code Watchman supports the following log levels:

- `debug`: Detailed information, typically of interest only when diagnosing problems.
- `info`: Confirmation that things are working as expected.
- `warn`: An indication that something unexpected happened, or indicative of some problem in the near future.
- `error`: Due to a more serious problem, the software has not been able to perform some function.

## Additional Documentation

For more detailed information on using the Code Watchman Node.js SDK, including advanced features and customization options, please visit our [official documentation](https://docs.codewatchman.com).

## Support

If you encounter any issues or have questions about using the Code Watchman Node.js SDK, please don't hesitate to contact our support team through the mobile app or open an issue in this repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.