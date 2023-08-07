import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./clothes-dashboard.module.css";
const ClothesDashboard = () => {
  const navigate = useNavigate();

  const onEnterButtonClick = useCallback(() => {
    navigate("/search-list");
  }, [navigate]);

  return (
    <div className={styles.clothesDashboard}>
      <img className={styles.unionIcon} alt="" src="/union1.svg" />
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-471@2x.png"
          />
          <b className={styles.donate}>Donate</b>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <div className={styles.groupInner} />
          </div>
          <button className={styles.bytesizesearch} autoFocus />
        </div>
        <div className={styles.searchParent}>
          <b className={styles.search}>search</b>
          <Link className={styles.home} to="/">
            Home
          </Link>
          <img className={styles.frameIcon} alt="" src="/frame-75.svg" />
        </div>
        <div className={styles.volunteerLeft}>
          <b className={styles.volunteer}>Volunteer</b>
          <img className={styles.frameIcon} alt="" src="/frame-76.svg" />
        </div>
        <div className={styles.goalsLeft}>
          <b className={styles.volunteer}>Goals</b>
          <img className={styles.frameIcon} alt="" src="/frame-77.svg" />
        </div>
        <div className={styles.settingsLeft}>
          <b className={styles.volunteer}>Settings</b>
          <img className={styles.frameIcon} alt="" src="/frame-78.svg" />
        </div>
        <div className={styles.overviewButton}>
          <div className={styles.overviewButtonChild} />
          <b className={styles.overview}>Overview</b>
          <img
            className={styles.overviewButtonItem}
            alt=""
            src="/frame-79.svg"
          />
        </div>
      </div>
      <img
        className={styles.donateButtonLeft}
        alt=""
        src="/donate-button--left.svg"
      />
      <div className={styles.searchButtonLeft}>
        <a className={styles.group}>
          <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector16.svg" />
        </a>
      </div>
      <div className={styles.topMainHeading}>
        <div className={styles.donateClothes}>DONATE CLOTHES</div>
        <div className={styles.getSummaryOf}>
          Get summary of your clothes donation details here.
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.rectangleDiv} />
        <div className={styles.donateForGoodCauseParent}>
          <b className={styles.donateForGood}>Donate for good cause</b>
          <img className={styles.groupIcon} alt="" src="/group-1601.svg" />
        </div>
        <div className={styles.giveYourDonationContainer}>
          <p className={styles.giveYourDonation}>Give your donation for</p>
          <p className={styles.giveYourDonation}>awesome space in world</p>
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <img
                className={styles.groupChild1}
                alt=""
                src="/group-1551.svg"
              />
              <div className={styles.groupParent1}>
                <div className={styles.ellipseParent}>
                  <div className={styles.ellipseDiv} />
                  <div className={styles.div}>$</div>
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector17.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector18.svg"
                />
                <img className={styles.moonIcon} alt="" src="/moon1.svg" />
              </div>
              <div className={styles.groupChild2} />
              <img className={styles.vectorIcon4} alt="" src="/vector19.svg" />
              <img className={styles.vectorIcon5} alt="" src="/vector20.svg" />
              <img className={styles.vectorIcon6} alt="" src="/vector21.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detailsRight}>
        <div className={styles.educationGoals}>
          <div className={styles.educationGoalsChild} />
          <div className={styles.education}>Education</div>
          <img
            className={styles.students1Icon}
            alt=""
            src="/students-1@2x.png"
          />
          <div className={styles.div1}>12/20/24</div>
          <div className={styles.div2}>8,000</div>
        </div>
        <div className={styles.hygieneWearsGoals}>
          <div className={styles.educationGoalsChild} />
          <div className={styles.education}>Hygiene wears</div>
          <img className={styles.fashion1Icon} alt="" src="/fashion-1@2x.png" />
          <div className={styles.div3}>12/20/24</div>
          <div className={styles.div4}>6,000</div>
        </div>
        <div className={styles.reliefFundsGoals}>
          <div className={styles.educationGoalsChild} />
          <div className={styles.education}>Relief Funds</div>
          <img className={styles.flood1Icon} alt="" src="/flood-1@2x.png" />
          <div className={styles.div5}>12/20/24</div>
          <div className={styles.div6}>2,000</div>
        </div>
        <img
          className={styles.plusGoalsSign}
          alt=""
          src="/plus-goals-sign.svg"
        />
        <b className={styles.goals1}>Goals</b>
      </div>
      <div className={styles.enterDetailsSection}>
        <div className={styles.enterDetailsSectionChild} />
        <button className={styles.enterButton} onClick={onEnterButtonClick}>
          <button className={styles.enterButtonChild} />
          <div className={styles.enter}>Enter</div>
        </button>
        <div className={styles.cancelDonation}>Cancel Donation</div>
        <div className={styles.cancelDonationButton}>
          <div className={styles.cancelDonationButtonChild} />
          <div className={styles.cancelDonationButtonItem} />
        </div>
        <div className={styles.remainingStock}>Remaining Stock</div>
        <div className={styles.div7}>
          <span>{` `}</span>
          <span className={styles.span}>1350</span>
        </div>
        <div className={styles.donated}>Donated</div>
        <div className={styles.div8}>
          <span>{` `}</span>
          <span className={styles.span}>1500</span>
        </div>
        <div className={styles.totalDonation}>Total Donation</div>
        <b className={styles.b}> 2850</b>
        <img
          className={styles.enterDetailsSectionItem}
          alt=""
          src="/vector-411.svg"
        />
        <div className={styles.departureField}>
          <div className={styles.t1}>
            <div className={styles.getPointsRedLogoRightInner}>
              <div className={styles.groupChild3} />
              <b className={styles.type}>{`Type `}</b>
              <textarea className={styles.men} placeholder="Men" />
            </div>
          </div>
        </div>
        <div className={styles.t1Parent}>
          <div className={styles.getPointsRedLogoRightInner}>
            <div className={styles.getPointsRedLogoRightInner}>
              <div className={styles.groupChild3} />
              <b className={styles.type}>size</b>
              <textarea className={styles.men} placeholder="Men" />
            </div>
          </div>
          <img
            className={styles.download3Icon}
            alt=""
            src="/download-3@2x.png"
          />
        </div>
        <div className={styles.departureField1}>
          <div className={styles.t1}>
            <div className={styles.groupChild3} />
            <b className={styles.yourLocation}>Your Location</b>
            <textarea className={styles.indiaInd} placeholder="INDIA ( IND)" />
            <img className={styles.groupChild6} alt="" src="/group-12.svg" />
          </div>
        </div>
        <div className={styles.enterDetails}>ENTER DETAILS</div>
        <div className={styles.quantityBar}>
          <div className={styles.prunit}>Pr/unit</div>
          <div className={styles.quantity}>{`QUANTITY `}</div>
          <div className={styles.quantityBarChild} />
          <div className={styles.quantityBarItem} />
        </div>
        <img
          className={styles.enterDetailsSectionInner}
          alt=""
          src="/group-183.svg"
        />
        <img className={styles.download4Icon} alt="" src="/download-3@2x.png" />
      </div>
      <div className={styles.otherOptionsDetailsSerch}>
        <div className={styles.otherOptionsDetailsSerchChild} />
        <div className={styles.submitButton}>
          <div className={styles.submitButtonChild} />
          <img className={styles.upload1Icon} alt="" src="/upload-11@2x.png" />
          <div className={styles.submit}>Submit</div>
        </div>
        <div className={styles.microphone}>
          <p className={styles.giveYourDonation}>Microphone</p>
        </div>
        <button className={styles.microphoneButton}>
          <div className={styles.microphoneButtonChild} />
          <div className={styles.microphoneButtonItem} />
          <img
            className={styles.microphoneButtonInner}
            alt=""
            src="/ellipse-542.svg"
          />
          <img
            className={styles.microphone1Icon}
            alt=""
            src="/microphone-1@2x.png"
          />
        </button>
        <div className={styles.speakNow}>SPEAK NOW</div>
        <img
          className={styles.otherOptionsDetailsSerchItem}
          alt=""
          src="/vector-421.svg"
        />
        <div className={styles.uploadButton}>
          <img
            className={styles.uploadButtonChild}
            alt=""
            src="/rectangle-67.svg"
          />
          <img className={styles.upload1Icon} alt="" src="/upload-11@2x.png" />
          <div className={styles.submit}>Upload</div>
        </div>
        <div className={styles.gallery}>Gallery</div>
        <button className={styles.galleryButton}>
          <div className={styles.microphoneButtonChild} />
          <div className={styles.microphoneButtonItem} />
          <img
            className={styles.microphoneButtonInner}
            alt=""
            src="/ellipse-543.svg"
          />
          <img
            className={styles.imagesInterfaceSymbol1Icon}
            alt=""
            src="/imagesinterfacesymbol-11@2x.png"
          />
        </button>
        <div className={styles.camera}>Camera</div>
        <button className={styles.cameraButton}>
          <div className={styles.microphoneButtonChild} />
          <div className={styles.microphoneButtonItem} />
          <img
            className={styles.cameraButtonInner}
            alt=""
            src="/ellipse-531.svg"
          />
          <img className={styles.photo1Icon} alt="" src="/photo-11@2x.png" />
        </button>
        <div className={styles.takeAPicture}>{`TAKE A PICTURE `}</div>
        <div className={styles.orContinueWith}>{`OR  Continue with `}</div>
      </div>
      <div className={styles.getPointsRedLogoRight}>
        <div className={styles.getPointsRedLogoRightChild} />
        <div className={styles.getPointsRedLogoRightInner}>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon7} alt="" src="/vector22.svg" />
            <img className={styles.vectorIcon8} alt="" src="/vector23.svg" />
            <div className={styles.ellipseGroup}>
              <div className={styles.groupChild7} />
              <b className={styles.b1}>$</b>
            </div>
            <div className={styles.ellipseContainer}>
              <div className={styles.groupChild8} />
              <b className={styles.b2}>$</b>
            </div>
          </div>
        </div>
        <b className={styles.getGreatPointsContainer}>
          <p className={styles.giveYourDonation}>Get great</p>
          <p className={styles.giveYourDonation}>points!</p>
        </b>
        <img
          className={styles.vectorGetGreatPointsRight}
          alt=""
          src="/vector-get-great-points-right-.svg"
        />
      </div>
      <div className={styles.leaderboardSection}>
        <div className={styles.leaderboardSectionChild} />
        <div className={styles.sendTransferButton}>
          <div className={styles.sendTransferButtonChild} />
          <img className={styles.arrowVector} alt="" src="/arrow-vector.svg" />
          <b className={styles.sendTheTransfer}>Send the transfer</b>
        </div>
        <div className={styles.unit0Right}>
          <div className={styles.unit0RightChild} />
          <div className={styles.unit}>unit</div>
          <div className={styles.div9}>0</div>
        </div>
        <div className={styles.plusElipse}>
          <img
            className={styles.plusCircleIcon}
            alt=""
            src="/pluscircle2.svg"
          />
          <div className={styles.addNew}>Add New</div>
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
        <div className={styles.clothesDonorLeaderboard}>
          Clothes Donor Leaderboard...
        </div>
      </div>
      <div className={styles.sdgStatistics}>
        <div className={styles.sdgStatisticsChild} />
        <div className={styles.noPovertyStats}>
          <div className={styles.statsLineOfNoPoverty}>
            <div className={styles.statsLineOfNoPovertyChild} />
            <div className={styles.statsLineOfNoPovertyItem} />
            <div className={styles.noPoverty}>NO POVERTY</div>
          </div>
          <img
            className={styles.noPovertyStatsChild}
            alt=""
            src="/rectangle-731@2x.png"
          />
          <div className={styles.div10}>48%</div>
        </div>
        <div className={styles.qualityEducationStats}>
          <div className={styles.qualityEducationStatsLine}>
            <div className={styles.qualityEducationStatsLineChild} />
            <div className={styles.qualityEducationStatsLineItem} />
            <div className={styles.qualityEducation}>QUALITY EDUCATION</div>
          </div>
          <img
            className={styles.qualityEducationStatsChild}
            alt=""
            src="/rectangle-722@2x.png"
          />
          <div className={styles.div10}>21%</div>
        </div>
        <div className={styles.zeroHungerStats}>
          <div className={styles.zeroHungerStatsLine}>
            <div className={styles.qualityEducationStatsLineChild} />
            <div className={styles.zeroHungerStatsLineItem} />
            <div className={styles.zeroHunger}>Zero Hunger</div>
          </div>
          <img
            className={styles.zeroHungerStatsChild}
            alt=""
            src="/rectangle-712@2x.png"
          />
          <div className={styles.div12}>52%</div>
        </div>
        <div className={styles.sustainableDevelopmentGoals}>
          Sustainable Development Goals
        </div>
      </div>
      <div className={styles.adminComponents}>
        <div className={styles.adminDetails}>
          <b className={styles.andrew}>Andrew</b>
          <div className={styles.adminAccount}>Admin account</div>
        </div>
        <img
          className={styles.adminLogosymbol}
          alt=""
          src="/admin-logosymbol.svg"
        />
        <img className={styles.bellIcon} alt="" src="/bell1.svg" />
        <img className={styles.mailIcon} alt="" src="/mail1.svg" />
      </div>
      <div className={styles.logoFooterCharity}>
        <b className={styles.arityPoints}>arity Points</b>
        <div className={styles.logoFooterCharityChild} />
        <b className={styles.ch}>Ch</b>
      </div>
    </div>
  );
};

export default ClothesDashboard;
