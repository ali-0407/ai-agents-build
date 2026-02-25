/**
 * Learning path steps for Phase 1 and Phase 2.
 * Matches the repo structure and README.
 */
const defaultRepoUrl = 'https://github.com/ali-0407/ai-agents-build';
export const repoUrl =
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_REPO_URL) ||
  defaultRepoUrl;

export const learningPath = [
  {
    id: 1,
    number: 1,
    title: 'Foundation',
    subtitle: 'Basic LLM Interaction',
    description: 'Your first step: loading models, basic prompts, understanding tokens.',
    folder: '01_intro',
    tag: null,
  },
  {
    id: 2,
    number: 2,
    title: 'Optional',
    subtitle: 'OpenAI APIs',
    description: 'Cloud-based models, API keys, message roles, statelessness.',
    folder: '02_openai-intro',
    tag: 'Optional',
  },
  {
    id: 3,
    number: 3,
    title: 'Specialization',
    subtitle: 'System Prompts',
    description: 'Transform general LLMs into specialized agents with system prompts.',
    folder: '03_translation',
    tag: null,
  },
  {
    id: 4,
    number: 4,
    title: 'Reasoning',
    subtitle: 'Reasoning Agents',
    description: 'Teaching AI to think logically and solve complex problems.',
    folder: '04_think',
    tag: null,
  },
  {
    id: 5,
    number: 5,
    title: 'Performance',
    subtitle: 'Parallel Processing',
    description: 'Process multiple requests simultaneously for better performance.',
    folder: '05_batch',
    tag: null,
  },
  {
    id: 6,
    number: 6,
    title: 'UX',
    subtitle: 'Streaming & Control',
    description: 'Real-time responses and controlled output for better user experience.',
    folder: '06_coding',
    tag: null,
  },
  {
    id: 7,
    number: 7,
    title: 'Function Calling',
    subtitle: 'Tools',
    description: 'Transform LLMs from text generators into agents that can act.',
    folder: '07_simple-agent',
    tag: 'Key concept',
  },
  {
    id: 8,
    number: 8,
    title: 'State',
    subtitle: 'Persistent Memory',
    description: 'Transform agents from stateless responders into systems with context.',
    folder: '08_simple-agent-with-memory',
    tag: null,
  },
  {
    id: 9,
    number: 9,
    title: 'ReAct Pattern',
    subtitle: 'Reasoning + Acting',
    description: 'Reasoning + Acting = powerful problem-solving agents.',
    folder: '09_react-agent',
    tag: 'Advanced',
  },
  {
    id: 10,
    number: 10,
    title: 'Atom of Thought',
    subtitle: 'AoT Planning',
    description: '"SQL for Reasoning" — structured, executable plans.',
    folder: '10_aot-agent',
    tag: 'Expert',
  },
];

export const phase2 = {
  title: 'Phase 2',
  subtitle: 'Building a Production Framework',
  description: 'Learn to rebuild LangChain\'s core patterns with clear, educational code. Runnable, chains, tools, agents, and state machines.',
  path: 'tutorial',
};

export function getExampleUrl(folder) {
  return `${repoUrl}/tree/main/examples/${folder}`;
}

export function getLessonUrl(number) {
  if (number === 1) return getExampleUrl('01_intro');
  if (number <= 10) return getExampleUrl(learningPath[number - 1].folder);
  return `${repoUrl}/tree/main/tutorial`;
}
