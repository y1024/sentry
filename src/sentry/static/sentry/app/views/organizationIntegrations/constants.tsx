export const INSTALLED = 'Installed' as const;
export const NOT_INSTALLED = 'Not Installed' as const;
export const PENDING = 'Pending' as const;

export const colors = {
  [INSTALLED]: 'success',
  [NOT_INSTALLED]: 'gray2',
  [PENDING]: 'yellowOrange',
};

/**
 * Integrations in the integration directory should be sorted by their popularity (weight).
 * These weights should be hardcoded in the application itself.
 * We can store this in a map where the key is the integration slug and the value is an integer and represents the weight.
 * The weights should reflect the relative popularity of each integration.
 */

export const popularityWeights = {
  // First-party-integrations
  slack: 50,
  github: 20,
  jira: 10,
  bitbucket: 10,
  gitlab: 10,
  pagerduty: 10,

  // Plugins
  webhooks: 20,
  trello: 10,
  heroku: 10,
  pivotal: 10,
  twilio: 10,
  pushover: 10,
  redmine: 10,
  phabricator: 10,
  opsgenie: 10,
  teamwork: 10,
  asana: 5,
  victorops: 5,
  sessionstack: 5,
  vsts: 5,
  segment: 1,
  clubhouse: 1,
  'amazon-sqs': 1,
  splunk: 1,

  // Sentry-apps
  rookout: 1,
  clickup: 1,
  amixir: 1,
  split: 1,
};
