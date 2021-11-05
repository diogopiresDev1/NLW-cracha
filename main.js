const LinksSocialMedia = {
  github: 'diogopiresDev1',
  youtube: 'channel/UCkfw5n2kW6s8MmVCd8TvVXw',
  facebook: 'diogopiresDev1',
  instagram: 'diogopires01',
  twitter: 'diogopiresdev'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userImage.src = data.avatar_url
      userLink.textContent = data.login
    })
}

getGitHubProfileInfos()
