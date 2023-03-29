<script>
  export let title;
  /** @type {'column'|'row'|'row-reverse'}*/
  export let type;
  export let src;
</script>

<div class="image-wrapper {type}">
  <img {src} alt={title} />
  <div class="content">
    <h3>{title}</h3>
    <slot />
  </div>
</div>

<style>
  :global(.image-wrapper) + .image-wrapper {
    margin-top: 24px;
  }

  /* if image is used in column, dont apply top margin */
  :global(.column .image-wrapper) + .image-wrapper {
    margin-top: 0px;
  }
  .image-wrapper {
    display: grid;
    align-items: start;
    gap: 24px;
  }

  .column {
    grid-template-areas:
      "image"
      "content";
    grid-template-rows:
     auto
    /* this get's the 2nd row to grow */
    1fr; 
   
  }
  .row {
    grid-template-areas: "image content";
    grid-template-columns: 1fr 1fr;
  }
  .row-reverse {
    grid-template-areas: "content image";
    grid-template-columns: 1fr 1fr;
  }

  .content {
    width: 100%;
    grid-area: content;
    
  }

  .content h3 {
    padding-top: 0;
  }
  img {
    width: 100%;
    grid-area: image;
  }

  @media (max-width: 750px) {
    .row,
    .row-reverse,
    .column {
      grid-template-areas:
        "image"
        "content";
      grid-template-rows: auto auto;
      grid-template-columns: 1fr;
    }
  }
</style>
