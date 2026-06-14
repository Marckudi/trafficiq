# Football Predictor ⚽

Sistema de predicción de partidos de fútbol con XGBoost, simulación de Montecarlo y SHAP para explicabilidad — Copa del Mundo 2026.

## Cómo funciona

1. **XGBoost** calibrado en log-odds calcula probabilidades de victoria local, empate y visitante
2. **Distribución de Poisson** estima el parámetro λ de goles esperados por equipo
3. **Montecarlo** simula cada partido 10.000 veces para proyectar el marcador más probable
4. **SHAP** explica la contribución de cada variable a la predicción
5. El modelo se **reentrena automáticamente** tras cada resultado real

## Variables del modelo

| Variable | Descripción |
|---|---|
| Diferencia de Elo | Diferencia de rating entre equipos |
| Racha del local | Forma reciente del equipo local |
| Cancha neutral | Si el partido es en sede neutral |
| En del local (Ult. 3) | Promedio de goles marcados últimos 3 partidos |
| Goles en contra local (Ult. 3) | Promedio de goles encajados últimos 3 partidos |

## Inicio rápido

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend en `http://localhost:5173` · API en `http://localhost:8000`

## API

```
POST /predict            Predicción para cualquier partido
GET  /predictions/upcoming  Partidos Copa del Mundo 2026
GET  /teams              Lista de equipos disponibles
```

### Ejemplo
```bash
curl -X POST http://localhost:8000/predict \
  -H 'Content-Type: application/json' \
  -d '{"home_team": "México", "away_team": "Sudáfrica", "is_neutral": true}'
```

## Stack

**Backend** FastAPI · XGBoost · SHAP · Scipy · NumPy  
**Frontend** React 18 · TypeScript · Tailwind CSS · Vite
