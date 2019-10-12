<template>
<section class="hero is-dark-2">
    <div class="hero-body">
        <div class="container">
            <div class="content paragraph-double-space-after">
                <h1 class="title is-1">About StahlFerro</h1>
                <p>Hello! I am StahlFerro - I make hybrid VFX-composite-animations in the form of youtube videos and GIFs, and also a developer of various softwares</p>
                <p><strong>&gt; VFX Composite-Animations</strong><br/>
                    Ranging from the crudely-made Montage Parody-style videos, to cinematic animation and VFX composites, I create a very wide range
                    of unique entertainment videos that can be considered it's own category. I play around with a lot of VFX and composition of
                    static images, both combined to produce a hybrid form of animation that displays an intense visual graphic experience. Most of those
                    works either end up as a youtube video, or as a short GIF
                </p>
                <p><strong>&gt; Software Developer</strong><br/>
                    I'm the sole developer of the Discord moderation bot FortressBot, a bot made with auto-moderative features.
                    Aside from FortressBot, I also develop StatusBot, a little discord bot to notify me if some bots I monitor goes offline.
                    I'm working on projects and tools that help me with my works, and I host them on Github so other people can find
                    use of it
                </p>
                <p></p>
                <p>Although videos require weeks to months to work on, and infrequent youtube uploads make me appear very inactive,
                    I am most active on my Discord server, where I centralize both FortressBot's development and my youtube community inside it.
                    I monitor the server everyday regardless of its current activity.<br/>
                    <a class="hover-trident-cyan" v-bind:href="discord_server_url">Come have a visit!</a></p>
            </div>
        </div>
    </div>
</section>

</template>

<script>
var extlinks = require('@@/config/externalinks.json');
var discord_server_url = extlinks.discord;
var data = {
    discord_server_url: discord_server_url,
}
export default {
    data: function() {
        return data;
    }
}
</script>