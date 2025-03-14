import { CodeWatchman } from 'codewatchman';

const logger = new CodeWatchman({
  name: "test_app",
  level: "info",
  projectId: process.env.CODEWATCHMAN_PROJECT_ID,
  apiKey: process.env.CODEWATCHMAN_API_KEY,
  apiSecret: process.env.CODEWATCHMAN_API_SECRET
});

function simulateApp() {
  logger.info("Application started");

  // Simulate some application logic
  for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) {
      logger.debug(`Processing item ${i}`);
    } else {
      logger.warn(`Skipping item ${i}`);
    }
  }

  // Simulate an error
  try {
    throw new Error("Simulated error");
  } catch (error) {
    logger.error("An error occurred", error);
  }

  // Simulate a successful operation
  logger.success("Data backup completed successfully");

  // Simulate a failed operation
  logger.failure("Database connection failed");

  logger.info("Application finished");
}

simulateApp();