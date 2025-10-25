<script lang="ts">
  import { Copyright, Github } from '@lucide/svelte'
  import Header from './lib/Header.svelte'
  import Skills from './lib/Skills.svelte'
  import Projects from './lib/Projects.svelte'

  const outer = 'px-2 sm:py-4'
  const inner = 'w-full max-w-xl mx-auto  py-4 space-y-4'
</script>

<Header {outer} {inner} />
<main class="{outer} flex-auto">
  <article class={inner}>
    <div class="flex flex-row-reverse my-8">
      <Skills />
    </div>
    <section>
      <Projects />
    </section>
  </article>
</main>
<footer class={outer}>
  <div class={inner}>
    <p class="text-center">
      <span class="icon"><Copyright size={12} /></span>
      <small>{new Date().getFullYear()} | <span class="icon"><Github size={16} /></span> emil-devel.github.io</small>
    </p>
  </div>
</footer>
