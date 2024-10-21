// get_tarot_card.js
export const details = {
    name: "get_tarot_card",
    description: "Randomly selects a tarot card and provides a fortune.",
    parameters: {}
  };
  
  export const execute = async () => {
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
  
    // Randomly select a tarot card
    const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
  
    // Return the selected card and its meaning
    return {
      card: randomCard.card,
      meaning: randomCard.meaning
    };
  };

  console.log("Tarot card returned");
  