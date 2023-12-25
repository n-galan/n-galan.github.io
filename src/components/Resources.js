import React from 'react';
import '../styles/Resources.css'; // Ensure you link the corresponding CSS file

const CommunitySupport = () => {
  return (
    <div className="community-support-container">
      <header className="community-header">
        <h1>Community Resources & Support</h1>
        <p>Your guide to services and support for Employment, Finances, Housing, Food, and more.</p>
      </header>

      <main className="resources-main">
        <section className="employment-finances">
          <h2>Employment & Finances:</h2>
          {/* Economic Impact Payments */}
          <p>
        Check the status of your Economic Impact Payment. If you are eligible for a one-time coronavirus pandemic payment and haven’t received your stimulus check yet, you can track your payment with the new 
        <a href="https://www.irs.gov/coronavirus/get-my-payment" target="_blank" rel="noopener noreferrer">IRS Get My Payment Tool</a>. Payments are automatically deposited into your bank account if you filed a 2018 or 2019 tax return and received a refund via direct deposit.
      </p>

      <section class="unemployment-insurance-section">
  <h4>Unemployment Insurance:</h4>
  <p>If you started, but have not finished filing a claim:</p>
  <ul>
    <li>DOL claim specialists will call you to complete your claim.</li>
    <li>Expect a call from any number/ blocked number, and be ready to answer calls on your phone.</li>
  </ul>
  <p>To start a new unemployment claim, <a href="https://labor.ny.gov" target="_blank" rel="noopener noreferrer">use the new, improved system at labor.ny.gov</a>:</p>
  <ul>
    <li>The system can handle most applications from start to finish, reducing the need to speak to a claims specialist on the phone.</li>
    <li>When workers’ claims are approved they will receive benefits backdated to their first day of unemployment.</li>
  </ul>
  <p>Call <a href="tel:1-888-209-8124">1-888-209-8124</a> for extended telephone hours:</p>
  <ul>
    <li>Monday through Friday, 8am to 7:30pm</li>
    <li>Saturday and Sunday, 7:30am to 8pm</li>
  </ul>

  <section class="unemployment-insurance-section">


  <h3>U.S. citizens or immigrant residents who meet the following are eligible:</h3>
  <ul>
    <li>Have a valid Social Security number</li>
    <li>Could not be claimed as a dependent of another taxpayer</li>
    <li>Had adjusted gross income under certain limits</li>
  </ul>
  <p>Learn more about <a href="https://www.irs.gov/coronavirus/economic-impact-payments" target="_blank" rel="noopener noreferrer">Economic Impact Payments</a>.</p>
  
  <h3>Job Seekers</h3>
  <ul>
    <li>New York State Department of Labor <a href="https://labor.ny.gov/employment-services.shtm" target="_blank" rel="noopener noreferrer">Immediate Hiring Opportunities</a></li>
    <li>Receive assistance with job seeking from <a href="https://www1.nyc.gov/site/sbs/careers/careers.page" target="_blank" rel="noopener noreferrer">NYC Small Business Services</a>.</li>
  </ul>

  <h3>NYC Financial Empowerment Centers</h3>
  <p>If you are experiencing sudden changes to your household budget or income due to COVID-19, financial counselors can help you:</p>
  <ul>
    <li>Manage your money and set up a spending plan</li>
    <li>Contact creditors about existing loans, including student loans</li>
    <li>Draft letters to creditors to lower payments or temporarily suspend payments due to hardship</li>
    <li>Develop a strategy to minimize debt</li>
    <li>Access local, state, and federal emergency resources</li>
  </ul>
  <p>Book an appointment for FREE one-on-one financial counseling with an <a href="https://www1.nyc.gov/site/dca/consumers/get-free-financial-counseling.page" target="_blank" rel="noopener noreferrer">NYC Financial Empowerment Center Counselor</a>.</p>

</section>



<section class="housing-assistance-section">
  <h3>Risk of homelessness and emergency rent assistance</h3>
  <p>Homebase offers:</p>
  <ul>
    <li>Services to prevent eviction</li>
    <li>Assistance obtaining public benefits</li>
    <li>Emergency rental assistance</li>
    <li>Education and job placement assistance</li>
    <li>Financial counseling and money management</li>
    <li>Help relocating</li>
    <li>Short-term financial assistance</li>
  </ul>
  <p>Learn more about <a href="https://www1.nyc.gov/site/hra/help/homebase.page" target="_blank" rel="noopener noreferrer">Homebase</a> and call <a href="tel:311">311</a> to find out how to get help.</p>

  <h3>Section 8</h3>
  <p>NYC Housing Preservation and Development (HPD) Section 8 voucher holders having trouble paying rent because of income loss should email <a href="mailto:DTRAI@hpd.nyc.gov">DTRAI@hpd.nyc.gov</a>.</p>

  <h3>Rent Arrears and Cash Assistance</h3>
  <p>If your work schedule was reduced and you are unable to pay your rent, apply for a Cash Assistance special grant request to get emergency benefits.</p>
  <ul>
    <li><a href="https://www1.nyc.gov/site/hra/help/cash-assistance.page" target="_blank" rel="noopener noreferrer">Apply for Cash Assistance</a></li>
    <li>If you have an active Cash Assistance case, <a href="https://a069-access.nyc.gov/accesshra/" target="_blank" rel="noopener noreferrer">submit your request online</a></li>
  </ul>
</section>







</section>




{/* 
          <article className="resource economic-impact">
            <h3>Economic Impact Payment</h3>
            <p>Check the status of your Economic Impact Payment. Eligible individuals who haven't received their stimulus check can track their payment with the IRS Get My Payment tool.</p>
    
          </article>
   
          <article className="resource unemployment-insurance">
            <h3>Unemployment Insurance</h3>
            <p>If you have started but not finished filing a claim, expect a call from DOL claim specialists. You can start a new unemployment claim using the improved system online.</p>
       
          </article> */}
    
        </section>

        {/* <section className="housing">
          <h2>Housing</h2>

        </section> */}

      </main>

      <footer className="community-footer">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default CommunitySupport;
