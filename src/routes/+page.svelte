<script>
  // @ts-nocheck
  import { fly } from "svelte/transition";
  import homePage from "../Image/Homepage.svg";
  import downArrow from "../Icons/Arrowdown.svg";
  import leftArrow from "../Icons/Arrowleft.svg";
  import rightArrow from "../Icons/Arrowright.svg";
  import plusArrow from "../Icons/Plus.svg";
  import { onMount } from "svelte";
  import SquareTile from "../Components/SquareTile.svelte";
  import UnderlinedCta from "../Components/UnderlinedCTA.svelte";

  let Carousel;
  let carouselElement;
  onMount(async () => {
    const module = await import("svelte-carousel");
    Carousel = module.default;
  });

  let carouselIndex = 0;

  const snapshotInfo = [
    {
      image: "/Carousel/Carousel1.png",
      title: "Reverse",
      link: "/reverse",
      description: "",
      snapshot: {
        overview:
          "Empower time-starved young professionals and parents to shop plastic-free and sustainably by delivering plastic-free groceries to them while providing a wider range of fresh perishable products.",
        problem:
          "Plastic packaging manufacturing has skyrocketed and recycling is not the long-term solution. One good solution is package-free shopping but it’s inconvenient for users and expensive for a business to run.",
        solution:
          "Through user research and expert research, I discovered the opportunity for delivery services that accommodates a wider range of perishable goods and automated handling to save operation cost. ",
        learnings: [
          "Let the user needs lead",
          "Consulting the expert gives you more in-depth insights",
          "Project planning (management and scoping)",
          "System thinking",
        ],
      },
    },
    {
      image: "/Carousel/Carousel2.png",
      title: "Pulsair",
      link: "/pulsair",
      description: "",
      snapshot: {
        overview:
          "Air quality management platform that empowers construction workers, their company and the community to minimize the health risk of air pollution and to reduce pollution emission.",
        problem:
          "The health risk of air pollution is invisible until fatal illness emerges decades later. Construction workers are one of the vulnerable victim groups but their awareness of preventative measures is low.",
        solution:
          "Pulsair provides personal air monitoring devices for each construction worker that snaps on their helmet. Air pollution and location data help the company to identify and eliminate the source of pollution to prevent penalty charges from the government.",
        learnings: [
          "Gaining industry insight through expert interviews",
          "Adding human touch to storytelling",
          "Project management and remote collaborations",
        ],
      },
    },
    {
      image: "/Carousel/Carousel3.png",
      title: "Bubble",
      link: "/bubble",
      description: "",
      snapshot: {
        overview:
          "All-in-one remote health monitoring platform for HCP to keep track of patient's condition, and communicate with different parties through a flexible dashboard designed to highlight any emergencies.",
        problem:
          "HCP can be overwhelmed by keeping track of multiple patients’ multiple readings if there are no physical appointments. They also have to maintain regular communication with the patients, their carers and other HCP colleagues all while in a high-stress and high stake environment.",
        solution:
          "Through iterations of reviews with HCP, the dashboard show clear groupings of patients and an overview of their conditions. The messages for patients and HCP are also clearly distinguished to prevent mistakenly messaging the wrong recipient.",
        learnings: [
          "Requirements gathering with stakeholders",
          "Considering cognitive load for users & usability heuristics",
          "Regular communication with stakeholders",
        ],
      },
    },
    {
      image: "/Carousel/Carousel4.svg",
      title: "Coin Rivet",
      link: "/coinrivet",
      description: "",
      snapshot: {
        overview:
          "A cryptocurrency investment platform & wallet for beginners to keep track of their portfolio and make informed decisions when trading.",
        problem:
          "Cryptocurrency is a novel concept to the public, hence users struggle to keep track of profits and transactions. Due to technical constraints, this app needs to be used alongside another wallet that holds cash - Luxon Pay, which could be a blocker for the users.",
        solution:
          "Created a dashboard with a clear information hierarchy, displayed conversion rates intuitively on all transaction pages and utilised just-in-time error messages with a step-by-step onboarding process.",
        learnings: [
          "Project management and timeline planning",
          "Regular communication with clients",
          "Stakeholders interviews and management",
          "UI design and design systems",
        ],
      },
    },
  ];
  $: currentCarouselProject = snapshotInfo[carouselIndex];
</script>

<svelte:head>
  <title>Sam Tung</title>
</svelte:head>
<section class="home-page-background hero">
  <div class="content-of-page">
    <div class="home-page">
      <div class="home-image-button">
        <img class="home-image" src={homePage} alt="" />
        <UnderlinedCta href="#featured">
          <img src={downArrow} alt="" />
          Check out my projects
        </UnderlinedCta>
      </div>

      <div class="h1-h3">
        <h1>Heya, nice to e-meet you!</h1>
        <h3>
          I am a UX designer who enjoys thinking about the big picture,
          unpacking problems, and framing opportunities. I am a strong believer
          in using design thinking to improve people's lives and their
          environment.
        </h3>
      </div>
    </div>
  </div>
</section>

<section class="content-of-page">
  <h2 id="featured">Featured Projects</h2>
  <div class="project-tiles">
    <SquareTile
      title="Reverse"
      description="Package-free groceries delivery service for time poor users"
      badge="Student"
      href="/reverse"
      src="ProjectTile/ProjectTile1.png"
    />
    <SquareTile
      title="Pulsair"
      description="Air management platform for construction workers"
      badge="Student"
      href="/pulsair"
      src="ProjectTile/ProjectTile2.png"
    />
    <SquareTile
      title="Bubble"
      description="Remote healthcare monitoring platform for health workers"
      badge="Professional"
      src="ProjectTile/ProjectTile3.png"
      href="/bubble"
    />
    <SquareTile
      title="Coin Rivet"
      description="Cryptocurrency investment platform & wallet for beginners"
      badge="Professional"
      src="ProjectTile/ProjectTile4.png"
      href="/coinrivet"
    />
  </div>
  <!-- <div class="view-more-projects-container">
    <UnderlinedCta href="/this-link-needs-updating">
      <img src={plusArrow} alt="" />
      View more projects
    </UnderlinedCta>
  </div> -->
</section>

<section class="content-of-page no-block-padding">
  <h2>Short on time? Here're the quick snapshots</h2>
</section>
<section class="carousel">
  <svelte:component
    this={Carousel}
    bind:this={carouselElement}
    initialPageIndex={carouselIndex}
    on:pageChange={function (event) {
      carouselIndex = event.detail;
    }}
    dots={false}
    arrows={false}
  >
    {#each snapshotInfo as project}
      <img
        class="carousel-image"
        src={project.image}
        alt="{project.title} image"
      />
    {/each}
  </svelte:component>
  <div class="content-of-page carousel-buttons">
    <button
      class="carousel-button"
      on:click={() => {
        carouselElement?.goToPrev();
      }}
    >
      <img src={leftArrow} alt="left carousel arrow" /></button
    >
    <button
      class="carousel-button"
      on:click={() => {
        carouselElement?.goToNext();
      }}
    >
      <img src={rightArrow} alt="right carousel arrow" /></button
    >
  </div>
</section>
<section class="content-of-page snapshot-content">
  <h2>
    {currentCarouselProject.title}
  </h2>
  {#key currentCarouselProject.title}
    <div class="snapshot-grid" in:fly={{ duration: 2000 }}>
      <article>
        <h3>Overview</h3>
        <p>{currentCarouselProject.snapshot.overview}</p>
      </article>
      <article>
        <h3>Problem</h3>
        <p>{currentCarouselProject.snapshot.problem}</p>
      </article>
      <article>
        <h3>Solution</h3>
        <p>{currentCarouselProject.snapshot.solution}</p>
      </article>
      <article>
        <h3>Learnings</h3>
        <ul class="learnings">
          {#each currentCarouselProject.snapshot.learnings as learning}
            <li>{learning}</li>
          {/each}
        </ul>
      </article>
    </div>
  {/key}
  <UnderlinedCta href={currentCarouselProject.link}
    >Learn more about the project
    <img src={rightArrow} alt="right arrow" /></UnderlinedCta
  >
</section>
<section class="content-of-page">
  <h2>Learn more about me</h2>

  <div class="about-me-link-container">
    <h3>I love sleeping (who doesn't)</h3>
    <UnderlinedCta href="/about"
      >but there's more to me<img
        src={rightArrow}
        alt="right arrow"
      /></UnderlinedCta
    >
  </div>
</section>

<style>
  .home-page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }

  .home-page-background {
    background-color: #f9f5ec;
    height: 632px;
  }

  .home-page-background .content-of-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .home-image {
    width: 100%;
  }
  .view-more-projects-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 24px;
  }

  .carousel {
    background: var(--gray-1);
    width: 100%;
    height: 400px;
    padding: 0;
    position: relative;
  }

  .carousel :global(div) {
    height: 100%;
  }

  .carousel-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 750px) {
    .carousel {
      height: 200px;
    }
  }

  .carousel-buttons {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .carousel-button {
    background: none;
    border: none;
    font: inherit;
    display: flex;
    border-radius: 50%;
    padding: 2px;
  }
  .snapshot-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 24px;
    margin-bottom: 16px;
  }
  .learnings {
    padding-left: 24px;
  }
  @media (max-width: 450px) {
    .snapshot-grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
  .project-tiles {
    display: grid;
    grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
    gap: 16px;
  }
  .about-me-link-container {
    display: flex;
    align-items: center;
    column-gap: 1ch;
  }
  @media (max-width: 500px) {
    .about-me-link-container {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 750px) {
    .home-page {
      grid-template-columns: 1fr;
    }
    .home-page-background {
      background-color: #f9f5ec;
      height: unset;
    }

    .project-tiles {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
