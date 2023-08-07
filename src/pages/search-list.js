import styles from "./search-list.module.css";
const SearchList = () => {
  return (
    <div className={styles.searchList}>
      <div className={styles.nav}>
        <div className={styles.airbnbNav}>
          <div className={styles.logo}>
            <div className={styles.arityPointsParent}>
              <b className={styles.arityPoints}>arity Points</b>
              <div className={styles.ellipseParent}>
                <div className={styles.groupChild} />
                <b className={styles.ch}>Ch</b>
              </div>
            </div>
          </div>
          <div className={styles.airbnbSearch}>
            <div className={styles.attribute}>
              <div className={styles.attribute1}>Location</div>
              <div className={styles.value}>Location</div>
            </div>
            <div className={styles.divider} />
            <div className={styles.attribute}>
              <div className={styles.attribute1}>Check in</div>
              <div className={styles.value}>Type</div>
            </div>
            <div className={styles.divider} />
            <div className={styles.attribute}>
              <div className={styles.attribute1}>Guests</div>
              <div className={styles.value} />
            </div>
            <div className={styles.iconButton}>
              <div className={styles.iconButtonBase}>
                <img className={styles.icon} alt="" src="/icon8.svg" />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img className={styles.globeIcon} alt="" src="/globe2.svg" />
            <div className={styles.profileDropdown}>
              <img className={styles.globeIcon} alt="" src="/menu.svg" />
              <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
            </div>
          </div>
        </div>
        <div className={styles.filters}>
          <div className={styles.left}>
            <div className={styles.button}>
              <div className={styles.buttonBase}>
                <img className={styles.icon1} alt="" src="/icon9.svg" />
                <div className={styles.text}>Food</div>
                <img className={styles.icon} alt="" src="/icon10.svg" />
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.buttonBase}>
                <img className={styles.icon1} alt="" src="/icon9.svg" />
                <div className={styles.text}>Clothes</div>
                <img className={styles.icon} alt="" src="/icon10.svg" />
              </div>
            </div>
          </div>
          <div className={styles.divider2} />
          <div className={styles.right1}>
            <div className={styles.button2}>
              <div className={styles.buttonBase}>
                <img className={styles.icon1} alt="" src="/icon9.svg" />
                <div className={styles.text}>Books</div>
                <img className={styles.icon1} alt="" src="/icon11.svg" />
              </div>
            </div>
            <div className={styles.button2}>
              <div className={styles.buttonBase}>
                <img className={styles.icon1} alt="" src="/icon12.svg" />
                <div className={styles.text}>Medical</div>
                <img className={styles.icon1} alt="" src="/icon13.svg" />
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.buttonBase}>
                <img className={styles.icon1} alt="" src="/icon12.svg" />
                <div className={styles.text}>{`Toys & Gifts`}</div>
                <img className={styles.icon1} alt="" src="/icon13.svg" />
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.buttonBase}>
                <img className={styles.icon1} alt="" src="/icon12.svg" />
                <div className={styles.text}>{`Sports Event `}</div>
                <img className={styles.icon1} alt="" src="/icon13.svg" />
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.buttonBase}>
                <img className={styles.icon1} alt="" src="/icon12.svg" />
                <div className={styles.text}>Direct Service</div>
                <img className={styles.icon1} alt="" src="/icon13.svg" />
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.buttonBase}>
                <img className={styles.icon1} alt="" src="/icon12.svg" />
                <div className={styles.text}>Virtual/Social</div>
                <img className={styles.icon1} alt="" src="/icon13.svg" />
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.buttonBase}>
                <img className={styles.icon1} alt="" src="/icon12.svg" />
                <div className={styles.text}>Mentoring and Coaching</div>
                <img className={styles.icon1} alt="" src="/icon13.svg" />
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.buttonBase}>
                <img className={styles.icon1} alt="" src="/icon12.svg" />
                <div className={styles.text}>Fundraising</div>
                <img className={styles.icon1} alt="" src="/icon13.svg" />
              </div>
            </div>
            <div className={styles.button2}>
              <div className={styles.buttonBase}>
                <img className={styles.icon} alt="" src="/icon14.svg" />
                <div className={styles.text}>Filters</div>
                <img className={styles.icon1} alt="" src="/icon13.svg" />
              </div>
            </div>
            <div className={styles.button2}>
              <div className={styles.buttonBase11}>
                <img className={styles.icon1} alt="" src="/icon12.svg" />
                <div className={styles.text}>H</div>
                <img className={styles.icon1} alt="" src="/icon13.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
      </div>
      <div className={styles.image1}>
        <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
      </div>
      <div className={styles.image2}>
        <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
      </div>
      <img className={styles.dividerIcon} alt="" src="/divider.svg" />
      <img className={styles.dividerIcon1} alt="" src="/divider.svg" />
      <img
        className={styles.theAkshayaPatra1Icon}
        alt=""
        src="/theakshayapatra-1@2x.png"
      />
      <div className={styles.akshayaPatraFoundation}>
        Akshaya Patra Foundation
      </div>
      <div className={styles.goonjFoundation}>{`Goonj Foundation `}</div>
      <div className={styles.smileFoundation}>{`Smile Foundation `}</div>
      <div className={styles.floatingActionBtn}>
        <div className={styles.floatingActionBtnChild} />
        <div className={styles.donate}>Donate</div>
      </div>
      <div className={styles.floatingActionBtn1}>
        <div className={styles.floatingActionBtnChild} />
        <div className={styles.donate}>Donate</div>
      </div>
      <div className={styles.floatingActionBtn2}>
        <div className={styles.floatingActionBtnChild} />
        <div className={styles.donate}>Donate</div>
      </div>
      <div className={styles.divider3} />
      <div className={styles.divider4} />
      <img className={styles.dividerIcon2} alt="" src="/divider1.svg" />
      <div className={styles.divider5} />
      <div className={styles.divider6} />
      <div className={styles.divider7} />
      <div className={styles.propertyNo27BlkDContainer}>
        <span className={styles.propertyNo27BlkDContainer1}>
          <p className={styles.propertyNo27BlkD}>
            Property No-27 BLK-D SMA G.T.K. Road,
          </p>
          <p className={styles.propertyNo27BlkD}>
            Azadpur Industrial Area, Delhi, 110052
          </p>
        </span>
      </div>
      <div className={styles.j93SaritaVihar}>
        J-93, Sarita Vihar, New Delhi-110076
      </div>
      <div className={styles.blockCGreen}>
        Block C, Green Park Extension,New Delhi
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector24.svg" />
      <div className={styles.review}>
        <div className={styles.div}>5.0</div>
        <img className={styles.starIcon} alt="" src="/star.svg" />
        <div className={styles.reviews}>(318 reviews)</div>
      </div>
      <div className={styles.review1}>
        <div className={styles.div}>5.0</div>
        <img className={styles.starIcon} alt="" src="/star.svg" />
        <div className={styles.reviews}>(318 reviews)</div>
      </div>
      <div className={styles.review2}>
        <div className={styles.div}>5.0</div>
        <img className={styles.starIcon} alt="" src="/star.svg" />
        <div className={styles.reviews}>(318 reviews)</div>
      </div>
      <div className={styles.foodeducation}>{`Food/Education `}</div>
      <div className={styles.foodclothing}>Food/Clothing</div>
      <div className={styles.foodeducationhealthcare}>
        Food/Education/Healthcare
      </div>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.iconButtonBase1}>
        <img className={styles.icon} alt="" src="/icon15.svg" />
      </div>
      <div className={styles.iconButton1}>
        <div className={styles.iconButtonBase2}>
          <img className={styles.icon} alt="" src="/icon16.svg" />
        </div>
      </div>
      <div className={styles.iconButton2}>
        <div className={styles.iconButtonBase2}>
          <img className={styles.icon} alt="" src="/icon17.svg" />
        </div>
      </div>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.download1Icon} alt="" src="/download-1@2x.png" />
      <img className={styles.heartIcon} alt="" src="/heart.svg" />
      <img className={styles.heartIcon1} alt="" src="/heart.svg" />
      <div className={styles.websiteWwwgoonjorg}>Website: www.goonj.org</div>
      <div className={styles.websiteWwwsmilefoundationo}>
        Website: www.smilefoundation.org
      </div>
      <div className={styles.websiteWwwakshayapatraorg}>
        Website: www.akshayapatra.org
      </div>
    </div>
  );
};

export default SearchList;
