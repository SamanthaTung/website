<script>
  import Badge from "./Badge.svelte";

  export let imageSrc;
  export let title;
  export let description;
  export let awardImages = [];
  export let skills = [];
  export let backgroundColor;
  export let heroImageNoMargin = false;
</script>

<div class="hero-container" style:background-color={backgroundColor}>
  <div class="content-of-page hero-row">
    <div class="hero-content">
      <div class="hero-text">
        <h1>{title}</h1>
        <h3>
          {description}
        </h3>

        <div class="hero-tags">
          <p>Skills shown in this project:</p>
          <div class="skill-container">
            {#each skills as skill}
              <Badge>{skill}</Badge>
            {/each}
          </div>
        </div>

        {#if awardImages}
          <div class="hero-tags">
            <p>Awards & mentions:</p>
            <div class='award-icon-wrapper'>
              {#each awardImages as src}
                <img {src} />
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>
    
    {#if heroImageNoMargin === true}
      <img class="hero-image no-margin" src={imageSrc} alt="hero" />
    {:else}
      <img class="hero-image" src={imageSrc} alt="hero" />
    {/if}
    
    <!-- <img class="hero-image{heroImageNoMargin === true ? '-no-margin' : ''}" src={imageSrc} alt="hero" /> -->
    
  </div>
</div>

<style>
  .hero-container {
    overflow: hidden;
    height:632px;
    position: relative;

  }

  .hero-content {
    padding: 80px 0 0 0;
    max-width: 544px;
    width: 50%;
  }
  .hero-text {
    width: 100%;
  }

  .hero-row {
    display: flex;
  }
  .hero-tags {
    margin-top: 24px;
    margin-bottom: 32px;
  }
  .skill-container {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    width: auto;
  }
  .hero-image {
    width: 50%;
    object-fit: contain;
  }

  .no-margin{
      position: absolute;
      bottom: 0;
      right: 0;
    }

  .award-icon-wrapper{
    margin-top: 16px;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  @media (max-width: 768px) {
    .hero-container {
    overflow: hidden;
    height:unset;
  }

    .hero-row {
      display: flex;
      flex-direction: column;
    }
    .hero-image {
      width: 100%;
      object-fit: contain;
    }

    .no-margin{
      position: relative;
      width: calc(100% + 24px);
      /*margin-left: -24px;*/
    }
   
    .hero-content {
      width: 100%;
      max-width: 100%;
    }
    .award-icon-wrapper img{
    height: 24px;
  }
  }
</style>
