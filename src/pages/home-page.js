import { useCallback, useEffect } from "react";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./home-page.module.css";
const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onClothesButtonDonateClick = useCallback(() => {
    navigate("/-clothes-dashboard");
  }, [navigate]);

  const onFoodButtonDonateClick = useCallback(() => {
    navigate("/food-dashboard");
  }, [navigate]);

  const onDonateExploreClick = useCallback(() => {
    navigate("/food-dashboard");
  }, [navigate]);

  const onTestList2Click = useCallback(() => {
    navigate("/search-list");
  }, [navigate]);

  return (
    <div className={styles.homePage}>
      <div className={styles.charityFooter}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.stayConnected}>Stay Connected</div>
            <div className={styles.charitypointsgmailcom}>
              charitypoints@gmail.com
            </div>
            <div className={styles.charitypointsgmailcom}>+91-8178058619</div>
            <div className={styles.charitypointsgmailcom}>{`Our Mission `}</div>
            <div className={styles.charitypointsgmailcom}>{`Our Vision `}</div>
            <div className={styles.charitypointsgmailcom}>
              Supporting people with disabilities
            </div>
            <div className={styles.reportANeighborhoood}>
              Report a neighborhood concern
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.stayConnected}>{`search `}</div>
            <div className={styles.charitypointsgmailcom}>Search by Text</div>
            <div className={styles.charitypointsgmailcom}>Search By Images</div>
            <div className={styles.charitypointsgmailcom}>Search by Voice</div>
            <div className={styles.charitypointsgmailcom}>upload images</div>
          </div>
          <div className={styles.column}>
            <div className={styles.stayConnected}>Donate</div>
            <div className={styles.charitypointsgmailcom}>Food</div>
            <div className={styles.charitypointsgmailcom}>Clothes</div>
            <div className={styles.charitypointsgmailcom}>Books/ Education</div>
            <div className={styles.charitypointsgmailcom}>
              Medical/well-being
            </div>
            <div className={styles.charitypointsgmailcom}>{`Toys & Gifts`}</div>
          </div>
          <div className={styles.column}>
            <div className={styles.stayConnected}>Volunteer</div>
            <div
              className={styles.charitypointsgmailcom}
            >{`Sports Event `}</div>
            <div className={styles.charitypointsgmailcom}>Direct Service</div>
            <div className={styles.charitypointsgmailcom}>Virtual/Social</div>
            <div className={styles.charitypointsgmailcom}>Fundraising</div>
            <div className={styles.charitypointsgmailcom}>
              Mentoring and Coaching
            </div>
            <div className={styles.reportANeighborhoood}>Airbnb Luxe</div>
          </div>
        </div>
        <div className={styles.kicker}>
          <div className={styles.kickerChild} />
          <div className={styles.subFooter}>
            <div className={styles.left}>
              <div className={styles.charityPointsInc}>
                © 2023 charity points, Inc.
              </div>
              <div className={styles.leftChild} />
              <div className={styles.charityPointsInc}>Privacy</div>
              <div className={styles.leftChild} />
              <div className={styles.charityPointsInc}>Terms</div>
              <div className={styles.leftChild} />
              <div className={styles.charityPointsInc}>Sitemap</div>
            </div>
            <div className={styles.right}>
              <div className={styles.languageCurrency}>
                <div className={styles.language}>
                  <img className={styles.globeIcon} alt="" src="/globe1.svg" />
                  <div className={styles.englishUs}>English (US)</div>
                </div>
                <div className={styles.language}>
                  <img
                    className={styles.globeIcon}
                    alt=""
                    src="/dollar21.svg"
                  />
                  <div className={styles.englishUs}>USD</div>
                </div>
              </div>
              <div className={styles.languageCurrency}>
                <img
                  className={styles.socialMediaIcon}
                  alt=""
                  src="/social-media3.svg"
                />
                <img
                  className={styles.socialMediaIcon}
                  alt=""
                  src="/social-media4.svg"
                />
                <img
                  className={styles.globeIcon}
                  alt=""
                  src="/social-media5.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.volunteerFrame}>
        <div className={styles.volunteerFrameChild} />
        <button className={styles.fundrasingButtonVolunteer}>
          <div className={styles.fundrasingButtonVolunteerChild} />
          <div className={styles.fundrasingButtonVolunteerItem} />
          <b className={styles.fundraising1}>Fundraising</b>
          <img
            className={styles.fundrasingButtonVolunteerInner}
            alt=""
            src="/group-178@2x.png"
          />
        </button>
        <button className={styles.virtualsocialButtonVolute}>
          <div className={styles.fundrasingButtonVolunteerChild} />
          <div className={styles.virtualsocialButtonVoluteItem} />
          <img
            className={styles.socialMedia1Icon}
            alt=""
            src="/socialmedia-1@2x.png"
          />
          <b className={styles.virtualsocial1}>Virtual/Social</b>
        </button>
        <button className={styles.directServiceButtonVolunt}>
          <div className={styles.fundrasingButtonVolunteerChild} />
          <div className={styles.directServiceButtonVoluntItem} />
          <b className={styles.directService1}>Direct Service</b>
          <img
            className={styles.teaching1Icon}
            alt=""
            src="/teaching-1@2x.png"
          />
        </button>
        <button className={styles.sportsEventButtonVoluntee}>
          <div className={styles.fundrasingButtonVolunteerChild} />
          <div className={styles.sportsEventButtonVolunteeItem} />
          <b className={styles.sportsEvent1}>Sports Event</b>
          <img className={styles.running11} alt="" src="/running-1-1@2x.png" />
        </button>
        <img
          className={styles.volunteerSectionRainbowDots}
          alt=""
          src="/volunteer-section-rainbow-dots.svg"
        />
        <div
          className={styles.participateShowcaseSkills}
        >{`Participate, Showcase Skills & Gain  Points & opportunities of your interest & make your mark!`}</div>
        <b className={styles.volunteer1}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Volunteer</p>
        </b>
      </div>
      <div className={styles.donateFrame}>
        <div className={styles.donateFrameChild} />
        <button className={styles.toysGiftButtonDonate} data-animate-on-scroll>
          <div className={styles.fundrasingButtonVolunteerChild} />
          <div className={styles.toysGiftButtonDonateItem} />
          <b className={styles.toysGifts1}>{`Toys & Gifts`}</b>
          <img
            className={styles.toysGiftButtonDonateInner}
            alt=""
            src="/group-177@2x.png"
          />
        </button>
        <button className={styles.medicalButtonDonate} data-animate-on-scroll>
          <div className={styles.fundrasingButtonVolunteerChild} />
          <img
            className={styles.medicalButtonDonateItem}
            alt=""
            src="/rectangle-7.svg"
          />
          <b className={styles.medical}>Medical</b>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
        </button>
        <button className={styles.bookButtonDonate} data-animate-on-scroll>
          <div className={styles.rectangleParent}>
            <div className={styles.fundrasingButtonVolunteerChild} />
            <img
              className={styles.medicalButtonDonateItem}
              alt=""
              src="/rectangle-71.svg"
            />
          </div>
          <b className={styles.books}>Books</b>
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group1@2x.png"
          />
        </button>
        <button
          className={styles.clothesButtonDonate}
          onClick={onClothesButtonDonateClick}
          data-animate-on-scroll
        >
          <div className={styles.fundrasingButtonVolunteerChild} />
          <img
            className={styles.medicalButtonDonateItem}
            alt=""
            src="/rectangle-72.svg"
          />
          <b className={styles.clothes1}>Clothes</b>
          <img
            className={styles.clothesButtonDonateInner}
            alt=""
            src="/group-179@2x.png"
          />
        </button>
        <button
          className={styles.foodButtonDonate}
          onClick={onFoodButtonDonateClick}
          data-animate-on-scroll
        >
          <div className={styles.fundrasingButtonVolunteerChild} />
          <div className={styles.foodButtonDonateItem} />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <div className={styles.foodButtonDonateInner} />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-18.svg" />
          <img
            className={styles.donateFoodIconDonateSect}
            alt=""
            src="/donate-food-icon--donate-section-2@2x.png"
          />
          <b className={styles.food1}>FOOD</b>
        </button>
        <div
          className={styles.showcaseYourLove}
        >{` Showcase  your love and sympathy for others , your small contribution will help others to grow as well ! `}</div>
        <b className={styles.donate1}>DONATE</b>
        <img
          className={styles.donateSectionYellowDots}
          alt=""
          src="/donate-section-yellow-dots.svg"
        />
      </div>
      <div className={styles.exploreFrame}>
        <div className={styles.frame3} />
        <div className={styles.charityConnectExplore}>
          <div className={styles.charityConnectExploreChild} />
          <b className={styles.charityConnect}>
            <p className={styles.blankLine}>Charity</p>
            <p className={styles.blankLine}>Connect</p>
          </b>
          <img
            className={styles.acceptRequestRafiki1}
            alt=""
            src="/accept-requestrafiki-1@2x.png"
          />
        </div>
        <div className={styles.volunteerExplore}>
          <div className={styles.volunteerExploreChild} />
          <b className={styles.volunteer3}>Volunteer</b>
          <img
            className={styles.humanitarianHelpBro1}
            alt=""
            src="/humanitarian-helpbro-1@2x.png"
          />
        </div>
        <button className={styles.donateExplore} onClick={onDonateExploreClick}>
          <div className={styles.donateExploreChild} />
          <img
            className={styles.donateFoodIconFeatures1}
            alt=""
            src="/donate-food-icon--features-1@2x.png"
          />
          <b className={styles.donate2}>DONATE</b>
        </button>
        <div
          className={styles.donateVolunteer}
        >{`Donate, Volunteer & Register as Charity/organizations to earn Charity  Points  as rewards  of appreciation through our website  for making a good impact in the society!`}</div>
        <b className={styles.exploreOpportunities}>
          <p className={styles.blankLine}>Explore Opportunities</p>
        </b>
        <img
          className={styles.exploreGreenDots}
          alt=""
          src="/explore-green-dots.svg"
        />
      </div>
      <div className={styles.searchOrganisationFrame}>
        <div className={styles.map1}>
          <img className={styles.page1Icon} alt="" src="/page1.svg" />
          <div className={styles.t1}>
            <div className={styles.rectangleGroup}>
              <textarea className={styles.groupInner} />
              <textarea
                className={styles.yourLocation}
                placeholder="Your Location"
              />
              <img className={styles.groupIcon} alt="" src="/group-1.svg" />
            </div>
            <div className={styles.t11}>
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <textarea
                  className={styles.typeOfDonation}
                  placeholder="Type of Donation"
                />
              </div>
            </div>
          </div>
          <div className={styles.map1Inner}>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.historyItemWrapper}>
            <Input
              className={styles.rectangleContainer}
              variant="outline"
              width="187px"
              type="dateTime-local"
            />
          </div>
          <button className={styles.testList2} onClick={onTestList2Click}>
            <div className={styles.groupDiv}>
              <div className={styles.groupChild2} />
              <div className={styles.searchOrg}>Search Org.</div>
            </div>
          </button>
        </div>
        <b className={styles.searchOrganizations}>
          <span>{`SEARCH `}</span>
          <span className={styles.organizations}>ORGANIZATIONS</span>
        </b>
      </div>
      <div className={styles.charitysection}>
        <div className={styles.giveMoreGet}>
          Give More. Get More. Earn Charity Points On Every Donation
        </div>
        <img className={styles.icon} alt="" src="/4877806-1@2x.png" />
        <img
          className={styles.d5520fe4f23808a5348942a5a4Icon}
          alt=""
          src="/11790d5520fe4f23808a5348942a5a4c-2@2x.png"
        />
        <div className={styles.donateButtonTopPage}>
          <div className={styles.donateButtonTopPageChild} />
          <b className={styles.donate3}>Donate</b>
        </div>
        <div
          className={styles.searchNearbyCharity}
        >{`Search Nearby Charity Organizations to Donate Books, Clothes, Volunteering your time in social cause `}</div>
        <b className={styles.searchDonateVolunteerContainer}>
          <p className={styles.search1}>{`Search    Donate    Volunteer `}</p>
          <p className={styles.blankLine}>&nbsp;</p>
        </b>
        <div className={styles.homeParent}>
          <div className={styles.home}>
            <p className={styles.blankLine}>HOME</p>
          </div>
          <div className={styles.home}>
            <p className={styles.blankLine}>Register</p>
          </div>
          <div className={styles.home}>
            <p className={styles.blankLine}>Donate</p>
          </div>
          <div className={styles.home}>
            <p className={styles.blankLine}>About us</p>
          </div>
        </div>
        <img
          className={styles.maskGroupIcon2}
          alt=""
          src="/mask-group2@2x.png"
        />
        <div className={styles.logoFooterCharity}>
          <b className={styles.arityPoints}>arity Points</b>
          <div className={styles.logoFooterCharityChild} />
          <b className={styles.ch}>Ch</b>
        </div>
      </div>
      <div className={styles.register2}>Register</div>
      <div className={styles.logoFooterCharity1}>
        <b className={styles.arityPoints1}>arity Points</b>
        <div className={styles.logoFooterCharityItem} />
        <b className={styles.ch1}>Ch</b>
      </div>
      <b
        className={styles.weBelieveIn}
      >{`We Believe in Trust & Transparency `}</b>
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
    </div>
  );
};

export default HomePage;
