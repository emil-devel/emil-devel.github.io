<script lang="ts">
  import { Github } from "@lucide/svelte";
  import { Carousel } from "@skeletonlabs/skeleton-svelte";
  import slides from "./slides";
</script>

<Carousel
  slideCount={slides.length}
  slidesPerPage={1}
  spacing="8px"
  autoplay
  allowMouseDrag
  loop
>
  <Carousel.ItemGroup>
    {#each slides as { url, link, title, content }, i}
      <Carousel.Item
        index={i}
        class="card preset-filled-surface-100-900 border border-surface-300-700 max-w-md"
      >
        <article class="text-sm flex flex-col h-full">
          <header
            class="overflow-hidden rounded-t-xl mb-4 pt-10 pb-4 preset-filled-secondary-200-800 text-gray-200-800"
          >
            <h3 class="h3 px-4 py-2 text-center">{title}</h3>
          </header>
          <div class="px-4 opacity-60 flex-auto">
            {@html content}
          </div>
          <footer class="px-4 py-2 text-right">
            <a href={url} target="_blank" class="anchor text-xs" title={link}>
              code on
              <span class="icon"><Github size={12} /></span>
              github
            </a>
          </footer>
        </article>
      </Carousel.Item>
    {/each}
  </Carousel.ItemGroup>
  <Carousel.IndicatorGroup>
    <Carousel.Context>
      {#snippet children(carousel)}
        {#each carousel().pageSnapPoints as _, index}
          <Carousel.Indicator {index} />
        {/each}
      {/snippet}
    </Carousel.Context>
  </Carousel.IndicatorGroup>
</Carousel>
