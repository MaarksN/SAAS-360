# REUSE_MATRIX

Classificação inicial do material detectado no `SAAS BIRTHUB 360.rar`.

| Grupo | Classificação | Justificativa |
|---|---|---|
| agents/ | REAPROVEITAR | Estrutura principal de agentes e serviços aparenta ser núcleo do produto; requer validação por extração completa para execução real. |
| .github/ | REAPROVEITAR | Pipeline de CI reutilizável com ajustes de versão/dependências. |
| arquivos de teste (`tests/`) | REFATORAR | Úteis para cobertura, porém devem ser alinhados ao estado atual do repositório e ao bootstrap final. |
| `.env.example` e configs base | REAPROVEITAR | Base de configuração segura para onboarding e execução local. |
| artefatos de cache/temporários (`node_modules`, `.DS_Store`, `.turbo`, `.pnpm-store`) | DESCARTAR | Não devem ser versionados; são resíduos locais/gerados. |

## Observações
- Esta matriz foi produzida a partir de inventário bruto de caminhos detectados no binário RAR.
- A classificação deve ser confirmada após extração técnica completa do pacote (bloqueada por ausência de extrator RAR no ambiente).
