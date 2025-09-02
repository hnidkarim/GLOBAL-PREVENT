
window.TIER_PARAMS = {
  VeryLow: { mu: 0.95, gamma: 1.00,
    S0_10: { "40–49": { Female: 0.993, Male: 0.991 }, "50–59": { Female: 0.987, Male: 0.982 }, "60–69": { Female: 0.970, Male: 0.960 } },
    S0_30: { "40–49": { Female: 0.905, Male: 0.890 }, "50–59": { Female: 0.860, Male: 0.835 }, "60–69": { Female: 0.760, Male: 0.730 } }
  },
  Low: { mu: 1.00, gamma: 1.00,
    S0_10: { "40–49": { Female: 0.992, Male: 0.990 }, "50–59": { Female: 0.985, Male: 0.980 }, "60–69": { Female: 0.965, Male: 0.955 } },
    S0_30: { "40–49": { Female: 0.900, Male: 0.885 }, "50–59": { Female: 0.855, Male: 0.835 }, "60–69": { Female: 0.750, Male: 0.720 } }
  },
  Medium: { mu: 1.10, gamma: 1.00,
    S0_10: { "40–49": { Female: 0.989, Male: 0.986 }, "50–59": { Female: 0.978, Male: 0.972 }, "60–69": { Female: 0.955, Male: 0.945 } },
    S0_30: { "40–49": { Female: 0.880, Male: 0.860 }, "50–59": { Female: 0.820, Male: 0.800 }, "60–69": { Female: 0.700, Male: 0.670 } }
  },
  High: { mu: 1.25, gamma: 1.05,
    S0_10: { "40–49": { Female: 0.985, Male: 0.982 }, "50–59": { Female: 0.970, Male: 0.965 }, "60–69": { Female: 0.945, Male: 0.935 } },
    S0_30: { "40–49": { Female: 0.840, Male: 0.820 }, "50–59": { Female: 0.780, Male: 0.760 }, "60–69": { Female: 0.650, Male: 0.620 } }
  },
  VeryHigh: { mu: 1.40, gamma: 1.08,
    S0_10: { "40–49": { Female: 0.982, Male: 0.978 }, "50–59": { Female: 0.965, Male: 0.958 }, "60–69": { Female: 0.935, Male: 0.925 } },
    S0_30: { "40–49": { Female: 0.810, Male: 0.790 }, "50–59": { Female: 0.740, Male: 0.720 }, "60–69": { Female: 0.600, Male: 0.570 } }
  }
};
window.COUNTRY_TIER = {
  "Japan":"VeryLow","Spain":"VeryLow","Sweden":"VeryLow","Norway":"VeryLow",
  "Italy":"Low","France":"Low","Germany":"Low","United Kingdom":"Low","Canada":"Low","Australia":"Low",
  "United States":"Medium","China":"Medium","Saudi Arabia":"Medium","Turkey":"Medium","Argentina":"Medium","Philippines":"Medium",
  "Brazil":"High","Mexico":"High","South Africa":"High","Egypt":"High","Morocco":"High","Kenya":"High","Indonesia":"High",
  "India":"VeryHigh","Pakistan":"VeryHigh","Bangladesh":"VeryHigh","Nigeria":"VeryHigh"
};
window.countriesList = Object.keys(window.COUNTRY_TIER).sort();
