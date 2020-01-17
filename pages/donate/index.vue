<template>
  <div>
    <section class="hero is-fullheight-with-navbar is-dark-2">
      <div class="hero-body">
        <div class="container">
          <div class="content has-text-centered">
            <h1 class="title is-1">Donations</h1>
            <p>
              Making VFX-animation videos and developing softwares that are free and open source, in hopes to provide both high quality entertainment
              and technical solutions to everyone without charge, is my highest form of passion. However, with current economic disparities, my focus
              are ultimately divided between these two and my IRL software dev job.
            </p>
            <p>
              With the rapidly declining opportunities on my local area and how dev jobs here cover nothing more than minimum living costs, I decided to
              reach out for support on the international platform to help reduce the financial burden of me and my sibling's education fees.
            </p>
            <p>
              Doing just either one of VFX-animation videos or software development takes a huge amount of time and effort. This is the chance in which hopefully,
              through this donation, I can eventually make this my full time job. Not just a job, but it's one I will never retire from.
            </p>
            <a v-bind:href="urls.patreon" class="button is-patreon-coral is-large">
              <span class="icon">
                <i class="fab fa-patreon"></i>
              </span>
              <span>Patreon</span>
            </a>
            <a v-bind:href="urls.kofi" class="button is-kofi-cyan is-large">
              <span class="icon">
                <img class="image" src="/logos/ko-fi_round.png" style="padding: 4px;" />
              </span>
              <span>Ko-fi</span>
            </a>
            <a v-bind:href="urls.liberapay" class="button is-liberapay-yellow is-large">
              <span class="icon">
                <img class="image" src="/logos/liberapay_white_on_yellow.svg" style="padding: 4px;" />
              </span>
              <span>Liberapay</span>
            </a>
            <!-- <a class="button is-large"
                            href="https://www.paypal.com/c2/webapps/mpp/paypal-popup?locale.x=en_C2"
                            title="PayPal"
                            onclick="javascript:window.open('https://www.paypal.com/c2/webapps/mpp/paypal-popup?locale.x=en_C2',
                            'WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"
                            >
                            <span class="icon" style="width: 110px;">
                                <img src="/logos/PP_logo_h_100x26.png" alt="PayPal Logo" >
                            </span>
            </a>-->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const { generate_meta, tag_canonical_url } = require("@@/utils/meta_handler.js");
let page_path = "/donate";
let title = "Donations";
let meta_list = generate_meta({
    "title":title,
    "description": "Donations to support the development of free software and VFX videos that StahlFerro makes",
    "image": '/thumb/Donations_Thumb.png',
    "theme_color": "#e76544",
    "path": page_path
  }
);

let urls = require("@@/config/externalinks.json");
let data = {
  urls: urls
};

export default {
  head() {
    return {
      title: title,
      meta: meta_list,
      link: tag_canonical_url(page_path),
    };
  },
  data() {
    return data;
  }
};
</script>
