<template>
  <Section
    title="Projects"
    icon="mdi-briefcase-outline"
  >
    <v-timeline dense>
      <v-timeline-item
        v-for="project in projects"
        :key="project.title"
        small
        color="secondary"
        class="pa-0"
      >
        <v-row>
          <v-col cols="1" align-self="center">
            <span>{{ project.from }}</span>
            <span v-if="project.active">-</span>
            <span v-else-if="project.to">- {{ project.to }}</span>
          </v-col>

          <v-col>
            <v-card
              tile
              flat
            >
              <v-card-title class="pt-0">
                <a :href="project.link" target="_blank">
                  {{ project.title }}
                </a>
              </v-card-title>
              <v-card-subtitle class="mt-0">
                <v-chip
                  v-for="keyword in project.keywords"
                  :key="keyword"
                  class="mr-2"
                  outlined
                >
                  {{ keyword }}
                </v-chip>
              </v-card-subtitle>

              <v-card-text
                v-html="project.text"
              />
            </v-card>
          </v-col>
          <v-col cols="2">
            <a :href="publicPath(project.screenshot)" target="_blank">
              <v-img
                :src="publicPath(project.screenshot)"
              />
            </a>
          </v-col>
        </v-row>

        <v-divider />
      </v-timeline-item>
    </v-timeline>
  </Section>
</template>

<script>
import Section from "./Section";

export default {
  name: "Projects",
  components: { Section },
  data() {
    return {
      projects: [
        {
          title: "CodeChecker",
          link: "https://github.com/Ericsson/codechecker",
          from: "2017",
          active: true,
          company: "Ericsson",
          keywords: [
            "Python", "JavaScript", "Vue", "Thrift", "Docker",
            "Static analysis", "clang", "PostgreSQL"
          ],
          screenshot: "/images/projects/codechecker.png",
          text: `
            CodeChecker is a open-source static analysis infrastructure to find
            potentional software bugs in C/C++ programs.<br><br>
            I did the following:
            <ul>
              <li>Implementing most of the new features.</li>
              <li>More than <b>+1100</b> Github commits under 2 years.</li>
              <li>Full UI rewrite from dojo to <b>Vuejs</b>.</li>
              <li>Introduce <b>unit</b> and <b>e2e</b> UI tests.</li>
              <li>Snap / Pypi packages.</li>
              <li>Many performance improvements.</li>
              <li>Creating docker images.</li>
              <li>Creating service setups and managing services.</li>
              <li>Database backups, database migrations and service
                  upgrades.</li>
              <li>User supports.</li>
            </u>
          `
        },
        {
          title: "Kelenföldi Református Énekeskönyv",
          link: "https://play.google.com/store/apps/details?" +
                 "id=hu.csordasmarton.kelenref",
          from: "2020",
          active: false,
          keywords: [ "Android", "Kotlin" ],
          screenshot: "/images/projects/kelenref.png",
          text: `
            This is an Android mobile application which contains songs of the
            Kelenföldi Református Énekeskönyv.<br/> <br/>
            <i>Main functions:</i>
            <ul>
              <li>List / search / show songs.</li>
              <li>Change font size / song order.</li>
              <li>Favorites.</li>
            </ul>
          `
        },
        {
          title: "Heidelberg Catechism",
          link: "https://play.google.com/store/apps/details?" +
                 "id=hu.csordasmarton.heidelbergikate",
          from: "2019",
          active: false,
          keywords: [ "Android", "Java" ],
          screenshot: "/images/projects/heidelberg_catechism.png",
          text: `
            This is an Android mobile application which contains the questions
            and the answers of the fundamental beliefs of the Reformed Church
            with Bible references.<br/> <br/>
            <i>Main functions:</i>
            <ul>
              <li>Show questions with categories.</li>
              <li>Show answers when clicking on a question.</li>
              <li>Show Bible references under the answers.</li>
              <li>Open references in Youversion mobile app when clicking
            on it.</li>
            </ul>
          `
        },
        {
          title: "CodeCompass",
          link: "https://github.com/Ericsson/codecompass",
          from: "2015",
          to: "2017",
          active: false,
          company: "Ericsson",
          keywords: [
            "C/C++", "JavaScript", "dojo", "CMake", "Thrift", "ODB",
            "Static analysis"
          ],
          screenshot: "/images/projects/codecompass.png",
          text: `
            CodeCompass is an open-source code comprehension and navigation
            tool developed with large-scale software projects in mind.<br><br>
            I did the following:
            <ul>
              <li>New infrastructure and <i>pluginable architecture</i>.</li>
              <li>Full rewrite from scratch.</li>
              <li>Introduce <b>CMake</b> build system.</li>
              <li><i>Pointer analysis</i>.</li>
              <li>UI improvements.</li>
              <li>More than <b>+170</b> commits.</li>
            </ul>
          `
        },
        {
          title: "Dicsdalok (Web)",
          link: "http://dicsdalok.hu",
          from: "2016",
          active: true,
          keywords: [ "PHP", "Symfony", "MySQL", "JQuery", "Bootstrap" ],
          screenshot: "/images/projects/dicsdalok.png",
          text: `
            DicsDalok is a collection of Hungarian Christian worship songs.
            <i>Main functions:</i>
            <ul>
              <li>List / search / show songs.</li>
              <li>Show/hide guitar chords, youtube videos, music sheets.</li>
              <li>Change font size / song order.</li>
              <li>Song books.</li>
              <li>Favorites.</li>
              <li>Admin panel.</li>
            </ul>
          `
        },
        {
          title: "Dicsdalok (Mobile)",
          link: "https://play.google.com/store/apps/details" +
                "?id=hu.csordasmarton.dicsdalok",
          from: "2016",
          active: true,
          keywords: [ "Android", "Java", "SQLite" ],
          screenshot: "/images/projects/dicsdalok_android.png",
          text: `
            DicsDalok is a collection of Hungarian Christian worship songs. It
            is synced with http://dicsdalok.hu/ webpage. The functions can be
            used offline.<br/><br/>
            <i>Main functions:</i>
            <ul>
              <li>Download (sync) data from an external database.</li>
              <li>Search songs.</li>
              <li>Show/hide guitar chords.</li>
              <li>Change font size / song order.</li>
              <li>Keep screen on while reading song.</li>
              <li>Change font size in pinch gesture.</li>
              <li>Favorites.</li>
              <li>Navigation menu.</li>
            </ul>
          `
        },
        {
          title: "keresztkapcsolat.hu",
          link: "http://www.keresztkapcsolat.hu/",
          from: "2016",
          active: false,
          keywords: [ "Wordpress", "MySQL" ],
          screenshot: "/images/projects/keresztkapcsolat.png"
        },
        {
          title: "kvit.hu",
          link: "http://kvit.hu/",
          from: "2015",
          active: false,
          keywords: [ "Wordpress", "MySQL" ],
          screenshot: "/images/projects/kvit.png"
        }
      ]
    };
  }
};
</script>
