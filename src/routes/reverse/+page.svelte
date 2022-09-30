<script>
    import Image from "../../Components/Image.svelte";

    import Header from "../../Components/Header.svelte";
</script>


<div class='hero-banner'>
    <Header />
    <div class="content-of-page">
        <div class='hero-content'>
            <div class='hero-text'>
                <h1>Reverse</h1>
                <h3>Convenient package-free groceries delivery service for time poor users. Smart containers and trackers made package free delivery of more variety of food possible and efficiently.</h3>
            <p>
                Awards:
            </p>
            <p>
                Skills shown in this project
            </p>
            </div>
            <div class='hero-image'>
            
        </div>


        </div>
        
    </div>
    
</div>
<div class="content-of-page">
   
    <h2>1. Problem</h2>
    <div class="two-column">
        <Image title="Plastic packaging waste" description="" />
        <Image title="Plastic packaging waste" description="" />
       
    </div>
    <h2>2. Project background</h2>
    <div class="two-column">
        <div class="h3-body">
            <h3>Plastic packaging waste</h3>
            <p>Plastic packaging</p>
        </div>
        <div class="h3-body">
            <h3>Plastic packaging waste</h3>
            <p>Plastic packaging</p>
        </div>
    </div>
</div>

<style>
   .hero-banner{
    background-color: #6DA5BC;
   }

   .hero-content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 48px;
       align-items: center;
       padding: 80px 0;

    }
    .image-top-wide {
        display: flex;
        flex-direction: column;
    }
    .image-wide {
        background-color: var(--gray-1);
        height: 300px;
        width: 100%;
    }
    .two-column{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
    }
    @media (max-width: 750px) {
        .two-column {
            grid-template-columns: 1fr;
        }
    }
</style>
