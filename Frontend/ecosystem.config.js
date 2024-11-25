module.exports = {
  apps: [
    {
      name: "turnkey-frontend",
      script: "npm",
      args: "run dev", // or "run build" for production
      watch: true,
      env: {
        NODE_ENV: "development",
        PORT: 3001, // Specify the port here
      },
      env_staging: {
        NODE_ENV: "staging",
        PORT: 3002, // Port for staging
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3003, // Port for production
      },
    },
  ],
};
