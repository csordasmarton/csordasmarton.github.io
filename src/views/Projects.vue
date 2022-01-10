<template>
  <Section
    title="Projects"
    icon="mdi-briefcase-outline"
  >
    <v-timeline dense>
      <Project
        title="CodeChecker"
        link="https://github.com/Ericsson/codechecker"
        from="2017"
        :active="true"
        company="Ericsson"
        :keywords="[
          'Python', 'JavaScript', 'Vue', 'Vuex', 'Vuetify', 'Dojo', 'Webpack',
          'nightwatch', 'jest', 'Thrift', 'Docker', 'Docker Swarm',
          'Static analysis', 'C++ compilers', 'PostgreSQL', 'Jenkins',
          'Github Actions', 'Linux', 'Bash', 'Scrum', 'Sprint', 'Openalm',
          'Jira'
        ]"
        screenshot="/images/projects/codechecker.png"
      >
        CodeChecker is an open-source analyzer tooling, defect database and
        viewer extension to find, view and manage potentional software bugs
        in your product.<br><br>

        Over the years I did the following:
        <ul>
          <li>Implementing most of the new features.</li>
          <li>More than <b>+1400</b> Github commits.</li>
          <li>Full UI rewrite from <b>Dojo</b> to <b>Vuejs</b>.</li>
          <li>Writing <b>unit</b>, <b>functional</b> and <b>e2e</b> tests.</li>
          <li><b>Snap</b> and <b>Pypi</b> packages.</li>
          <li>Writing <b>documentations</b></li>
          <li>Creating <b>docker</b> images.</li>
          <li>Creating <b>service</b> setups and managing services.</li>
          <li>
            <b>Database</b> backups, database migrations and service upgrades.
          </li>
          <li>
            Creating and managing <b>Jenkins</b> jobs and
            <b>Github actions</b>.
          </li>
          <li><b>User support</b> and helping to open source contributors.</li>
          <li>
            <b>Sprint</b> planning, organizing <b>meetings</b> and
            <b>supervising</b> newcomers.
          </li>
          <li><b>Release</b> management.</li>
        </ul>
      </Project>

      <Project
        title="csordasmarton.github.io"
        link="https://csordasmarton.github.io/"
        from="2021"
        :keywords="[ 'Vue', 'Vuetify', 'webpack', 'Github actions', 'Git' ]"
        screenshot="/images/projects/csordasmarton_github_io.png"
      >
        My personal web site implemented in <b>Vue.js</b> and deployed
        automatically with a <b>Github action</b>.
      </Project>

      <!-- eslint-disable max-len -->
      <Project
        title="Kelenföldi Református Énekeskönyv"
        link="https://play.google.com/store/apps/details?id=hu.csordasmarton.kelenref"
        from="2020"
        :keywords="[ 'Android', 'Kotlin' ]"
        screenshot="/images/projects/kelenref.png"
      >
        This is an Android mobile application which contains songs of the
        Kelenföldi Református Énekeskönyv.<br> <br>
        <i>Main functions:</i>
        <ul>
          <li>List / search / show songs.</li>
          <li>Change font size / song order.</li>
          <li>Favorites.</li>
        </ul>
      </Project>

      <!-- eslint-disable max-len -->
      <Project
        title="Heidelberg Catechism"
        link="https://play.google.com/store/apps/details?id=hu.csordasmarton.heidelbergikate"
        from="2019"
        :keywords="[ 'Android', 'Java' ]"
        screenshot="/images/projects/heidelberg_catechism.png"
      >
        This is an Android mobile application which contains the questions
        and the answers of the fundamental beliefs of the Reformed Church
        with Bible references.<br><br>

        <i>Main functions:</i>
        <ul>
          <li>Show questions with categories.</li>
          <li>Show answers when clicking on a question.</li>
          <li>Show Bible references under the answers.</li>
          <li>
            Open references in Youversion mobile app when clicking on it.
          </li>
        </ul>
      </Project>

      <Project
        class="pagebreak"
        title="Dicsdalok (Web)"
        link="http://dicsdalok.hu"
        from="2016"
        :active="true"
        :keywords="[
          'PHP', 'Symfony', 'MySQL', 'JQuery', 'Bootstrap', 'Rest API'
        ]"
        screenshot="/images/projects/dicsdalok.png"
      >
        DicsDalok is a collection of Hungarian Christian worship songs.<br><br>

        <i>Main functions:</i>
        <ul>
          <li>List / search / show songs.</li>
          <li>Show/hide guitar chords, youtube videos, music sheets.</li>
          <li>Change font size / song order.</li>
          <li>Song books.</li>
          <li>Favorites.</li>
          <li>Admin panel.</li>
        </ul>
      </Project>

      <!-- eslint-disable max-len -->
      <Project
        title="Dicsdalok (Mobile)"
        link="https://play.google.com/store/apps/details?id=hu.csordasmarton.dicsdalok"
        from="2016"
        :active="true"
        :keywords="[ 'Android', 'Java', 'SQLite' ]"
        screenshot="/images/projects/dicsdalok_android.png"
      >
        DicsDalok is a collection of Hungarian Christian worship songs. It
        is synced with http://dicsdalok.hu/ webpage. The functions can be
        used offline.<br><br>

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
      </Project>

      <Project
        title="keresztkapcsolat.hu"
        link="http://www.keresztkapcsolat.hu/"
        from="2016"
        :active="false"
        :keywords="[ 'Wordpress', 'MySQL' ]"
        screenshot="/images/projects/keresztkapcsolat.png"
      />

      <Project
        title="kvit.hu"
        link="http://kvit.hu/"
        from="2015"
        :active="false"
        :keywords="[ 'Wordpress', 'MySQL' ]"
        screenshot="/images/projects/kvit.png"
      />

      <Project
        title="CodeCompass"
        link="https://github.com/Ericsson/codecompass"
        from="2015"
        to="2017"
        company="Ericsson"
        :keywords="[
          'C/C++', 'JavaScript', 'Dojo', 'CMake', 'Thrift', 'ODB',
          'Static analysis'
        ]"
        screenshot="/images/projects/codecompass.png"
      >
        CodeCompass is an open-source code comprehension and navigation
        tool developed with large-scale software projects in mind.<br><br>

        I did the following:
        <ul>
          <li>Full rewrite from scratch.</li>
          <li>New infrastructure and <b>pluginable architecture</b>.</li>
          <li>Introduce <b>CMake</b> build system.</li>
          <li>UI improvements.</li>
          <li>Implementing new <b>API</b> functions in <b>C++</b>.</li>
          <li><b>Pointer analysis</b> (MSc thesis).</li>
          <li>More than <b>+170</b> commits.</li>
        </ul>
      </Project>
    </v-timeline>
  </Section>
</template>

<script>
import Project from "./Project";
import Section from "./Section";

export default {
  name: "Projects",
  components: { Project, Section }
};
</script>

<style lang="scss" scoped>
@media print {
  .pagebreak { page-break-before: always; }
}
</style>