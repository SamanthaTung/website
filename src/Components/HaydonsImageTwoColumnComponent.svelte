<script>
    export let src;
    export let title;
    /** @type {Array<{ content: string; bulletType: "dot" | "arrow" }>} */
    export let bullets;
</script>

<div>
    <div class='image'><img {src} alt="" /></div>
    <div>
        <h3>{title}</h3>
        <ul>
            {#each bullets as bullet}
                <li class={bullet.bulletType}>{bullet.content}</li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .dot {
    }
    .arrow {
        list-style-type: upper-roman;
        /* list-style-image: url("https://cdn-icons-png.flaticon.com/512/109/109617.png"); */
    }
</style>
