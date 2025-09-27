interface TraitValues {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

interface Character {
  name: string;
  source: string;
  initials: string;
  description: string;
}

interface MBTIData {
  title: string;
  description: string;
  character: Character;
  books: string[];
  anime: string[];
  activities: string[];
}

interface NeuroticismSupport {
  books: string[];
  activities: string[];
  avoid: string[];
}

export const mbtiData: Record<string, MBTIData> = {
  'ISTJ': {
    title: 'The Logistician',
    description: 'Practical and fact-minded, reliable and responsible.',
    character: { 
      name: 'Sasuke Uchiha', 
      source: 'Naruto', 
      initials: 'SU',
      description: 'Methodical, determined, and focused on achieving his goals through disciplined training.'
    },
    books: ['1984 by George Orwell', 'Meditations by Marcus Aurelius', 'Atomic Habits by James Clear'],
    anime: ['Ghost in the Shell', 'Psycho-Pass', 'Monster'],
    activities: ['Military cadet programs or martial arts', 'Traditional sports (e.g., track, swimming)', 'Joining student council or ROTC']
  },
  'ISFJ': {
    title: 'The Defender',
    description: 'Warm-hearted and dedicated, always ready to protect loved ones.',
    character: { 
      name: 'Hinata Hyuga', 
      source: 'Naruto', 
      initials: 'HH',
      description: 'Gentle, caring, and always putting others before herself, quietly supporting those she cares about.'
    },
    books: ['Little Women by Louisa May Alcott', 'The Secret Garden by Frances Hodgson Burnett', 'Tuesdays with Morrie by Mitch Albom'],
    anime: ['Fruits Basket', 'Violet Evergarden', 'Your Lie in April'],
    activities: ['Volunteering or caregiving roles', 'Choir or church/community groups', 'Journaling and crafting']
  },
  'INFJ': {
    title: 'The Advocate',
    description: 'Creative and insightful, inspired and independent.',
    character: { 
      name: 'Itachi Uchiha', 
      source: 'Naruto', 
      initials: 'IU',
      description: 'Complex, visionary, and willing to sacrifice everything for the greater good and future peace.'
    },
    books: ['The Alchemist by Paulo Coelho', 'The Bell Jar by Sylvia Plath', 'The Book Thief by Markus Zusak'],
    anime: ['Serial Experiments Lain', 'Erased', 'Nana'],
    activities: ['Creative writing or poetry', 'Deep 1-on-1 conversations or mentoring', 'Avoiding mainstream trends']
  },
  'INTJ': {
    title: 'The Architect',
    description: 'Imaginative and strategic thinkers, with a plan for everything.',
    character: { 
      name: 'Light Yagami', 
      source: 'Death Note', 
      initials: 'LY',
      description: 'Brilliant strategist with grand visions, always thinking several steps ahead of everyone else.'
    },
    books: ['Dune by Frank Herbert', 'A Brief History of Time by Stephen Hawking', 'The Prince by Machiavelli'],
    anime: ['Death Note', 'Steins;Gate', 'Code Geass'],
    activities: ['Chess club or science fairs', 'Skipping social events to plan future goals', 'Programming or strategic games']
  },
  'ISTP': {
    title: 'The Virtuoso',
    description: 'Bold and practical experimenters, masters of all kinds of tools.',
    character: { 
      name: 'Spike Spiegel', 
      source: 'Cowboy Bebop', 
      initials: 'SS',
      description: 'Cool, adaptable, and skilled, living in the moment while maintaining an air of mystery.'
    },
    books: ['Into the Wild by Jon Krakauer', 'Zen and the Art of Motorcycle Maintenance', 'Hatchet by Gary Paulsen'],
    anime: ['Cowboy Bebop', 'Samurai Champloo', 'Black Lagoon'],
    activities: ['Tinkering, mechanics, or DIY projects', 'Extreme sports or martial arts', 'Avoiding rigid schedules']
  },
  'ISFP': {
    title: 'The Adventurer',
    description: 'Flexible and charming artists, always ready to explore new possibilities.',
    character: { 
      name: 'Shinji Ikari', 
      source: 'Evangelion', 
      initials: 'SI',
      description: 'Sensitive, introspective, and struggling to find his place while maintaining deep empathy for others.'
    },
    books: ['The Perks of Being a Wallflower', 'Wild by Cheryl Strayed', 'Norwegian Wood by Haruki Murakami'],
    anime: ['A Silent Voice', 'Mushishi', "Natsume's Book of Friends"],
    activities: ['Painting, music, or solo traveling', 'Nature walks and photography', 'Avoiding confrontations and pressure']
  },
  'INFP': {
    title: 'The Mediator',
    description: 'Poetic, kind and altruistic, always eager to help good causes.',
    character: { 
      name: 'Alphonse Elric', 
      source: 'Fullmetal Alchemist', 
      initials: 'AE',
      description: 'Kind-hearted, idealistic, and always seeking to help others while maintaining strong moral principles.'
    },
    books: ['The Little Prince by Antoine de Saint-Exupéry', 'The Catcher in the Rye by J.D. Salinger', "Howl's Moving Castle by Diana Wynne Jones"],
    anime: ['Spirited Away', 'Clannad', 'Made in Abyss'],
    activities: ['Creative arts (drawing, poetry, etc.)', 'Getting lost in fantasy novels', 'Avoiding structured group activities']
  },
  'INTP': {
    title: 'The Logician',
    description: 'Innovative inventors with an unquenchable thirst for knowledge.',
    character: { 
      name: 'L Lawliet', 
      source: 'Death Note', 
      initials: 'LL',
      description: 'Brilliant detective with unconventional methods, driven by curiosity and logical analysis.'
    },
    books: ['Gödel, Escher, Bach by Douglas Hofstadter', 'Sophie\'s World by Jostein Gaarder', 'Slaughterhouse-Five by Kurt Vonnegut'],
    anime: ['Paranoia Agent', 'Texhnolyze', 'The Tatami Galaxy'],
    activities: ['Debating or solo intellectual pursuits', 'Avoiding physical sports', 'Obsessive internet research or theorycrafting']
  },
  'ESTP': {
    title: 'The Dynamo',
    description: 'Smart, energetic and perceptive, truly enjoy living on the edge.',
    character: { 
      name: 'Tony Stark', 
      source: 'Marvel', 
      initials: 'TS',
      description: 'Charismatic, bold, and innovative, always ready for action and adventure with confidence and wit.'
    },
    books: ['The Art of War by Sun Tzu', 'Can\'t Hurt Me by David Goggins', 'The Wolf of Wall Street by Jordan Belfort'],
    anime: ['One Punch Man', 'JoJo\'s Bizarre Adventure', 'Baki the Grappler'],
    activities: ['Extreme sports or competitive games', 'Flirting and social games', 'Skipping schoolwork for adventure']
  },
  'ESFP': {
    title: 'The Entertainer',
    description: 'Spontaneous, energetic and enthusiastic, life is never boring.',
    character: { 
      name: 'Spider-Man', 
      source: 'Marvel', 
      initials: 'SM',
      description: 'Enthusiastic, friendly, and always bringing joy to others while staying true to his values.'
    },
    books: ['Eleanor & Park by Rainbow Rowell', 'The Fault in Our Stars by John Green', 'To All the Boys I\'ve Loved Before by Jenny Han'],
    anime: ['Ouran High School Host Club', 'K-On!', 'My Dress-Up Darling'],
    activities: ['Theatre, dance, or fashion', 'Hosting parties or events', 'Avoiding anything boring or repetitive']
  },
  'ENFP': {
    title: 'The Campaigner',
    description: 'Enthusiastic, creative and sociable free spirits.',
    character: { 
      name: 'Naruto Uzumaki', 
      source: 'Naruto', 
      initials: 'NR',
      description: 'Energetic, optimistic, and always ready to help others achieve their dreams while never giving up.'
    },
    books: ['Big Magic by Elizabeth Gilbert', 'The Night Circus by Erin Morgenstern', 'On the Road by Jack Kerouac'],
    anime: ['Hunter x Hunter', 'Mob Psycho 100', 'FLCL'],
    activities: ['Improv, travel, or activism', 'Constantly switching hobbies', 'Avoiding anything that feels like a "trap"']
  },
  'ENTP': {
    title: 'The Debater',
    description: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
    character: { 
      name: 'Edward Elric', 
      source: 'Fullmetal Alchemist', 
      initials: 'EE',
      description: 'Quick-witted, passionate, and always questioning everything while pursuing innovative solutions.'
    },
    books: ['The Hitchhiker\'s Guide to the Galaxy', 'Freakonomics', 'The 48 Laws of Power'],
    anime: ['Great Teacher Onizuka', 'Assassination Classroom', 'No Game No Life'],
    activities: ['Debate club or stand-up comedy', 'Playing devil\'s advocate for fun', 'Avoiding mundane routines']
  },
  'ESTJ': {
    title: 'The Executive',
    description: 'Excellent administrators, unsurpassed at managing things or people.',
    character: { 
      name: 'Captain America', 
      source: 'Marvel', 
      initials: 'CA',
      description: 'Natural leader with strong moral compass, always taking charge and inspiring others to do their best.'
    },
    books: ['7 Habits of Highly Effective People', 'Good to Great by Jim Collins', 'Think and Grow Rich by Napoleon Hill'],
    anime: ['Attack on Titan', 'Legend of the Galactic Heroes', 'Fullmetal Alchemist: Brotherhood'],
    activities: ['Leading clubs or sports teams', 'Participating in organized religion or politics', 'Avoiding disorder or laziness']
  },
  'ESFJ': {
    title: 'The Consul',
    description: 'Extraordinarily caring, social and popular people, always eager to help.',
    character: { 
      name: 'Sakura Haruno', 
      source: 'Naruto', 
      initials: 'SH',
      description: 'Caring, supportive, and always putting her friends first while working hard to improve herself.'
    },
    books: ['Pride and Prejudice by Jane Austen', 'The Notebook by Nicholas Sparks', 'The Help by Kathryn Stockett'],
    anime: ['Toradora!', 'Horimiya', 'Your Name'],
    activities: ['Party planning or student council', 'Taking care of others (siblings, pets)', 'Avoiding isolation or weird subcultures']
  },
  'ENFJ': {
    title: 'The Protagonist',
    description: 'Charismatic and inspiring leaders, able to mesmerize listeners.',
    character: { 
      name: 'All Might', 
      source: 'My Hero Academia', 
      initials: 'AM',
      description: 'Inspiring mentor and symbol of hope, always encouraging others to reach their full potential.'
    },
    books: ['Man\'s Search for Meaning by Viktor Frankl', 'Educated by Tara Westover', 'Becoming by Michelle Obama'],
    anime: ['Fullmetal Alchemist: Brotherhood', 'Haikyuu!!', 'Demon Slayer'],
    activities: ['Public speaking or coaching', 'Organizing school-wide events', 'Avoiding cynicism or self-doubt']
  },
  'ENTJ': {
    title: 'The Commander',
    description: 'Bold, imaginative and strong-willed leaders.',
    character: { 
      name: 'Nick Fury', 
      source: 'Marvel', 
      initials: 'NF',
      description: 'Strategic mastermind who sees the big picture and coordinates complex operations with unwavering determination.'
    },
    books: ['Atlas Shrugged by Ayn Rand', 'The Lean Startup by Eric Ries', 'Steve Jobs by Walter Isaacson'],
    anime: ['Code Geass', 'Vinland Saga', 'Bleach'],
    activities: ['Competitive debate or entrepreneurship clubs', 'Learning leadership through sports or business', 'Avoiding passivity or indecisiveness']
  }
};

export const neuroticismSupport: Record<string, NeuroticismSupport> = {
  'ENTJ': {
    books: ['The Confidence Gap – Russ Harris'],
    activities: ['Journaling, delegation practice, strength training'],
    avoid: ['Micromanaging, self-comparison']
  },
  'ENTP': {
    books: ['Essentialism – Greg McKeown'],
    activities: ['Meditation, improv with structure, finish projects'],
    avoid: ['Overcommitting, idea spirals']
  },
  'ENFJ': {
    books: ['Set Boundaries, Find Peace – Nedra Tawwab'],
    activities: ['Therapy, yoga, boundary-setting practice'],
    avoid: ['Taking responsibility for everyone\'s feelings']
  },
  'ENFP': {
    books: ['The Highly Sensitive Person – Elaine Aron'],
    activities: ['Journaling, grounding routines, creative outlets'],
    avoid: ['Doomscrolling, impulsive decisions']
  },
  'INTJ': {
    books: ['Feeling Good – David Burns'],
    activities: ['CBT worksheets, prioritization, mindfulness'],
    avoid: ['Over-isolation']
  },
  'INTP': {
    books: ['The War of Art – Steven Pressfield'],
    activities: ['Small daily goals, accountability buddies'],
    avoid: ['Endless theorizing without action']
  },
  'INFJ': {
    books: ['The Untethered Soul – Michael Singer'],
    activities: ['Meditation, therapy, creative outlets'],
    avoid: ['Taking on everyone\'s problems']
  },
  'INFP': {
    books: ['The Highly Sensitive Person – Elaine Aron'],
    activities: ['Journaling, art, time in nature'],
    avoid: ['Escaping too much into fantasy']
  },
  'ESTJ': {
    books: ['Emotional Agility – Susan David'],
    activities: ['Exercise, mindfulness, trust-building'],
    avoid: ['Micromanaging']
  },
  'ESFJ': {
    books: ['Radical Acceptance – Tara Brach'],
    activities: ['Journaling, boundary practice, self-care rituals'],
    avoid: ['Saying yes to everything']
  },
  'ISTJ': {
    books: ['The Relaxation Response – Herbert Benson'],
    activities: ['Relaxation rituals, gratitude journaling'],
    avoid: ['Over-scheduling']
  },
  'ISFJ': {
    books: ['Self-Compassion – Kristin Neff'],
    activities: ['Meditation, therapy, supportive communities'],
    avoid: ['Internalizing others\' problems']
  },
  'ESTP': {
    books: ['The Power of Now – Eckhart Tolle'],
    activities: ['Sports, mindfulness, structured adventure'],
    avoid: ['Overindulgence, reckless risks']
  },
  'ESFP': {
    books: ['Radical Acceptance – Tara Brach'],
    activities: ['Journaling, therapy, grounding activities (dance, music)'],
    avoid: ['Partying away stress']
  },
  'ISTP': {
    books: ['Flow – Mihaly Csikszentmihalyi'],
    activities: ['Martial arts, solo sports, reflection'],
    avoid: ['Risky escapism']
  },
  'ISFP': {
    books: ['The Artist\'s Way – Julia Cameron'],
    activities: ['Art therapy, journaling, time in nature'],
    avoid: ['Fantasy escape, unhealthy coping']
  }
};

export function calculateMBTI(traits: TraitValues): string {
  let mbti = '';
  
  // E/I: Based on Extraversion
  mbti += traits.extraversion >= 50 ? 'E' : 'I';
  
  // S/N: Based on Openness (inverted - low openness = sensing)
  mbti += traits.openness >= 50 ? 'N' : 'S';
  
  // T/F: Based on Agreeableness (inverted - low agreeableness = thinking)
  mbti += traits.agreeableness >= 50 ? 'F' : 'T';
  
  // J/P: Based on Conscientiousness
  mbti += traits.conscientiousness >= 50 ? 'J' : 'P';

  return mbti;
      }
