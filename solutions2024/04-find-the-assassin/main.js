/**
 * 
 * @param {string} whisper
 * @param {string[]} suspects
 */
function findTheKiller(whisper, suspects) {
  const hasPeso = whisper.endsWith('$');
  if (hasPeso) whisper = whisper.slice(0, -1);

  const regex = new RegExp(
    `^${whisper.replace(/~/g, '.')}${hasPeso ? `$` : `.*$`}`,
    'i'
  )

  return suspects.filter((suspect) => regex.test(suspect)).join(',')
}
