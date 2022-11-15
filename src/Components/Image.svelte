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
  <div class="h3-body">
    <h3>{title}</h3>
    <slot />
  </div>
</div>

<style>
  .image {
    display: flex;
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
    height: 300px;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .placeholder {
    background-color: var(--gray-2);
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
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
