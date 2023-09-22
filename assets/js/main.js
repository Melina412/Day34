function berechneUmsatz() {
  //
  //  * input values lesen
  let groesse = Number(document.getElementById("groesse").value);
  let alter = Number(document.getElementById("alter").value);
  let gewicht = Number(document.getElementById("gewicht").value);
  let aktivitaet = Number(document.getElementById("aktiv").value);
  let geschlecht = document.querySelector('input[name="geschlecht"]:checked');
  let geschlechtvalue = document.querySelector(
    'input[name="geschlecht"]:checked'
  ).value;

  //   * id's für output lesen
  let outputGrundumsatz_kcal = document.getElementById("result_kcal");
  let outputGrundumsatz_kJ = document.getElementById("result_kJ");
  let outputGesamtumsatz_kcal = document.getElementById("resultTotal_kcal");
  let outputGesamtumsatz_kJ = document.getElementById("resultTotal_kJ");

  let formel = "";
  umsatz();
  //   umsatz(gewicht, groesse, alter, geschlecht);

  //   * output text generieren
  function outputText() {
    // console.log({ formel });
    outputGrundumsatz_kcal.innerHTML = `${formel.toFixed(0)} kcal`;
    outputGrundumsatz_kJ.innerHTML = `${(formel * 4.184).toFixed(0)} kJ`;
    let total = formel * aktivitaet;
    // console.log({ total });
    outputGesamtumsatz_kcal.innerHTML = `${total.toFixed(0)} kcal`;
    outputGesamtumsatz_kJ.innerHTML = `${(total * 4.184).toFixed(0)} kJ`;
  }

  //   console.log(typeof geschlecht); // object

  // * grundumsatz und gesamtumsatz berechnen
  function umsatz() {
    //  female bzw. male ist ein object und kein string, deshalb NICHT in anführungszeichen
    if (geschlecht === female) {
      formel = 665.1 + 9.6 * gewicht + 1.8 * groesse - 4.7 * alter;
      //   console.log({ formel });
      outputText();

      return "female";
      //
    } else if (geschlecht === male) {
      formel = 66.47 + 13.7 * gewicht + 5 * groesse - 6.8 * alter;
      //   console.log({ formel });
      outputText();

      return "male";
      //
    } else {
      console.log("radio not checked");

      return "else";
    }
  }

  let return_value = umsatz();
  console.log({ return_value });
}
