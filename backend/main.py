from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

from model.predictor import FootballPredictor

app = FastAPI(title="Football Predictor API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

predictor = FootballPredictor()


class MatchRequest(BaseModel):
    home_team: str
    away_team: str
    is_neutral: bool = False


class ShapFeatureOut(BaseModel):
    name: str
    value: float
    label: str


class MatchPredictionOut(BaseModel):
    home_team: str
    away_team: str
    predicted_home_goals: int
    predicted_away_goals: int
    prob_home: float
    prob_draw: float
    prob_away: float
    odds_home: float
    odds_draw: float
    odds_away: float
    shap_features: List[ShapFeatureOut]
    consensus_text: str


@app.get("/")
def root():
    return {"status": "ok", "version": "1.0.0"}


@app.post("/predict", response_model=MatchPredictionOut)
def predict(req: MatchRequest):
    try:
        return predictor.predict(req.home_team, req.away_team, req.is_neutral)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))


@app.get("/predictions/upcoming")
def upcoming():
    return predictor.get_worldcup2026_predictions()


@app.get("/teams")
def teams():
    return {"teams": sorted(predictor.elo_ratings.keys())}
