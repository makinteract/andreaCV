<script>
  import { onMount } from 'svelte';

  // get Google scholar info for citations and h_inedx
  let citations ='1502', h_index= '21';
  let inproc = 0;
  let article = 0;

  onMount(() => {

    fetch('https://personal-scholar.onrender.com/author/wVDtZB0AAAAJ')
    .then((response) => response.json())
    .then((data) => {
      citations= data.citations;
      h_index= data.h_index;
    })

    // get publication data for stats
    fetch('assets/data/publications.bib')
      .then((res) => res.text())
      .then((data) => {
        inproc = (data.match(/@inproceedings/g) || []).length;
        article = (data.match(/@article/g) || []).length;
      });
  });
  </script>

<dt><i>Highlights</i> ⭐️</dt>
<dd>

- Research in the field of _Human-Computer Interaction (HCI)_: <div class="indent">**AR-VR** / **Haptics** / **Physical computing**</div>
- Citations: **{citations}** H-index: **{h_index}**
- **{inproc}** international conference and **{article}** journal papers
- **Best Paper Awards** UIST 2020, TEI 2021, MobileHCI 2013
- **Honorable Mention Awards** CHI 2021-2022, MobileHCI 2016-2017
- KAIST 2020 Technology Innovation Award **공과대학 2020 기술혁신 우수상**
- **SIGCHI Korea Local Chapter co-chair** (2022-2023)
</dd>

<style>
  dt{
    color: #FF0070;
  }
  .indent{
    margin-left: 2em;
  }
</style>
