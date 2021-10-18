const {
  REACT_APP_API_GITHUB: baseApiGithub,
  REACT_APP_CLIENT_ID: clientId,
  REACT_APP_CLIENT_SECRETS: clientSecrets,
  REACT_APP_API_OAUTH: baseOAuthApi
} = process.env;

export { baseApiGithub, baseOAuthApi, clientId, clientSecrets };
