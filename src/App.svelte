<script lang="ts">
  import { Github } from '@lucide/svelte'

  const outer = 'px-2 sm:py-4'
  const inner = 'w-full max-w-4xl mx-auto  py-4 space-y-4'
</script>

<svelte:head>
  <title>emil-devel | emil-devel.github.io</title>
  <meta name="description" content="Portfolio Page" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</svelte:head>

<header class={outer}>
  <div class={inner}>
    <h1 class="text-3xl">emil-devel</h1>
  </div>
</header>
<main class="{outer} flex-auto">
  <article class={inner}>
    <h2 class="text-2xl">Hello world!</h2>
  </article>
</main>
<footer class={outer}>
  <div class={inner}>
    <p class="text-center">
      <span class="icon"><Github size={16} /></span>
      <small>{new Date().getFullYear()} | emil-devel.github.io</small>
    </p>
  </div>
</footer>
