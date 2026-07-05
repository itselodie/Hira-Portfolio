export type Project = {
  id: string;
  title: string;
  tagline: string;
  tags: string[];
  problem?: string;
  solution?: string;
  lesson?: string;
  liveDemo?: string;
  github?: string;
};

export type Paper = {
  id: string;
  title: string;
  meta: string;
  abstract: string;
  doi: string;
  url: string;
};

export type Poem = {
  title: string;
  placement: string;
};

export type Novel = {
  title: string;
  description: string;
  badges?: string[];
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type ContactLink = {
  label: string;
  url: string;
  type: string;
  accent: string;
};

export const AI_PROJECTS: Project[] = [
  {
    id: "era",
    title: "ERA — Emotion Reasoning AI",
    tagline: "An affective computing prototype that reasons toward an explainable response instead of just classifying sentiment.",
    tags: ["Python", "Streamlit", "Affective Computing"],
    problem: "Most sentiment tools output a label (positive/negative) with no reasoning attached, which makes them useless for anything that needs to explain itself.",
    solution: "ERA detects the underlying emotion, analyzes the context around it, and reasons toward a response — showing its working, not just its verdict.",
    lesson: "Explainability is a design constraint, not a bolt-on feature — it has to shape the pipeline from the first step.",
    liveDemo: "https://era-emotion-reasoning-bacxh8g5xml4nqlmmwwe8j.streamlit.app/",
    github: "https://github.com/itselodie/era-emotion-reasoning"
  },
  {
    id: "pathera",
    title: "PathERA",
    tagline: "USAII® Global AI Hackathon 2026 Finalist — an emotion-aware decision intelligence assistant.",
    tags: ["Python", "Streamlit", "Decision Intelligence"],
    problem: "Decision-support tools tend to give generic advice that ignores the emotional stakes actually driving a hard choice.",
    solution: "PathERA surfaces the hidden emotional drivers behind a decision and simulates tradeoffs before recommending a path forward.",
    lesson: "A recommendation only feels trustworthy once the person can see the tradeoff, not just the conclusion.",
    liveDemo: "https://pathera-kdupfsqopuubmttvqfhmu2.streamlit.app/",
    github: "https://github.com/itselodie/PathERA"
  },
  {
    id: "decode-her-silence",
    title: "Decode Her Silence",
    tagline: "A trauma-informed, privacy-first chatbot supporting people facing gender-based violence.",
    tags: ["HTML/CSS/JS", "Social Impact"],
    problem: "People in unsafe situations often need information and support without leaving a visible digital trace.",
    solution: "A chatbot offering emotional support, legal information, and safety resources, designed with privacy and discretion as first principles.",
    lesson: "For sensitive tools, restraint in the interface is itself a safety feature.",
    liveDemo: "https://itselodie.github.io/Decode-Her-Silence-/",
    github: "https://github.com/itselodie/Decode-Her-Silence-"
  },
  {
    id: "algocraft",
    title: "AlgoCraft",
    tagline: "Turning abstract data structures into real-time, hands-on visual animations.",
    tags: ["JavaScript", "Education"],
    problem: "Arrays, stacks, and queues are usually taught as static diagrams, which makes the underlying motion hard to build intuition for.",
    solution: "An interactive platform that animates each structure in real time as operations run against it.",
    lesson: "Watching a structure move teaches faster than reading about it ever does.",
    liveDemo: "https://algocraft-ten.vercel.app/",
    github: "https://github.com/itselodie/algocraft"
  },
  {
    id: "gaming",
    title: "Gaming Website",
    tagline: "A browser-based multi-game platform — Connect Four, memory, and puzzle games.",
    tags: ["HTML/CSS/JS"],
    liveDemo: "https://itselodie.github.io/gaming-website/",
    github: "https://github.com/itselodie/gaming-website"
  },
  {
    id: "chess",
    title: "Chess Game",
    tagline: "A fully functional two-player desktop chess app with a complete GUI.",
    tags: ["Java Swing", "Desktop"],
    github: "https://github.com/itselodie/chess-game"
  }
];

export const RESEARCH_PAPERS: Paper[] = [
  {
    id: "neuromorphic",
    title: "Neuromorphic Computing: A Theoretical Review of Synaptic Connections and Devices",
    meta: "Published · June 2025 · Zenodo",
    abstract: "A review of spike-based neural architectures and the synaptic devices that let neuromorphic chips process information differently from conventional binary systems.",
    doi: "10.5281/zenodo.20529279",
    url: "https://doi.org/10.5281/zenodo.20529279"
  },
  {
    id: "photonic",
    title: "Photonic Computing for AI Acceleration: Architectures, Opportunities, Challenges, and Future Perspectives",
    meta: "Preprint · July 2026 · Zenodo",
    abstract: "A theoretical review of light-based information processing as a path around the bandwidth, latency, and energy limits of conventional electronic architectures.",
    doi: "10.5281/zenodo.21191735",
    url: "https://doi.org/10.5281/zenodo.21191735"
  }
];

export const POEMS: Poem[] = [
  { title: "Jukebox Requiem", placement: "1st place" },
  { title: "Born to Rise", placement: "1st place" },
  { title: "Light", placement: "1st place" },
  { title: "What the Silence Hid", placement: "2nd place" },
  { title: "Is a Mirror Just a Mirror", placement: "4th place" },
  { title: "What Blooms After Burning", placement: "9th place" },
];

export const NOVELS: Novel[] = [
  {
    title: "Firewalls and Flowers",
    description: "A story living where technology and feeling meet, which is where most of my writing lives.",
    badges: ["Top #21 · Feminist Fiction", "Top #112 · Cyberbullying", "Top #683 · Feminism"]
  },
  {
    title: "When Fate Forgot My Name",
    description: "A novel about identity, legacy, and rewriting the story you were handed instead of the one you were told to accept."
  }
];

export const TIMELINE: TimelineItem[] = [
  { year: "2026", title: "USAII® Global AI Hackathon — Finalist", description: "Reached the Finals (Undergraduate Level) with PathERA, an emotion-aware decision intelligence assistant." },
  { year: "2026", title: "Photonic Computing preprint published", description: "Independent theoretical review released on Zenodo, July 2026." },
  { year: "2025", title: "Neuromorphic Computing paper published", description: "Independent literature review on synaptic devices and spike-based architectures, released on Zenodo." },
  { year: "2025", title: "Build to Simplify Hackathon — Participant", description: "Competed in the Simplify AI Tools track." },
  { year: "2024–Ongoing", title: "30+ poetry contest placements", description: "Multiple 1st-place wins on PoetrySoup, including Jukebox Requiem, Born to Rise, and Light." },
  { year: "2025", title: "Anthology contributor", description: "Featured in Diverse Voices: The Poetry of Human Rights and the Pursuit of Peace, alongside poets from 41 countries." },
  { year: "2025–Ongoing", title: "Serialized novelist", description: "Firewalls and Flowers and When Fate Forgot My Name, published across Wattpad and WebNovel." }
];

export const CONTACTS: ContactLink[] = [
  { label: "itshirafatima12@gmail.com", url: "mailto:itshirafatima12@gmail.com", type: "Email", accent: "var(--app-pink)" },
  { label: "github.com/itselodie", url: "https://github.com/itselodie", type: "GitHub", accent: "var(--app-purple)" },
  { label: "linkedin.com/in/itshirafatima", url: "https://www.linkedin.com/in/itshirafatima/", type: "LinkedIn", accent: "var(--app-blue)" },
  { label: "devpost.com/itshirafatima12", url: "https://devpost.com/itshirafatima12", type: "Devpost", accent: "var(--app-green)" },
  { label: "hackerrank.com/itshirafatima12", url: "https://www.hackerrank.com/profile/itshirafatima12", type: "HackerRank", accent: "var(--app-gold)" },
  { label: "poems by itselodie", url: "https://www.poetrysoup.com/poems_poets/poems_by_poet.aspx?ID=187177", type: "PoetrySoup", accent: "var(--app-orange)" },
  { label: "wattpad.com/user/itselodie1", url: "https://www.wattpad.com/user/itselodie1", type: "Wattpad", accent: "var(--app-pink)" },
  { label: "webnovel.com/profile/4506418755", url: "https://www.webnovel.com/profile/4506418755", type: "WebNovel", accent: "var(--app-blue)" },
  { label: "@_itz_hiraa", url: "https://instagram.com/_itz_hiraa", type: "Instagram", accent: "var(--app-purple-dim)" }
];

export type LabelSide = 'top' | 'right' | 'bottom' | 'left';

export const WORLDS_META: Array<{
  id: string;
  name: string;
  accent: string;
  x: number;
  y: number;
  labelSide: LabelSide;
  icon: string;
}> = [
  { id: '1', name: "AI Laboratory", accent: "var(--app-purple)", x: 22, y: 23, labelSide: 'right', icon: "cpu" },
  { id: '2', name: "Research Observatory", accent: "var(--app-blue)", x: 50, y: 10, labelSide: 'bottom', icon: "microscope" },
  { id: '3', name: "Writer's Library", accent: "var(--app-gold)", x: 78, y: 23, labelSide: 'left', icon: "book" },
  { id: '4', name: "Hall of Milestones", accent: "var(--app-orange)", x: 22, y: 71, labelSide: 'right', icon: "flag" },
  { id: '5', name: "The Story of Hira", accent: "var(--app-green)", x: 50, y: 90, labelSide: 'top', icon: "user" },
  { id: '6', name: "Communication Hub", accent: "var(--app-pink)", x: 78, y: 71, labelSide: 'left', icon: "mail" },
];
