const projectInfo = [
    {
        image: "/image.png",
        title: 'Reverse',
        description: '',
        snapshot: {
            overview:'Empower time starve young professional and parents to shop plastic free and sustainbly by delivering plastic free groceries to them while providing a wider range of fresh perishable products.',
            problem:'Plastic packaging manufacture have skyrocketed and recycling is not the long term solution. One good solution is package free shopping but it’s inconvenient for uses and expensive for business to run.',
            solution:'Through user research and expert research, I discovered the opportunity for delivery services that accommodates a wider range of perishable goods and automated handling to save operation cost. ',
            learnings:['Let user needs lead',
            'Consulting the expert gives you more indepth insights',
            'Project planning (manage and scoping)',
            'System thinking'],
        },
        colour: '#6DA5BC'
    },
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