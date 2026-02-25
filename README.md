# AI Agents From Scratch

Learn to build AI agents locally without frameworks. Understand what happens under the hood before adopting production frameworks.

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

---

## Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Phase 1: Agent Fundamentals](#phase-1-agent-fundamentals-from-llms-to-react)
- [Phase 2: Framework Tutorial](#phase-2-building-a-production-framework-tutorial)
- [Project Structure](#project-structure---fundamentals)
- [Concepts](#core-concepts)
- [Resources & Contributing](#additional-resources)

---

## Overview

This repository teaches you to build AI agents from first principles using **local LLMs** and **node-llama-cpp**. By working through the examples, you will understand:

- How LLMs work at a fundamental level
- What agents really are (LLM + tools + patterns)
- How different agent architectures behave
- Why frameworks make the design choices they do

**Philosophy:** Learn by building. Understand deeply, then use frameworks wisely.

### Related Projects

| Project | Description |
|--------|-------------|
| [AI Product from Scratch](https://github.com/pguso/ai-product-from-scratch) | TypeScript/React. Prompt engineering, structured output, API design, and frontend integration. |
| [AI Agents from Scratch (Python)](https://github.com/pguso/agents-from-scratch) | Same concepts in Python. |

### Next Phase

After mastering the fundamentals, **Phase 2** walks you through re-implementing core parts of **LangChain** and **LangGraph** in plain JavaScript using local models. The goal is not to build a new framework but to understand *how* frameworks work.

---

## Quick Start

### Prerequisites

- **Node.js** 18 or later
- **RAM:** 8 GB minimum (16 GB recommended for larger models)
- **Models:** Place GGUF models in `./models/`. See [DOWNLOAD.md](DOWNLOAD.md) for details.

### Install

```bash
npm install
```

### Run Examples (Phase 1)

From the repository root:

```bash
node examples/01_intro/intro.js
node examples/07_simple-agent/simple-agent.js
node examples/09_react-agent/react-agent.js
```

### Web UI (Chat)

A minimal chat interface with optional OpenAI-backed responses:

```bash
npm run web
```

Open **http://localhost:3000**. Without `OPENAI_API_KEY` in `.env`, the server runs in demo mode. Set `OPENAI_API_KEY` for real AI responses. See [web/README.md](web/README.md) for details.

---

## Phase 1: Agent Fundamentals (From LLMs to ReAct)

Follow the examples in order to build understanding progressively.

### Learning Path

| # | Topic | Folder | Focus |
|---|--------|--------|--------|
| 1 | Introduction | `examples/01_intro/` | Basic LLM loading and prompt/response |
| 2 | OpenAI Intro *(optional)* | `examples/02_openai-intro/` | Hosted models, temperature, tokens |
| 3 | Translation | `examples/03_translation/` | System prompts, specialization |
| 4 | Think | `examples/04_think/` | Reasoning and when to use tools |
| 5 | Batch | `examples/05_batch/` | Parallel processing |
| 6 | Coding | `examples/06_coding/` | Streaming and response control |
| 7 | Simple Agent | `examples/07_simple-agent/` | Function calling and tools |
| 8 | Simple Agent + Memory | `examples/08_simple-agent-with-memory/` | Persistent state |
| 9 | ReAct Agent | `examples/09_react-agent/` | Reason → Act → Observe |
| 10 | AoT Agent | `examples/10_aot-agent/` | Atom-of-Thought planning |

Each example directory contains:

- **`<name>.js`** — Runnable code
- **`CODE.md`** — Step-by-step code explanation
- **`CONCEPT.md`** — Concepts, patterns, and how it fits into agents

### Example Summaries

#### 1. Introduction — Basic LLM Interaction

- **Code:** [intro.js](examples/01_intro/intro.js) · [CODE.md](examples/01_intro/CODE.md) · [CONCEPT.md](examples/01_intro/CONCEPT.md)
- **Learn:** Loading a local LLM, basic prompt/response cycle
- **Concepts:** Model loading, context, inference pipeline, token generation

#### 2. (Optional) OpenAI Intro — Hosted Models

- **Code:** [openai-intro.js](examples/02_openai-intro/openai-intro.js) · [CODE.md](examples/02_openai-intro/CODE.md) · [CONCEPT.md](examples/02_openai-intro/CONCEPT.md)
- **Learn:** Calling hosted LLMs (e.g. GPT-4), temperature, token usage
- **Concepts:** Inference endpoints, latency, cost vs control, data privacy

#### 3. Translation — System Prompts & Specialization

- **Code:** [translation.js](examples/03_translation/translation.js) · [CODE.md](examples/03_translation/CODE.md) · [CONCEPT.md](examples/03_translation/CONCEPT.md)
- **Learn:** System prompts, output format, role-based behavior, chat wrappers
- **Concepts:** System prompts, agent specialization, prompt engineering

#### 4. Think — Reasoning & Problem Solving

- **Code:** [think.js](examples/04_think/think.js) · [CODE.md](examples/04_think/CODE.md) · [CONCEPT.md](examples/04_think/CONCEPT.md)
- **Learn:** Configuring reasoning, complex problems, limitations, when to use tools
- **Concepts:** Reasoning agents, problem decomposition, reasoning limitations

#### 5. Batch — Parallel Processing

- **Code:** [batch.js](examples/05_batch/batch.js) · [CODE.md](examples/05_batch/CODE.md) · [CONCEPT.md](examples/05_batch/CONCEPT.md)
- **Learn:** Concurrent requests, context sequences, GPU batching, performance
- **Concepts:** Parallel execution, batch size, throughput

#### 6. Coding — Streaming & Response Control

- **Code:** [coding.js](examples/06_coding/coding.js) · [CODE.md](examples/06_coding/CODE.md) · [CONCEPT.md](examples/06_coding/CONCEPT.md)
- **Learn:** Streaming responses, token limits, progressive output
- **Concepts:** Streaming, token-by-token generation, real-time feedback

#### 7. Simple Agent — Function Calling (Tools)

- **Code:** [simple-agent.js](examples/07_simple-agent/simple-agent.js) · [CODE.md](examples/07_simple-agent/CODE.md) · [CONCEPT.md](examples/07_simple-agent/CONCEPT.md)
- **Learn:** Function calling, defining tools, JSON Schema, when the LLM uses tools
- **Concepts:** Function calling, tool definitions, agency
- **Milestone:** Text generation becomes agency.

#### 8. Simple Agent with Memory — Persistent State

- **Code:** [simple-agent-with-memory.js](examples/08_simple-agent-with-memory/simple-agent-with-memory.js) · [CODE.md](examples/08_simple-agent-with-memory/CODE.md) · [CONCEPT.md](examples/08_simple-agent-with-memory/CONCEPT.md)
- **Learn:** Persisting across sessions, memory management, retrieval
- **Concepts:** Persistent memory, state management, context augmentation

#### 9. ReAct Agent — Reasoning + Acting

- **Code:** [react-agent.js](examples/09_react-agent/react-agent.js) · [CODE.md](examples/09_react-agent/CODE.md) · [CONCEPT.md](examples/09_react-agent/CONCEPT.md)
- **Learn:** ReAct (Reason → Act → Observe), iterative tool use, self-correction
- **Concepts:** ReAct pattern, observation–action cycles, multi-step agents
- **Milestone:** Foundation of modern agent frameworks.

#### 10. AoT Agent — Atom of Thought Planning

- **Code:** [aot-agent.js](examples/10_aot-agent/aot-agent.js) · [CODE.md](examples/10_aot-agent/CODE.md) · [CONCEPT.md](examples/10_aot-agent/CONCEPT.md)
- **Learn:** Atom-of-Thought methodology, atomic planning, dependency management, structured JSON plans
- **Concepts:** AoT planning, atomic operations, dependency resolution, plan validation

---

## Core Concepts

### What Is an AI Agent?

```
AI Agent = LLM + System Prompt + Tools + Memory + Reasoning Pattern
           ─┬─   ──────┬──────   ──┬──   ──┬───   ────────┬────────
            │          │           │       │              │
         Brain      Identity    Hands   State         Strategy
```

### Evolution of Capabilities

| Step | Example | Capability |
|------|---------|------------|
| 1 | intro | Basic LLM usage |
| 2 | translation | Specialized behavior (system prompts) |
| 3 | think | Reasoning |
| 4 | batch | Parallel processing |
| 5 | coding | Streaming & control |
| 6 | simple-agent | Tool use (function calling) |
| 7 | memory-agent | Persistent state |
| 8 | react-agent | Strategic reasoning + tools |

### Architecture Patterns

**Simple agent (steps 1–5):**

```
User → LLM → Response
```

**Tool-using agent (step 6):**

```
User → LLM ⟷ Tools → Response
```

**Memory agent (step 7):**

```
User → LLM ⟷ Tools → Response
       ↕
     Memory
```

**ReAct agent (step 8):**

```
User → LLM → Think → Act → Observe
       ↑      ↓      ↓      ↓
       └──────┴──────┴──────┘
           Iterate until solved
```

---

## Helper Utilities

### PromptDebugger

**Location:** `helper/prompt-debugger.js`

Inspect exactly what the model receives:

- System prompts
- Function definitions
- Conversation history
- Context state

See usage in `examples/07_simple-agent/simple-agent.js`.

---

## Project Structure — Fundamentals

```
ai-agents-from-scratch/
├── README.md
├── package.json
├── examples/
│   ├── 01_intro/
│   │   ├── intro.js
│   │   ├── CODE.md
│   │   └── CONCEPT.md
│   ├── 02_openai-intro/
│   ├── 03_translation/
│   ├── 04_think/
│   ├── 05_batch/
│   ├── 06_coding/
│   ├── 07_simple-agent/
│   ├── 08_simple-agent-with-memory/
│   ├── 09_react-agent/
│   ├── 10_aot-agent/
│   └── helper/
│       └── prompt-debugger.js
├── web/                    # Chat UI (npm run web)
│   ├── server.js
│   ├── public/
│   └── README.md
├── models/                 # Place GGUF models here
├── logs/                   # Debug outputs
└── src/                    # Phase 2 framework code
    ├── core/
    ├── llm/
    ├── prompts/
    ├── chains/
    ├── tools/
    ├── agents/
    ├── memory/
    └── graph/
```

---

## Phase 2: Building a Production Framework (Tutorial)

After Phase 1, **Phase 2** takes you from scratch examples to production-style design by rebuilding core ideas from **LangChain** and **LangGraph** in plain JavaScript.

### What You Build

A small but complete agent framework with:

- **Runnable interface** — Composability pattern used everywhere
- **Message system** — Typed conversation structures (Human, AI, System, Tool)
- **Chains** — Composing prompts, LLMs, and parsers into pipelines
- **Memory** — Persistent state across conversations
- **Tools** — Function calling and external integrations
- **Agents** — Decision loops (ReAct, tool-calling)
- **Graphs** — State machines for complex workflows (LangGraph-style)

### Approach

- **Tutorial-first** — Step-by-step lessons and exercises
- **Implementation-driven** — Build each piece yourself
- **Framework-compatible** — Same patterns as LangChain.js

### Tutorial Layout

```
tutorial/
├── 01-foundation/           # Core abstractions
│   ├── 01-runnable/
│   ├── 02-messages/
│   ├── 03-llm-wrapper/
│   └── 04-context/
├── 02-composition/          # Chains
│   ├── 01-prompts/
│   ├── 02-parsers/
│   ├── 03-llm-chain/
│   ├── 04-piping/
│   └── 05-memory/
├── 03-agency/               # Tools & agents
│   ├── 01-tools/
│   ├── 02-tool-executor/
│   ├── 03-simple-agent/
│   ├── 04-react-agent/
│   └── 05-structured-agent/
└── 04-graphs/               # State machines
    ├── 01-state-basics/
    ├── 02-channels/
    ├── 03-conditional-edges/
    ├── 04-executor/
    ├── 05-checkpointing/
    └── 06-agent-graph/
```

### Getting Started with Phase 2

1. Finish Phase 1 (intro through react-agent).
2. Read the [tutorial overview](tutorial/README.md).
3. Run lessons and exercises:

```bash
cd tutorial/01-foundation/01-runnable
# Read lesson.md, then:
node exercises/01-*.js
node solutions/01-*-solution.js  # Compare with reference
```

**Rough time:** ~8 weeks at 3–5 hours per week.

### Outcomes

By the end of Phase 2 you will have:

1. Built a working agent framework from scratch
2. Understood how LangChain/LangGraph-style abstractions work
3. Used composability patterns in practice
4. Implemented tools, chains, agents, and state machines
5. Gained confidence to use or extend any framework

---

## Key Takeaways

### After Phase 1

1. **LLMs are stateless** — Context must be managed explicitly.
2. **System prompts shape behavior** — Same model, different roles.
3. **Function calling enables agency** — Tools turn text generators into agents.
4. **Memory is essential** — Agents need persistence across sessions.
5. **Reasoning patterns matter** — ReAct outperforms simple prompting on complex tasks.
6. **Performance matters** — Parallelism, streaming, and token limits.
7. **Debugging is crucial** — Inspect what the model actually receives.

### After Phase 2

1. **Runnable pattern** — Why a single interface powers everything.
2. **Composition** — Building complex systems from simple parts.
3. **Message-driven design** — How conversations are structured.
4. **Chains** — Connecting prompts, LLMs, and parsers.
5. **Tool orchestration** — Safe execution, timeouts, errors.
6. **Agent loops** — How decision-making agents run.
7. **State machines** — Managing workflows with graphs.
8. **Production patterns** — Retries, streaming, observability.

### What Frameworks Add

With the fundamentals in place, frameworks like LangChain, CrewAI, or AutoGPT provide:

- Pre-built reasoning patterns and agent templates
- Tool libraries and integrations
- Error handling and retries
- Multi-agent orchestration
- Observability and extensions

You will use them more effectively because you understand what they do under the hood.

---

## Additional Resources

- **node-llama-cpp:** [GitHub](https://github.com/withcatai/node-llama-cpp)
- **Model hub:** [Hugging Face (GGUF)](https://huggingface.co/models?library=gguf)
- **GGUF:** Quantized format for local inference

## Contributing

This is a learning resource. Contributions are welcome:

- Documentation improvements
- New examples or patterns
- Bug fixes and clearer explanations
- Sharing what you built

## License

ISC. Use and adapt for learning and teaching.

---

Start with `examples/01_intro/` and work through in order. Read both `CODE.md` and `CONCEPT.md` for each example. For the chat UI, run `npm run web` and see [web/README.md](web/README.md).

Happy learning.
