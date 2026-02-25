import {
  learningPath,
  phase2,
  repoUrl,
  getExampleUrl,
  getLessonUrl,
} from './data/learning-path';
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-surface-800/80 bg-surface-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <span className="text-lg font-semibold tracking-tight text-white">
          AI Agents From Scratch
        </span>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-surface-600 bg-surface-800/50 px-4 py-2 text-sm font-medium text-surface-200 transition hover:border-surface-500 hover:bg-surface-800"
        >
          View Source Code
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-surface-800 bg-gradient-to-b from-surface-900 to-surface-950 pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          AI Agents From Scratch
        </h1>
        <p className="mt-4 text-xl text-surface-400 sm:text-2xl">
          Learn to build AI agents locally without frameworks
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-surface-500">
          Understand what happens under the hood before using production frameworks.
          Build real understanding of function calling, memory, and ReAct patterns.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {['Local LLMs', 'Function Calling', 'ReAct Patterns', 'No Black Boxes'].map(
            (label) => (
              <span
                key={label}
                className="rounded-full border border-surface-600 bg-surface-800/60 px-4 py-2 text-sm font-medium text-surface-300"
              >
                {label}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function WhatYoullLearn() {
  return (
    <section className="border-b border-surface-800 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
          What You&apos;ll Learn
        </h2>
        <p className="mt-2 text-center text-surface-400">
          Master the fundamentals of AI agents through hands-on examples
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
            <h3 className="text-lg font-semibold text-accent">Core Concepts</h3>
            <ul className="mt-4 space-y-2 text-surface-400">
              {[
                'How LLMs work at a fundamental level',
                'What agents really are (LLM + tools + patterns)',
                'How different agent architectures function',
                'Why frameworks make the design choices they do',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
            <h3 className="text-lg font-semibold text-accent">Practical Skills</h3>
            <ul className="mt-4 space-y-2 text-surface-400">
              {[
                'Building agents with local LLMs',
                'Implementing function calling and tools',
                'Managing memory and state',
                'Creating ReAct and AoT agents',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="border-b border-surface-800 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-xl font-semibold text-white">Philosophy: Learn by Building</h2>
        <p className="mt-4 text-surface-400 leading-relaxed">
          This tutorial teaches you to build AI agents from first principles using{' '}
          <strong className="text-surface-300">local LLMs</strong> and{' '}
          <strong className="text-surface-300">node-llama-cpp</strong>. By working through
          these examples, you&apos;ll understand deeply, then use frameworks wisely.
        </p>
      </div>
    </section>
  );
}

function LearningPathSection() {
  return (
    <section className="border-b border-surface-800 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
          Learning Path
        </h2>
        <p className="mt-2 text-center text-surface-400">
          Follow these tutorials in order. Each example builds on the previous one.
        </p>
        <div className="mt-12 space-y-4">
          {learningPath.map((step) => (
            <a
              key={step.id}
              href={getExampleUrl(step.folder)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 rounded-xl border border-surface-700 bg-surface-900/40 p-4 transition hover:border-surface-600 hover:bg-surface-800/60 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-sm font-bold text-accent">
                {step.number}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-white group-hover:text-accent-light">
                    {step.title}
                  </span>
                  {step.tag && (
                    <span className="rounded bg-surface-700 px-2 py-0.5 text-xs font-medium text-surface-400">
                      {step.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-surface-500">{step.subtitle}</p>
                <p className="mt-1 text-sm text-surface-400">{step.description}</p>
              </div>
              <span className="hidden shrink-0 text-surface-500 group-hover:text-accent sm:block">
                →
              </span>
            </a>
          ))}
          <a
            href={`${repoUrl}/tree/main/tutorial`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 rounded-xl border-2 border-dashed border-surface-600 bg-surface-900/30 p-4 transition hover:border-accent/50 hover:bg-surface-800/40 sm:flex-row sm:items-center sm:gap-6"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-700 text-sm font-bold text-surface-400">
              2
            </span>
            <div className="min-w-0 flex-1">
              <span className="font-semibold text-white group-hover:text-accent-light">
                {phase2.title}
              </span>
              <p className="text-sm font-medium text-surface-500">{phase2.subtitle}</p>
              <p className="mt-1 text-sm text-surface-400">{phase2.description}</p>
            </div>
            <span className="hidden shrink-0 text-surface-500 group-hover:text-accent sm:block">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function KeyConcepts() {
  const concepts = [
    {
      title: 'LLM Fundamentals',
      items: ['Stateless processing', 'Tokens', 'Context windows', 'System prompts'],
    },
    {
      title: 'Function Calling',
      items: ['Tools', 'Tool definitions', 'Agent decision-making', 'Action-taking'],
    },
    {
      title: 'Agent Patterns',
      items: ['ReAct', 'AoT', 'Memory management', 'Reasoning loops'],
    },
  ];
  return (
    <section className="border-b border-surface-800 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
          Key Concepts You&apos;ll Master
        </h2>
        <p className="mt-2 text-center text-surface-400">
          Essential building blocks for understanding and building AI agents
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {concepts.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-surface-700 bg-surface-900/50 p-5"
            >
              <h3 className="font-semibold text-accent">{c.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-surface-400">
                {c.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Prerequisites() {
  return (
    <section className="border-b border-surface-800 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
          Prerequisites
        </h2>
        <p className="mt-2 text-center text-surface-400">
          Before you begin, make sure you have the following ready
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
            <h3 className="font-semibold text-white">Knowledge Required</h3>
            <ul className="mt-4 space-y-2 text-surface-400">
              {['Basic JavaScript/Node.js', 'Understanding of async/await', 'Command line basics', 'File system operations'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-accent">✓</span> {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
            <h3 className="font-semibold text-white">System Requirements</h3>
            <ul className="mt-4 space-y-2 text-surface-400">
              {['Node.js 18+ installed', '8GB+ RAM (16GB recommended)', 'A downloaded model file (.gguf)', 'About 2–4GB disk space per model'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-accent">✓</span> {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-surface-500">
          Don&apos;t worry if you&apos;re new to some concepts — we&apos;ll explain everything step by step.
        </p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready to Start Learning?
        </h2>
        <p className="mt-4 text-surface-400">
          Begin with Lesson 1 to understand basic LLM interaction, then progress through each
          tutorial step by step.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={getLessonUrl(1)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-surface-950 transition hover:bg-accent-light"
          >
            Start with Lesson 1
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-surface-600 bg-surface-800 px-6 py-3 text-base font-semibold text-surface-200 transition hover:border-surface-500 hover:bg-surface-700"
          >
            Open on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-surface-800 py-8">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-surface-500">
        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-surface-400">
          View source on GitHub
        </a>
        <span className="mx-2">·</span>
        <span>AI Agents From Scratch — Learn by building.</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <WhatYoullLearn />
        <Philosophy />
        <LearningPathSection />
        <KeyConcepts />
        <Prerequisites />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
