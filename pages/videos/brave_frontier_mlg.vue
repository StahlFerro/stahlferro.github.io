<template>
  <div>
    <section class="hero is-dark-2-gold is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="content has-text-centered">
            <img src="/thumb/BFMLG_Thumb.png" width="800px" height="450px" />
            <h1 class="title is-1">Brave Frontier MLG Series</h1>
            <h2 class="title is-3">2015 - 2017</h2>
            <p>
              Where everything started. This parody series of the mobile game Brave Frontier is a collection of 8 highly intense vfx-composited mlg videos
              in various editing styles, ranging from the classic MLG montage parody edit, to the cinematic-animation style.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-dark-2">
      <div class="hero-body">
        <div class="container">
          <div class="content"></div>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-dark-2">
      <div class="hero-head">
        <div class="container">
          <div class="content">
            <p class="has-text-centered">
              <a
                href="https://www.youtube.com/watch?v=plIWPrlFA4A&list=PLPOe5hWmeTIfTADxCYz6mG5rmgpR1YSzE"
                class="button is-youtube-red is-large"
              >
                <span class="icon">
                  <i class="fab fa-youtube"></i>
                </span>
                <span>Watch all on YouTube</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div v-for="(bf, index) in bf_videos" class="column is-one-quarter" v-bind:key="index">
              <div class="card is-neon-gold">
                <div class="card-image">
                  <figure class="image">
                    <img v-bind:src="`https://img.youtube.com/vi/${bf.youtube_id}/hqdefault.jpg`" />
                  </figure>
                </div>
                <div class="card-content">
                  <a
                    v-bind:href="`https://www.youtube.com/watch?v=${bf.youtube_id}`"
                    style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
                  ></a>
                  <div class="content">
                    <p class="title is-4">{{ bf.name }}</p>
                    <p class="content">{{ bf.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-white-c-dark-3">
      <div class="hero-body">
        <div class="container">
          <div class="content justified">
            <h2 class="title is-1 has-text-centered">
              <span class="is-dark-2-gold">Compositor's Notes</span>
            </h2>
            <p></p>
            <ol class="numbered-list">
              <li>
                <p class="is-dark-2-gold">Rowgen Quickscopes Karl</p>
                <p class="tabbed">
                  The very first video that I created. Raw montage parody style edit with Rowgen in the spotlight. He was the coolest unit back during the 6* era.
                  Everyone used him to cheese all the game's trial gamemode. That gave me the idea of making an MLG-fied battle where Rowgen finishes off Karl
                  with a lightning quickscope, also the fact that he is a sniper makes it even better.
                </p>
                <p class="tabbed">
                  This video was made with very few or basic knowledge in After Effects,
                  so the MLG-fied battle was very crudely edited. Some other time after posting it on youtube, it went into the r/bravefrontier subreddit.
                  It gained quite a lot of upvotes compared to the sub's averages. I also realized it was the very first MLG parody video of the game. The division of
                  the audience watching the very first video of this kind was genuinely entertaining.
                </p>
              </li>
              <li>
                <p class="is-dark-2-gold">Swaaga Raaga</p>
                <p class="tabbed">
                  After discovering the first went into the subreddit, I then quickly make the second one. It has the same crudely MLG-fied battle edit like the first, but
                  this time involving a kind of twist where the loominarty reveals itself and caught the squad off guard. The battle then finishes off with Raaga challenging
                  the loominarty in a 1v1 car race, which is an absolutely random idea I don't even know why I put it in.
                </p>
              </li>
              <li>
                <p class="is-dark-2-gold">Charude Buffstorm</p>
                <p class="tabbed">
                  Charla was the best support unit on the 7* era. Doesn't attack, but provided an unbelievable amount of buffs at that time. I had no idea why I mixed
                  the iconic unit into a Darude Sandstorm parody, but it happened. It has two scenes that goes alongside each other. The darude sandstorm video crudely edited with
                  motion-tracked unit heads (the first video that uses this technique) and the montage parody-edited Mistzug raid battle.
                </p>
                <p class="tabbed">
                  The Sandstorm scene is a story
                  where Themis stole doritos from Shida and his clone, using the original Sandstorm footage's chase scene to efficiently depcict the chase. The Mistzug battle
                  is the same crudely MLG-fied battle like the first video.
                </p>
              </li>
              <li>
                <p class="is-dark-2-gold">Brave Frontier.exe</p>
                <p class="tabbed">
                  The rise of the salt was evident on everyone regardless of which game servers we played on. Even I got the salt eventually as it is such the prominent
                  nature of the game's gacha-centric element. The idea was in great spite, the summoner confronts the game's publisher Gimu using units 'evolved' into their
                  MLG forms. MLG-fied Shida and Charude (Charla's MLG form) was then picked to confront Gimu.
                </p>
                <p class="tabbed">
                  The battle used in this video was Karna Masta's Menon battle.
                  Being one of the game's boss battle, Karna Masta as one of the most powerful beings was picked to represent Gimu, and this Menon level was picked because
                  the squad was 100% guaranteed to get nuked by Karna. This also adds a key event to the video where MLG-fied Selena replaces Charude to take on Karna Masta
                  with the squad in the next Menon Karna Masta battle where the nuke is 100% guaranteed to not finish off the squad with mitigation buff active, leaving Selena
                  to unleash her Ultimate Brave Burst.
                </p>
              </li>
              <li>
                <p class="is-dark-2-gold">How 2 arena</p>
                <p class="tabbed">
                  With a great lack of ideas on the next video, I hastily picked Mifune to star this one. He was never often seen appearing in people's main or arena squads.
                  But it was then the unit gained an omni evolution, where his Attack attribute spiked incredibly, and quickly entered the arena and colloseum squad at that time.
                  There was nothing particularly special on this video aside from the usual crude MLG-fied arena battle.
                </p>
              </li>
              <li>
                <p class="is-dark-2-gold">Brave Frontier is Illuminati</p>
                <p class="tabbed">
                  Heavily and obviously inspired by Peladophobian's "[X] is Illuminati" videos, this time it is applied to this game. No further description is needed to
                  prove that the loominarty runs this salt-crusted mobile game.
                </p>
              </li>
              <li>
                <p class="is-dark-2-gold">Brave Frontier in a Nutshell.mp5</p>
                <p class="tabbed">
                  This video compared to others was different in editing style. It has a lot of scenes where for the first time, involves serious amounts of compositing.
                  Notably the parody Brave Frontier Global Exclusive advertisement (taking some inspirations from Materialisimo's The Amazing Pill video), the desktop chat
                  scene with Misasagi, MLG-fying the r/bravefrontier subreddit page, and finally the purely composited Karna Masta boss battle.
                </p>
                <p class="tabbed">
                  The battle was the first time I tried to composite a battle scene from scratch using the game's unit sprites, rather than recording a in-game battle footage
                  and lazily slap MLG elements to it. Although it might be the shortest part of the video, the battle scene took the most time and effort to
                  composite. In total, this video took exactly 30 days to make and a surprising number of 1433 layers in After Effects.
                </p>
              </li>
              <li>
                <p class="is-dark-2-gold">Swaglord Four</p>
                <p>Oh boy this is gonna be a long one, because the video itself is a massive project.</p>
                <p class="tabbed">
                  Time passes by, and my interest in Brave Frontier started to diminish. The game was not as enjoyable as it was before, and I decided to end my Brave
                  Frontier gameplay. However, before leaving the whole game and community behind, I thought of making the ultimate Brave Frontier video, the magnum opus
                  of the Brave Frontier MLG series. It then finally became a video that is so different compared to the rest of those in the series.
                </p>
                <p class="tabbed">
                  The only video that does not use any form of in-game recording, it is almost fully rendered in 3D environment and every single element in the video
                  are put together from scratch. Intensively composited cinematic shots and vfx, full-3D scenes and topped off with not one, but three composited battles.
                  The ground and background planes of some scenes are Brave Frontier original game backgrounds turned into 2.5D layers to give the scene a parallax effect.
                  The use of 3D environment in the video gave it an interesting element of depth. Battle vfx are mostly custom, as well as the sprites of the 4 summoners.
                  Two of them being created by me, while one is from u/KandyKrushing and the other u/DMano3o, both are winners from my summoner contest hosted on the subreddit.
                </p>
                <p class="tabbed">
                  A majority of the units used in this video were based on notable redditor favourites. The rest are then randomly chosen from the game, with the final three
                  being Charla, Rowgen and Ragshelm. Ragshelm becomes the one to deal the final strike towards the final boss, a tribute to my favourite forest dragon. Just
                  like the 7th video's final battle, the 3 battle scenes involves the most amount of compositing and careful layering to simulate a unique style of 2.5D
                  hack-and-slash battle.
                </p>
                <p class="tabbed">
                  The story of this video is summarized as 4 legendary summoners (swaglords) that has been previously expelled from the
                  Summoners Hall returning back to help stop a planetary invasion. With the help of an ice wolf that sided with the humans, the 4 summoners stormed the
                  Old Capital to take out the invasion leader.
                </p>
                <p class="tabbed">
                  I started working on this one in December 2016, and is done in August 2017, finishing with a massive 12 minute video composited from more than
                  3500 layers in After Effects, and took around 8 days with my crap Lenovo laptop constantly on 24/7 to render out the monstrosity with luck on my side
                  that it does not combust or explode itself. The amount of time and effort it took to make the rest of the 7 videos combined is nothing compared to
                  Swaglord Four's development.
                </p>
                <p class="tabbed">
                  With a sudden drastic change in the editing style, it gained a very wide spectrum of receptions. Some really loved the cinematics, while others diminish the video, stating
                  the lack of intense MLG edits watered down the video's quality. However, above all of that I am really glad that just like the first video, the finale
                  divided the audience once more, or more accurately spread them all over a huge spectrum.
                </p>
              </li>
            </ol>
            <h3>Afterword</h3>
            <p>
              I greatly thank the people behind the datamining of image assets of the game, that has helped greatly in creating especially the 7th and 8th video.
              Props to the moderators of the brave frontier reddit to allow shitposts in the first place. Without it I wouldn't think I have a chance to display
              iterations of progress evident on my shitposts. I had a great time with the gameplay, memes and community.
            </p>
            <p>
              I am also aware of Brave Frontier 2 and The Last Summoner. The series still ends with Swaglord Four, and I do not plan to continue it regardless of
              whether or not new BF games are published.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
var bf_videos = require('./_data/bf_videos.json')
var data = {bf_videos: bf_videos};
export default {
    data: function() {
        return data;
    }
}
</script>
