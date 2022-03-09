<template>
  <Section
    title="Other Projects"
    icon="mdi-briefcase-outline"
  >
    <v-timeline dense>
      <OtherProject from="2021">
        <Project
          title="csordasmarton.github.io"
          link="https://csordasmarton.github.io/"
          :keywords="[ 'Vue', 'Vuetify', 'webpack', 'Github actions', 'Git' ]"
          screenshot="/images/projects/csordasmarton_github_io.png"
        >
          My personal web site implemented in <b>Vue.js</b> and deployed
          automatically with a <b>Github action</b>.
        </Project>
      </OtherProject>

      <OtherProject from="2020">
        <!-- eslint-disable max-len -->
        <Project
          title="KelenRef"
          link="https://play.google.com/store/apps/details?id=hu.csordasmarton.kelenref"
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
      </OtherProject>

      <OtherProject from="2019">
        <!-- eslint-disable max-len -->
        <Project
          title="Heidelberg Catechism"
          link="https://play.google.com/store/apps/details?id=hu.csordasmarton.heidelbergikate"
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
      </OtherProject>

      <OtherProject from="2016">
        <Project
          title="Dicsdalok (Web)"
          link="http://dicsdalok.hu"
          :keywords="[
            'PHP', 'Symfony', 'MySQL', 'JQuery', 'Bootstrap', 'Rest API'
          ]"
          screenshot="/images/projects/dicsdalok.png"
        >
          DicsDalok is a collection of Hungarian Christian worship songs.
          <br><br>

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
      </OtherProject>

      <OtherProject class="pagebreak" from="2016">
        <!-- eslint-disable max-len -->
        <Project
          title="Dicsdalok (Mobile)"
          link="https://play.google.com/store/apps/details?id=hu.csordasmarton.dicsdalok"
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
      </OtherProject>

      <OtherProject from="2016">
        <Project
          title="keresztkapcsolat.hu"
          link="http://www.keresztkapcsolat.hu/"
          :keywords="[ 'Wordpress', 'MySQL' ]"
          screenshot="/images/projects/keresztkapcsolat.png"
        />
      </OtherProject>

      <OtherProject from="2015">
        <Project
          title="kvit.hu"
          link="http://kvit.hu/"
          :keywords="[ 'Wordpress', 'MySQL' ]"
          screenshot="/images/projects/kvit.png"
        />
      </OtherProject>
    </v-timeline>
  </Section>
</template>

<script>
import Section from "@/views/Section";

import OtherProject from "./OtherProject";
import Project from "./Project";

export default {
  name: "OtherProjects",
  components: { OtherProject, Project, Section }
};
</script>
