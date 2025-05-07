<script>
  import Card from './Card.svelte';
  import Space from './Space.svelte';
  import Experience from './Experience.svelte';
  import Education from './Education.svelte';
  import Awards from './Awards.md';
  import Publications from './Publications.svelte';
  import Teaching from './Teaching.svelte';
  import TalksExhibitions from './TalksExhibitions.svelte';
  import Footer from './Footer.svelte';
  import Patents from './Patents.svelte';
  import Services from './Services.md';
  import Projects from './Projects.svelte';
  import PressMedia from './PressMedia.md';
  import PageBreak from './PageBreak.svelte';
  import Highlights from './Highlights.md';
</script>

<div id="page-wrap">
  <Card />
  <Space />

  <dl>
    <Highlights />
    <Space />

    <Experience />
    <Space />
    <!-- <PageBreak /> -->

    <Education />
    <Space />
    <Awards />
    <Space />
    <Teaching />
    <Space />
    <!-- <PageBreak /> -->

    <Publications />
    <Space />
    <Patents />
    <Space />
    <!-- <PageBreak /> -->

    <Services />
    <Space />
    <TalksExhibitions />
    <Space />
    <PressMedia />
    <Space />

    <!-- <PageBreak /> -->
    <!-- <Projects />
    <Space /> -->
  </dl>
  <Footer />
</div>
