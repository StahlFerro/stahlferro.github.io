<template>
  <div>
    <section class="hero is-medium is-black">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img src="/logos/Fortress_200px.png" width="200px" height="200px" />
          <h1 class="title is-1">FortressBot</h1>
          <p class="subtitle is-4">The bane of server invite links and hoisters</p>
          <p>
            <a href="https://discordbots.org/bot/300611567874080769">
              <img
                src="https://discordbots.org/api/widget/servers/300611567874080769.svg?noavatar=true"
                alt="FortressBot"
              />
            </a>
          </p>
          <br />
          <p>
            <a
              href="https://discordapp.com/oauth2/authorize?client_id=300611567874080769&scope=bot&permissions=1560673535"
              class="button is-neon-blurple is-large"
            >
              <span class="icon">
                <i class="fab fa-discord"></i>
              </span>
              <span>Add to your server</span>
            </a>
          </p>
          <br />
          <div class="has-text-centered">
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <a href="site.discord_server" class="button is-neon-trident-cyan is-medium">
                  <span class="icon">
                    <i class="fas fa-info-circle"></i>
                  </span>
                  <span>HQ/Support</span>
                </a>
              </p>
              <p class="control">
                <a href="https://fortressbot.readthedocs.io" class="button is-neon-grey is-medium">
                  <span class="icon">
                    <i class="fas fa-book"></i>
                  </span>
                  <span>Documentation</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-black">
      <div class="hero-body">
        <div class="container">
          <div class="content">
            <p class="title is-2 has-text-centered">
              <span class="is-iron-red">Primarily</span> built for moderation
            </p>
            <ul>
              <li class="is-iron-red">Administration</li>
              <ul>
                <li>User moderation (mute, temp mute, kick, ban, mass-kick, mass-ban, role management, etc.)</li>
                <li>Server moderation (message mass-prune, pinning messages, export channel history, etc.)</li>
              </ul>
              <li class="is-iron-red">InviteNuke (The automatic invite link remover)</li>
              <ul>
                <li>Activate or deactivate the InviteNuke</li>
                <li>Set invite exceptions</li>
                <li>Set role exceptions</li>
                <li>Set channel exceptions</li>
                <li>Logging all InviteNuke actions</li>
              </ul>
              <li class="is-iron-red">Lockdown [UNDER CONSTRUCTION]</li>
              <ul>
                <li>Channel lock</li>
                <li>Server lock</li>
              </ul>
              <li
                class="is-iron-red"
              >NameWash (Auto-dehoist and ascii-fy of usernames by assigning a cleaned version as their nicknames)</li>
              <ul>
                <li>Activate or deactivate the NameWash</li>
                <li>Set different wash modes between ASCIIfy, dehoist or both</li>
                <li>Set what characters are considered as hoisting</li>
                <li>Logging all NameWash actions</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-black">
      <div class="hero-body">
        <div class="container">
          <div class="content">
            <p class="title is-2 has-text-centered">
              With various
              <span class="is-iron-blue">secondary</span> utilities
            </p>
            <ul>
              <li
                class="is-iron-blue"
              >Utility (a large collection of discord related utility commands)</li>
              <ul>
                <li>User, server, channel and role information lookup</li>
                <li>Emote magnification</li>
                <li>..and much more</li>
              </ul>
              <li
                class="is-iron-blue"
              >Technical (a collection of commands for non-discord technical utilities)</li>
              <ul>
                <li>Character information lookup</li>
                <li>String utilities</li>
                <li>...and others</li>
              </ul>
              <li class="is-iron-blue">Entertainment (The ubiquitous fun commands)</li>
              <ul>
                <li>1v1</li>
                <li>rate</li>
                <li>roll</li>
                <li>...and many more</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
