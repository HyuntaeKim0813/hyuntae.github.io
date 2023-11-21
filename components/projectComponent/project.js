class projectComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
            <div id="portfolios">
                <h1 class="projecTitle">Projects</h1>
                    <div class="projectContainer">
                    
                    <div class="projectTitle">       
                        <div class="projectBGcolor">
                            <div class="projectImage">
                            <a href="https://hyuntae-kimbankingapplication.s3.amazonaws.com/github-portfolio-project-front-end-banking-app_starter/index.html#/" target="_blank" class="projectImageLink">
                                <div class="imageContainer">
                                    <img src="./images/projectPreview/BadBank-transformed.png" class="projectPaint" />
                                    <p class="projectCenteredPreview">Preview</p>
                                </div>
                            </a>
                                
                            </div>
                            <div class="projectDescription">
                                <h3 class="projectName">Bad Bank</h3>
                                <p>Learned: AWS S3, HTML, CSS, JS, Bootstrap, React, Routing, Data flow, Login </p>
                                <p>Description: Learn basic HTML CSS JS. How it related and for the replacement of CSS used Bootstrap. For the React I used Lower-Version of React way "ReactDom.render" which are not supported above the version 17. Learned about how to downgrade and manipulate the Node & React Version Control.</p>
                                <a href = "https://hyuntae-kimbankingapplication.s3.amazonaws.com/github-portfolio-project-front-end-banking-app_starter/index.html#/" target="_blank" class="projectLink">Bad Bank Link</a>
                            </div>
                       </div>
                    </div>

                    
                
            </div>
        </div>
        `;
  }
}

customElements.define("project-component", projectComponent);
