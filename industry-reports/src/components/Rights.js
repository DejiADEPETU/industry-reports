import React from 'react';
import '../styles/Rights.css';
function Rights() {
  return (
    <div className="container">
      <div className="images">
        <img className="image" src="https://miro.medium.com/max/15378/1*HoQ61nwv5MC53c9tySYuMA.jpeg" height="250px"/>
        <div className="image lines">IF AI DEVELOPERS TREAT PRIVACY NOT AS AN ETHICAL PREFERENCE BUT AS A FUNDAMENTAL HUMAN RIGHT, IT WOULD STRENGTHEN THE PRIVACY CONSIDERATIONS THAT ALREADY EXIST IN INDUSTRY NORMS AND TECHNICAL STANDARDS.</div>
        <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR4F8Nuo7Td-S5Zi8p8s8jm9LO_v5t2EzW5OY66-WDyL3uA59K&usqp=CAU" height="250px"/>
        <div className="image lines">THOSE WORKING ON DISABILITY RIGHTS HAVE MADE GREAT PROGRESS – AT LEAST WITH SOME OF THE BIG TECH COMPANIES – AND THIS CAN BE A MODEL FOR HOW PRODUCT DESIGN COULD BE INTEGRATED WITH OTHER KINDS OF RIGHTS.</div>
      </div>
      
      <div className="text">
        <h3>PRIVACY</h3>
        <br /><p>Privacy has long been a major concern for a broad field that includes government, business, academia, and civil society organizations. For example, there has been a surge in interest from developers and engineers to follow privacy-by-design36 princi- ples, which demonstrate how norms can be incorporated at the systems-design level. Conducting a privacy impact assessment for technological deployments is an estab- lished tool for privacy compliance. Yet we already see tensions around the human right to privacy and AI development.</p>
        <br /><p>For instance, Stanford University researchers trained a deep neural network to “pre- dict” the sexual orientation of their subjects, without obtaining consent, using a set of images collected from online dating websites.37 Beyond various methodological short- comings, the research demonstrated how a disregard for privacy rights increases the risks of algorithmic surveillance, where data that is collected and analyzed threatens to reveal personal information about users. This can put individuals and groups at risk, particularly those living under regimes that would use such information to repress and discriminate.</p>
        <br /><p>Another example is Amazon’s AI-powered facial recognition software, which was made widely available in 2016. In July 2018, American Civil Liberties Union (ACLU) researchers ran an experiment matching pictures of all 535 members of Congress to a database of 25,000 public images of arrested individuals. Researchers found that the software not only produced 28 false matches but was also racially biased. Since Amazon has sold this software to police departments, the ACLU expressed concern about further use of facial recognition for government surveillance, which is pervasive, opaque, and unregulated.</p>
        <br /><p>If AI developers treat privacy as a fundamental human right rather than an ethical preference, the privacy considerations that already exist in industry norms and tech- nical standards would be stronger.40 The right to privacy is found in Article 12 of the Universal Declaration, Article 17 of the ICCPR, and in a number of other human rights documents, national constitutions, and national laws.</p>
        <br /><p>International human rights law and principles around privacy can help AI developers analyze, identify, and respond to emerging risks. The AI capabilities demonstrated by the Stanford study give a glimpse into how AI can threaten privacy: both through the rampant collection of data and the capacity for de-anonymizing subjects. These concerns have recently been documented in a report by human rights organizations Article 19 and Privacy International, which notes that “AI-driven consumer products are frequently equipped with sensors that generate and collect vast amounts of data without the knowledge or consent of those in its proximity.”42 The report states that AI can be used to infer sensitive facts from relatively mundane data, learning about people’s emotional states, health, politics, and others from data like location histories and social media interactions.43 Protecting the right to privacy is key to the enjoyment of a number of related rights, such as freedoms of expression, association, political participation, and information.</p>
        <br />
        <h3>FREEDOM OF EXPRESSION</h3>
        <br /><p>The right to freedom of expression is particularly important in an environment where- in social media platforms use algorithms that decide whose voices we hear. In 2014, researchers from Cornell collaborated with Facebook to undertake an emotion- al-contagion study, examining how emotions spread through the social network. The researchers manipulated the experience of almost 700,000 Facebook users by using a sentiment analysis tool to identify if friends posted negative comments or posts. Those negative posts were then removed from users’ newsfeeds to test whether algorithmically skewing the feed to display positive posts would keep users on the site longer.44 This study demonstrates how platforms can make decisions based on users’ expressions that cause the world to appear in certain ways, strengthening one reality while weakening another.45</p>
        <br /><p>The right to freedom of expression is a cornerstone of fundamental human rights found in Article 19 of both the Universal Declaration and the ICCPR.46</p>
        <br /><p>As social media platforms become the central place where public discussion happens, there is a strong debate about the role of platforms in content moderation.47 With hate speech, false news, and media manipulation circulating on platforms like Facebook and Twitter, legislators and the public are calling for companies to address the problem.</p>
        <br /><p>These calls to action are met with concerns about how private companies can mean- ingfully determine the boundaries of speech. For example, David Kaye, the UN’s special rapporteur on the right to freedom of opinion and expression, has expressedconcern that content moderation systems could, even unintentionally, censor minority opinions and other unpopular yet critical forms of free expression.48 The NYU’s Center for Business and Human Rights argues for more governance of technology platforms but states that government intervention can also do harm.49</p>
        <br /><p>The resource-intensive and relentless task of content moderation requires making difficult decisions on both standards and their subsequent application. Kaye goes on to indicate that in this murky environment, putting human rights at the center of this debate offers states, companies, and key stakeholders practical standards to guide content regulation, which would also apply when deploying automated systems.50 While this report cannot delve far into this contentious issue,51 it is important to note that a human rights perspective informs us that few human rights are absolute. The decisions about tradeoffs involve questions around proportionality, that is, balancing the legal and social impact relative to multiple rights. A rights-based frame offers language to analyze the balance between the right to the freedom of expression with rights and freedoms such as political participation, information, assembly, association, privacy, and security.</p>
      </div>
    </div>
  );
}

export default Rights;