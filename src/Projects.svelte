<script>
  import { onMount } from 'svelte';

  let projectsCSV = [];

  onMount(() => {
    // Parse local CSV file
    fetch('assets/data/projects.csv')
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          header: true,
          delimiter: ',',

          step: function (row) {
            projectsCSV.push(row.data);
          },

          complete: function () {
            /*console.log('done')*/
            // sort by starting day
            projectsCSV.sort((a, b) => {
              const da = new Date(a.Start);
              const db = new Date(b.Start);
              return db - da;
            });

            projectsCSV = [...projectsCSV]; // make Svelte happy
          },
        });
      });
  });
</script>

<dt><i>Fundings</i> 💵</dt>

<dd>
  {#each projectsCSV as project}
    <h4>{project.Title} [{project.PrjNumber}]</h4>

    <div class="patentDetail">
      Funding Agency: {project.FundingAgency}
      {project.Start} - {project.End} |
      {project.Amount}₩
    </div>
  {/each}
</dd>
