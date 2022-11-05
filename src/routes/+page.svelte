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
      image: "/reverse.png",
      title: "Reverse",
      link: "/reverse",
      description: "",
      snapshot: {
        overview:
          "Empower time starve young professional and parents to shop plastic free and sustainbly by delivering plastic free groceries to them while providing a wider range of fresh perishable products.",
        problem:
          "Plastic packaging manufacture have skyrocketed and recycling is not the long term solution. One good solution is package free shopping but it’s inconvenient for uses and expensive for business to run.",
        solution:
          "Through user research and expert research, I discovered the opportunity for delivery services that accommodates a wider range of perishable goods and automated handling to save operation cost. ",
        learnings: [
          "Let user needs lead",
          "Consulting the expert gives you more indepth insights",
          "Project planning (manage and scoping)",
          "System thinking",
        ],
      },
    },
    {
      image: "/pulsair.png",
      title: "Pulsair",
      link: "/pulsair",
      description: "",
      snapshot: {
        overview:
          "Air quality management platform that empower construction workers, their company and the community to minimize the health risk of air pollution and to reduce pollution emission",
        problem:
          "Health risk of air pollution is invisible until fatal illness emerges decades later. Construction workers are one of the vulnerable victim groups but their awareness for preventative measures is low. ",
        solution:
          "Pulsair provides a personal air monitoring devices for each construction worker that snaps right on their helmet. Air pollution and location data help the company to identify the source of pollution and hence eliminate that to prevent penalty charges from the government. ",
        learnings: [
          "Gaining industry insight through expert interview",
          "Pivoting concept based on constant feedback",
          "Project management and remote collaborations",
        ],
      },
    },
    {
      image: "/image.png",
      title: "Bubble",
      link: "/bubble",
      description: "",
      snapshot: {
        overview:
          "All in one remote health monitoring platform for HCP to keep track of patients condition, and communicate with different parties through a flexible dashboard designed to highlight any emergencies.",
        problem:
          "HCP can be overwhelmed by keeping track of multiple patient’s multiple readings if there’s no physical appointments. They also have to maintain regular communication with the patients, their carer and other HCP colleagues all while in a high stress and high stake environment.",
        solution:
          "Through iterations of reviews with HCP, the dashboard show clear groupings of patients and an overview of their conditions. The messages for patients and HCP is also clearly distinguish to prevent mistakenly messaging the wrong recipient",
        learnings: [
          "Requirements gathering with stakeholders",
          "Considering cognitive load for users & usability heuristics",
          "Regular communication with stakeholders",
        ],
      },
    },
    {
      image: "/image.png",
      title: "Coin Rivet",
      link: "/coinrivet",
      description: "",
      snapshot: {
        overview:
          "A crypto currency investment platform & wallet for beginners to keep track of their porfolio and make informed decisions when trading.",
        problem:
          "Cryptocurrency is a novel concept to the public, hence users struggle to keep track of profits and transactions. Due to technical constraints, this app needs to be used alongside with another wallet that hold cash - Luxon pay, which could be a blocker for the users.",
        solution:
          "Created a dashboard with clear information hierarchy, displayed conversion rates intuitively in all transaction pages and utilised just in time error messages with a step by step onboarding process.",
        learnings: [
          "Project management and timeline planning",
          "Regular commmunications with clients",
          "Stakeholders interviews and management",
          "UI design and design systems",
        ],
      },
    },
  ];
  $: currentCarouselProject = snapshotInfo[carouselIndex];
</script>

<section class="home-page-background hero">
  <div class="content-of-page">
    <div class="home-page">
      <img src={homePage} alt="" />

      <div class="h1-h3">
        <h1>Heya, nice to e-meet you!</h1>
        <h3>
          I am a UX designers who enjoy thinking about the big picture,
          unpacking problems and framing opportunities. I am a strong believer
          of using design thinking to improve people’s lives and their
          environment.
        </h3>
      </div>
    </div>

    <UnderlinedCta href="#featured">
      <img src={downArrow} alt="" />
      Check out my projects
    </UnderlinedCta>
  </div>
</section>

<section class="content-of-page">
  <h2 id="featured">Featured Projects</h2>
  <div class="project-tiles">
    <SquareTile
      title="Reverse"
      description="Package-free groceries delivery service for time poor users"
      badge="Student"
    />
    <SquareTile
      title="Pulsair"
      description="Air management platform for construction workers"
      badge="Student"
    />
    <SquareTile
      title="Bubble"
      description="Remote healthcare monitoring platform for health workers"
      badge="Professional"
    />
    <SquareTile
      title="Coin Rivet"
      description="Crypto currency investment platform & wallet for beginners"
      badge="Professional"
    />
  </div>
  <div class="view-more-projects-container">
    <UnderlinedCta href="/this-link-needs-updating">
      <img src={plusArrow} alt="" />
      View more projects
    </UnderlinedCta>
  </div>
</section>

<section class="content-of-page no-block-padding">
  <h2>Short on time? Here're the quick snapshots</h2>
</section>
<section class="carousel">
  {#if Carousel}
    <Carousel
      bind:this={carouselElement}
      let:showPrevPage
      let:showNextPage
      initialPageIndex={carouselIndex}
      on:pageChange={function (event) {
        carouselIndex = event.detail;
      }}
      dots={false}
      arrows={false}
    >
      {#each snapshotInfo as project}
        <div class="carousel-image-container">
          <img src={project.image} alt="{project.title} image" />
        </div>
      {/each}
      <button class="carousel-button" slot="prevssss" on:click={showPrevPage}>
        <img src={leftArrow} alt="left carousel arrow" /></button
      >
      <button class="carousel-button" slot="nextssss" on:click={showNextPage}>
        <img src={rightArrow} alt="right carousel arrow" /></button
      >
    </Carousel>
    <div class="content-of-page carousel-buttons">
      <button
        class="carousel-button"
        on:click={() => {
          carouselElement.goToPrev();
        }}
      >
        <img src={leftArrow} alt="left carousel arrow" /></button
      >
      <button
        class="carousel-button"
        on:click={() => {
          carouselElement.goToNext();
        }}
      >
        <img src={rightArrow} alt="right carousel arrow" /></button
      >
    </div>
  {/if}
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
    <h3>Fun fact, but here's more</h3>
    <UnderlinedCta
      ><a href="/about">About me</a><img
        src={rightArrow}
        alt="right arrow"
      /></UnderlinedCta
    >
  </div>
</section>
<svelte:head>
  <style>
    body {
      --header-bg: #f9f5ec;
    }
  </style>
</svelte:head>

<style>
  .home-page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
    padding: 80px 0;
  }

  .home-page-background {
    background-color: #f9f5ec;
    padding-bottom: 48px;
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
    height: 300px;
    padding: 0;
    position: relative;
  }

  .carousel :global(div) {
    height: 100%;
  }
  .carousel-image-container {
    position: relative;
  }
  .carousel-image-container img {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .carousel-buttons {
    position: absolute;
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
    background: transparent;
    border: none;
    font: inherit;
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
    gap: 24px;
  }

  @media (max-width: 750px) {
    .home-page {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 1100px) {
    .project-tiles {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
