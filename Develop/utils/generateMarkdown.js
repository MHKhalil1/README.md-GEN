const fs = require('fs');

// Function to Return Links
function renderLicenseLink(license){
  if(license === 'ISC'){
    return 'https://opensource.org/licenses/ISC'
  }
  if (license === 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }
  if(license === 'Apache'){
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  }
}

// Create A #License in README
function renderLicenseSection(license){
  if(!license){
    return '';
  }
  else {
    return'## License'
  }
}
// Function to Generate Markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Question](#question)

  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.license}
  ## Contribution:
  ${data.contribution}
  ## Testing: 
  ${data.test}
  ## Question
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:user@example.com) `;
}

module.exports = generateMarkdown