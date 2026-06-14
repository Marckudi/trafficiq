"""
Retraining pipeline — call after each real match result is available.
"""
from typing import List, Dict, Tuple
import numpy as np
import xgboost as xgb
from sklearn.preprocessing import StandardScaler


def retrain(
    match_history: List[Dict],
) -> Tuple[xgb.XGBClassifier, StandardScaler]:
    """
    Retrain on updated history.

    Each record in match_history must contain:
        elo_diff, home_streak, is_neutral, goals_for, goals_against, outcome
        (outcome: 0=home win, 1=draw, 2=away win)
    """
    if len(match_history) < 100:
        raise ValueError("Se necesitan al menos 100 partidos para reentrenar.")

    X = np.array([
        [m["elo_diff"], m["home_streak"], m["is_neutral"],
         m["goals_for"], m["goals_against"]]
        for m in match_history
    ])
    y = np.array([m["outcome"] for m in match_history])

    scaler = StandardScaler()
    X_s = scaler.fit_transform(X)

    model = xgb.XGBClassifier(
        n_estimators=300,
        max_depth=5,
        learning_rate=0.04,
        subsample=0.85,
        colsample_bytree=0.85,
        objective="multi:softprob",
        num_class=3,
        eval_metric="mlogloss",
        random_state=42,
        n_jobs=-1,
    )
    model.fit(X_s, y, verbose=False)
    return model, scaler
