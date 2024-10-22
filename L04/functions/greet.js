const execute = async (action) => {
    try {
      // Get the current hour
      const currentHour = new Date().getHours();
      
      // Determine the greeting based on the time of day
      let greeting;
      if (currentHour < 12) {
        greeting = "Ohayou gozaimasu!";
      } else if (currentHour < 18) {
        greeting = "Ahoy scallywag!";
      } else {
        greeting = "Howdy partner!";
      }
  
      // If the action is to get a greeting, return the greeting
      if (action === 'get') {
        return { message: greeting };
      } else {
        throw new Error('Invalid action provided');
      }
    } catch (error) {
      console.error('An error occurred while generating a greeting:', error);
      return { error: 'An error occurred while generating a greeting.' };
    }
  };
  
  const details = {
    "type": "function",
    function: {
      "name": "greet",
      "parameters": {
        "type": "object",
        "properties": {
          "action": {
            "type": "string",
            "description": "action is 'get' to retrieve a greeting"
          }
        },
        "required": ["action"]
      }
    },
    "description": "Generates a greeting based on the time of day."
  };
  
  export { execute, details };
  