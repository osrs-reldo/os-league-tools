export default function getAccentColorForTheme(theme) {
  switch (theme) {
    case 'tl-dark':
      return 'rgb(164 206 39)';
    case 'tb-dark':
      return 'rgb(229 217 147)';
    case 'sl-dark':
      return 'rgb(19 213 145)';
    case 'mono-dark':
      return 'rgb(249 250 251)s';
    case 'tl-light':
      return 'rgb(100 144 68)';
    case 'tb-light':
      return 'rgb(99 66 40)';
    case 'sl-light':
      return 'rgb(0 128 118)';
    case 'tr-light':
      return 'rgb(180 74 30)';
    case 'tr-dark':
      return 'rgb(220 139 54)';
    case 're-dark':
      return 'rgb(198 121 160)';
    case 're-light':
      return 'rgb(76 33 54)';
    case 'mono-light':
      return 'rgb(55 65 81)';
    default:
      return 'rgb(19 213 145)';
  }
}
