<script>
    import UnderlinedCta from "./UnderlinedCTA.svelte";
    import rightArrow from "../Icons/Arrowright.svg";
    export let title;
    export let description;
    export let link;
    export let backgroundColor;
</script>

<div class="link" style:background-color={backgroundColor}>
    <section class="content-of-page">
        <div class="title-button">
            <h3>Next up:</h3>
            <UnderlinedCta href={link}>
                <img src={rightArrow} class="icons" alt="arrow icon" />
                Next
            </UnderlinedCta>
        </div>

        <h2>{title}</h2>
        <p>{description}</p>
    </section>
</div>

<style>
    .title-button {
        display: flex;
        width: 100%;
        align-items: start;
        justify-content: space-between;
    }
</style>
