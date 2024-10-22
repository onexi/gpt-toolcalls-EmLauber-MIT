// gemstones.js

const gemstones = {
    January: "Garnet",
    February: "Amethyst",
    March: "Aquamarine",
    April: "Diamond",
    May: "Emerald",
    June: "Alexandrite",
    July: "Ruby",
    August: "Peridot",
    September: "Sapphire",
    October: "Opal",
    November: "Topaz",
    December: "Turquoise",
  };
  
  const execute = async (birthdate) => {
    const month = new Date(birthdate).toLocaleString('default', { month: 'long' });
    return { message: `Your birthstone is ${gemstones[month]}.` };
  };
  
  const details = {
    "type": "function",
    function: {
      "name": "get_gemstone",
      "parameters": {
        "type": "object",
        "properties": {
          "birthdate": {
            "type": "string",
            "description": "The user's birthdate in YYYY-MM-DD format."
          }
        },
        "required": ["birthdate"]
      }
    },
    "description": "Returns the gemstone of the month based on the user's birthdate."
  };
  
  export { execute, details };
  