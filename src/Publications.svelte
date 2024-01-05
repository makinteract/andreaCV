<script>
  import { onMount } from 'svelte';

  // const publications = 'assets/data/publications.bib';
  const publications =
    'https://raw.githubusercontent.com/makinteract/andreaCV/main/assets/data/publications.bib';

  let inproc = 0;
  let article = 0;
  let domestic = 0;
  let wip = 0;
  let other = 0;

  onMount(() => {
    fetch(publications)
      .then((res) => res.text())
      .then((data) => {
        inproc = (data.match(/@inproceedings/g) || []).length;
        article = (data.match(/@article/g) || []).length;
        domestic = (data.match(/@domestic/g) || []).length;
        wip = (data.match(/@wip/g) || []).length;
        other = (data.match(/@other/g) || []).length;
      });
  });
</script>

<svelte:head>
  <script
    type="text/javascript"
    src="https://cdn.jsdelivr.net/gh/pcooksey/bibtex-js@1.0.0/src/bibtex_js.min.js"></script>
</svelte:head>

<!-- load data -->
<bibtex src={publications} />

<!-- sort -->
<!-- <div class="bibtex_structure"> -->
<!-- ASC or DESC for order of sort -->
<!-- <div class="sort year" extra="DESC number"> 
      <div class="templates"></div>
  </div>
</div> -->

<!-- format each publication -->
<div class="bibtex_template">
  <div class="if author" style="font-weight: bold">
    <span class="title" />
    <span class="if year">
      (<span class="year" />)
    </span>
  </div>
  <div style="margin-left: 10px">
    <span class="author" />
    <span class="proceedings">
      <span class="if booktitle">
        In
        <span class="booktitle" />
      </span>
      <span class="if journal">
        In
        <span class="journal" />
      </span>
    </span>
  </div>
</div>

<!-- render data -->
<dt><i>Publications</i> 🧾</dt>
<dd>
  <div id="bibtex_display" />
</dd>
<div class="bibtex_structure">
  <div class="sections bibtextypekey">
    <div class="section inproceedings">
      <h2 class="publicationGroup">Conferences ({inproc})</h2>
      <div class="sort year" extra="DESC number">
        <div class="templates" />
      </div>
    </div>
    <div class="section article">
      <h2 class="mt publicationGroup">Journals ({article})</h2>
      <div class="sort year" extra="DESC number">
        <div class="templates" />
      </div>
    </div>
    <div class="section domestic">
      <h2 class="mt publicationGroup">Domestic venues ({domestic})</h2>
      <div class="sort year" extra="DESC number">
        <div class="templates" />
      </div>
    </div>
    <div class="section other|wip">
      <h2 class="mt publicationGroup">Other publications ({other + wip})</h2>
      <div class="sort year" extra="DESC number">
        <div class="templates" />
      </div>
    </div>
  </div>
</div>

<style>
  h2 {
    text-decoration: underline;
  }
</style>
