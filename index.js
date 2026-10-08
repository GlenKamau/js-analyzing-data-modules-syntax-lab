require("datejs");

module.exports = {
  ...(typeof combineUsers !== "undefined" && { combineUsers }),
};

function combineUsers(...args) {
  const combineObject = { users: [] };

  for (const arr of args) {
    combineObject.users = [...combineObject.users, ...arr];
  }

  combineObject.merge_date = Date.today().toString("M/d/yyyy");

  return combineObject;
}

