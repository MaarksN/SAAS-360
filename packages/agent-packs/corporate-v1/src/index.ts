import { defineAgent } from '@birthhub/agents-core';
import { registerAgent } from '@birthhub/agents-registry';

export const corporateTriageAgent = defineAgent({
  id: 'corporate-triage-v1',
  name: 'Corporate Triage',
  domain: 'operations',
  version: '1.0.0'
});

registerAgent(corporateTriageAgent);
