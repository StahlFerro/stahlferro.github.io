<template>
  <div>
    <section class="hero is-dark-2 is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="content has-text-centered">
            <h1 class="title is-1">Arknights Hybrid VFX-animation videos</h1>
            <p>
              A collection of hybrid VFX animations that parodies the mobile game Arknights
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-dark-2 is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div
              v-for="(akv, index) in ark_vids"
              class="column is-one-quarter-widescreen is-one-third-desktop is-half-tablet is-full-mobile"
              v-bind:key="index"
            >
              <div class="card is-neon-white-c">
                <div class="card-image">
                  <figure class="image">
                    <img v-bind:src="`https://img.youtube.com/vi/${akv.youtube_id}/hqdefault.jpg`" />
                  </figure>
                </div>
                <div class="card-content">
                  <a
                    v-bind:href="`https://www.youtube.com/watch?v=${akv.youtube_id}`"
                    style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
                  ></a>
                  <div class="content">
                    <p class="title is-4">{{ akv.name }}</p>
                    <p class="content">{{ akv.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-dark-2 is-medium" style="display: none;">
      <div class="hero-body">
        <div class="container">
          <div class="content">
            <pre>
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAtBmN+HlV3UZQK0sZLcLdHRcs2PXrDHYYk4sMGU0Ye0BEh8Nk
lL5+ByeQ+XVwB1KQlVTGMiQC2ZgUwVd54/dCfEewzQTBe0UWOJhyFhEUQuZvknsf
h5+fu0ZNoK35ZAZC5IR+SZtkQTldpLAoG9Ve0L06cmqeUKp8X6KCuV6vzcuWgOsF
FQ0qRWJyScxM51pRisG9y6kV88T2wahB+NKExSDijZM8FgZk3tDyj0VqR3I3RhEe
+J1GjvfJRZjEwEkO8LkIiSeUnnl28qsJscxM+OxAv3KlbWh8R+pJZqcxOb7uuidh
zX3ALiHx8KiPfWFmx9t2di2uxlUbsRQo3VlO7wIDAQABAoIBACnuESmaRi1gI2YQ
8+m9hnExZhWVG4YpMIuZQdXaJyr6yXm6Of6PYxQTWCNb/hsWU+cQd5xQ2gEC8UIa
NZyngmkg3767rrgeW5ANnfIZQ9hXgf5ef/a5aRzWv1f7aSaqdoRxfF1yuiKdUnn3
MT9Zq9t5UtQ0kmtBZfd2BG1X6CJHMd1muI6Ayr472jCPK2CoRqq2NYXgb7P/G08w
rOkfZRKhixh6z073m275SLf0ZYUyjyptjjyqg3leEvOsHHnKjgd/WwptYsvTpjoa
wUNIW0hhgSI/Q1t8Uyf2Wc+0nq1FYfnbmV4dl4Xly8xL8d/jw1VnsaZyTE+0TmwY
vLJbU7ECgYEA0WIBdDQJQ8DpNgoZ/Q10dg6t1IWX6GHPUEyru581U/UYK/cf4tGL
qhjIaMGjxX2KSoyQEhDQVoU7kJ0bUGYRRK5h4vo78TQgUCKpaZd0mWsSYtXHwFPR
2Y2Ip03eVz759qb7Oi/EEQGxAo+VyPq6DiXvJrZu+kkk9tScVuUHREsCgYEA3DKI
a+nAMl7qC0iQ7LISkMWm2YjPncZTwNxW9Pz118EOwgersWxcwdgbq6QAyMSJH1gl
Q10If1vBDE0ZSW+K2De2o3b0RnphcGfDsPskSKpTt6mz7ZxUHdc/ehA4c+/lbjSR
aB2orWdX+XHJ43jcgyDqe1YLO+NbMcYId6+A0W0CgYAYAm/+PjVNwqI7Yx8lyFQx
cW93bjZEHGskXxZWNmRsEy/JYtYSMUsdnyfj80hvTfz8nW+r0qfBNBfndkx6hKm4
QXLSDzWua/bEmaTpiceCDCgYk0ELidEHbFZeMOys/ni1UuJ+ApouBQ6iJ4rad/27
v5fTzZmeM6L8dtbSlAKoTwKBgEVCx9JZthCh9jASZTNuV5Sd9vtZoyRXa6SwKdHp
d1Kj8QZq70Bhe1OlrB5y+aQs3Yy0ZxQnQTL+I1zBK4EDysJz08ja877vY5K9sLoM
ZL9OhAKzKFtG3tZ8DAVS8M7W2G2vr0T2f0X7yZo2hnA8ZfAA/IBK8kGmI9smFSfA
Vl6JAoGBAMUeqmvScPXZ636vYlVwOHz4WvVjfvl9+zBey9pt/DdnG6T4aUKg/N08
H8NsyS8NVpQMxlgnSBRUnS0YvxftxwkUkilf1SKpjo6ZgoblkdlOSVI68gX7IoIv
zodpmayXILGtYKHSL7Dyk1dp/eWSIioi3Ki/M+Ye3VibDkaxmax6
-----END RSA PRIVATE KEY-----

-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtBmN+HlV3UZQK0sZLcLd
HRcs2PXrDHYYk4sMGU0Ye0BEh8NklL5+ByeQ+XVwB1KQlVTGMiQC2ZgUwVd54/dC
fEewzQTBe0UWOJhyFhEUQuZvknsfh5+fu0ZNoK35ZAZC5IR+SZtkQTldpLAoG9Ve
0L06cmqeUKp8X6KCuV6vzcuWgOsFFQ0qRWJyScxM51pRisG9y6kV88T2wahB+NKE
xSDijZM8FgZk3tDyj0VqR3I3RhEe+J1GjvfJRZjEwEkO8LkIiSeUnnl28qsJscxM
+OxAv3KlbWh8R+pJZqcxOb7uuidhzX3ALiHx8KiPfWFmx9t2di2uxlUbsRQo3VlO
7wIDAQAB
-----END PUBLIC KEY-----</pre>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
var ark_vids = require('./_data/arknights_videos.json');
var data = {ark_vids: ark_vids};


const { generate_meta, tag_canonical_url } = require("@/utils/meta_handler.js");
let page_path = "/videos/arknights_vfx";
let title = "Arknights VFX-animation Videos";
let meta_list = generate_meta({
  "title": title,
  "description": "Arknights meme videos composited in high quality VFX",
//   "image": "/thumb/BFMLG_Thumb.png",
  "theme_color": "#dddddd",
  "path": page_path
});

export default {
    data () {
      return data;
    },
    head () {
      return {
      title: title,
      meta: meta_list,
      link: tag_canonical_url(page_path),
    };
  }
}
</script>
