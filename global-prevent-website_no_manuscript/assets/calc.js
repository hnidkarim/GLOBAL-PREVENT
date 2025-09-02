
(function(){
  const $ = id => document.getElementById(id);
  const selCountry = $("country");
  window.countriesList.forEach(name => {
    const opt = document.createElement("option");
    opt.value = name; opt.textContent = name; selCountry.appendChild(opt);
  });
  selCountry.value = "France";

  const selSex = $("sex"), selAge = $("age"), selH = $("horizon");
  function num(id){ return parseFloat($(id).value.replace(',', '.')); }
  function pct(x){ return Number.isFinite(x) ? (x*100).toFixed(2) + "%" : "—"; }

  function applyPreset(){
    const tier = window.COUNTRY_TIER[selCountry.value];
    const P = window.TIER_PARAMS[tier];
    const h = selH.value === "10" ? "S0_10" : "S0_30";
    const S0 = P[h]?.[selAge.value]?.[selSex.value];
    $("gamma").value = P.gamma;
    $("mu").value = P.mu;
    $("S0").value = (typeof S0 === "number" ? S0 : "");
    compute();
  }

  function compute(){
    const S0 = num("S0"), gamma = num("gamma"), mu = num("mu"), lp = num("lp");
    const risk = 1 - Math.pow(S0, Math.exp(gamma*(lp - mu)));
    $("out-country").textContent = selCountry.value;
    $("out-sexage").textContent = selSex.value + " / " + selAge.value;
    $("out-hor").textContent = selH.value + " y";
    $("out-hor2").textContent = selH.value;
    $("out-lp").textContent = Number.isFinite(lp) ? lp.toFixed(4) : "—";
    $("out-gamma").textContent = Number.isFinite(gamma) ? gamma.toFixed(4) : "—";
    $("out-mu").textContent = Number.isFinite(mu) ? mu.toFixed(4) : "—";
    $("out-S0").textContent = Number.isFinite(S0) ? S0.toFixed(6) : "—";
    $("out-risk").textContent = pct(risk);
    let cat = "—";
    if (Number.isFinite(risk)){
      if (risk < 0.05) cat = "Low";
      else if (risk < 0.075) cat = "Borderline";
      else if (risk < 0.20) cat = "Intermediate";
      else cat = "High";
    }
    $("out-cat").textContent = cat;
  }

  $("btn-preset").addEventListener("click", applyPreset);
  $("btn-print").addEventListener("click", () => window.print());
  ["country","sex","age","horizon","gamma","mu","S0","lp"].forEach(id => {
    $(id).addEventListener("input", compute);
    $(id).addEventListener("change", compute);
  });

  applyPreset(); compute();
})();
