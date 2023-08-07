import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./food-dashboard.module.css";
const FoodDashboard = () => {
  const navigate = useNavigate();

  const onEnterButtonClick = useCallback(() => {
    navigate("/search-list");
  }, [navigate]);

  return (
    <div className={styles.foodDashboard}>
      <img className={styles.unionIcon} alt="" src="/union.svg" />
      <div className={styles.rectangleParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-47@2x.png" />
        <div className={styles.settingsOption}>
          <b className={styles.settings}>Settings</b>
          <img
            className={styles.settingsOptionChild}
            alt=""
            src="/frame-7.svg"
          />
        </div>
        <div className={styles.goalsOption}>
          <b className={styles.settings}>Goals</b>
          <img
            className={styles.settingsOptionChild}
            alt=""
            src="/frame-71.svg"
          />
        </div>
        <div className={styles.volunteerOption}>
          <b className={styles.settings}>Volunteer</b>
          <img
            className={styles.settingsOptionChild}
            alt=""
            src="/frame-72.svg"
          />
        </div>
        <div className={styles.donateOption}>
          <b className={styles.donate}>Donate</b>
          <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
        </div>
        <Link className={styles.search} to="/search-list">
          Search
        </Link>
        <button className={styles.bytesizesearch} autoFocus>
          <a className={styles.group}>
            <img className={styles.vectorIcon2} alt="" src="/vector6.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector7.svg" />
          </a>
        </button>
        <div className={styles.homeSection}>
          <Link className={styles.home} to="/">
            Home
          </Link>
          <img
            className={styles.settingsOptionChild}
            alt=""
            src="/frame-73.svg"
          />
        </div>
        <div className={styles.overviewButton}>
          <div className={styles.overviewButtonChild} />
          <b className={styles.overview}>Overview</b>
          <img
            className={styles.overviewButtonItem}
            alt=""
            src="/frame-74.svg"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
        </div>
      </div>
      <div className={styles.donateForGoodCouaseDownBu}>
        <div className={styles.donateForGoodCouaseDownBuChild} />
        <b className={styles.donateForGood}>Donate for good cause</b>
        <img
          className={styles.donateForGoodCouaseDownBuItem}
          alt=""
          src="/group-160.svg"
        />
        <div className={styles.donateForGoodCouaseDownBuInner}>
          <div className={styles.groupParent}>
            <div className={styles.groupContainer}>
              <img className={styles.groupIcon} alt="" src="/group-155.svg" />
              <div className={styles.groupDiv}>
                <div className={styles.ellipseParent}>
                  <div className={styles.ellipseDiv} />
                  <div className={styles.div}>$</div>
                </div>
                <img className={styles.vectorIcon4} alt="" src="/vector8.svg" />
                <img className={styles.vectorIcon4} alt="" src="/vector9.svg" />
                <img className={styles.moonIcon} alt="" src="/moon.svg" />
              </div>
              <div className={styles.rectangleDiv} />
              <img className={styles.vectorIcon6} alt="" src="/vector10.svg" />
              <img className={styles.vectorIcon7} alt="" src="/vector11.svg" />
              <img className={styles.vectorIcon8} alt="" src="/vector12.svg" />
            </div>
            <div className={styles.giveYourDonationContainer}>
              <p className={styles.giveYourDonation}>Give your donation for</p>
              <p className={styles.giveYourDonation}>awesome space in world</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.topDonateFood}>
        <div className={styles.getSummaryOf}>
          Get summary of your food donation details here.
        </div>
        <div className={styles.donateFood}>DONATE FOOD</div>
      </div>
      <div className={styles.enterDetailsSection}>
        <div className={styles.enterDetailsSectionChild} />
        <div className={styles.foodMeter}>
          <div className={styles.cancelDonation}>Cancel Donation</div>
          <div className={styles.cancellButton}>
            <div className={styles.cancellButtonChild} />
            <div className={styles.cancellButtonItem} />
          </div>
          <div className={styles.remainingStock}>Remaining stock</div>
          <div className={styles.div1}>
            <span>{` `}</span>
            <span className={styles.span}>130.25</span>
          </div>
          <div className={styles.donated}>
            <span>Donated</span>
            <span className={styles.span1}>{` `}</span>
          </div>
          <div className={styles.kg}>
            <span>{` `}</span>
            <span className={styles.span}>150.50 kg</span>
          </div>
          <div className={styles.totalDonation}>{`Total Donation `}</div>
          <b className={styles.kg2}> 280.75 kg</b>
          <div className={styles.foodMeter1}>Food Meter</div>
        </div>
        <img
          className={styles.enterDetailsSectionItem}
          alt=""
          src="/vector-41.svg"
        />
        <div className={styles.quantityDetails}>
          <div className={styles.prkg}>Pr/kg</div>
          <div className={styles.quantity}>
            <span>QUANTITY</span>
            <span className={styles.span2}>{` `}</span>
          </div>
          <div className={styles.quantityDetailsChild} />
          <div className={styles.quantityDetailsItem} />
          <div className={styles.kg3}>10 kg</div>
        </div>
        <button className={styles.enterButton} onClick={onEnterButtonClick}>
          <div className={styles.enterButtonChild} />
          <div className={styles.enter}>Enter</div>
        </button>
        <div className={styles.enterDetails}>ENTER DETAILS</div>
        <img
          className={styles.enterDetailsSectionInner}
          alt=""
          src="/group-183.svg"
        />
      </div>
      <div className={styles.orContinueSection}>
        <div className={styles.orContinueSectionChild} />
        <div className={styles.submitButton}>
          <div className={styles.submitButtonChild} />
          <div className={styles.upload1Parent}>
            <img className={styles.upload1Icon} alt="" src="/upload-1@2x.png" />
            <div className={styles.submit}>Submit</div>
          </div>
        </div>
        <div className={styles.microphone}>
          <p className={styles.giveYourDonation}>Microphone</p>
        </div>
        <div className={styles.microphoneButton}>
          <div className={styles.microphoneButtonChild} />
          <div className={styles.microphoneButtonItem} />
          <img
            className={styles.microphoneButtonInner}
            alt=""
            src="/ellipse-54.svg"
          />
          <img
            className={styles.microphone1Icon}
            alt=""
            src="/microphone-1@2x.png"
          />
        </div>
        <div className={styles.speakNow}>SPEAK NOW</div>
        <img
          className={styles.orContinueSectionItem}
          alt=""
          src="/vector-42.svg"
        />
        <div className={styles.uploadButton}>
          <div className={styles.submitButtonChild} />
          <div className={styles.upload1Parent}>
            <img className={styles.upload1Icon} alt="" src="/upload-1@2x.png" />
            <div className={styles.submit}>Upload</div>
          </div>
        </div>
        <div className={styles.gallery}>Gallery</div>
        <div className={styles.galleryButton}>
          <div className={styles.microphoneButtonChild} />
          <div className={styles.microphoneButtonItem} />
          <img
            className={styles.microphoneButtonInner}
            alt=""
            src="/ellipse-541.svg"
          />
          <img
            className={styles.imagesInterfaceSymbol1Icon}
            alt=""
            src="/imagesinterfacesymbol-1@2x.png"
          />
        </div>
        <div className={styles.camera}>Camera</div>
        <div className={styles.cameraButton}>
          <div className={styles.microphoneButtonChild} />
          <div className={styles.microphoneButtonItem} />
          <img
            className={styles.cameraButtonInner}
            alt=""
            src="/ellipse-53.svg"
          />
          <img className={styles.photo1Icon} alt="" src="/photo-1@2x.png" />
        </div>
        <div className={styles.takeAPicture}>{`TAKE A PICTURE `}</div>
        <div className={styles.orContinueWith}>{`OR  Continue with `}</div>
      </div>
      <div className={styles.getGreatPointsBox}>
        <div className={styles.getGreatPointsBoxChild} />
        <img
          className={styles.greatPointsVector}
          alt=""
          src="/great-points-vector.svg"
        />
        <div className={styles.getGreatPointContainer}>
          <p className={styles.giveYourDonation}>Get great</p>
          <p className={styles.giveYourDonation}>point!</p>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon9} alt="" src="/vector13.svg" />
          <img className={styles.vectorIcon10} alt="" src="/vector14.svg" />
          <div className={styles.ellipseGroup}>
            <div className={styles.groupChild1} />
            <b className={styles.b}>$</b>
          </div>
          <div className={styles.ellipseContainer}>
            <div className={styles.groupChild2} />
            <b className={styles.b1}>$</b>
          </div>
        </div>
      </div>
      <div className={styles.adminSectionTop}>
        <img className={styles.bellIcon} alt="" src="/bell.svg" />
        <img className={styles.mailIcon} alt="" src="/mail.svg" />
        <img className={styles.adminLogo} alt="" src="/admin-logo.svg" />
        <div className={styles.adminDetails}>
          <div className={styles.adminAccount}>Admin account</div>
          <div className={styles.andrew}>Andrew</div>
        </div>
      </div>
      <div className={styles.leaderboardSection}>
        <div className={styles.leaderboardSectionChild} />
        <div className={styles.quantityUnitRight}>
          <div className={styles.quantityUnitRightChild} />
          <div className={styles.kg4}>kg</div>
          <textarea className={styles.textarea} placeholder="0" />
        </div>
        <div className={styles.plusElipse}>
          <div className={styles.addNew}>Add New</div>
          <img className={styles.plusCircleIcon} alt="" src="/pluscircle.svg" />
        </div>
        <div className={styles.miaElipse}>
          <div className={styles.mia}>Mia</div>
          <img
            className={styles.miaElipseChild}
            alt=""
            src="/ellipse-52@2x.png"
          />
        </div>
        <div className={styles.mikeElipse}>
          <div className={styles.mike}>Mike</div>
          <img
            className={styles.miaElipseChild}
            alt=""
            src="/ellipse-51@2x.png"
          />
        </div>
        <div className={styles.johnElipse}>
          <div className={styles.john}>John</div>
          <img
            className={styles.miaElipseChild}
            alt=""
            src="/ellipse-48@2x.png"
          />
        </div>
        <div className={styles.monicaElipse}>
          <div className={styles.monica}>Monica</div>
          <img
            className={styles.monicaElipseChild}
            alt=""
            src="/ellipse-49@2x.png"
          />
        </div>
        <div className={styles.annElipse}>
          <div className={styles.ann}>Ann</div>
          <img
            className={styles.miaElipseChild}
            alt=""
            src="/ellipse-50@2x.png"
          />
        </div>
        <div className={styles.foodDonorLeaderboard}>
          Food Donor Leaderboard...
        </div>
      </div>
      <div className={styles.sdgRightStats}>
        <div className={styles.noPovertyRight}>
          <div className={styles.div2}>48%</div>
          <div className={styles.noPoverty}>NO POVERTY</div>
          <div className={styles.noPovertyRightChild} />
          <div className={styles.noPovertyRightItem} />
          <img
            className={styles.noPovertyRightInner}
            alt=""
            src="/rectangle-73@2x.png"
          />
        </div>
        <div className={styles.qualityEducationRight}>
          <div className={styles.div3}>21%</div>
          <div className={styles.qualityEducationRightChild} />
          <div className={styles.qualityEducationRightItem} />
          <div className={styles.qualityEducation}>QUALITY EDUCATION</div>
          <img
            className={styles.qualityEducationRightInner}
            alt=""
            src="/rectangle-721@2x.png"
          />
        </div>
        <div className={styles.zeroHungerRight}>
          <div className={styles.div4}>52%</div>
          <div className={styles.zeroHungerRightChild} />
          <div className={styles.zeroHungerRightItem} />
          <div className={styles.zeroHunger}>Zero Hunger</div>
          <img
            className={styles.zeroHungerRightInner}
            alt=""
            src="/rectangle-711@2x.png"
          />
        </div>
        <div className={styles.sustainableDevelopmentGoals}>
          Sustainable Development Goals
        </div>
      </div>
      <div className={styles.goalsSectionRight}>
        <div className={styles.communityKitchensRight}>
          <div className={styles.communityKitchensRightChild} />
          <div className={styles.communityKitchens}>
            <p className={styles.giveYourDonation}>Community</p>
            <p className={styles.giveYourDonation}> Kitchens</p>
          </div>
          <img className={styles.cooking1Icon} alt="" src="/cooking-1@2x.png" />
          <div className={styles.byEndOf}>by end of 12/20/24</div>
          <div className={styles.div5}>2,000</div>
        </div>
        <div className={styles.wellNourishedRight}>
          <div className={styles.communityKitchensRightChild} />
          <div className={styles.wellNourished}>well-nourished</div>
          <img className={styles.farmer1Icon} alt="" src="/farmer-1@2x.png" />
          <div className={styles.byEndOf1}> by end of 12/20/24</div>
          <div className={styles.lakh}>2 Lakh</div>
        </div>
        <div className={styles.midDayMealsRight}>
          <div className={styles.communityKitchensRightChild} />
          <div className={styles.midDayMeals}>Mid-Day Meals</div>
          <img
            className={styles.restaurant1Icon}
            alt=""
            src="/restaurant-1@2x.png"
          />
          <div className={styles.byEndOf2}> by end of 12/20/24</div>
          <div className={styles.crore}>350-Crore</div>
        </div>
        <img className={styles.plusCircleIcon1} alt="" src="/pluscircle1.svg" />
        <div className={styles.goals1}>Goals</div>
      </div>
      <div className={styles.logoFooterCharity}>
        <b className={styles.arityPoints}>arity Points</b>
        <div className={styles.logoFooterCharityChild} />
        <b className={styles.ch}>Ch</b>
      </div>
      <div className={styles.departureField}>
        <div className={styles.t1}>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild3} />
            <b className={styles.type}>{`Type `}</b>
            <textarea className={styles.raw} placeholder="Raw" />
          </div>
        </div>
      </div>
      <div className={styles.t1Parent}>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild3} />
            <b className={styles.type}>{`Date of expiry `}</b>
            <textarea className={styles.raw} placeholder="Men" />
          </div>
        </div>
        <img className={styles.download3Icon} alt="" src="/download-3@2x.png" />
      </div>
      <div className={styles.departureField1}>
        <div className={styles.t1}>
          <div className={styles.groupChild3} />
          <b className={styles.yourLocation}>Your Location</b>
          <textarea className={styles.indiaInd} placeholder="INDIA ( IND)" />
          <img className={styles.groupChild6} alt="" src="/group-11.svg" />
        </div>
      </div>
    </div>
  );
};

export default FoodDashboard;
