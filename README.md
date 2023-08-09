
  # Charity Points 
     Search Nearby Charity Organizations to Donate Books and clothes, Volunteering your time in a social cause 
  ---

  **Table of Contents:**
  
* [Project Summary](#project-summary)
    * [The issue we are hoping to solve](#the-issue-we-are-hoping-to-solve)
    * [How our technology solution can help](#how-our-technology-solution-can-help)
   * [Our idea](#our-idea)
* [Technology implementation](#technology-implementation)
    * [IBM AI services used](#ibm-ai-services-used)
    * [Other IBM technology used](other-ibm-technology-used)
    * Solution Architecture
 * Presentation materials
    * Solution demo video
    * Project development roadmap
 * Additional details
    * How to run the project
 * Team details
    * About
 

## Project Summary 
### The Issue we are Hoping to Solve
---
  More than 220 million Indians sleep hungry each day and lack proper hygiene wear. This has led to a significant increase in the demand for donations in India. While many individuals are willing to contribute, donors encounter various challenges during their efforts to provide essentials such as food, clothes, and books. These challenges include:
  1. Locating Appropriate Organizations: Donors often struggle to identify trustworthy organizations to which they can contribute. They may not know where to direct their donations or which <u>nearby organizations</u> are involved in responsible and effective donation distribution. 
  2. Minimizing Efforts: Some donors prefer convenient methods of giving and may hesitate to put in substantial effort to locate needy individuals or distribute donations personally. As a result, usable items like food and clothing are sometimes discarded, leading to wastage.
  ---
 ### How our technology solution can help
 ---
Introducing the platform "Charity Points," where donors can effortlessly find nearby charities and organizations to contribute their in-kind donations, including items such as food, clothes, books, and medical supplies.
### Our Idea 
Charity Points facilitates the connection(Interface) between donors eager to contribute their <u>**Everyday-Giving**( Food, Clothes, Books, etc)</u> and those <u>Committed(Charities/Organizations)</u>  to collecting  and distributing these vital donations to those in need.<br>
**OBJECTIVE:** The primary objective of Charity Points is to fulfill the demand for donations and extend a helping hand to those who are genuinely in need.<br>
**OUR AIM** We Aim to Create <u>Trust</u> among users and make them feel that their Donations can really change someone's life. This transformation not only resonates at an individual level but also directly influences the nation's economy and fosters natural betterment.<br>
**How it works:** At the Charity Points website Donor/user can  perform Three Activities  1. Search 2. Donate 3. Volunteer 
  1. **Search:**  Users can input their location and select the type of donation they wish to offer (such as books, food, clothes, etc.). The platform will then display a list of organizations operating in those areas where they can contribute their items.
  2. **Donate** Our platform offers a range of donation options including food, clothes, books, medical supplies, toys, and gifts—serving as contributions to everyday giving. Once users provide the details of their items, they will receive a list of organizations to which they can donate.
  3. **Volunteer** We present various avenues for users to volunteer, including participating in events (such as sports and medical activities), offering direct services, engaging in virtual/social events, and contributing to fundraising campaigns. This empowers users to dedicate their time to meaningful causes. <br>

  **Result** When users contribute to a good cause through donations, we express our gratitude by rewarding them with Charity Points or coupons. These valuable rewards can be utilized to redeem courses, participate in activities, or make purchases for themselves or their loved ones. This system encourages donors to consistently engage with the platform, generating a continuous cycle of support. With each interaction, donors experience the joy of making a positive impact while also gaining something meaningful in return. <br>

 **Impact** 
  1. Social
  2. Economical
  3. Environmental <br>

**Our Mission** Charity Points sees a mission to become a Platform where we <br>
## Technology implementation
#### Webiste Development ( Charity Points)
1. **Tech Stack**
* HTML
* CSS
* Javascript
2. **Images and Screenshots of Main Website(Charity Points)**
  
<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/swastikaggarwal/CharityPoints/assets/103200961/f20a4c9c-9eb4-476d-95c1-07615eb8e8d5" alt="Home page" width="500"/>
    <img src="https://github.com/swastikaggarwal/CharityPoints/assets/103200961/8e7b1151-d504-4cb5-9504-1c9b8fddfb53" alt="Food dashboard" width="499"/>
</div>

<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/swastikaggarwal/CharityPoints/assets/103200961/b176065e-cac8-4c7f-9712-ebe105a35747" alt="Clothes dashboard" width="500"/>
    <img src="https://github.com/swastikaggarwal/CharityPoints/assets/103200961/2d3e8b20-22b8-4b96-aa8d-68abe3d6d95d" alt="Search list" width="500"/>

</div>



 ## IBM AI services used
  1. [Watson Assistant](https://cloud.ibm.com/catalog/services/watson-assistant) 
     * When and where: 
We utilize the **Watson Assistant Chatbot** on our website, "Charity Points," to enhance user experience. Through this feature, users can conveniently explore options for donating, volunteering, and registering as an NGO.

  ## Code of Watson Assistant
  
  ```
  <script>
  window.watsonAssistantChatOptions = {
    integrationID: "12650214-b8c0-4e1a-99f6-408259800e97", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "106aa994-9b93-40c0-8264-baf6c87cdf3f", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
</script>
```


##  API KEY USED 
```
API key: g5zv1TuXoobQuBk233Il4stBjOEKF0PDu1zYoJc6pief
```
  ## GIF & Video (Watson Assitant)
     
  <img src="https://github.com/swastikaggarwal/CharityPoints/assets/103200961/832f73a5-b017-4877-b5bb-bbaabf3faf7b" alt="Gif video of IBM Chatbot" width="600"/>

  2. [Watson Speech to Text](https://cloud.ibm.com/catalog/services/speech-to-text) 
   * When and Where

## Other IBM technology used
  1. [IBM Cloud Object Storage](https://www.ibm.com/cloud/object-storage) <br>
    Auto-generated for key <br>
    ```crn:v1:bluemix:public:conversation:au-syd:a/f9e1c3f91e4747b28c7b16f7cb9d264b:106aa994-9b93-40c0-8264-baf6c87cdf3f:resource-key:84ec672a-426b-4361-b223-57a6adf6ebe2```
          
 ## Additional details
 ### How to run the project
 
  Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>

  To preview and run the project on your device:
  1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  2) In the terminal, run `npm install`
  3) Run `npm start` to view the project in the browser
  


