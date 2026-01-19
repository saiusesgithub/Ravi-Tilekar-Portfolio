export type WritingCategory = 'poems' | 'shayari' | 'songs' | 'stories';

export type WritingTag = 
  | 'motivation' 
  | 'society' 
  | 'love' 
  | 'self-growth' 
  | 'nature' 
  | 'philosophy' 
  | 'youth' 
  | 'hope' 
  | 'reflection';

export interface Writing {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: WritingCategory;
  tags: WritingTag[];
  date: string;
  readTime: number; // in minutes
  featured?: boolean;
}

export const writings: Writing[] = [
  // Poems
  {
    id: 'poem-1',
    title: 'The Road Less Traveled',
    excerpt: 'In the quiet of dawn, where dreams still breathe, I chose a path that others rarely see...',
    content: `In the quiet of dawn, where dreams still breathe,
I chose a path that others rarely see.
Not the highway paved with certainty,
But a winding trail through mystery.

Each step a question, each stone a test,
The journey itself became my quest.
For greatness lies not in the destination,
But in the courage of transformation.

The world may whisper, "Play it safe,"
But I've learned that comfort is the grave
Where ambitions go to quietly die,
Where the fearless forget to fly.

So I walk this road with open eyes,
Beneath the vast and starlit skies,
Knowing that the path I make today
Will light someone else's way.`,
    category: 'poems',
    tags: ['motivation', 'self-growth', 'philosophy'],
    date: '2024-12-15',
    readTime: 2,
    featured: true,
  },
  {
    id: 'poem-2',
    title: 'Roots and Wings',
    excerpt: 'My father gave me roots, deep in the soil of values and dreams...',
    content: `My father gave me roots, deep in the soil
Of values, dreams, and honest toil.
He taught me strength through quiet action,
The power of purpose and dedication.

My mother gave me wings to soar,
To believe in more, to explore.
Her love, a wind beneath my flight,
Guiding me through the darkest night.

Now I stand at the crossroads of time,
With roots that ground and wings that climb.
A child of earth, a dreamer of skies,
With gratitude deep and ambition that flies.`,
    category: 'poems',
    tags: ['love', 'reflection', 'hope'],
    date: '2024-11-20',
    readTime: 2,
    featured: true,
  },
  {
    id: 'poem-3',
    title: 'The Entrepreneur\'s Prayer',
    excerpt: 'Grant me the vision to see what others miss, the courage to fail and rise...',
    content: `Grant me the vision to see what others miss,
The courage to fail and rise from the abyss.
Let my struggles become stepping stones,
My failures the foundation of my throne.

Give me patience when the road is long,
Wisdom to know right from wrong.
Help me lift others as I climb,
For success means nothing if it's only mine.

May my ventures create not just wealth,
But jobs, hope, and communities' health.
Let me remember in my success,
That leadership is service, nothing less.`,
    category: 'poems',
    tags: ['motivation', 'philosophy', 'self-growth'],
    date: '2024-10-05',
    readTime: 2,
  },
  {
    id: 'poem-4',
    title: 'Village Dreams',
    excerpt: 'In the dust of my village, under the neem tree shade...',
    content: `In the dust of my village, under the neem tree shade,
I dreamed of cities and the choices I'd made.
The elders spoke of contentment and peace,
But my heart yearned for a different release.

Now I walk through marble halls,
Yet my soul still hears the village calls.
The rooster's crow, the temple bell,
Stories only the wind can tell.

Success is sweet, but sweeter still
Is the memory of that distant hill.
For all my travels, near and far,
Home remains my guiding star.`,
    category: 'poems',
    tags: ['reflection', 'hope', 'society'],
    date: '2024-09-12',
    readTime: 2,
  },
  {
    id: 'poem-5',
    title: 'The Writer\'s Burden',
    excerpt: 'Words are bridges and words are walls, they heal the broken and answer calls...',
    content: `Words are bridges and words are walls,
They heal the broken and answer calls.
A writer's burden is to speak the truth,
To capture age and preserve youth.

In ink and paper, we find our voice,
In every line, we make a choice.
To inspire or to simply tell,
To create a heaven or a hell.

So I write with care and intention deep,
Promises I know I must keep.
For words once written take their flight,
And shape the world with their might.`,
    category: 'poems',
    tags: ['reflection', 'philosophy', 'self-growth'],
    date: '2024-08-25',
    readTime: 2,
  },
  // Shayari
  {
    id: 'shayari-1',
    title: 'Zindagi Ki Raahein',
    excerpt: 'Zindagi ki raahein hain ajab, kabhi khushi kabhi gham...',
    content: `Zindagi ki raahein hain ajab,
Kabhi khushi kabhi gham.
Par hausla rakhna zaroor,
Waqt badalta hai har dum.

Jo mushkilon se ghabrata hai,
Woh zindagi kya jeeta hai?
Toofan mein jo khada rahe,
Wohi asli jeet ka seeta hai.`,
    category: 'shayari',
    tags: ['motivation', 'hope', 'philosophy'],
    date: '2024-12-10',
    readTime: 1,
    featured: true,
  },
  {
    id: 'shayari-2',
    title: 'Sapnon Ka Safar',
    excerpt: 'Sapne woh nahi jo neend mein aayein, sapne woh hain jo neend na aane dein...',
    content: `Sapne woh nahi jo neend mein aayein,
Sapne woh hain jo neend na aane dein.
Jinke liye tu raat jagaaye,
Wohi sapne tujhe aagey le jaayein.

Duniya kahegi pagal hai tu,
Par tu apni dhun mein rehna.
Jo log hasein tere sapnon par,
Unhe apni mehnat se kehna.`,
    category: 'shayari',
    tags: ['motivation', 'self-growth', 'youth'],
    date: '2024-11-28',
    readTime: 1,
    featured: true,
  },
  {
    id: 'shayari-3',
    title: 'Pyaar Ka Dard',
    excerpt: 'Mohabbat mein dard bhi khushi hai, agar sachcha pyaar ho...',
    content: `Mohabbat mein dard bhi khushi hai,
Agar sachcha pyaar ho.
Dil toote ya jude kya farak,
Jab iraada pyaar ho.

Kisi ke liye tadapna bhi,
Ek ibadat hai jaano.
Jo pyaar mein na roya kabhi,
Woh pyaar kya pahchaano.`,
    category: 'shayari',
    tags: ['love', 'reflection'],
    date: '2024-10-18',
    readTime: 1,
  },
  {
    id: 'shayari-4',
    title: 'Samaj Ki Soch',
    excerpt: 'Log kehte hain yeh nahi ho sakta, maine kaha dekhte hain...',
    content: `Log kehte hain yeh nahi ho sakta,
Maine kaha dekhte hain.
Jo duniya ne nahi socha kabhi,
Hum wohi kar ke dikhate hain.

Samaj ki soch hai simit bahut,
Par himmat ki udaan anant.
Jo tod de yeh deewaarein,
Wohi rachta hai naya sant.`,
    category: 'shayari',
    tags: ['society', 'motivation', 'youth'],
    date: '2024-09-30',
    readTime: 1,
  },
  {
    id: 'shayari-5',
    title: 'Hausla',
    excerpt: 'Girne se mat darna kabhi, utho aur phir se chalo...',
    content: `Girne se mat darna kabhi,
Utho aur phir se chalo.
Jo gir ke sambhalta hai,
Woh hi asli hero.

Himmat hai toh dil mein,
Toh duniya jhukti hai.
Hausla rakhne walon ke,
Kismat bhi milti hai.`,
    category: 'shayari',
    tags: ['motivation', 'self-growth', 'hope'],
    date: '2024-08-15',
    readTime: 1,
  },
  // Songs
  {
    id: 'song-1',
    title: 'Chal Padha Main',
    excerpt: 'Chal padha main, sapnon ke peeche, na jaanu manzil kahan hai...',
    content: `[Verse 1]
Chal padha main, sapnon ke peeche,
Na jaanu manzil kahan hai.
Bas itna pata hai mujhe,
Himmat mere saath yahan hai.

[Chorus]
Udne de mujhe, udne de,
Aasmaan mera intezaar kare.
Girne se dar nahi mujhe,
Himmat meri pehchaan kare.

[Verse 2]
Log hasein, duniya kahein,
Yeh ladka pagal hai.
Par mujhe toh pata hai,
Yahi meri asli chal hai.

[Chorus]
Udne de mujhe, udne de,
Aasmaan mera intezaar kare.
Girne se dar nahi mujhe,
Himmat meri pehchaan kare.

[Bridge]
Har subah naya sawaal hai,
Har shaam nayi kahani.
Zindagi ka safar hai yeh,
Khud likhni hai apni zubani.`,
    category: 'songs',
    tags: ['motivation', 'youth', 'hope'],
    date: '2024-12-01',
    readTime: 3,
    featured: true,
  },
  {
    id: 'song-2',
    title: 'Apni Mitti',
    excerpt: 'Apni mitti ki khushboo, dil se lag gayi...',
    content: `[Verse 1]
Apni mitti ki khushboo,
Dil se lag gayi.
Gaon ki woh yaadein,
Saansein ban gayi.

[Chorus]
Mitti, mere mitti,
Tu meri pehchaan.
Chahe jahan bhi jaun,
Tu hai mera jahaan.

[Verse 2]
Sheher ki chamak mein,
Gaon ka dil dhoondta.
Paise ki daur mein,
Apnapan sochta.

[Chorus]
Mitti, mere mitti,
Tu meri pehchaan.
Chahe jahan bhi jaun,
Tu hai mera jahaan.`,
    category: 'songs',
    tags: ['reflection', 'society', 'love'],
    date: '2024-11-05',
    readTime: 3,
  },
  {
    id: 'song-3',
    title: 'Nayi Subah',
    excerpt: 'Har subah ek naya mauqa hai, zindagi ko phir se jeene ka...',
    content: `[Verse 1]
Har subah ek naya mauqa hai,
Zindagi ko phir se jeene ka.
Jo kal hua so hua,
Aaj nayi kahani likhne ka.

[Chorus]
Nayi subah, nayi umeed,
Nayi duniya, naya nazariya.
Jo beet gaya woh yaad rakh,
Par aagey badh, yahi hai naya dariya.

[Verse 2]
Raat ke andheron ne,
Bahut sataaya tha.
Par dekho suraj ne,
Phir se roshni jagaaya tha.

[Chorus]
Nayi subah, nayi umeed,
Nayi duniya, naya nazariya.`,
    category: 'songs',
    tags: ['hope', 'motivation', 'self-growth'],
    date: '2024-10-20',
    readTime: 3,
  },
  // Stories
  {
    id: 'story-1',
    title: 'The First Pitch',
    excerpt: 'The conference room was cold. Not just the air conditioning, but the stares of the investors...',
    content: `The conference room was cold. Not just the air conditioning, but the stares of the investors who had heard a thousand pitches before mine. I was 23, fresh out of college, with nothing but an idea and the audacity to believe it could change the world.

"So, Mr. Tilekar," the lead investor said, adjusting his glasses, "you're telling me that a boy from a small town thinks he can build the next big thing in entrepreneurship education?"

I smiled. Not because I was confident, but because I remembered my father's words: "Beta, they can question your experience, but never let them question your dream."

"Sir," I began, my voice steadier than I felt, "every big company was once an idea that someone dared to believe in. I may not have the experience of ten years, but I have something more valuable—I know what it's like to be that young person with a dream and no roadmap."

The room fell silent. For a moment, I thought I had failed.

Then the lead investor leaned forward. "Tell me more."

That day, I didn't get the funding. But I got something more valuable—the realization that conviction is contagious. Three months later, with a smaller investor who believed in my vision, StartupsIndia was born.

Looking back, that cold conference room was where my journey truly began. Not because of what I achieved, but because of what I learned: the first pitch is never about the money. It's about finding your voice.`,
    category: 'stories',
    tags: ['motivation', 'self-growth', 'youth'],
    date: '2024-12-08',
    readTime: 4,
    featured: true,
  },
  {
    id: 'story-2',
    title: 'The Teacher Who Never Left',
    excerpt: 'Mrs. Sharma taught mathematics in our village school. She was strict, but her eyes held kindness...',
    content: `Mrs. Sharma taught mathematics in our village school. She was strict, but her eyes held kindness that only a child could see. While other teachers dismissed my questions as "too many" or "beyond the syllabus," she would stay after class to explain.

"Ravi," she once told me, "curiosity is not a weakness. It's your greatest strength. The world needs people who ask 'why' and 'what if.'"

Years later, when StartupsIndia hosted its first workshop in my village, I invited her. She was older now, retired, but her eyes still held that same spark.

"I always knew," she said, looking at the young entrepreneurs gathered in the room, "that you would do something meaningful with all those questions."

I hugged her, tears in my eyes. "I'm still asking questions, ma'am. I just found a way to make them useful."

She laughed. "That's all any teacher hopes for."

Every mentor I've become, every student I've guided, carries a piece of Mrs. Sharma. The teacher who never left, because she never truly leaves the hearts of those she touched.`,
    category: 'stories',
    tags: ['reflection', 'society', 'hope'],
    date: '2024-11-15',
    readTime: 4,
    featured: true,
  },
  {
    id: 'story-3',
    title: 'The Night Before Launch',
    excerpt: 'It was 2 AM. The app was supposed to go live in 6 hours, and nothing was working...',
    content: `It was 2 AM. The app was supposed to go live in 6 hours, and nothing was working. My co-founder had gone home exhausted, the developers were asleep, and I sat alone in our tiny office, staring at lines of code I barely understood.

Failure felt inevitable. We had promised 500 users a revolutionary experience, and all I had was a broken product and a broken spirit.

I called my mother. She answered on the first ring, as if she had been waiting.

"Why are you awake?" I asked.

"A mother knows," she said simply. "What's wrong?"

I poured out everything—the bugs, the pressure, the fear of disappointing everyone who believed in us.

She listened quietly, then said, "Do you remember when you were seven and tried to build that kite? It crashed four times before it flew."

"This is different, Maa. This is business."

"No, beta. It's the same. The kite didn't fly because you were perfect. It flew because you didn't give up."

I hung up, made a cup of chai, and got back to work. By 8 AM, the app launched—imperfect, but functional. By 8 PM, we had 1,000 users.

That night, I learned that success isn't about avoiding problems. It's about finding the strength to face them when everyone else is asleep.`,
    category: 'stories',
    tags: ['motivation', 'self-growth', 'philosophy'],
    date: '2024-10-28',
    readTime: 4,
  },
  {
    id: 'story-4',
    title: 'The Village Entrepreneur',
    excerpt: 'Ramesh didn\'t know what a startup was. But he knew how to solve problems...',
    content: `Ramesh didn't know what a startup was. But he knew how to solve problems. In his village, women walked three kilometers to fetch water. Ramesh, a farmer's son with a 10th-grade education, decided to change that.

I met him at an IEC workshop in Maharashtra. While others discussed apps and AI, Ramesh quietly sketched a simple irrigation system on the back of a notebook.

"What are you building?" I asked.

"A way to bring water to my village," he said. "Not for farming. For the women who waste half their day walking."

We talked for hours. I connected him with engineers who could help, funders who believed in grassroots innovation. Six months later, Ramesh's village had a solar-powered water pumping system.

At the inauguration, the village women garlanded Ramesh. His mother cried. He looked at me and said, "This is better than any trophy."

That day, I understood that entrepreneurship isn't about technology or funding. It's about seeing a problem and refusing to walk away. Ramesh taught me more about innovation than any business school ever could.

Today, StartupsIndia's rural program is inspired by him. Because Ramesh showed me that the next big idea might be sketched on the back of a notebook by someone the world has never heard of.`,
    category: 'stories',
    tags: ['society', 'youth', 'hope'],
    date: '2024-09-20',
    readTime: 5,
  },
];

export const writingCategories: { id: WritingCategory; label: string; description: string }[] = [
  { id: 'poems', label: 'Poems', description: 'Verses on life, dreams, and the human spirit' },
  { id: 'shayari', label: 'Shayari', description: 'Urdu/Hindi couplets on love, life, and motivation' },
  { id: 'songs', label: 'Songs', description: 'Lyrics that inspire and move the soul' },
  { id: 'stories', label: 'Stories', description: 'Tales of entrepreneurship, hope, and transformation' },
];

export const writingTags: { id: WritingTag; label: string }[] = [
  { id: 'motivation', label: 'Motivation' },
  { id: 'society', label: 'Society' },
  { id: 'love', label: 'Love' },
  { id: 'self-growth', label: 'Self-Growth' },
  { id: 'nature', label: 'Nature' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'youth', label: 'Youth' },
  { id: 'hope', label: 'Hope' },
  { id: 'reflection', label: 'Reflection' },
];
