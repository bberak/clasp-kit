function doGet(e) {
  return HtmlService.createTemplateFromFile("client/app").evaluate();
};

function include(File) {
  return HtmlService.createHtmlOutputFromFile(File).getContent();
};

const db = SpreadsheetApp.openByUrl("YOUR_SHEET_URL_GOES_HERE");

const schema = {
  users: db.getSheetByName("users").getRange("A1:Z1").getDisplayValues()[0].filter(x => x)
};

function formatQueryFormula(range, select) {
  if (select.indexOf(":") !== -1) {
    const cols = schema[Object.keys(schema).find(key => range.indexOf(key) !== -1)] || [];
    const A = "A".charCodeAt(0);

    cols.forEach((c, idx) => {
      const re = new RegExp(`:${c}`, "gi");
      select = select.replace(re, String.fromCharCode(A + idx));
    })
  }

  return `=QUERY(${range}, "${select}", 1)`;
};

function query(range = "users!A:C", select = "select A, B, C") {
  const sheet = db.insertSheet();
  const cell = sheet.getRange(1, 1).setFormula(formatQueryFormula(range, select));
  const [cols, ...rows] = sheet.getDataRange().getDisplayValues();
  
  db.deleteSheet(sheet);

  return {
    cols,
    rows
  }
};