# 📊 Compose Monitoring

Stack completa de **observabilidade** usando Docker Compose. Inclui:

- [Grafana](https://grafana.com/) – Visualização de métricas, logs e traces
- [Loki](https://grafana.com/oss/loki/) – Coleta e indexação de logs
- [Tempo](https://grafana.com/oss/tempo/) – Rastreamento distribuído (tracing)
- [Mimir](https://grafana.com/oss/mimir/) – Armazenamento escalável de métricas (Prometheus compatible)
- [Prometheus](https://prometheus.io/) – Coletor de métricas (opcional)

---

## 🚀 Como usar

Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/compose-monitoring.git
cd compose-monitoring
```

Suba os serviços com:
```bash
docker compose up -d
```
