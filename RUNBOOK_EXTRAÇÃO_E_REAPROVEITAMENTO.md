# RUNBOOK_EXTRAÇÃO_E_REAPROVEITAMENTO

## Escopo
Execução do Ciclo 0 (itens C1-C6) a partir do artefato `SAAS BIRTHUB 360.rar`.

## Processo executado
1. Localização do pacote no repositório raiz.
2. Criação de staging seguro em `staging/ciclo_00/`.
3. Inventário bruto inicial usando varredura de strings para recuperar caminhos de arquivos no RAR.
4. Normalização de caminhos para remover prefixos longos e padrões inseguros.
5. Geração de `EXTRACTION_MANIFEST.json` com:
   - hash SHA-256 do pacote-fonte;
   - árvore detectada de caminhos;
   - categorias iniciais por tipo de conteúdo;
   - limitação explícita de hash por arquivo (não disponível sem extração).
6. Criação de `REUSE_MATRIX.md` com classificação inicial de reaproveitamento.

## Evidências
- Inventário bruto: `staging/ciclo_00/inventory/raw_paths_from_strings.txt`
- Caminhos normalizados: `staging/ciclo_00/normalized_paths/normalized_paths.txt`
- Sumário: `staging/ciclo_00/inventory/summary.json`
- Log de tentativa de extração: `staging/ciclo_00/logs/extraction_attempt.log`

## Riscos residuais
- Não houve extração binária real dos arquivos por indisponibilidade de ferramenta compatível com RAR no ambiente.
- Hash individual de cada arquivo não pôde ser calculado sem extração.
- Correções de bootstrap/imports (C5) dependem da materialização real do conteúdo.

## Condição de destrava do Ciclo 1
- Disponibilizar ferramenta de extração RAR (ex.: `unrar`/`7z`) no ambiente de execução.
- Reexecutar C2-C5 com extração real, hashes por arquivo e validação de build/testes do conteúdo materializado.
- Validação cruzada do agente JULES nos itens concluídos.
