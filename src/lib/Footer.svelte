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
            
            <div class="footer-text">
                <h1 in:fly="{{ y: 150, duration: 1600 }}">Data & Attributions</h1>
                <p in:fly="{{ y: 150, duration: 1600, delay:500 }}">
                    This work is inspired by the <a class="kaldera-link" href="https://www.zeit.de/wissen/2022-10/weltraumschrott-satelliten-raumfahrt-gefahr-forschung" target="_blanck">this</a>
                    article from the german newspaper "Die Zeit", visualizing space debris puplished on 7. Nov 2022.
                </p>
                <p in:fly="{{ y: 150, duration: 1600, delay:500 }}">
                    The satellite data was downloaded from <a class="kaldera-link" href="https://www.space-track.org/">space-track.org</a>. The positioning of the satellites is based on random values and does not reflect the actual position of the satellites.
                </p>
                <p in:fly="{{ y: 150, duration: 1600, delay:500  }}">
                    The satellite model: <a class="kaldera-link" href="https://sketchfab.com/3d-models/simple-satellite-low-poly-free-f23b484cda664f1cb91b4f62ea5ef8bf">"Simple Satellite Low Poly Free"</a>
                    by <a class="kaldera-link" href="https://sketchfab.com/djalalxjay/">DjalalxJay</a> licensed under CC-BY-4.0
                </p>
                <p in:fly="{{ y: 150, duration: 1600, delay:500 }}">
                    Follow me on twitter: <a class="kaldera-link" href="https://twitter.com/reyfenberg">@reyfenberg</a>
                </p>
                <p in:fly="{{ y: 150, duration: 1600, delay:500 }}">
                    Want to work with us? <a class="kaldera-link" href="https://kaldera.dev">kaldera.dev</a>
                </p>
            </div>
            
             <!-- Back to top button -->
            <div class="button-div"in:fly="{{ y: 150, duration: 1600, delay:700 }}">
                <a on:click={backToTop} id="button"></a>
            </div> 
            {/if}
        </section>
    </div>
    
    <style lang="scss">

    section {
        width: 100%;
        display:inline-block;
        margin-left: 2em;
    }
      .footer h1 {
            font-weight: 200;
            font-size: 3rem;
            color: white;
            z-index:1;
        }

        .footer-text {
            font-size: 2em;
        }
        
        .footer p {
            font-weight: 200;
            font-size: 1rem;
            line-height: 3em;
            margin: 0 auto;
            color: white;
            @media only screen and (max-width: 768px)  {
                font-size: 1.5rem;
            }
        }
        .footer {
            color: white;
            height: 50vh;
            position: relative;
            display: flex;
            place-items: start;
            flex-direction: column;
            justify-content: start;
            text-align: start;
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

        .button-div {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .kaldera-link {
            color: #FF9800;
        }
    </style>
    
    