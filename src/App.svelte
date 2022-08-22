<script>
  import Card from './Card.svelte';
  import Space from './Space.svelte';
  import Experience from './Experience.svelte';
  import Education from './Education.svelte';
  import Awards from './Awards.md';
  import Publications from './Publications.svelte';
  import Teaching from './Teaching.svelte';
  import Exhibitions from './Exhibitions.md';
  import Footer from './Footer.svelte';
  import Patents from './Patents.svelte';
  import Services from './Services.md';
  import Projects from './Projects.svelte';
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
    <Education />
    <Space />
    <Awards />
    <Space />
    <Teaching />
    <Space />
    <PageBreak />

    <Publications />
    <Space />
    <Patents />
    <Space />
    <!-- <PageBreak /> -->

    <Services />
    <Space />
    <Exhibitions />
    <Space />

    <!-- <PageBreak />
    <Projects />
    <Space /> -->
  </dl>
  <Footer />
</div>
