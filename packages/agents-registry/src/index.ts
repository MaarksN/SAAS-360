import { AgentDefinition } from '@birthhub/agents-core';

const registry = new Map<string, AgentDefinition>();

export function registerAgent(agent: AgentDefinition): void {
  registry.set(agent.id, agent);
}

export function getAgent(id: string): AgentDefinition | undefined {
  return registry.get(id);
}
