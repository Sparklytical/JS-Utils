// Using Intl.NumberFormat API to format numbers as dollars $ in Javascript.

function formatToDollar(number: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number)
}

/*
Change the format by editing the `currency value` to ex - `JPY`, `EUR` and NumberFormat to suitable variant like
`de-DE`, `ja-JP`,`en-IN`
*/

