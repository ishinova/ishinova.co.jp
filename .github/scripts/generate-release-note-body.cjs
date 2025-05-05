module.exports = async ({github, context, version}) => {
  const {data: {body}} = await github.rest.repos.generateReleaseNotes({
    ...context.repo,
    tag_name: `v${version}`,
  });
  return body;
}
