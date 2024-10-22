// get_tarot_card.js

const execute = async (action) => {
  const tarotDeck = [
    { card: "The Fool", meaning: "A new beginning, adventure, or risk." },
    { card: "The Magician", meaning: "Manifestation, resourcefulness, power." },
    { card: "The High Priestess", meaning: "Intuition, mystery, wisdom." },
    { card: "The Empress", meaning: "Abundance, nurturing, fertility." },
    { card: "The Emperor", meaning: "Authority, structure, control." },
    { card: "The Hierophant", meaning: "Spiritual wisdom, tradition, conformity." },
    { card: "The Lovers", meaning: "Relationships, love, choices." },
    { card: "The Chariot", meaning: "Determination, control, success." },
    { card: "Strength", meaning: "Courage, patience, control over yourself." },
    { card: "The Hermit", meaning: "Reflection, introspection, solitude." },
    { card: "The Wheel of Fortune", meaning: "Change, cycles, inevitable fate." },
    { card: "Justice", meaning: "Fairness, truth, cause and effect." },
    { card: "The Hanged Man", meaning: "Sacrifice, release, new perspective." },
    { card: "Death", meaning: "Endings, transformation, transitions." },
    { card: "Temperance", meaning: "Balance, moderation, patience." },
    { card: "The Devil", meaning: "Addiction, materialism, playfulness." },
    { card: "The Tower", meaning: "Sudden upheaval, disaster, revelation." },
    { card: "The Star", meaning: "Hope, inspiration, serenity." },
    { card: "The Moon", meaning: "Illusion, fear, anxiety." },
    { card: "The Sun", meaning: "Positivity, fun, success." },
    { card: "Judgement", meaning: "Reflection, reckoning, awakening." },
    { card: "The World", meaning: "Completion, accomplishment, travel." }
  ];

  // pull a tarot card 
  const fortune = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
  return `You pulled a ${fortune.card}: ${fortune.meaning}`;
};

const details = {
  "type": "function",
  function: {
    "name": "get_tarot_card",
    "parameters": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "action is 'draw' or 'pull'"
        }
      },
      "required": ["action"]
    }
  },
  "description": "Randomly selects a tarot card and provides its fortune."
};

export { execute, details };
