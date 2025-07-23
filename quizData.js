// Enumerate Results
const R = Object.freeze({
  OVE: "OVE",
  CHEF: "CHEF",
  HIBI: "HIBI",
  BOOTH: "BOOTH",
  SWING: "SWING",
  FRUIT: "FRUIT",
  SCARE: "SCARE",
  TIME: "TIME",
});

function Answer(aEnum, aText) {
  return {
    result: aEnum,
    text: aText,
  }
}

function Answers(answerArray) {
  try {
    return randoSequence(answerArray).map(x => x.value);
  } catch {
    return answerArray;
  }
}

const quizQuestions = [
  {
    text: "We begin by setting the scene: which scenario do you resonate the most with right now?",
    answers: Answers([
      Answer(R.OVE, "🚶🏻‍♀️Walking down the street"),
      Answer(R.CHEF, "🛋️ Chilling on a living room couch"),
      Answer(R.HIBI, "😶‍🌫️ Flashing back into a mysterious past"),
      Answer(R.BOOTH, "🐒 Sitting on the floor"),
      Answer(R.SWING, "🛝 Having fun at a playground"),
      Answer(R.FRUIT, "🌳 Hiking through an orchard"),
      Answer(R.SCARE, "🖼️ Viewing exhibits at a museum"),
      Answer(R.TIME, "💼 Planning projects in an office"),
      ]),
  },
  {
    text: "Now imagine yourself in the setting you chose: you are thoroughly enjoying yourself when suddenly, some thing happens!!! What happened?!",
    answers: Answers([
      Answer(R.OVE, "🤔 Something definitely happened, but it all happened so fast you couldn't think and so you don't actually know what happened"),
      Answer(R.CHEF, "🤤 An absolute hot hot HOTTIE catches your eye"),
      Answer(R.HIBI, "🤢 You see your ex walking towards you"),
      Answer(R.BOOTH, "😵‍💫 You lose balance somehow and fall over"),
    ]),
  },
  {
    text: "You manage to compose yourself. Incidentally, your best friend is there with you! What do they do?",
    answers: Answers([
      Answer(R.OVE, "🤨 They watch in silence. Maybe even judging you"),
      Answer(R.CHEF, "❤️ Ever the caring and supportive friend, they ask you if you're feeling okay"),
      Answer(R.HIBI, "🤷🏻 They weren't actually paying attention and so know nothing about what just occurred"),
      Answer(R.BOOTH, "🤣 They are entertained by what has happened and are trying and failing to stifle their laughter"),
    ]),
  },
  {
    text: "A sense of impending doom begins to loom over you for some reason. You need to do something to calm yourself down!",
    answers: Answers([
      Answer(R.OVE, "🧠 Dissociate into your own mind for comfort"),
      Answer(R.CHEF, "💪 Call your boyfriend for support"),
      Answer(R.HIBI, "💭 Think of happy times and good memories from your past to soothe yourself"),
      Answer(R.BOOTH, "🤾🏻‍♀️ Lie down on the spot and stay there until you feel better"),
    ]),
  },
  {
    text: "Your method of calming down has worked, and the crisis has passed. You now feel present in your body- what sensations do you feel?",
    answers: Answers([
      Answer(R.SWING, "🍑 Your ass and muscles are sore from all the tension"),
      Answer(R.FRUIT, "🥭 You're hungry and craving something healthy to eat"),
      Answer(R.SCARE, "🏃🏻‍♀️ You're still a bit flighty, and feel like quickly leaving to go somewhere else"),
      Answer(R.TIME, "🫨 You're feeling confused and unsure of what just happened and what will happen next"),
    ]),
  },
  {
    text: "In order to process the events of the day, you decide to write in your journal. What positive affirmations do you jot down?",
    answers: Answers([
      Answer(R.SWING, "🙆🏻‍♀️ I am a fun, adventurous person"),
      Answer(R.FRUIT, "🥰 I am kind, a little extra, and healthy"),
      Answer(R.SCARE, "🤩 I am a passionate, spontaneous person who is full of surprises"),
      Answer(R.TIME, "🧘🏻‍♀️ I am a mindful person who can find calm in the chaos"),
    ]),
  },
  {
    text: "You decide to turn in early for the night, feeling good. What do you end up dreaming about?",
    answers: Answers([
      Answer(R.SWING, "🔬 You have a nightmare about your high school science classes"),
      Answer(R.FRUIT, "💩 You dream that you poop really well the next day"),
      Answer(R.SCARE, "🐯 You have a nightmare that a tiger is chasing you"),
      Answer(R.TIME, "🥱 Despite planning to sleep early, you don't end up sleeping on time"),
    ]),
  },
];

const quizResults = {
  [R.OVE]: {
    title: "You are The Ove!",
    image: "image",
    description: "Is it a bird? Is it a plane? It's the UNKNOWN. This entity is so incredibly obscure that we only know about it from a single ancient text from the sacred WhisperedRiot corpus.",
    pros: ["Mysterious", "Will probably hit (on) you"],
    cons: ["Never reveals their true nature", "Hides secrets"],
  },
  [R.CHEF]: {
    title: "You are The Chef's Kiss!",
    image: "image",
    description: "It is widely regarded that this is the cringiest thing to have ever happened, but true scholars know the true precious value of it. Only time will tell if sentiment can be swayed for the better.",
    pros: ["Funny", "Doesn't take themselves too seriously", "Magnanimous amounts of rizz"],
    cons: ["Kind of cringe sometimes", "Misunderstood"],
  },
  [R.HIBI]: {
    title: "You are Hibi Nimp!",
    image: "image",
    description: "An old forgotten flame from days gone by. Do you even remember what they look like? Where did the love go? When did serenades turn to silence?",
    pros: ["Reminds you of your past", "Apparently quite attractive"],
    cons: ["Bad at keeping in touch", "Quiet"],
  },
  [R.BOOTH]: {
    title: "You are Falling Out Of The Photo Booth!",
    image: "image",
    description: "Full of life and laughter, they are incredibly attractive. Don't be surprised if you fall for them quickly and suddenly, as if a wall was just pulled out from behind you.",
    pros: ["Enjoys the little things", "Always a source of good laughter"],
    cons: ["Ass always hurts", "Sometimes eats themselves into a sugar crash"],
  },
  [R.SWING]: {
    title: "You are Falling Off Of The Swing!",
    image: "image",
    description: "Flexible and always up to try new things, but tends to throw caution to the wind and may get hurt because of it. In life, some doors are closed for a reason and should not be opened until both your feet are on the ground.",
    pros: ["Adventurous", "Good at yoga", "Always down for a good time"],
    cons: ["Clumsy", "Was probably bad at physics in school"],
  },
  [R.FRUIT]: {
    title: "You are The Massive Box Of Fruits!",
    image: "image",
    description: "An absolute health nut- we're talking #fitspo material here. Is absolute poop goals, though many people are taken aback when meeting them for the first time.",
    pros: ["Thoughtful", "Extra", "Has a healthy diet with high fibre intake"],
    cons: ["Cumbersome", "Hard to handle", "Need to give them attention or they'll go bad"],
  },
  [R.SCARE]: {
    title: "You are The Science Museum Kiss Jumpscare!",
    image: "image",
    description: "Not afraid of anything, except being filmed without knowledge or consent. Some say that's actually scarier than meeting a tiger. Why are they being filmed? This ain't an NUS hall shower.",
    pros: ["Passionate", "Spontaneous", "Full of surprises"],
    cons: ["Sometimes surprises are unwelcome", "Makes age inappropriate jokes"],
  },
  [R.TIME]: {
    title: "You are The Initial Relationship Timeline!",
    image: "image",
    description: "On the outside they appear composed and well organised, but once things really get going, most prior planning tends to go out the window. This is not a bad thing, but they'll never hear the end of it.",
    pros: ["Methodical", "Mindful", "Aware of social norms"],
    cons: ["Unreliable", "Bad at planning"],
  },
};

// --- QUIZ DATA ---
const quizData = {
  questions: quizQuestions,
  results: quizResults,
};
