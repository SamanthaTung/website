<script>
  export let src;
  export let title;
</script>

<article class="mini-image">
  <div class="image-container">
    <img alt="mini" {src} class="image" />
  </div>
  <h3>{title}</h3>
  <p><slot /></p>
  
</article>

<style>
  .mini-image {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .image-container {
    width: 120px;
    height: 115px;
    position: relative;
  }
  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
