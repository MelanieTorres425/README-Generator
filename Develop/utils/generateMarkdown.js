// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![GitHub](https://img.shields.io/github/license/${data.github}/${data.title})

  ## Description <a name="description"></a>
  - ${data.description}
  ## Table of Contents
  1. [Description] (#Description)
  2. [Installation Instructions](#Installation)
  3. [Usage Information](#usage)
  4. [License](#license)
  5. [Contribution Guideline](#contributing)
  6. [Test Instructions](#test)
  7. [Questions](#questions)
  8. [Screenshots](#screenshots)
 
 
  ### Installation Instructions <a name="installation"></a>
  - ${data.installation}
  ### Usage Information <a name="Usage"></a>
  - ${data.usage}
  ## License <a name="license"></a>
  - This application is covered under ${data.badge} license. 
  ## Contribution Guideline <a name="contribution"></a>
  - ${data.contributing}
  ## Test Instructions <a name="tests"></a>
  - ${data.tests}
  ## Questions <a name="questions"></a>
  Any questions? Please Contact Below
  - GitHub Link: 
  [${data.github}](https://github.com/${data.github}) 
  - Email: 
  ${data.email}
  ## Screenshots <a name="screenshots"></a>
  ![](././Develop/screenshots/Screenshot1.png)
  

`;
}

module.exports = generateMarkdown;
