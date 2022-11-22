<script>
    import { fly } from 'svelte/transition';
    import { inview } from "svelte-inview";
    
    let ready = false;
    function backToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    </script>
    
    <div class="footer">
        <section use:inview
            on:enter={(event) => {
                ready = true;
             }}>
            {#if ready}
            <h1 in:fly="{{ y: 150, duration: 1600 }}">Attribution</h1>
            <div class="footer-text">
                <p in:fly="{{ y: 150, duration: 1600 }}">
                    The GLTF used in this example was made by <a href="https://www.netgis.de/">netgis:</a>
                    <a href="https://sketchfab.com/netgis">https://sketchfab.com/netgis</a>
                </p>
                <p in:fly="{{ y: 150, duration: 1600, delay:500 }}">
                    follow me on twitter: <a href="https://twitter.com/reyfenberg">@reyfenberg</a>
                </p>
                <p in:fly="{{ y: 150, duration: 1600, delay:500 }}">
                    want to work with us? <a class="kaldera-link" href="https://kaldera.dev">kaldera.dev</a>
                </p>
            </div>
             <!-- Back to top button -->
            <div in:fly="{{ y: 150, duration: 1600, delay:700 }}">
                <a on:click={backToTop} id="button"></a>
            </div> 
            {/if}
        </section>
       
    </div>
    
    <style lang="scss">
      .footer h1 {
            margin-top: 0;
            font-weight: 200;
            font-size: 6rem;
            color: white;
            z-index:1;
            @media only screen and (max-width: 768px)  {
                font-size: 3rem;    
            }
        }
        
        .footer p {
            font-weight: 200;
            font-family: 'Pangea', sans-serif;
            font-size: 2rem;
            line-height: 3em;
            width: 80%;
            margin: 0 auto;
            color: white;
            @media only screen and (max-width: 768px)  {
                font-size: 1.5rem;
            }
        }
        .footer {
            color: white;
            height: 100vh;
            position: relative;
            display: flex;
            place-items: center;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            background-color: black;
            z-index: 2;
        }
        a {
            color: white;
        }
    
        #button {
            display: inline-block;
            background-color: #333;
            width: 50px;
            height: 50px;
            text-align: center;
            border-radius: 4px;
            z-index: 1000;
        }
        #button::after {
            content: "\f077";
            font-family: FontAwesome;
            font-weight: normal;
            font-style: normal;
            font-size: 2em;
            line-height: 50px;
            color: #fff;
        }
        #button:hover {
        cursor: pointer;
            background-color: #FF9800;
        }
        #button:active {
            background-color: #555;
        }
        .kaldera-link {
            color: #FF9800;
        }
    </style>
    
    