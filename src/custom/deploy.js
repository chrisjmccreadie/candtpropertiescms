// /modules/custom/routes/deploy.js

module.exports = function (router, controller) {
  router.get("/admin/deploy", async (req, res) => {
    const { exec } = require("child_process");

    exec(
      'curl -X POST "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/939fb54f-5773-47b8-8729-f3c7ba76677d"',
      (error, stdout, stderr) => {
        if (error) {
          console.error(`❌ Deploy error: ${error.message}`);
          return res.send("Deploy failed.");
        }
        if (stderr) {
          console.error(`⚠️ Deploy stderr: ${stderr}`);
        }
        console.log(`✅ Deploy stdout: ${stdout}`);
        res.send("Deploy triggered successfully!");
      }
    );
  });
};
