export const isNotEmpty = x => !(x == null)

export const add = (...args) =>
  args.reduce((acc, curr) => Number(acc) + Number(curr))

export const summaryDonations = danations =>
  danations.filter(isNotEmpty).reduce((acc, curr) => add(acc, curr))

export const toSlug = str =>
  str
    .trim()
    .toLowerCase()
    .split(' ')
    .join('-')
    .replace(/--+/g, '-') // replace multiple hyphen to one
