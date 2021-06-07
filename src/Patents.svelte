<script>
  import { onMount } from 'svelte';

  let patentsCSV = [];

  onMount(() => {
    // Parse local CSV file
    fetch('assets/data/patents.csv')
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          header: true,
          delimiter: ',',

          step: function (row) {
            const d = row.data;

            // Make sure the title is not all uppercase
            const sep = d.Title.indexOf('/');
            d.Title =
              d.Title.charAt(0).toUpperCase() +
              d.Title.substring(1, sep).toLowerCase() +
              d.Title.substring(sep);

            patentsCSV.push(row.data);
          },

          complete: function () {
            /*console.log('done')*/

            // sort patents by date
            patentsCSV.sort((a, b) => {
              const da = new Date(a.ApplicationDate);
              const db = new Date(b.ApplicationDate);
              return db - da;
            });
            patentsCSV = [...patentsCSV]; // make Svelte happy
          },
        });
      });
  });
</script>

<dt><i>Patents</i> 💡</dt>

<dd>
  {#each patentsCSV as patent}
    <h4>{patent.Title}</h4>

    <div class="patentDetail">
      {patent.Country}

      {#if patent.RegistrationDate}
        {patent.PatentNumber}
        (Issued: {patent.RegistrationDate})
      {:else if patent.ApplicationDate}
        {patent.ApplicationNumber}
        (Pending: {patent.ApplicationDate})
      {/if}
    </div>
  {/each}
</dd>
