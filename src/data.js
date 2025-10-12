const quotes = [
  {
    id: 1,
    author: "Albert Einstein",
    quote: "Imagination is more important than knowledge.",
  },
  {
    id: 2,
    author: "Maya Angelou",
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
  },
  {
    id: 3,
    author: "Marcus Aurelius",
    quote:
      "You have power over your mind—not outside events. Realize this, and you will find strength.",
  },
  {
    id: 4,
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    id: 5,
    author: "Eleanor Roosevelt",
    quote: "No one can make you feel inferior without your consent.",
  },
  {
    id: 6,
    author: "Lao Tzu",
    quote: "A journey of a thousand miles begins with a single step.",
  },
  {
    id: 7,
    author: "Steve Jobs",
    quote: "Stay hungry, stay foolish.",
  },
  {
    id: 8,
    author: "Confucius",
    quote:
      "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    id: 9,
    author: "Seneca",
    quote: "Luck is what happens when preparation meets opportunity.",
  },
  { id: 10, author: "Rumi", quote: "What you seek is seeking you." },
  {
    id: 11,
    author: "Buddha",
    quote: "Peace comes from within. Do not seek it without.",
  },
  {
    id: 12,
    author: "Marie Curie",
    quote:
      "Nothing in life is to be feared; it is only to be understood.",
  },
  {
    id: 13,
    author: "Nikola Tesla",
    quote:
      "The present is theirs; the future, for which I really worked, is mine.",
  },
  {
    id: 14,
    author: "Leonardo da Vinci",
    quote: "Learning never exhausts the mind.",
  },
  {
    id: 15,
    author: "Isaac Newton",
    quote:
      "If I have seen further, it is by standing on the shoulders of giants.",
  },
  {
    id: 16,
    author: "Plato",
    quote: "The beginning is the most important part of the work.",
  },
  {
    id: 17,
    author: "Benjamin Franklin",
    quote: "An investment in knowledge pays the best interest.",
  },
  {
    id: 18,
    author: "Alan Turing",
    quote:
      "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
  },
  {
    id: 19,
    author: "Carl Sagan",
    quote: "Somewhere, something incredible is waiting to be known.",
  },
  {
    id: 20,
    author: "Socrates",
    quote: "The unexamined life is not worth living.",
  },
  {
    id: 21,
    author: "Aristotle",
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  },
  {
    id: 22,
    author: "Helen Keller",
    quote: "Life is either a daring adventure or nothing at all.",
  },
  {
    id: 23,
    author: "Friedrich Nietzsche",
    quote: "He who has a why to live can bear almost any how.",
  },
  {
    id: 24,
    author: "George Orwell",
    quote:
      "In a time of deceit, telling the truth is a revolutionary act.",
  },
  {
    id: 25,
    author: "Abraham Lincoln",
    quote: "Whatever you are, be a good one.",
  },
  {
    id: 26,
    author: "Henry Ford",
    quote:
      "Whether you think you can or you think you can’t, you’re right.",
  },
  {
    id: 27,
    author: "Walt Disney",
    quote:
      "The way to get started is to quit talking and begin doing.",
  },
  {
    id: 28,
    author: "Nelson Mandela",
    quote: "It always seems impossible until it’s done.",
  },
  {
    id: 29,
    author: "Mother Teresa",
    quote: "Spread love everywhere you go.",
  },
  {
    id: 30,
    author: "Charles Darwin",
    quote:
      "It is not the strongest species that survive, but the ones most responsive to change.",
  },
  {
    id: 31,
    author: "J.K. Rowling",
    quote:
      "It is our choices that show what we truly are, far more than our abilities.",
  },
  {
    id: 32,
    author: "George Bernard Shaw",
    quote:
      "Life isn’t about finding yourself. Life is about creating yourself.",
  },
  {
    id: 33,
    author: "Ralph Waldo Emerson",
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  },
  {
    id: 34,
    author: "Albert Camus",
    quote:
      "In the midst of winter, I found there was, within me, an invincible summer.",
  },
  {
    id: 35,
    author: "Victor Hugo",
    quote: "Even the darkest night will end and the sun will rise.",
  },
  {
    id: 36,
    author: "Sun Tzu",
    quote:
      "The supreme art of war is to subdue the enemy without fighting.",
  },
  { id: 37, author: "Bruce Lee", quote: "Be water, my friend." },
  {
    id: 38,
    author: "Virginia Woolf",
    quote: "Arrange whatever pieces come your way.",
  },
  {
    id: 39,
    author: "Jane Austen",
    quote: "There is no charm equal to tenderness of heart.",
  },
  {
    id: 40,
    author: "Pablo Picasso",
    quote: "Action is the foundational key to all success.",
  },
  {
    id: 41,
    author: "Bob Marley",
    quote: "Love the life you live. Live the life you love.",
  },
  {
    id: 42,
    author: "Stephen Hawking",
    quote: "Intelligence is the ability to adapt to change.",
  },
  {
    id: 43,
    author: "Confucius",
    quote:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
  },
  {
    id: 44,
    author: "Mahatma Gandhi",
    quote: "Be the change you wish to see in the world.",
  },
  { id: 45, author: "Yoda", quote: "Do or do not. There is no try." },
  {
    id: 46,
    author: "Toni Morrison",
    quote:
      "If you want to fly, you have to give up the things that weigh you down.",
  },
  {
    id: 47,
    author: "Albert Einstein",
    quote: "Strive not to be a success, but rather to be of value.",
  },
  {
    id: 48,
    author: "Blaise Pascal",
    quote:
      "All of humanity's problems stem from man's inability to sit quietly in a room alone.",
  },
  {
    id: 49,
    author: "Epictetus",
    quote:
      "It’s not what happens to you, but how you react to it that matters.",
  },
  {
    id: 50,
    author: "Henry David Thoreau",
    quote: "Go confidently in the direction of your dreams.",
  },
  {
    id: 51,
    author: "Rosa Parks",
    quote:
      "You must never be fearful about what you are doing when it is right.",
  },
  {
    id: 52,
    author: "Dalai Lama",
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
  },
  {
    id: 53,
    author: "J.R.R. Tolkien",
    quote: "Not all those who wander are lost.",
  },
  {
    id: 54,
    author: "Neil deGrasse Tyson",
    quote:
      "We are part of this universe; we are in this universe, but perhaps more important, the universe is in us.",
  },
  {
    id: 55,
    author: "Arundhati Roy",
    quote:
      "Another world is not only possible, she is on her way. On a quiet day, I can hear her breathing.",
  },
  {
    id: 56,
    author: "Malala Yousafzai",
    quote:
      "One child, one teacher, one book, and one pen can change the world.",
  },
  {
    id: 57,
    author: "James Baldwin",
    quote:
      "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
  },
  {
    id: 58,
    author: "Khalil Gibran",
    quote: "Out of suffering have emerged the strongest souls.",
  },
  {
    id: 59,
    author: "Elon Musk",
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
  },
  {
    id: 60,
    author: "Steve Wozniak",
    quote: "Wherever smart people work, doors are unlocked.",
  },
  {
    id: 61,
    author: "Bill Gates",
    quote:
      "Don’t compare yourself with anyone in this world. If you do so, you are insulting yourself.",
  },
  {
    id: 62,
    author: "Jeff Bezos",
    quote:
      "If you double the number of experiments you do per year, you’re going to double your inventiveness.",
  },
  {
    id: 63,
    author: "Naval Ravikant",
    quote: "Earn with your mind, not your time.",
  },
  {
    id: 64,
    author: "Elon Musk",
    quote:
      "Persistence is very important. You should not give up unless you are forced to give up.",
  },
  {
    id: 65,
    author: "Naval Ravikant",
    quote: "Play long-term games with long-term people.",
  },
  {
    id: 66,
    author: "Marcus Aurelius",
    quote:
      "Waste no more time arguing what a good man should be. Be one.",
  },
  {
    id: 67,
    author: "Søren Kierkegaard",
    quote:
      "Life can only be understood backwards; but it must be lived forwards.",
  },
  {
    id: 68,
    author: "C.S. Lewis",
    quote:
      "You are never too old to set another goal or to dream a new dream.",
  },
  {
    id: 69,
    author: "Arthur C. Clarke",
    quote:
      "Any sufficiently advanced technology is indistinguishable from magic.",
  },
  {
    id: 70,
    author: "T.S. Eliot",
    quote:
      "Only those who will risk going too far can possibly find out how far one can go.",
  },
  {
    id: 71,
    author: "Winston Churchill",
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  },
  {
    id: 72,
    author: "Albert Schweitzer",
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
  },
  {
    id: 73,
    author: "John Lennon",
    quote:
      "Life is what happens when you’re busy making other plans.",
  },
  {
    id: 74,
    author: "Vincent van Gogh",
    quote:
      "Great things are done by a series of small things brought together.",
  },
  {
    id: 75,
    author: "W. Edwards Deming",
    quote:
      "Without data, you’re just another person with an opinion.",
  },
  {
    id: 76,
    author: "Tim Berners-Lee",
    quote:
      "The Web does not just connect machines, it connects people.",
  },
  {
    id: 77,
    author: "Linus Torvalds",
    quote: "Talk is cheap. Show me the code.",
  },
  {
    id: 78,
    author: "Grace Hopper",
    quote:
      "The most dangerous phrase in the language is: ‘We’ve always done it this way.’",
  },
  {
    id: 79,
    author: "Ken Thompson",
    quote:
      "One of my most productive days was throwing away 1000 lines of code.",
  },
  {
    id: 80,
    author: "Donald Knuth",
    quote: "Premature optimization is the root of all evil.",
  },
  {
    id: 81,
    author: "Bjarne Stroustrup",
    quote:
      "There are only two kinds of languages: the ones people complain about and the ones nobody uses.",
  },
  {
    id: 82,
    author: "Alan Kay",
    quote:
      "Simple things should be simple, complex things should be possible.",
  },
  {
    id: 83,
    author: "Edsger Dijkstra",
    quote: "Simplicity is prerequisite for reliability.",
  },
  {
    id: 84,
    author: "Guido van Rossum",
    quote: "Code is read much more often than it is written.",
  },
  {
    id: 85,
    author: "Dennis Ritchie",
    quote:
      "UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity.",
  },
  {
    id: 86,
    author: "Linus Torvalds",
    quote:
      "Intelligence is the ability to avoid doing work, yet getting the work done.",
  },
  {
    id: 87,
    author: "Brian Kernighan",
    quote:
      "Debugging is twice as hard as writing the code in the first place.",
  },
  {
    id: 88,
    author: "Ken Thompson",
    quote:
      "You can’t trust code that you did not totally create yourself.",
  },
  {
    id: 89,
    author: "Paul Graham",
    quote:
      "It’s not how many hours you put in, but how much you put into the hours.",
  },
  {
    id: 90,
    author: "Richard Feynman",
    quote: "What I cannot create, I do not understand.",
  },
  {
    id: 91,
    author: "Richard Stallman",
    quote: "Free software is a matter of liberty, not price.",
  },
  {
    id: 92,
    author: "Elon Musk",
    quote:
      "When something is important enough, you do it even if the odds are against you.",
  },
  {
    id: 93,
    author: "Marie Curie",
    quote:
      "Be less curious about people and more curious about ideas.",
  },
  {
    id: 94,
    author: "Carl Jung",
    quote: "Who looks outside, dreams; who looks inside, awakes.",
  },
  {
    id: 95,
    author: "Jordan Peterson",
    quote:
      "Compare yourself to who you were yesterday, not to who someone else is today.",
  },
  {
    id: 96,
    author: "Simon Sinek",
    quote: "People don’t buy what you do; they buy why you do it.",
  },
  {
    id: 97,
    author: "Stephen Covey",
    quote:
      "The key is not to prioritize what’s on your schedule, but to schedule your priorities.",
  },
  {
    id: 98,
    author: "Lao Tzu",
    quote:
      "Knowing others is intelligence; knowing yourself is true wisdom.",
  },
  {
    id: 99,
    author: "Naval Ravikant",
    quote: "The ultimate freedom is being free from your own mind.",
  },
  {
    id: 100,
    author: "Seneca",
    quote: "We suffer more often in imagination than in reality.",
  },
  {
    id: 101,
    author: "Marcus Aurelius",
    quote:
      "The happiness of your life depends upon the quality of your thoughts.",
  },
];
