const previewSecret = 'contemn.rifle.DEBUTED'; // Copy the string you used for SANITY_PREVIEW_SECRET // TODO: use env var
const projectUrl = 'http://localhost:3000';

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
