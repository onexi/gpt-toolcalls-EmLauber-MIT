// frogs_or_toads.js

const execute = async () => {
    const characteristics = [
      { type: "Frog", description: "You are lively and enjoy the water." },
      { type: "Toad", description: "You prefer dry land and are more laid-back." },
    ];
  
    // Randomly choose between frog and toad
    const choice = characteristics[Math.floor(Math.random() * characteristics.length)];
    return `You are more like a ${choice.type}: ${choice.description}`;
  };
  
  const details = {
    "type": "function",
    function: {
      "name": "frogs_or_toads",
      "parameters": {
        "type": "object",
        "properties": {},
      },
      "required": []
    },
    "description": "Tells the user whether they are more like a frog or a toad."
  };
  
  export { execute, details };
  