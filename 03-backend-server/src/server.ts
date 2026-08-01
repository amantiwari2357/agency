import app from "./app";
import { logger } from "./utils/logger";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`🚀 Feature-Based Modular Backend Server listening on http://localhost:${PORT}`);
  logger.info(`  • GET  /api/v1/services`);
  logger.info(`  • GET  /api/v1/pricing/:country`);
  logger.info(`  • POST /api/v1/leads`);
  logger.info(`  • GET  /api/v1/analytics`);
});
