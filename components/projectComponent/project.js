class projectComponent extends HTMLElement{
    constructor(){
        super();

        this.innerHTML=`
            <div class="portfolios">
                <h1 class="projectContainer">Projects</h1>
                    <div class="certificateContainer">

                    <div class="content">
                        <img src="./images/certificateimgFile/BostonCollegeFinanceCertificate.jpg" class="certificates"/>
                        <h3>Diploma</h3>
                        <p>Boston College Major: Information System</p>
                        <p>Relevent Courses: Java Script, Project Management, Data Visualization</p>
                    </div>

                    <div class="content">             
                        <img src="./images/certificateimgFile/BostonCollegeFinanceCertificate.jpg" class="certificates"/>
                        <h3>Diploma</h3>
                        <p>Boston College Minor: Finance</p>
                        <p>Relevent Courses: Investments: Stocks, Bonds, Securities Market </p>
                    </div>

                    <div class="content">
                        <img src="./images/certificateimgFile/ColumbiaFintechCertificate.png" class="certificates"/>
                        <h3>Certificate</h3>
                        <p>Columbia Fintech Bootcamp</p>
                        <p>Relevent Skills: </p>
                    </div>

                    <div class="content">
                        <img src="./images/certificateimgFile/MITxPro.png" class="certificates"/>
                        <h3>Certificate</h3>
                        <p>MITxPro:Full Stack Development</p>
                        <p>Relevent Skills: </p>
                    </div>

            </div>
        </div>
        `;
    }
}

customElements.define('project-component', projectComponent );