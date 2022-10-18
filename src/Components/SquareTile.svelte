<script>
    export let title;
    export let description;
    export let badge;
</script>

<div class="square-project-tile">
    <div class="square-image">
        <div class="badge">
            <span class="small"> {badge} </span>
        </div>
    </div>
    <div class="h3-body">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
</div>

<style>

.square-image {
    background-color: var(--gray-1);
    height: 262px;
    width: 100%;
    position: relative;
}
.badge {
    width: fit-content;
    padding: 4px 12px;
    border-radius: 14px;
    background-color: var(--gray-2);
    position: absolute;
    top: 12px;
    right: 12px;
    line-height: 100%;
}




</style>
