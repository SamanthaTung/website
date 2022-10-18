const projectInfo = [
    {
        image: "/image.png",
        overview: {
            title: "Reverse",
            subtitleOverview: "",
            description: "asdasd"
            
        }
    },
    {
        image: "/image.png",
        title: "Bubbles",
        subtitleOverview: "",
        descriptionOverview: "asdasd"
    }
]
export default projectInfo

// projectInfo.find((project) => project.id === 'asdasd')


// for the two column image thing
// you can do the data like this
const dummyData = [
    {
        content: 'lorem lorem',
        bulletType: 'dot'
    },
    {
        content: 'poo poo',
        bulletType: 'arrow'
    }
]

/**
 * {#each dummyData as data}
 * <div class={data.bulletType}>{data.content}</div>
 * {/each}
 */