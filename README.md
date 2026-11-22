# KDI-2027-NEVER-Dashboard

A single-page dashboard for Nigeria's 2027 election cycle. It brings together
recorded violence incidents, the PESEA peace-committee monitor, and published
party-finance filings, and reads them through one set of cross-filters.

## What is in the repository

| File | Purpose |
| --- | --- |
| `dashboard.html` | The dashboard: markup, styles and all client-side logic. |
| `index.html` | Redirects the bare GitHub Pages URL to `dashboard.html`. |
| `nga_states.geojson` | State boundaries for the national map. |
| `lgas/*.geojson` | LGA boundaries, one file per state, used by the state drill-down. |
| `senatorial_districts.js` | LGA-to-senatorial-district lookup. |
| `lga_aliases.js` | Sheet-to-boundary LGA spelling map. The header comment records how each pair was matched. |
| `favicon.svg`, `kimpact-logo.jpg` | Branding assets. |

There is no build step. Open the page from a local web server so the browser can
`fetch` the GeoJSON files (opening `dashboard.html` directly from disk will leave
the map empty).

## Run locally

```sh
# from this directory, any static server works
python -m http.server 8777
# then open http://127.0.0.1:8777/dashboard.html
```

## Data

The page loads its live data at runtime from published Google Sheets CSV
endpoints. The endpoint URLs are constants near the top of their sections in
`dashboard.html` (`googleSheetCSV` for the violence records, `pcSheetCSV` for the
peace-committee monitor, and `FINANCE_SHEET_CSV` for party finance). Nothing is
baked into the repository, so a change to a published sheet appears on the next
page load.

- **Violence records** — incident-level rows with date, state, LGA, category,
  fatalities, perpetrators and forms of violence.
- **PESEA monitor** — weekly peace-committee checklist answers, mapped onto the
  nine ESRA dimensions plus a cross-cutting gender lens.
- **Party finance** — 2027 presidential campaign expenditure by party.

All figures are descriptive. Party allegations come from monitor reports and are
not findings; recorded zero counts do not establish an absence of violence.

## Notes

- The dashboard follows a light/dark theme from the user's system preference.
- Filters, chart picks and the state drill-down share one cross-filter state;
  removing a chip or pressing **Clear all** resets the view.
- The threat score shown on the map tooltip and in the overview league is one
  shared calculation: half incidents, half deaths, scaled to the current
  comparison.
