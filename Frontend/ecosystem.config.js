module.exports = {
    apps: [
      {
        name: "turnkey-frontend",
        script: "npm",
        args: "run dev", // or "run build" for production
        watch: true,
        env: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
        }
      }
    ]
  }
  