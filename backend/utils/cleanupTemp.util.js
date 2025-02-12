import cron from "node-cron";
import fs from "fs";
import path from "path";

const tempDir = path.join(process.cwd(), "temp");

// Schedule cleanup every night at 12 AM
cron.schedule("0 0 * * *", async () => {
  console.log("Running cleanup: Deleting files older than 2 minutes...");

  try {
    if (!fs.existsSync(tempDir)) {
      console.log("Temp directory does not exist. Skipping cleanup.");
      return;
    }

    const files = fs.readdirSync(tempDir);
    const now = Date.now();

    files.forEach((file) => {
      const filePath = path.join(tempDir, file);
      const stats = fs.statSync(filePath);

      const fileAge = (now - stats.mtimeMs) / 1000; // Convert ms to seconds

      if (fileAge > 20) { // 2 minutes = 120 seconds
        fs.unlinkSync(filePath);
        console.log(`Deleted old file: ${filePath}`);
      }
    });

  } catch (error) {
    console.error("Error during temp directory cleanup:", error);
  }
});

console.log("Scheduled task: Delete files older than 2 minutes every night at 12 AM.");
