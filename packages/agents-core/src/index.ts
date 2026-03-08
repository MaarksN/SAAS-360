export interface AgentDefinition {
  id: string;
  name: string;
  domain: 'clinical' | 'finance' | 'operations';
  version: string;
}

export function defineAgent(agent: AgentDefinition): AgentDefinition {
  return agent;
}
