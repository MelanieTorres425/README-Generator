// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![GitHub](https://img.shields.io/github/license/${data.github}/${data.title})
  ## Table of Contents
  1. [Description] (#Description)
  [Installation Instructions](#Installation)
  [Usage Information](#usage)
  2. [Test Instructions](#test)
  3. [Contribution Guideline](#contributing)
  4. [License](#license)
  5. [Questions](#questions)
 
  ### Description <a name="description"></a>
  - ${data.description}
  ### Installation Instructions <a name="installation"></a>
  - ${data.installation}
  ### Usage Information <a name="Usage"></a>
  - ${data.usage}
  ## Contribution Guideline <a name="contribution"></a>
  - ${data.contributing}
  ## Test Instructions <a name="instructions"></a>
  - ${data.instructions}
 
  ## License <a name="license"></a>
  - ${data.badge}
  ## Questions <a name="questions"></a>
  - GitHub Link
  [${data.github}](https://github.com/${data.github}) 
  - Email
  ${data.email}

`;
}

module.exports = generateMarkdown;
