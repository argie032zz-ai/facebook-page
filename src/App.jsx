import { FiHome } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { FaStore } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { RiNotification3Fill } from "react-icons/ri";
// import { CiSearch } from "react-icons/ci";<CiSearch />
import { FaLocationDot } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { FaPen } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { BsLockFill } from "react-icons/bs";
import { RiHeartsLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi2";
import { PiLinkSimpleBold } from "react-icons/pi";
import { BiCategoryAlt } from "react-icons/bi";
import { RiLiveFill } from "react-icons/ri";
import { TbPhotoVideo } from "react-icons/tb";
import { PiFlagBannerFoldFill } from "react-icons/pi";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoGrid } from "react-icons/io5";
import { TiWorld } from "react-icons/ti";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";
import { FaCamera } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { RiGamepadLine } from "react-icons/ri";
import "./App.css";
import logo from './assets/circle.png'






function App() {
  return (
    <>
      <div className="container">
        <div className="container1">

          {/* top navbar */}
          <header>
          <nav>
            <div className="headerbtn">
              <div className="btngrp1">
                <button><img src={logo} alt="" className="imgicon" /></button>
                <input type="text" placeholder="Search Facebook" />
              </div>
              <div className="btngrp2">
                <button><FiHome title="Home"/></button>
                <button><FaUserFriends title='Friends' /></button>
                <button><FaStore title='Marketplace' /></button>
                <button><HiOutlineUserGroup title='Groups' /></button>
                <button><RiGamepadLine title='Gaming' /></button>
              </div>
              <div className="btngrp3">
                <button><BsGrid3X3Gap title='Facebook Menu' /></button>
                <button><BsMessenger title='Messenger' /></button>
                <button><RiNotification3Fill title='Notification' /></button>
                <img src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/805027238_122179798934902163_340359221783675980_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWiHS1BSBL5mOWGlAqkjPvUuxHZW10BXZS7EdlbXQFdt-EAOTZxgT3U30fN0ZpWP_qkk5d1WxWHl0D9PWlD1k8&_nc_ohc=q4nUh6obJbAQ7kNvwH8beQd&_nc_oc=AdrjllaS8eL0_kTxv_tbnqCGHlGkm7cKQ-3dFEbJKwANOmLbohwrleCnQ0Ky4R0iCrs&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=aTJrZ6Y9BhpuCqt_zui-FA&_nc_ss=7b2a8&oh=00_AQJ_6Cm8B3SwHK31oabqVS94PLTSHsmtlLliAFIhQz0gdw&oe=6AB1690F" alt="account" title='Account' />
              </div>
            </div>
          </nav>
          </header>

          {/* profile, cover, info, friends, photos, posts */}
          <main>

            {/* profile, cover */}
            <div className="container2">
              <div className="cover">
                <img src="https://scontent.fceb10-1.fna.fbcdn.net/v/t39.30808-6/806428684_122179798790902163_1718072241687607454_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGuL6FzPJwXKGOj-k6i5QGPrdMc7Bf4kVCt0xzsF_iRUHsS0pyNfueVm-q-sBNz1HqNH8m2yE_GPV0a4fGr2mMV&_nc_ohc=ScJ-B1vqxfIQ7kNvwE7PmVZ&_nc_oc=Adri0xyza-lXETdGuhdKy2ORfusTaZnGjAmsuq7bDdQYMSiSCz7zGaEm9XSrDzvvvT0&_nc_zt=23&_nc_ht=scontent.fceb10-1.fna&_nc_gid=I0Vuznn3n_crZ1gp_8PY3w&_nc_ss=7b2a8&oh=00_AQLn5t6k5LzXd1XlYtwZHd0tp-zY0ypg7K8Tbg2sPFtvug&oe=6AB14EC6" alt="cover photo" />
                <button><FaCamera /> Edit cover photo</button>
              </div>

              <div className="profilebtn">
                <button><FiPlus /> Add to Story</button>
                <button><FaPen /> Edit Profile</button>
                <button><RiArrowDropDownLine /></button>
              </div>
              <div className="profile">
                <img src="https://scontent.fceb10-1.fna.fbcdn.net/v/t39.30808-6/805027238_122179798934902163_340359221783675980_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWiHS1BSBL5mOWGlAqkjPvUuxHZW10BXZS7EdlbXQFdt-EAOTZxgT3U30fN0ZpWP_qkk5d1WxWHl0D9PWlD1k8&_nc_ohc=q4nUh6obJbAQ7kNvwFF9OsO&_nc_oc=Adpa65hUcrZ-zswHd1aMx3kMQaW26OtO-_-gM9dsCPEd2e1JOpxgvhwXab4fN9EEZt4&_nc_zt=23&_nc_ht=scontent.fceb10-1.fna&_nc_gid=bCDUgKkwZnk1LTN5ZXXs9w&_nc_ss=7b2a8&oh=00_AQLeBkKfp_oYPmqH7QJBfw1Ved33JU-bGV8yTrwm6TqBgQ&oe=6AB1690F" alt="profile" />
                <section className="name">
                  <button>Argie Ortega</button>
                  <a href="">23 friends</a>
                  <span className="bio">for school purposes~</span>
                  <section className="info">
                    <span className="location"><FaLocationDot /> Pagadian City</span>
                    <button className="link"><RiGraduationCapFill /> WMSU Pagadian External Campus</button>
                  </section>
                </section>
              </div>
              <hr className="hr" />
              <div className="profilenav">
                <div className="mainnav">
                  <button>All</button>
                  <button>About</button>
                  <button>Friends</button>
                  <button>Photos</button>
                  <button>Reels</button>
                  <button>More <IoMdArrowDropdown /></button>
                </div>
                <button className="dots"><HiDotsHorizontal /></button>
              </div>
            </div>

            <div className="layout">
              <div className="grid">
                
                {/*info*/}
                <section className="info">
                  <h3>Personal Details <HiOutlinePencil className="tri" /></h3>
                  <button className="place"><FaLocationDot /> Pagadian City</button>
                  <button className="place"><IoHomeOutline /> From Malangas <BsLockFill /></button>
                  <span><RiHeartsLine /> Single</span>

                  <h3>Education <HiOutlinePencil className="tri" /></h3>
                  <button className="edu"><img src="https://scontent.fdvo6-1.fna.fbcdn.net/v/t39.30808-6/427695310_745435000984666_9024711557488875790_n.jpg?stp=dst-jpg_tt6&cstp=mx625x625&ctp=s625x625&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEpV4vIKGGXsT4h_LNjhgwMJEcKT495w2IkRwpPj3nDYqcyXWtkSNKIA-_5YGr-FKC-C9n8Mm_QJ4PHl1SLGKH5&_nc_ohc=oCYxDyMoD98Q7kNvwHEB0sB&_nc_oc=Adr7-QZ4vkG2hH2xDkV3mAKj2nU00ppaLzo_bI0Ag0TsfVW54ZeudmK4Miy8zABx5zc&_nc_zt=23&_nc_ht=scontent.fdvo6-1.fna&_nc_gid=98TyptTuLNQMEe-vl2PpWQ&_nc_ss=7b2a8&oh=00_AQICiWSCD7B8HH2obj7yxrAiArleHvKDZxmP-N8gNiuj2Q&oe=6AB16B84" alt="WMSU logo" className="imgicon"/> WMSU Pagadian External Campus </button>
                  
                  <button className="edu"><img src="https://scontent.fdvo6-1.fna.fbcdn.net/v/t39.30808-6/613759565_1358630642942183_1079732447814966439_n.jpg?stp=dst-jpg_tt6&cstp=mx1290x1272&ctp=s1290x1272&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG9htUTSI0qucgLeOgc28B7xxCvmlWVUJ3HEK-aVZVQnZEHU2V3na9Z5pRbK-3YcwpXKONdcskuQMnMdYkNVVMi&_nc_ohc=tj_Z0O238o8Q7kNvwExqXlr&_nc_oc=Ado477IxXdz2WOHi3hyXVDCtJghmmEkM7-us0emRdk8TtRTGs9c9bz0zPQ6skQcyflw&_nc_zt=23&_nc_ht=scontent.fdvo6-1.fna&_nc_gid=g7vQkNUsD8G27mY8T6dO4A&_nc_ss=7b2a8&oh=00_AQIc7ebW0FhAk8k_76JRp5DNmFZ2zOosdWb67PKbo3ci9w&oe=6AB151E3" alt="ZSNHS logo" className="imgicon"/>  Zamboanga del Sur National High School - Senior High School-Alumni</button>

                  <h3>Hobbies <HiOutlinePencil className="tri" /></h3>
                  <span className="hob"><BiCategoryAlt /><button className="link">Watching Movies</button>·<button className="link">Photography</  button>·<button className="link">Video Games</button>·<button className="link">Coding</button></span>
                  <h3>Links<HiOutlinePencil className="tri" /></h3>
                  <span><PiLinkSimpleBold /><button className="link1">guns.lol</button></span>
                </section>

                {/* friends */}
                <section className="friends">
                  <div className="sidenav">
                    <h3>Friends</h3>
                    <button className="link">See all friends</button>
                    <p>23 friends</p>
                  </div>
                  <div className="frndgrid">
                    <div className="frnd">
                      <img src="https://i.pinimg.com/1200x/b3/c2/77/b3c2779d6b6195793b72bf73e284b3e8.jpg" alt="." />
                      <span className="name">Bea Malalis Baynosa</span>
                      <span className="mutual">13 mutual friend</span>
                    </div>

                    <div className="frnd">
                      <img src="https://scontent.fceb10-1.fna.fbcdn.net/v/t39.30808-1/538204076_122158768820619739_3360177079500706555_n.jpg?stp=dst-jpg_tt6&cstp=mx1512x1518&ctp=s200x200&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG9PV1sEKA8bxhMWuj2lwMsOSslKhxrV-Y5KyUqHGtX5nDF7CbojkwhCMS7gtoUUzp1Z2TAKmd-kzRIcXdaAdsL&_nc_ohc=h2pHDE0HBzcQ7kNvwHcvLIF&_nc_oc=AdrN87eOdDT8lIZwZjb0S5P2PJUc5rdpXI9z0hV3iOf9SU25KoOIBWpdlA8xaGQYBXI&_nc_zt=24&_nc_ht=scontent.fceb10-1.fna&_nc_gid=kdy-5vtRBYJZxMFhocCOuA&_nc_ss=7b2a8&oh=00_AQJLVqsQBKaId0KFf6A5lUiAK2UPSk0ioDuwlHAfbClixA&oe=6AB18590" alt="Jhon Clarence Tulbanos" />
                      <span className="name">Jhon Clarence Tulbanos</span>
                      <span className="mutual">19 mutual friends</span>
                    </div>

                    <div className="frnd">
                      <img src="https://scontent.fdvo6-1.fna.fbcdn.net/v/t39.30808-6/760604270_2275762726593912_8269423048367542710_n.jpg?stp=dst-jpg_tt6&cstp=mx720x742&ctp=s720x742&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF2dh4cKwxecg3MRFQNgvcWJHoBjepY-TMkegGN6lj5M9kSz8iXBh9Z45sUgiMwKCJAgzy3bnwwbrl_caW1nvDK&_nc_ohc=0unii8LT1g4Q7kNvwGRitrw&_nc_oc=Adran0NZoJ7B19jJCFuQ4s5xVuGwoONWApkZDDnASk2n0NHWlCEdeiiNGsIo45MJxz8&_nc_zt=23&_nc_ht=scontent.fdvo6-1.fna&_nc_gid=OFIsL57d6hE2fLGYLDgn3A&_nc_ss=7b2a8&oh=00_AQLjCq4dMr3Gsv1w9_zh1AuheUjo6A-ZD5c8YrsakKExzg&oe=6AB15A01" alt="Randy Cañete" />
                      <span className="name">Randy Cañete</span>
                      <span className="mutual">19 mutual friends</span>
                    </div>
                    
                    <div className="frnd">
                      <img src="https://i.pinimg.com/1200x/b3/c2/77/b3c2779d6b6195793b72bf73e284b3e8.jpg" alt="." />
                      <span className="name">Honeylyn Castigador</span>
                      <span className="mutual">2 mutual friend</span>
                    </div>

                    <div className="frnd">
                      <img src="https://scontent.fceb10-1.fna.fbcdn.net/v/t39.30808-1/564588772_122261915096195283_3997010864727959032_n.jpg?stp=c0.0.768.768a_dst-jpg_tt6&cstp=mx768x768&ctp=s200x200&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHgI33dUfzN4_9PbQefZR5Ob8GPannTvHhvwY9qedO8eLsLUqlgHk1c6EVtc1YVZ_vsAP1uIDS9e8aQH1GXBvNf&_nc_ohc=2Uzz9_-43PYQ7kNvwFnuok-&_nc_oc=AdoTQGEL6NLdSCGt4eKlhaTsFfwWIZFzToT4se4IXogDBt4-QNJrY4KNoni5ouelqiI&_nc_zt=24&_nc_ht=scontent.fceb10-1.fna&_nc_gid=4zqO5QdPXh7d0woiM2F_hA&_nc_ss=7b2a8&oh=00_AQJcI2PPP8lLdCL0i0d0p75IoQ_-rvNwh6fskkmpTZwg8g&oe=6AB16D1E" alt="Abdullah Gandawali Hashem" />
                      <span className="name">Abdullah Gandawali Hashem</span>
                      <span className="mutual">21 mutual friends</span>
                    </div>

                    <div className="frnd">
                      <img src="https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-1/527460210_1865523320721258_2261414532606746068_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s200x200&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFrIiO_cm6ENwJAs7MBnAqf2UOfXzNyEuDZQ59fM3IS4CyPenGOhtcU_NDcuoQeBSqzTX3zID9VEryHSL_P83zz&_nc_ohc=WyeBp4lhkOAQ7kNvwHQy8Eh&_nc_oc=AdpRwMmwm_INy6y9YjRgbfatyhMWVvma6hWuWLtJmsDu_gGDDYuv-JEgMHwmF6E-akU&_nc_zt=24&_nc_ht=scontent.fcgy2-4.fna&_nc_gid=w7na9vcrrKEJZdVH4lQTjA&_nc_ss=7a2a8&oh=00_AQKIpXqDjy4EPNH3HFeH0faE-vsblR_w2eTRf1N7AgrvKw&oe=6AAFCAC3" alt="Ian Monsalud" />
                      <span className="name">Ian Monsalud</span>
                      <span className="mutual">5 mutual friends</span>
                    </div>

                    <div className="frnd">
                      <img src="https://scontent.fdvo6-1.fna.fbcdn.net/v/t39.30808-1/798040366_122217156758526098_8118108725496030426_n.jpg?stp=dst-jpg_tt6&cstp=mx2044x2048&ctp=s200x200&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeEmZ3e93dOJVYwjWNbmKeZTZxpqIwj1WUhnGmojCPVZSD6jYKHsNQXYI-O844J4ISG9Tn8WoUcSj6wxMTAKqfQ1&_nc_ohc=YDQFmBHPeSkQ7kNvwEtrmKE&_nc_oc=AdofcZJx04HeozAq1iskIP6jbzcb2n7Ebvuz447vuiHq7yixiwpnFVxrUgxqV4JVxus&_nc_zt=24&_nc_ht=scontent.fdvo6-1.fna&_nc_gid=KKkHtUaC5SGp5zj3VFiFxQ&_nc_ss=7b2a8&oh=00_AQK3XdNHs6CD-ApiGHgGXyVNDh56ujRelRzsqVj6_3ap2w&oe=6AB169ED" alt="Jaja Coleen" />
                      <span className="name">Jaja Coleen</span>
                      <span className="mutual">13 mutual friends</span>
                    </div>

                    <div className="frnd">
                      <img src="https://scontent.fceb10-1.fna.fbcdn.net/v/t39.30808-1/778957894_1390895089675171_2647082445856656481_n.jpg?stp=c0.0.720.720a_dst-jpg_tt6&cstp=mx720x720&ctp=s200x200&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEpH8uy_BUiHtvoZGAgEWA9-6ZXcnIOpqH7pldycg6mobsYv9CZ7jnNHzhxhZzDHRNFDnCKBvmWNlRaD07f4F6m&_nc_ohc=1eX2WufFWEwQ7kNvwEIBav2&_nc_oc=AdqgSCF97MM1eRxV_6c5ezQoQxJ5ZzER0fWQH3jS7VJBfqtgtn1hcPGLAG0HJVB02Gs&_nc_zt=24&_nc_ht=scontent.fceb10-1.fna&_nc_gid=_K3UMNeHPN7DaCIZm5C7Nw&_nc_ss=7b2a8&oh=00_AQJVO8Tm3fETpzuQGB0M98uH7D5rBTEdvNW1WyFl3x6Rtw&oe=6AB17D86" alt="Reanna Yz" />
                      <span className="name">Reanna Yz</span>
                      <span className="mutual">13 mutual friends</span>
                    </div>

                    <div className="frnd">
                      <img src="https://scontent.fmnl8-7.fna.fbcdn.net/v/t39.30808-6/751563209_10242839911833460_3774329811253517577_n.jpg?stp=dst-jpg_tt6&cstp=mx960x957&ctp=s960x957&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGUwKlqt75fynYzO18Ic-CZrFv6fnJHXcGsW_p-ckddwQNgvc1MDTR7FuVvvrxa-nrfCm1kBpLtGlnRvnv0prs0&_nc_ohc=KwDPGhbMK1gQ7kNvwFagRit&_nc_oc=AdpSkLd4h1IMYY_SThW_VstfCYZPM7tUQ36w5wvzh5GGea-T27Ltl2uSKXTsH0yQf7w&_nc_zt=23&_nc_ht=scontent.fmnl8-7.fna&_nc_gid=uA7Z9q24VGodUgRpbxiJAA&_nc_ss=7b2a8&oh=00_AQKWEOGlzcdFpS0-jbfMf4pDq2FBs7LXjO0Uq3ssbv2mZw&oe=6AB154C6" alt="Well Vidal Pgs" />
                      <span className="name">Well Vidal Pgs</span>
                      <span className="mutual">3 mutual friends</span>
                    </div>
                  </div>
                </section>

                
                {/* photos */}
                <section className="photos">
                  <div className="sidenav">
                    <h3>Photos</h3>
                    <button className="link">See all photos</button>
                  </div>
                  <div className="photolayout">
                    <div className="photo"><img src="https://scontent.fdvo6-1.fna.fbcdn.net/v/t39.30808-6/752782115_122173558034902163_721352981936138613_n.jpg?stp=dst-jpg_tt6&cstp=mx140x141&ctp=s140x141&_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFMWZ6_Sor33viQgR9ErkuI6iViaKBhYKLqJWJooGFgorhGu1XckoeBpby138UT5v-O_o0d4TazeBMrg8omkW9X&_nc_ohc=n985QYxKC44Q7kNvwGpLn-0&_nc_oc=AdpT1892Kf496ISGi1ECR5T-pA8h1clWjD6Y4zUW9WJrfCgVgLoHRLVtqILo_Yh3yIE&_nc_zt=23&_nc_ht=scontent.fdvo6-1.fna&_nc_gid=2duPfpWUqKkshGbD-JoyRg&_nc_ss=7b2a8&oh=00_AQLEbJgQbvT_KKBWG7l1PBA2DJr1hNUzoBOI9GgRHYjk2w&oe=6AB17EED" alt="ambot unsa ni nga picture" /></div>
                    <div className="photo"><img src="https://scontent.fdvo6-1.fna.fbcdn.net/v/t39.30808-6/661236147_122160603458902163_8477863605895372341_n.jpg?stp=dst-jpg_tt6&cstp=mx600x602&ctp=s600x602&_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFIkEyDpuGNEcPRxOTQmMrXVwE7yGpYD41XATvIalgPjV6Ithsn1m5VGfmqvvvVUav6e5VchvrJpMZvxj8Sm3qT&_nc_ohc=zhoTDHA1X38Q7kNvwEz_v4H&_nc_oc=Adp5MQrAN7tSfMw3iYRhc53hyJKlJKFmXl-sUSShYS81-jXOKSNw67v5_D5bqm3q8pk&_nc_zt=23&_nc_ht=scontent.fdvo6-1.fna&_nc_gid=ZNco1hRc0hrVn5-1ey56wA&_nc_ss=7b2a8&oh=00_AQL7_WleSMdHMOtDE3IEA6srKUe667vGMlws0Ak7CYPHWw&oe=6AB18CAA" alt="candle" /></div>
                    <div className="photo"><img src="https://scontent.fdvo6-1.fna.fbcdn.net/v/t39.30808-6/611290988_122150776742902163_205802725755709440_n.jpg?stp=dst-jpg_tt6&cstp=mx720x720&ctp=s720x720&_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGHbfspUH6BaFOfQXlnAscFwvQRp2uid8DC9BGna6J3wCCs7fRQeWLquY9MoCuqV6ntitpPGn0G1CLmdutZsx94&_nc_ohc=ckDaJw17EkkQ7kNvwFdkjRX&_nc_oc=Adry9q-E2Z6GP1hdfklXifCsctAR2BIPLsjs1bL-RTpTezILFg-2wCTR-prqbEKn2eg&_nc_zt=23&_nc_ht=scontent.fdvo6-1.fna&_nc_gid=VWoh3N65m8m4788QTHw9YA&_nc_ss=7b2a8&oh=00_AQISBPE27Nga43DAHN8P871eLTZQ8G5guaaSsRfkbU7Anw&oe=6AB18699" alt="meow/rawr" /></div>
                    <div className="photo"><img src="https://scontent.fdvo6-1.fna.fbcdn.net/v/t39.30808-6/577304656_122142173498902163_1254015720097851549_n.jpg?stp=dst-jpg_tt6&cstp=mx834x960&ctp=s834x960&_nc_cat=100&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeGnAIdJ5s_WNt1jKudPBQBLQdP6OV8kzm9B0_o5XyTObxZ1OEKatoGO8BqowXqeLVNEA0x-onOswTGTppweew_8&_nc_ohc=HVZrjQF3cMwQ7kNvwEKlgJe&_nc_oc=Adp461O2WbxqkG4j6hv6TymPrzzH188agnQjyHHmEbVQZEEk6MKcLziWKyz2vU07m3s&_nc_zt=23&_nc_ht=scontent.fdvo6-1.fna&_nc_gid=6bX9fqH6-aN0s8bBatM6vQ&_nc_ss=7b2a8&oh=00_AQKPEPNduNGPY25rFLjf0HDkwe5vhuuXPedSdzXUWnYcaQ&oe=6AB17AF6" alt="code" /></div>
                    <div className="photo"><img src="https://scontent.fdvo6-1.fna.fbcdn.net/v/t39.30808-6/577730410_122142173348902163_5624181036347263774_n.jpg?stp=dst-jpg_tt6&cstp=mx736x736&ctp=s736x736&_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEvtcbUA_y6dByupUcbpQqsIr8_WCc2FL0ivz9YJzYUvaVdTSURWs4HTUFRR8GGokL1W-T26CihX4i-8_Ny97DR&_nc_ohc=4puOd1EUCZ0Q7kNvwFbWVN9&_nc_oc=AdpKfoM3y6k2UhZitFEvxFeg2r5zs4HBlZGv3Aa7zSmcJKx8Bk_PbXiG3sVNTK5fRyY&_nc_zt=23&_nc_ht=scontent.fdvo6-1.fna&_nc_gid=835Dpo26qb-0yaF4Sw6iXw&_nc_ss=7b2a8&oh=00_AQLU1A2E_eHCKxhTLwodz10nW87zM6KclGC_qsBIgItNLw&oe=6AB15DA0" alt="meow meow" /></div>
                    <div className="photo"><img src="https://scontent.fdvo6-1.fna.fbcdn.net/v/t39.30808-6/568091018_122138871776902163_6172510885834815686_n.jpg?stp=dst-jpg_tt6&cstp=mx720x540&ctp=s720x540&_nc_cat=103&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeHipQZE8Pdv9lEnp7A_jqxwERPV_Ww9dosRE9X9bD12i5XlJxisb_ruQxgjRmuPlaLsMpgb5VSvcJoBvwspd4-p&_nc_ohc=yQ7Qjzv73coQ7kNvwG5XcpZ&_nc_oc=AdovR1gqjLYVY5Hhw-M3XV9_wgb1gSbE20KOwA09JnjMsezef0i4F_2VHHm4f049uhc&_nc_zt=23&_nc_ht=scontent.fdvo6-1.fna&_nc_gid=dr4J_khqG214YYFyKM7mww&_nc_ss=7b2a8&oh=00_AQLMANxetLY035uSKkUuaaplsSfs2sKj5fuSJ0Y-RoCXyA&oe=6AB18622" alt="contains text" /></div>
                    <div className="photo"><img src="https://scontent.fdvo6-1.fna.fbcdn.net/v/t39.30808-6/556304010_122134771304902163_5055738951948944424_n.jpg?stp=dst-jpg_tt6&cstp=mx736x727&ctp=s736x727&_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF52ygUl3d6UzRprZdPg23mCM6ieKrlom4IzqJ4quWibs5_iUfUieOmvKEDcGc8EWuAXJslsXLpmvWgOyWmA3Px&_nc_ohc=aO159_EwuGUQ7kNvwHrhdUN&_nc_oc=AdrMoUEJSAM8WNBU8BQuR4Ji-FZH6jaD1h7zDtchzzQRVDQbniLV5ziyVkWNax5dNks&_nc_zt=23&_nc_ht=scontent.fdvo6-1.fna&_nc_gid=g3WxgW4p589L3zBnS_5HdA&_nc_ss=7b2a8&oh=00_AQJO3M8F-Mg5FUCrgcRudpDtmjshPJYMxsLFy1ClChFuyQ&oe=6AB17B03" alt="meow meow meow" /></div>
                    <div className="photo"><img src="https://scontent.fdvo6-1.fna.fbcdn.net/v/t39.30808-6/555776173_122134073972902163_7063081138409772180_n.jpg?stp=dst-jpg_tt6&cstp=mx1170x382&ctp=s1170x382&_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeEfQ3kemCPTmRsVn2n7pC8vA8RplvkVkacDxGmW-RWRp9owwiHtHlRtn_8jxdaFHCZJsMMPj08VvM0nIjL2-vmF&_nc_ohc=AogxuSUfmogQ7kNvwFHFgQS&_nc_oc=Adq7bs0y6dQ3iEaugpyEi30H_7Ys35XXnVGFZLVAM33c-IlgbiXWiP16HQL7xkPnJpg&_nc_zt=23&_nc_ht=scontent.fdvo6-1.fna&_nc_gid=_yf7lQCNxHujjfUfoRU14A&_nc_ss=7b2a8&oh=00_AQJf8F2YRd4lRMpJp1m5MXTcbqei7jjHMc8ilW3XQZV6-Q&oe=6AB17A7E" alt="contains text" /></div>
                    <div className="photo"><img src="https://scontent.fdvo6-1.fna.fbcdn.net/v/t39.30808-6/541829637_122129120918902163_5875925758447531815_n.jpg?stp=dst-jpg_tt6&cstp=mx736x736&ctp=s736x736&_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEodItf05rP5Z_-8_A1zstR35d5CdVhbqHfl3kJ1WFuoZwkHuIt1PJgg_KmZTymEaiUPhtS7nHzTiXrnOe4GL1I&_nc_ohc=BoEk6LBLdqMQ7kNvwHBRcBj&_nc_oc=AdoMubUhm_sQAGjw9EimW0PKVoP790E-0IJ-8RYKriSGr-5RCAOv64P-uzYC3oaea48&_nc_zt=23&_nc_ht=scontent.fdvo6-1.fna&_nc_gid=xq6-wXWOF4mNGcl_X5vs-A&_nc_ss=7b2a8&oh=00_AQJX4wDd_tOnuXqbRkv-qMUsTzD2Uiezsn0EQguuT9rOBw&oe=6AB15CAB" alt="uhhhhhhh meow?" /></div>
                  </div>
                </section>

                {/* little  footer */}
                <section className="lfooter">
                  <button className="link">Privacy</button>·
                  <button className="link">Terms</button>·
                  <button className="link">Advertising</button>·
                  <button className="link">Ad Choices</button>·
                  <button className="link">Cookies</button>·
                  <span>More</span>
                </section>
              </div>

              {/* posts */}
              <div className="posts">
                <div className="postlayout">

                  <div className="mind">
                    <img src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/805027238_122179798934902163_340359221783675980_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWiHS1BSBL5mOWGlAqkjPvUuxHZW10BXZS7EdlbXQFdt-EAOTZxgT3U30fN0ZpWP_qkk5d1WxWHl0D9PWlD1k8&_nc_ohc=q4nUh6obJbAQ7kNvwH8beQd&_nc_oc=AdrjllaS8eL0_kTxv_tbnqCGHlGkm7cKQ-3dFEbJKwANOmLbohwrleCnQ0Ky4R0iCrs&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=aTJrZ6Y9BhpuCqt_zui-FA&_nc_ss=7b2a8&oh=00_AQJ_6Cm8B3SwHK31oabqVS94PLTSHsmtlLliAFIhQz0gdw&oe=6AB1690F" alt="profile" className="imgicon" />
                    <input type="text" placeholder="What's on your mind?" />
                    <hr />
                    <div className="mindbtn">
                      <button><RiLiveFill /> Live Video</button>
                      <button><TbPhotoVideo /> Photo/video</button>
                      <button><PiFlagBannerFoldFill /> Life update</button>
                    </div>
                  </div>

                  <div className="view">
                    <div className="viewhead">
                      <h3>Posts</h3>
                      <div className="viewbtn">
                        <button><PiSlidersHorizontalBold /> Filters</button>
                        <button><IoSettings /> Manage posts</button>
                      </div>
                    </div>
                    <hr />
                    <div className="viewnavigation">
                      <button className="viewlist"><GiHamburgerMenu /> List view</button>
                      <button className="viewgrid"><IoGrid /> Grid view</button>
                    </div>
                  </div>

                  <div className="mainpost">
                    {/* <span>Pinned post</span> */}

                    <div className="post">
                      <div className="postnav">
                        <img src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/805027238_122179798934902163_340359221783675980_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWiHS1BSBL5mOWGlAqkjPvUuxHZW10BXZS7EdlbXQFdt-EAOTZxgT3U30fN0ZpWP_qkk5d1WxWHl0D9PWlD1k8&_nc_ohc=q4nUh6obJbAQ7kNvwH8beQd&_nc_oc=AdrjllaS8eL0_kTxv_tbnqCGHlGkm7cKQ-3dFEbJKwANOmLbohwrleCnQ0Ky4R0iCrs&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=aTJrZ6Y9BhpuCqt_zui-FA&_nc_ss=7b2a8&oh=00_AQJ_6Cm8B3SwHK31oabqVS94PLTSHsmtlLliAFIhQz0gdw&oe=6AB1690F" alt="profile" className="imgicon" />
                        <span><strong><button className="link">Argie Ortega</button></strong></span>
                        <HiOutlineDotsHorizontal className="tri" />
                        <span className="date"><button className="link">2 hours ago</button>·<TiWorld /></span>
                      </div>
                      <div className="postpic">
                        <span>pa check nako sir.</span>
                      </div>
                      <div className="postinteraction">
                        <button><AiOutlineLike /></button>
                        <button><FaRegComment /></button>
                        <button><PiShareFatLight /></button>
                      </div>
                      <div className="postcmnt">
                        <img src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/805027238_122179798934902163_340359221783675980_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWiHS1BSBL5mOWGlAqkjPvUuxHZW10BXZS7EdlbXQFdt-EAOTZxgT3U30fN0ZpWP_qkk5d1WxWHl0D9PWlD1k8&_nc_ohc=q4nUh6obJbAQ7kNvwH8beQd&_nc_oc=AdrjllaS8eL0_kTxv_tbnqCGHlGkm7cKQ-3dFEbJKwANOmLbohwrleCnQ0Ky4R0iCrs&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=aTJrZ6Y9BhpuCqt_zui-FA&_nc_ss=7b2a8&oh=00_AQJ_6Cm8B3SwHK31oabqVS94PLTSHsmtlLliAFIhQz0gdw&oe=6AB1690F" alt="profile" className="imgicon" />
                        <input type="text" placeholder="Write a comment..." />
                      </div>
                    </div>

                    <div className="post">
                      <div className="postnav">
                        <img src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/805027238_122179798934902163_340359221783675980_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWiHS1BSBL5mOWGlAqkjPvUuxHZW10BXZS7EdlbXQFdt-EAOTZxgT3U30fN0ZpWP_qkk5d1WxWHl0D9PWlD1k8&_nc_ohc=q4nUh6obJbAQ7kNvwH8beQd&_nc_oc=AdrjllaS8eL0_kTxv_tbnqCGHlGkm7cKQ-3dFEbJKwANOmLbohwrleCnQ0Ky4R0iCrs&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=aTJrZ6Y9BhpuCqt_zui-FA&_nc_ss=7b2a8&oh=00_AQJ_6Cm8B3SwHK31oabqVS94PLTSHsmtlLliAFIhQz0gdw&oe=6AB1690F" alt="profile" className="imgicon" />
                        <span><strong><button className="link">Argie Ortega</button></strong> update his profile picture.</span>
                        <HiOutlineDotsHorizontal className="tri" />
                        <span className="date"><button className="link">5 days ago</button>·<TiWorld /></span>
                      </div>
                      <div className="postpic">
                        <img src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/805027238_122179798934902163_340359221783675980_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWiHS1BSBL5mOWGlAqkjPvUuxHZW10BXZS7EdlbXQFdt-EAOTZxgT3U30fN0ZpWP_qkk5d1WxWHl0D9PWlD1k8&_nc_ohc=q4nUh6obJbAQ7kNvwH8beQd&_nc_oc=AdrjllaS8eL0_kTxv_tbnqCGHlGkm7cKQ-3dFEbJKwANOmLbohwrleCnQ0Ky4R0iCrs&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=aTJrZ6Y9BhpuCqt_zui-FA&_nc_ss=7b2a8&oh=00_AQJ_6Cm8B3SwHK31oabqVS94PLTSHsmtlLliAFIhQz0gdw&oe=6AB1690F" alt="profile" className="imgpost" />
                      </div>
                      <div className="postinteraction">
                        <button><AiOutlineLike /></button>
                        <button><FaRegComment /></button>
                        <button><PiShareFatLight /></button>
                      </div>
                      <div className="postcmnt">
                        <img src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/805027238_122179798934902163_340359221783675980_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWiHS1BSBL5mOWGlAqkjPvUuxHZW10BXZS7EdlbXQFdt-EAOTZxgT3U30fN0ZpWP_qkk5d1WxWHl0D9PWlD1k8&_nc_ohc=q4nUh6obJbAQ7kNvwH8beQd&_nc_oc=AdrjllaS8eL0_kTxv_tbnqCGHlGkm7cKQ-3dFEbJKwANOmLbohwrleCnQ0Ky4R0iCrs&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=aTJrZ6Y9BhpuCqt_zui-FA&_nc_ss=7b2a8&oh=00_AQJ_6Cm8B3SwHK31oabqVS94PLTSHsmtlLliAFIhQz0gdw&oe=6AB1690F" alt="profile" className="imgicon" />
                        <input type="text" placeholder="Write a comment..." />
                      </div>
                    </div>

                    <div className="post">
                      <div className="postnav">
                        <img src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/805027238_122179798934902163_340359221783675980_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWiHS1BSBL5mOWGlAqkjPvUuxHZW10BXZS7EdlbXQFdt-EAOTZxgT3U30fN0ZpWP_qkk5d1WxWHl0D9PWlD1k8&_nc_ohc=q4nUh6obJbAQ7kNvwH8beQd&_nc_oc=AdrjllaS8eL0_kTxv_tbnqCGHlGkm7cKQ-3dFEbJKwANOmLbohwrleCnQ0Ky4R0iCrs&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=aTJrZ6Y9BhpuCqt_zui-FA&_nc_ss=7b2a8&oh=00_AQJ_6Cm8B3SwHK31oabqVS94PLTSHsmtlLliAFIhQz0gdw&oe=6AB1690F" alt="profile" className="imgicon" />
                        <span><strong><button className="link">Argie Ortega</button></strong> update his cover photo.</span>
                        <HiOutlineDotsHorizontal className="tri" />
                        <span className="date"><button className="link">5 days ago</button>·<TiWorld /></span>
                      </div>
                      <div className="postpic">
                        <img src="https://scontent.fdvo6-1.fna.fbcdn.net/v/t39.30808-6/806428684_122179798790902163_1718072241687607454_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGuL6FzPJwXKGOj-k6i5QGPrdMc7Bf4kVCt0xzsF_iRUHsS0pyNfueVm-q-sBNz1HqNH8m2yE_GPV0a4fGr2mMV&_nc_ohc=ScJ-B1vqxfIQ7kNvwHnhpCM&_nc_oc=AdobTluMsqIeOToISCBLQUais7vstn9hueQIhuxrwjcsccQT5QZpuW97kwz2OEdRFVw&_nc_zt=23&_nc_ht=scontent.fdvo6-1.fna&_nc_gid=nwRpmjU0aj-j8zjDg-nQQg&_nc_ss=7b2a8&oh=00_AQLVLTqIH20wwIcWx9hBFJTXrTj1gfajiJpy1mLrCQnwkA&oe=6AB18706" alt="cover photo" className="imgpost1" />
                      </div>
                      <div className="postinteraction">
                        <button><AiOutlineLike /></button>
                        <button><FaRegComment /></button>
                        <button><PiShareFatLight /></button>
                      </div>
                      <div className="postcmnt">
                        <img src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/805027238_122179798934902163_340359221783675980_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWiHS1BSBL5mOWGlAqkjPvUuxHZW10BXZS7EdlbXQFdt-EAOTZxgT3U30fN0ZpWP_qkk5d1WxWHl0D9PWlD1k8&_nc_ohc=q4nUh6obJbAQ7kNvwH8beQd&_nc_oc=AdrjllaS8eL0_kTxv_tbnqCGHlGkm7cKQ-3dFEbJKwANOmLbohwrleCnQ0Ky4R0iCrs&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=aTJrZ6Y9BhpuCqt_zui-FA&_nc_ss=7b2a8&oh=00_AQJ_6Cm8B3SwHK31oabqVS94PLTSHsmtlLliAFIhQz0gdw&oe=6AB1690F" alt="profile" className="imgicon" />
                        <input type="text" placeholder="Write a comment..." />
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              <button title="New message" class="new-message" aria-label="Edit">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>
                </svg>
              </button>
            </div>
          </main>

        </div>
      </div>
    </>
  );
}

export default App;
