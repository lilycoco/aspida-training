<template>
  <div>
    <div class="header">
      <h1 class="title">Nuxt - TypeScript - Aspida Training</h1>
    </div>
    <div class="container">
      <div class="youtube-video">
        <iframe
          src="https://www.youtube.com/embed/nteDXuqBfn0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="video-size"
        ></iframe>
        <div class="video-description">
          <h2>タイトル:</h2>
          <p>{{ res.items[0].snippet.title }}</p>
          <h2>概要:</h2>
          <p>{{ res.items[0].snippet.description }}</p>
          <h2>いいね:</h2>
          <p>{{ item.items[0].statistics.likeCount }}</p>
        </div>
        <div class="links">
          <a href="https://nuxtjs.org/" target="_blank" class="button--green">
            Documentation
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Logo from '~/components/atoms/Logo.vue'

@Component({
  components: { Logo },
  async asyncData() {
    return {
      res: await $nuxt.$api.videos.$get({
        query: {
          id: 'nteDXuqBfn0',
          key: 'AIzaSyCCpogX6gpDbkC5Hqsm3JPVdWlwy-xcGtM',
          part: 'snippet'
        }
      })
    }
  }
})
export default class extends Vue {
  res!: any
  @Prop()
  test!: {
    hoge: string
  }

  item: any = {
    kind: 'youtube#videoListResponse',
    etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/C-LzljbgwuF-uHVcnB5XofwfJjg"',
    pageInfo: {
      totalResults: 1,
      resultsPerPage: 1
    },
    items: [
      {
        kind: 'youtube#video',
        etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/2IMR9OQZvh-3GbCGHywDCDFK6IY"',
        id: 'PoULjlAlk38',
        snippet: {
          publishedAt: '2019-05-19T11:57:45.000Z',
          channelId: 'UCutJqz56653xV2wwSvut_hQ',
          title: '【1年ぶりの復活】まさかの第２回！寝たら"即帰宅"の旅！Part１',
          description:
            'part1\nhttps://youtu.be/PoULjlAlk38\n\npart2\nhttps://youtu.be/Z3a8oc9L8Ac\n\npart3\nhttps://youtu.be/Og4XJ3uIvls\n\npart4\nhttps://youtu.be/f4wfKwQgM8k\n\npart5\nhttps://youtu.be/IX0TS86mLg4\n\npart6\nhttps://youtu.be/Zqp9faSBMKY\n\n【撮影協力】\nネオオリエンタルリゾート八ヶ岳高原\nhttps://yatsugatake.izumigo.co.jp\n清里の森\nhttp://www.kiyosatonomori.co.jp\n\nチェックマン\n秋山ペイソン\nYouTube：https://www.youtube.com/channel/UC_HHWr2CYnFICGTeKV_PMFw\nTwitter：https://twitter.com/akiyamapeison\n\nくわがたゆうきがっちゃん\nYouTube：https://www.youtube.com/channel/UClKZrzm5bKxLvTSenDDCJCw\nTwitter：https://twitter.com/nahanaha_smile\n\nみんなが体調を崩したのはこの撮影のせいではないのかという調査報告もあるってばよ。\nみんなも誰が生き残るか予想して観てねってばよ！\n(編集：虫眼鏡)\n\nどうも、東海オンエアです。\nぜひチャンネル登録お願いします！\n\nサブチャンネル【東海オンエアの控え室】もぜひチャンネル登録してね！！！\nhttps://www.youtube.com/channel/UCynIYcsBwTrwBIecconPN2A\n\nグッズ購入はこちらから！！\nhttps://goo.gl/YtauZW\n\n有料メンバーシップの登録はこちらから！\nhttps://www.youtube.com/channel/UCutJqz56653xV2wwSvut_hQ/join\n\nお仕事の依頼はこちらから\nhttps://www.uuum.co.jp/inquiry_promotion\n\nファンレターはこちらへ\n〒106-6137 東京都港区六本木 6-10-1 六本木ヒルズ森タワー 37階UUUM株式会社　東海オンエア宛\n\n【Twitterアカウント】\nてつや→https://twitter.com/TO_TETSUYA\nとしみつ→https://twitter.com/TO_TOSHIMITSU\nしばゆー→https://twitter.com/TOKAI_ONAIR\nりょう→https://twitter.com/TO_RYOO\nゆめまる→https://twitter.com/TO_yumemarucas\n虫眼鏡→https://twitter.com/TO_ZAWAKUN',
          channelTitle: '東海オンエア',
          categoryId: '23',
          liveBroadcastContent: 'none',
          localized: {
            title:
              '【1年ぶりの復活】まさかの第２回！寝たら"即帰宅"の旅！Part１',
            description:
              'part1\nhttps://youtu.be/PoULjlAlk38\n\npart2\nhttps://youtu.be/Z3a8oc9L8Ac\n\npart3\nhttps://youtu.be/Og4XJ3uIvls\n\npart4\nhttps://youtu.be/f4wfKwQgM8k\n\npart5\nhttps://youtu.be/IX0TS86mLg4\n\npart6\nhttps://youtu.be/Zqp9faSBMKY\n\n【撮影協力】\nネオオリエンタルリゾート八ヶ岳高原\nhttps://yatsugatake.izumigo.co.jp\n清里の森\nhttp://www.kiyosatonomori.co.jp\n\nチェックマン\n秋山ペイソン\nYouTube：https://www.youtube.com/channel/UC_HHWr2CYnFICGTeKV_PMFw\nTwitter：https://twitter.com/akiyamapeison\n\nくわがたゆうきがっちゃん\nYouTube：https://www.youtube.com/channel/UClKZrzm5bKxLvTSenDDCJCw\nTwitter：https://twitter.com/nahanaha_smile\n\nみんなが体調を崩したのはこの撮影のせいではないのかという調査報告もあるってばよ。\nみんなも誰が生き残るか予想して観てねってばよ！\n(編集：虫眼鏡)\n\nどうも、東海オンエアです。\nぜひチャンネル登録お願いします！\n\nサブチャンネル【東海オンエアの控え室】もぜひチャンネル登録してね！！！\nhttps://www.youtube.com/channel/UCynIYcsBwTrwBIecconPN2A\n\nグッズ購入はこちらから！！\nhttps://goo.gl/YtauZW\n\n有料メンバーシップの登録はこちらから！\nhttps://www.youtube.com/channel/UCutJqz56653xV2wwSvut_hQ/join\n\nお仕事の依頼はこちらから\nhttps://www.uuum.co.jp/inquiry_promotion\n\nファンレターはこちらへ\n〒106-6137 東京都港区六本木 6-10-1 六本木ヒルズ森タワー 37階UUUM株式会社　東海オンエア宛\n\n【Twitterアカウント】\nてつや→https://twitter.com/TO_TETSUYA\nとしみつ→https://twitter.com/TO_TOSHIMITSU\nしばゆー→https://twitter.com/TOKAI_ONAIR\nりょう→https://twitter.com/TO_RYOO\nゆめまる→https://twitter.com/TO_yumemarucas\n虫眼鏡→https://twitter.com/TO_ZAWAKUN'
          },
          defaultAudioLanguage: 'ja'
        },
        contentDetails: {
          duration: 'PT11M3S',
          dimension: '2d',
          definition: 'hd',
          caption: true
        },
        status: {
          uploadStatus: 'processed',
          privacyStatus: 'public',
          license: 'youtube',
          embeddable: true
        },
        statistics: {
          viewCount: 686092,
          likeCount: 122818,
          dislikeCount: 2362,
          favoriteCount: 0
        }
      }
    ]
  }
}
</script>

<style scoped>
/* autoprefixer grid: no-autoplace */
.container {
  display: grid;

  /* Caution: `min-height: 100vh` does not work in IE 11 */
  height: 100vh;
  margin: 0 auto;
  text-align: center;

  /* Caution: `1fr` has different results in IE 11 */
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
}
.header {
  display: inline-block;
  width: 100%;
  height: 100px;
  text-align: center;
  background: #74b189;
}
.title {
  padding: 20px 0;
  font-family: 'ヒラギノ角ゴシック', 'Hiragino Sans', sans-serif;
  font-size: 42px;
  color: #fff;
  word-spacing: 5px;
}
.container .youtube-video {
  grid-column: 4 / 10;
  grid-row: 1 / 6;
}
.container .youtube-video .video-size {
  width: 560px;
  height: 310px;
  padding-top: 5px;
}

.links {
  padding-top: 15px;
}

.video-description {
  padding-left: 10%;
  text-align: left;
}

.video-description > p {
  padding-top: 3px;
}

.button--green {
  display: inline-block;
  padding: 10px 30px;
  color: #3b8070;
  text-decoration: none;
  border: 1px solid;
  border-radius: 4px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  padding: 10px 30px;
  margin-left: 15px;
  color: #35495e;
  text-decoration: none;
  border: 1px solid;
  border-radius: 4px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
