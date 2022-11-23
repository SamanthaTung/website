<script>
  export let title;
  /** @type {'column'|'row'|'row-reverse'}*/
  export let type;
  export let src;
</script>

<div class="image {type}">
  <div class="image-wide" class:placeholder={!src}>
    {#if src}
      <img {src} alt={title} />
    {/if}
  </div>
  <div>
    <h3>{title}</h3>
    <slot />
  </div>
</div>

<style>
  :global(.image) + .image {
    margin-top: 24px;
  }

  /* if image is used in column, dont apply top margin */
  :global(.column .image) + .image {
    margin-top: 0px;
  }
  .image {
    display: flex;
    align-items: center;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .row {
    flex-direction: row;
    gap: 24px;
  }
  .row-reverse {
    flex-direction: row-reverse;
    gap: 24px;
  }
  .image-wide {
    height: 250px;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  @media (min-width: 750px) {
    .row .image-wide, .row-reverse .image-wide {
      width: 350px;
      flex-shrink: 0;
    }
  }
  @media (min-width: 900px) {
    .row .image-wide, .row-reverse .image-wide {
      width: 450px;
      flex-shrink: 0;
    }
  }
  .placeholder {
    background-color: var(--gray-2);
  }
  img {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
  }

  @media (max-width: 750px) {
    .row {
      flex-direction: column;
    }
    .row-reverse {
      flex-direction: column;
    }
  }
</style>
