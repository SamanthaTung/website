<script>
    // @ts-nocheck

    import Header from "../Components/Header.svelte";
    import homePage from "../Image/Homepage.svg";
    import downArrow from "../Icons/Arrowdown.svg";
    import { onMount } from "svelte";
    import projectInfo from "../projectInfo";
    import SquareTile from "../Components/SquareTile.svelte"

    let Carousel;
    onMount(async () => {
        const module = await import("svelte-carousel");
        Carousel = module.default;
    });

    let carouselIndex = 0;
    $: currentCarouselProject = projectInfo[carouselIndex]

    console.log(projectInfo);
</script>

<div class="home-page-background">
    <Header />
    <div class="content-of-page">
        <div class="home-page">
            <img src={homePage} alt="" />

            <div class="h1-h3">
                <h1>Heya, nice to e-meet you!</h1>
                <h3>
                    I am a UX designers who enjoy thinking about the big
                    picture, unpacking problems and framing opportunities. I am
                    a strong believer of using design thinking to improve
                    people’s lives and their environment.
                </h3>
            </div>
        </div>
        <div class="button" />
        <div class="button">
            <img src={downArrow} class="icons" alt="down arrow icon" />
            <h3 class="button-text">Checkout my projects</h3>
        </div>
    </div>
</div>


<div class="content-of-page">
    <h2>1. Featured Projects</h2>
    <div class="project-tiles">
        <SquareTile title = 'Reverse' description ='Package-free groceries delivery service for time poor users' badge='Student'/>
        <SquareTile title = 'Pulsair' description ='Air management platform for construction workers' badge='Student'/>
        <SquareTile title = 'Bubble' description ='Remote healthcare monitoring platform for health workers' badge='Professional'/>
        <SquareTile title = 'Coin Rivet' description ='Crypto currency investment platform & wallet for beginners' badge='Professional'/>
    </div>
    <h2>Short on time? Here're the quick snapshots</h2>
</div>

<div class="content-of-page">
    <div class="carousel">
        {#if Carousel}
            <Carousel
                let:showPrevPage
                let:showNextPage
                initialPageIndex={carouselIndex}
                on:pageChange={function (event) {
                    carouselIndex = event.detail;
                }}
            >
                <button
                    class="carousel-button"
                    slot="prev"
                    on:click={showPrevPage}>prev</button
                >
                {#each projectInfo as project}
                    <img src={project.image} />
                {/each}
                <button
                    class="carousel-button"
                    slot="next"
                    on:click={showNextPage}>next</button
                >
            </Carousel>
        {/if}
    </div>
    <h1>
        {currentCarouselProject.overview.title}
    </h1>
    <p>{currentCarouselProject.overview.description}</p>
</div>


<style>
    .home-page {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 48px;
        align-items: center;
        padding: 80px 0;
    }

    img {
        width: 100%;
    }

    .home-page-background {
        background-color: #f9f5ec;
        padding-bottom: 48px;
    }
    .icons {
        width: 24px;
        height: 24px;
    }

    .button-text {
        line-height: 100%;
    }
    .button {
        display: flex;
        align-items: center;
        gap: 8px;
        border-bottom: 2px solid black;
        width: fit-content;
        padding: 8px 0px;
    }

    .h3-body {
        width: 100%;
    }
    .carousel-button {
    background: none;
    border: none;
    font: inherit;
}
.project-tiles {
    display: grid;
    grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
    gap: 16px;
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
