<script lang="ts">
  import { Avatar } from '@skeletonlabs/skeleton-svelte/composed'
  import { Github } from '@lucide/svelte'

  const outer = 'px-2 sm:py-4'
  const inner = 'w-full max-w-xl mx-auto  py-4 space-y-4'
</script>

<header class={outer}>
  <div class="{inner} flex justify-between preset-filled-secondary-300-700 p-4">
    <div class="mt-2 -mb-14 border-8 border-secondary-300-700 rounded-full w-fit h-fit">
      <Avatar>
        <Avatar.Image src="/ewd-logo@2x.svg" />
      </Avatar>
    </div>
    <h1 class="text-2xl text-secondary-800-200">emil-devel</h1>
  </div>
</header>
<main class="{outer} flex-auto">
  <article class={inner}>
    <h2 class="text-2xl text-right">Hello world!</h2>
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
