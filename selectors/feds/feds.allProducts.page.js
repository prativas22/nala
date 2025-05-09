import { expect } from '@playwright/test';

export default class AllProductsPageSanity {
  constructor(page) {
    this.page = page;

    // G-Nav Elements
    this.adobeLogo = page.locator('');
    this.signInButton = page.locator('');
    this.creativityAndDesign = page.locator('');
    this.pdfAndEsignatures = page.locator('');
    this.marketingAndCommerce = page.locator('');
    this.helpAndSupport = page.locator('');

    // Creative Cloud Elements
    this.whatIsCC = page.locator('.feds-popup a[href*="creativecloud.html"]').nth(0);
    this.schoolsAndUniversities = page.locator('.feds-popup a[href$="education.html"]');
    this.viewPlansAndPrices = page.locator('.feds-cta.feds-cta--primary[href*="plans.html"]').nth(0);
    this.photoshop = page.locator('.feds-popup a[href*="photoshop.html"]');
    this.AdobeStock = page.locator('.feds-popup a[href*="stock.adobe.com"]');
    this.viewAllProductsCC = page.locator('.feds-navLink.feds-navLink--blue[href*="creativity-design"]');
    this.photo = page.locator('a[href$="promoid=D8F91JW4&mv=other"]');
    this.pdf = page.locator('a[href$="acrobat-pro-cc.html"]');
    this.aIOverviewCC = page.locator('.feds-popup a[href*="ai/overview.html"]').nth(0);
    this.adobeFirefly = page.locator('a[href*="firefly.html"]').nth(0);

    // Document Cloud Elements
    this.adobeAcrobat = page.locator('a[href$="acrobat.html"] .feds-navLink-content');
    this.acrobatPlansAndPricing = page.locator('.feds-cta.feds-cta--primary[href$="/pricing.html"]');
    this.acrobatReader = page.locator('a[href$="pdf-reader.html"]');
    this.business = page.locator('.feds-popup a[href$="acrobat/business.html"]');
    this.government = page.locator('a[href$="/government.html"]').nth(0);
    this.aiOverviewDC = page.locator('.feds-popup a[href$="/ai/overview.html"]').nth(1);
    this.aiInAcrobat = page.locator('.feds-navLink[href$="generative-ai-pdf.html"]');
    this.pdfToWord = page.locator('a[href$="pdf-to-word.html"]');
    this.wordToPDF = page.locator('a[href$="word-to-pdf.html"]');
    this.developerResources = page.locator('a[href$="it-tools.html"]');
    this.eventsAndWebinars = page.locator('a[href$="webinars.html"]');

    // Experience Cloud Elements
    this.adobeExperienceCloud = page.locator('.feds-popup a[href*="business.adobe.com"]').nth(0);
    this.customerDataPlatform = page.locator('a[href*="/rtcdp.html"]');
    this.marketingAutomation = page.locator('.feds-popup a[href*="marketo.html"]');
    this.viewAllProductsEC = page.locator('a[href*="products.html"]');
    this.adobeGenStudio = page.locator('.feds-navLink[href$="genstudio.html"]');
    this.aiAssistant = page.locator('a[href$="ai-assistant.html"]');
    this.adobeExperiencePlatform = page.locator('a[href$="platform.html"]');
    this.adobeGenAI = page.locator('a[href$="genai.html"]');
    this.findProduct = page.locator('a[href$="finder.html"]');
    this.resourceCentre = page.locator('a[href$="resources/main.html"]');
    this.customerSuccessStories = page.locator('a[href*="success-stories"]');
    this.servicesAndSupport = page.locator('a[href$="support/main.html"]');
    this.training = page.locator('a[href*="learning.adobe"]');

    // Help-X Elements
    this.helpCentre = page.locator('.feds-popup a[href$="support.html"]:nth-child(1)');
    this.downloadAndInstall = page.locator(".feds-cta--secondary[href$='catalog.html']").nth(0);
    this.contact = page.locator(".feds-cta--primary[href$='open-jarvis-chat']");
    this.manageMyAccount = page.locator(".feds-popup a[href*='account.adobe']").nth(0);
    this.subscribeToAdobeStatus = page.locator("a[href$='proactivesubscriptions']");
    this.creativeCloudTutorials = page.locator("a[href$='learn']");
    this.adobeExperienceLeague = page.locator("a[href*='experienceleague']:nth-child(4)");

    // Footer Elements
    this.footerCreativeCloud = page.locator(".feds-footer-wrapper a[href*='creativecloud.html']");
    this.footerViewAllProducts = page.locator(".feds-navLink[href*='/products/catalog.html?']");
    this.footerCreativeCloudForBusiness = page.locator(".feds-footer-wrapper [href$='cloud/business.html']").nth(0);
    this.footerAcrobatForBusiness = page.locator(".feds-footer-wrapper a[href$='acrobat/business.html']");
    this.footerDiscountsForStudentsAndTeachers = page.locator(".feds-footer-wrapper a[href$='buy/students.html']");
    this.footerDigitalLearningSolutions = page.locator("a[href$='/elearning.html']");
    this.footerAppsforiOS = page.locator("a[href*='id852473028']");
    this.footerAppsforAndroid = page.locator("a[href*='id=com.adobe.cc']");
    this.footerWhatIsExperienceCloud = page.locator('.feds-footer-wrapper a[href*="business.adobe.com"]').nth(0);
    this.footerTermsOfUse = page.locator('a[href*="experiencecloudterms"]');
    this.footerDownloadAndInstall = page.locator('.feds-footer-wrapper a[href*="download-install.html"]');
    this.footerGenuineSoftware = page.locator('a[href*="genuine.html"]');
    this.footerAdobeBlog = page.locator('.feds-navLink[href*="blog.adobe"]');
    this.footerAdobeDeveloper = page.locator('a[href*="developer.adobe"]');
    this.footerLogInToYourAccount = page.locator('.feds-footer-wrapper a[href*="account.adobe"]').nth(0);
    this.footerAbout = page.locator('.feds-footer-wrapper [href*="about-adobe.html"]').nth(0);
    this.footerIntegrity = page.locator('a[href*="integrity.html"]');

    // Featured Products
    this.footerAdobeAcrobatReaderlogo = page.locator('a[href$="reader/"]');
    this.footerAdobeExpresslogo = page.locator('a[href$="Z2G1FSYV&mv=other"]:nth-of-type(2)');
    this.footerPhotoshoplogo = page.locator('a[href$="photoshop/free-trial-download.html"]');
    this.footerIllustratorlogo = page.locator('a[href$="illustrator/free-trial-download.html"]');

    // Change Region and social media
    this.changeRegion = page.locator('.feds-regionPicker-wrapper');
    this.facebookLogo = page.locator('a[href*="facebook"]');
    this.instagramLogo = page.locator('a[href*="instagram"]').nth(0);
    this.twitterlogo = page.locator('a[href*="twitter"]');
    this.linkedinLogo = page.locator('a[href*="linkedin"]');
    this.copyright = page.locator('.feds-footer-legalWrapper>p>span');
    this.privacyPolicy = page.locator('.feds-footer-legalWrapper a:nth-of-type(1)');
    this.termsOfUse = page.locator('.feds-footer-legalWrapper a:nth-of-type(2)');
    this.cookies = page.locator('.feds-footer-legalWrapper a:nth-of-type(3)');
    this.protectMyPersonalData = page.locator('.feds-footer-legalWrapper a:nth-of-type(4)');
    this.adChoices = page.locator('.feds-footer-legalWrapper a:nth-of-type(5)');
  }
}
