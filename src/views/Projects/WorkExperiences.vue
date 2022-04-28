<template>
  <Section
    title="Work experiences"
    icon="mdi-star-circle-outline"
  >
    <v-timeline dense>
      <WorkExperience
        from="July, 2015"
        to="Present"
        company="Ericsson"
      >
        <template #default>
          In my first 2 years I worked on an open-source code comprehension and
          navigation tool called
          <!-- eslint-disable max-len -->
          <a href="https://github.com/Ericsson/codecompass" target="_blank">CodeCompass</a>.
          After it I worked on another open-source tool called
          <!-- eslint-disable max-len -->
          <a href="https://github.com/Ericsson/codechecker" target="_blank">CodeChecker</a>,
          which helps you to find potentional software bugs in mainly C/C++
          programs.
        </template>

        <template #projects>
          <Project
            class="pl-4"
            title="CodeCompass"
            link="https://github.com/Ericsson/codecompass"
            :keywords="[
              'C/C++', 'JavaScript', 'Dojo', 'CMake', 'Thrift', 'ODB',
              'Static analysis', 'Documentation'
            ]"
            screenshot="/images/projects/codecompass.png"
          >
            CodeCompass is an open-source code comprehension and navigation
            tool developed with large-scale software projects in mind.
            <br><br>

            I did the following:
            <ul>
              <li>More than <b>+170</b> commits.</li>
              <li>Full rewrite from scratch.</li>
              <li>New infrastructure and <b>pluginable architecture</b>.</li>
              <li>Introduce <b>CMake</b> build system.</li>
              <li>Writing <b>documentations.</b></li>
              <li>UI improvements.</li>
              <li>Implementing new <b>API</b> functions in <b>C++</b>.</li>
              <li><b>Pointer analysis</b> (MSc thesis).</li>
            </ul>
          </Project>

          <Project
            class="pl-4"
            title="CodeChecker"
            link="https://github.com/Ericsson/codechecker"
            :keywords="[
              'Python', 'JavaScript', 'TypeScript', 'Vue', 'Vuex', 'Vuetify',
              'Dojo', 'Webpack', 'nightwatch', 'jest', 'Thrift', 'Docker',
              'Docker Swarm', 'Static analysis', 'C++ compilers',
              'PostgreSQL', 'Jenkins', 'Github Actions', 'Linux', 'Bash',
              'Scrum', 'Sprint', 'Openalm', 'DevOps'
            ]"
            screenshot="/images/projects/codechecker.png"
          >
            CodeChecker is an open-source analyzer tooling, defect database
            and viewer extension to find, view and manage potentional
            software bugs in your product.<br><br>

            Over the years I did the following:
            <ul>
              <li>
                More than
                <!-- eslint-disable max-len -->
                <a
                  href="https://github.com/Ericsson/codechecker/graphs/contributors"
                  target="_blank"
                >
                  <b>+1450</b>
                </a>
                Github commits.
              </li>
              <li>Implementing most of the <b>new features</b>.</li>
              <li>Full UI rewrite from <b>Dojo</b> to <b>Vuejs</b>.</li>
              <li>
                Writing <b>unit</b>, <b>functional</b> and <b>e2e</b> tests.
              </li>
              <li>
                <a
                  href="https://snapcraft.io/codechecker"
                  target="_blank"
                >
                  <b>Snap</b>
                </a>
                and
                <a
                  href="https://pypi.org/project/codechecker/"
                  target="_blank"
                >
                  <b>Pypi</b>
                </a>
                packages.
              </li>
              <li>
                <b>
                  Visual Studio Code
                  <a
                    href="http://github.com/Ericsson/codecheckervsCodePlugin/"
                    target="_blank"
                  >extension</a>
                </b>.
              </li>
              <li>Writing <b>documentations</b></li>
              <li>
                Creating
                <a
                  href="https://hub.docker.com/r/codechecker/codechecker-web"
                  target="_blank"
                >
                  <b>docker</b>
                </a>
                images.
              </li>
              <li>Creating <b>service</b> setups and managing services.</li>
              <li>
                <b>Database</b> backups, database migrations and service
                upgrades.
              </li>
              <li>
                Creating and managing <b>Jenkins</b> jobs and
                <b>Github actions</b>.
              </li>
              <li>
                <b>User support</b> and helping to open source contributors.
              </li>
              <li>
                <b>Sprint</b> planning, organizing <b>meetings</b> and
                <b>supervising</b> newcomers.
              </li>
              <li><b>Release</b> management.</li>
            </ul>
          </Project>
        </template>
      </WorkExperience>

      <WorkExperience
        from="October, 2013"
        to="December, 2014"
        company="Pontez Holding Kft."
      >
        <template #default>
          <Keywords
            :value="[ 'Symfony', 'Laravel', 'JQuery', 'MySQL' ]"
          />

          Developed web pages (Social website, Project management tool, etc.)
          using <b>Symfony</b> and <b>Laravel</b> frameworks.
        </template>
      </WorkExperience>
    </v-timeline>
  </Section>
</template>

<script>
import Section from "@/views/Section";
import Keywords from "./Keywords";
import Project from "./Project";
import WorkExperience from "./WorkExperience";

export default {
  name: "WorkExperiences",
  components: { Keywords, Project, Section, WorkExperience }
};
</script>
