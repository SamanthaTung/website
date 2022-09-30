<script>
    export let title;
    export let description;
    export let row = false;
</script>

<div class="image-top-wide {row ? 'row' : ''}">
    <div class="image-wide" />
    <div class="h3-body">
        <h3>{title}</h3>
        <p>{description}</p>
        
    </div>
</div>

<style>
    .image-top-wide {
        display: flex;
        flex-direction: column;
    }
    .row{
        flex-direction: row;

    }
    .image-wide {
        background-color: var(--gray-1);
        height: 300px;
        width: 100%;
    }

    @media (max-width: 750px) {
        .problem,
        .background {
            grid-template-columns: 1fr;
        }
    }
</style>
