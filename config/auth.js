module.exports = {
    secret : process.env.auth_SECTRET || "secretKey",
    expires : process.env.auth_EXPIRES || "24h",
    rounds : process.env.auth_ROUNDS || 10
}