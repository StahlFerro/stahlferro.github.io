<template>
    <div>
        <section class="hero is-medium is-fullheight-with-navbar is-dark-2">
            <div class="hero-body">
                <div class="container">
                    <div class="content commission-info">
                        <h1 class="title is-1">EMERGENCY COMMISSIONS</h1>
                        <p>
                            I'm opening this emergency commission to help with urgent bills that are near due.
                            My minimum wage job is not helping me enough and I need to help fund both me and my sibling's university fees.
                            This commission will remain open until further notice.
                        </p>
                        <br/>

                        <h1 class="title is-2">Disclaimer</h1>
                        <p>
                            This type of work leans more towards 'composition' rather than 'classic animation' where each frame is drawn by hand. In essence, these
                            works consist of animation of existing static images, composited with various VFX (glows, lens flare, energy blasts, laser shots, fractals,
                            glitches, etc.).
                            A great example is to see the <nuxt-link to="/gallery" class="hover-trident-cyan">VFX Gallery</nuxt-link>, on the Blobs category.
                            <br/><br/>
                            <strong>TL;DR I'm a VFX artist, not a conventional artist; I don't draw, but composite images with VFX elements made 
                                from scratch
                            </strong>
                        </p>
                        <br/>

                        <h1 class="title is-2">Terms</h1>
                        <p>
                            The contents used to make the product, or the finished product itself must abide to these following rules:
                            <ol>
                                <li>No NSFW, R18+ and gore</li>
                                <li>No racism, politics, extremist, cyberbullying, or any other sensitive topics</li>
                                <li>Should not contain copyrighted material</li>
                            </ol>
                        </p>
                        <br/>

                        <h1 class="title is-2">Start commissioning here</h1>
                        <p>
                            <ol>
                                <li>Fill in this form: </li>
                                <li>Contact me through either my business email (forgeworkseven@gmail.com) or through Discord (username: StahlFerro#0055)
                                    If no response from you is seen 72 hours after the form is sent, the commission is invalidated
                                </li>
                                <li>Provide the static images that you want animated. If you don't have or need me to draw them, then I'm afraid you need to seek
                                    digital animators instead. Vector images can be made if you don't have them.
                                </li>
                                <li>During the process, preview images are made for you to see before the final product is made. 
                                    These cannot be shared/modified for others to see until the final product is ready.
                                </li>
                                <li>Before the finished final product is delivered to you, payment must be completed through Paypal. Follow the guide below.
                                </li>
                            </ol>
                        </p>
                        <br/>
                        
                        <h1 class="title is-2">Payment guide</h1>
                        <p>
                            <ol>
                                <li>All payments are made through Paypal (USD$)</li>
                                <li>An invoice will be delivered to your Paypal email when the finished product is ready. After completing the invoice, the product will be
                                    delivered to you.
                                </li>
                            </ol>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
var urls = require('@@/config/externalinks.json');
var data = {
    urls: urls,
};
export default {
    data: function() {
        return data
    }
}
</script>
