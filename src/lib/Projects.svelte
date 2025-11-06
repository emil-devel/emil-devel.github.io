<script lang="ts">
  import { fade, fly } from 'svelte/transition'

  let title: boolean = false
  let list: boolean = false
  setTimeout(() => {
    title = true
  }, 2000)
  setTimeout(() => {
    list = true
  }, 2200)
</script>

{#if title}
  <h2 class="h6 pb-8 text-right text-primary-600" in:fly={{ x: 200, duration: 400 }}>Projects</h2>
{/if}
<ul class="w-fit mx-auto sm:w-full grid sm:grid-cols-2 gap-4 justify-center">
  {#if list}
    <li in:fly={{ x: -200, duration: 400 }}>
      <a
        href="https://github.com/emil-devel/sveltekit-lucia-drizzle"
        class="card preset-filled-surface-100-900 border border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden"
      >
        <header>
          <img class="w-full" src="/img/project.webp" alt="Project Header" />
        </header>
        <article class="p-4 text-sm">
          <h3>Sveltekit-Lucia-Drizzle</h3>
          <div class="text-sm opacity-60">
            <p>User management with Rolen (User, Redacteur, Admin).</p>
            <p>Realized with: Sveltekit, Skeleton UI, Valibot, Drizzle.</p>
            <p>Postgres Database.</p>
          </div>
        </article>
      </a>
    </li>

    <li in:fly={{ x: 200, duration: 400 }}>
      <a
        href="https://github.com/emil-devel/sveltekit-lucia-prisma"
        class="card preset-filled-surface-100-900 border border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden"
      >
        <header>
          <img class="w-full" src="/img/project.webp" alt="Project Header" />
        </header>
        <article class="p-4 text-sm">
          <h3>Sveltekit-Lucia-Prisma</h3>
          <div class="text-sm opacity-60">
            <p>User management with Rolen (User, Redacteur, Admin).</p>
            <p>Realized with: Sveltekit, Skeleton UI, Valibot, Prisma.</p>
            <p>Postgres Database.</p>
          </div>
        </article>
      </a>
    </li>
  {/if}
</ul>
