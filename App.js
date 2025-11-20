import { useEffect, useRef, useState } from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';

const news = [
  {
    title: "News article from Southcn.com reporting the largest isolation facility with the highest capacity operated by Hong Kong Customs. (April 2022)",
    image: require("./assets/n1.png"),
    url: "https://news.southcn.com/node_b710679493/24a58a47b8.shtml",
  },
  {
    title: "News article from ON.cc reporting Hong Kong Customs developed Co-Op to facilitate persons under isolation. (April 2022)",
    image: require("./assets/n2.png"),
    url: "https://hk.on.cc/hk/bkn/cnt/news/20220408/bkn-20220408190701419-0408_00822_001.html",
  },
  {
    title: "News article from Sing Tao Headline reporting Co-Op received positive feedback from citizens and was upgraded to version 2.0. (April 2022)",
    image: require("./assets/n3.png"),
    url: "https://std.stheadline.com/realtime/article/1828358/%E5%8D%B3%E6%99%82-%E6%B8%AF%E8%81%9E-%E5%B0%88%E8%A8%AA-%E6%B5%B7%E9%97%9C-%E7%87%9F%E5%81%A5%E9%80%9A-%E4%BE%BF%E5%88%A9%E6%96%B9%E8%89%99%E5%B8%82%E6%B0%91",
  },
  {
    title: "News article from Sing Tao Daily reporting Co-Op received positive feedback from citizens. (April 2022)",
    image: require("./assets/n4.png"),
    url: "https://www.singtaousa.com/4050899",
  },
  {
    title: "News article from Ta Kung Pao reporting Co-Op received positive feedback from a young user. (April 2022)",
    image: require("./assets/n5.png"),
    url: "http://www.takungpao.com.hk/news/232109/2022/0418/709588.html",
  },
  {
    title: "News article from Hong Kong Television Broadcast (TVB) reporting the functions of Co-Op and the use of cloud technology. (April 2022)",
    image: require("./assets/n6.png"),
    url: "http://news.tvb.com/local/6263c31ee774ffeb20e54566",
  },
  {
    title: "News article from ON.cc reporting the challenges faced by Hong Kong Customs in the isolation facility and positive feedback on Co-Op .(April 2022)",
    image: require("./assets/new7.png"),
    url: "https://hk.on.cc/hk/bkn/cnt/news/20220430/mobile/bkn-20220430010520941-0430_00822_001.html",
  },
  {
    title: "News article from Sing Tao Daily reporting Co-Op is one of the winners in the Hong Kong ICT Awards 2022. (Nov 2022)",
    image: require("./assets/n7.png"),
    url: "https://www.singtaousa.com/4332070",
  },
  {
    title: "The press release by the Hong Kong Government stating Co-Op has received a Smart Business (Solution for Business and Public Sector Enterprise) Award at Hong Kong ICT Awards 2022. (Nov 2022)",
    image: require("./assets/new8.png"),
    url: "https://www.info.gov.hk/gia/general/202211/16/P2022111600505.htm?fbclid=IwAR1W1djbyA_woAS80K_jNBc4KaxUw3GpkRBuPt8iCKKO1i8Wq8-oVNperz4",
  },
  {
    title: 'News article from Lion Rock Daily written by the Vice-chairman of the Alliance for Healthy Cities (Hong Kong) and one of the "Ten Outstanding Young Persons of Hong Kong" showing an appreciation on Co-Op. (Nov 2022)',
    image: require("./assets/pdf2.jpeg"),
    url: "https://dw-media.tkww.hk/epaper/hker/20221122/p08-1122.pdf",
  },
  {
    title: 'News article from Sing Tao Daily reporting Co-Op was showcased in the Smart Hong Kong Pavilion at the International ICT Expo (InnoEx 2023). (Apr 2023)',
    image: require("./assets/newaward.png"),
    url: "https://www.singtaousa.com/4459669",
  },
  {
    title: 'Official Facebook page of Hong Kong Customs introducing Yuen Long Tam Mei Community Isolation Facility. (Mar 2022)',
    image: require("./assets/facebook_covid.png"),
    url: "https://www.facebook.com/watch/?v=4860078460775634&extid=NS-UNK-UNK-UNK-IOS_GK0T-GK1C&mibextid=2Rb1fB&ref=sharing",
  },
  {
    title: 'Official Facebook page of Hong Kong Customs introducing the room amenities in Yuen Long Tam Mei Community Isolation Facility. (Mar 2022)',
    image: require("./assets/facebook_home.png"),
    url: "https://www.facebook.com/watch/?v=381285710524316&extid=NS-UNK-UNK-UNK-IOS_GK0T- GK1C&mibextid=2Rb1fB&ref=sharin",
  },
  {
    title: 'Official Facebook page of Hong Kong Customs introducing the functions of Co-Op for persons under isolation. (Apr 2022)',
    image: require("./assets/facebook_app.png"),
    url: "https://www.facebook.com/watch/?v=4607258892712936&extid=NS-UNK-UNK-UNK-IOS_GK0T-GK1C&mibextid=2Rb1fB&ref=sharing",
  },
  {
    title: 'Official Facebook page of Hong Kong Customs showing positive feedback from the persons under isolation. (Apr 2022)',
    image: require("./assets/facebook_old.png"),
    url: "https://www.facebook.com/story.php?story_fbid=pfbid02JgFkHSVZe97mMsPokY26BCxP3ryHiTLVHTiqXdaQx4BVQYYMdpKPppJVAzdS35dTl&id=100076899705538&mibextid=l066kq&paipv=0&eav=AfYUYXWxMGryDl3JGjr_6l3N6meIuStO4vbrA_LmhxfoTCMgS9fwCL3-BwD6zO_DbPc",
  },
  {
    title: 'Official Facebook page of Hong Kong Customs announcing Co-Op has received a Smart Business (Solution for Business and Public Sector Enterprise) Award at Hong Kong ICT Awards 2022.  (Nov 2022)',
    image: require("./assets/facebook_award.png"),
    url: "https://www.facebook.com/story.php?story_fbid=pfbid0u3ZNhkpDg7Y3ftVvKVVP6F8qU2CHmJVt1oYjtttxvDBmWahZWLWq4y24ZEKMZEjul&id=100076899705538&mibextid=l066kq",
  },
  {
    title: 'Official Facebook page of Hong Kong Customs showing Co-Op was showcased in the Smart Hong Kong Pavilion at the International ICT Expo (InnoEx 2023). (Apr 2023)',
    image: require("./assets/facebook_reunion.png"),
    url: "https://www.facebook.com/hongkongcustoms/posts/pfbid0CtWPbmBdGAbYe4F3caZkVsVjDQRBz1PRWBCu4vVMvggPA2jHMXF6wTEg6VrtfoPpl",
  },
]

const awards = [
  {
    image: require("./assets/kids.jpg")
  },
  {
    image: require("./assets/showing.jpg")
  },
  {
    image: require("./assets/talking.jpg")
  },
]

const steps = [
  "register check-in information;",
  "obtain real-time announcements;",
  "order their meals every day;",
  "make requests for daily necessities;",
  "make requests for maintenance on room amenities; and",
  "report their Rapid Antigen Test (RAT) results."
]

function App() {

  const video_ref = useRef();
  const video_player_ref = useRef();

  const [visible, setVisible] = useState(false);

  const callback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      video_player_ref.current.play();
    }else {
      video_player_ref.current.pause();
    }
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    if (video_ref.current) observer.observe(video_ref.current)

    return () => {
      if (video_ref.current) observer.unobserve(video_ref.current)
    }
  }, [video_ref, options]);

  return (
    <div style = {{overflowX: "hidden"}}>
      <div
        className = "container-fluid"
        style = {{
          display: "flex",
          position: "relative",
          padding: "0px",
          marginBottom: "30px",
        }}
      >
        <img src = {require("./assets/top_banner_4.jpg")} style = {{width: "100%", height: "100%", objectFit: "contain"}}></img>
        
      </div>
     
      <div
        className = "container-fluid"
        style = {{
          display: "flex",
          position: "relative",
          padding: "0px",
          marginBottom: "30px",
        }}
      >
        <img src = {require("./assets/top_banner2.jpg")} style = {{width: "100%", height: "100%", objectFit: "contain"}}></img>
      </div>
      
      <div
        className = "container-fluid"
        style = {{display: "flex"}}
      >
        <div className="container-fluid left-right-side">

        </div>

        <div className = "container-fluid" style = {{display: "flex", flex: "6", flexDirection: "column"}}>

          {/* a */}
          <div
            className = "row"
            style = {{display: "flex", flexDirection: "row", marginBottom: "30px"}}
          >
            <div
              style = {{display: "flex", flexDirection: "row", marginBottom: "30px"}}
            >
              <div
                className = "col-xl"
                ref = {video_ref}
                >
                  <video
                    ref = {video_player_ref}
                    src = "https://d1lntig8t7hooq.cloudfront.net/WinningSolution_newest.mp4"
                    style = {{width: "100%", height: "100%", objectFit: "cover"}}
                    controls = {true}
                    autoPlay = {false}
                    muted = {true}
                    loop = {false}
                    playsInline = {true}
                  >
                  </video>
              </div>     
            </div>

            <div
              className = "col-xl"
            >
              <div
                className = "title-container"
              >
                <img src = {require("./assets/1.png")} style = {{width: "30px", height: "30px", objectFit: "contain", margin: "0px", padding: "0px", marginRight: "10px"}}></img>
                <p className = "title">
                  Why Co-Op
                </p>
              </div>
              <p className = "content">
                During the raging fifth wave of COVID-19 epidemic in late January 2022 in Hong Kong, China, there was imminent and critical demand for isolation facilities.  Hong Kong Customs was entrusted to manage the largest with the highest capacity among all, covering an area of 10 hectares and <b>providing 2300 rooms to accommodate 8000 persons.</b> Hong Kong Customs found a big challenge in connecting persons under isolations with the widely dispersed workforce, and in facilitating their communications in order to provide the services needed.
              </p>
            </div>

            <div
              className = "col-xl"
            >
              <img src = {require("./assets/new_home.png")} style = {{width: "100%", height: "100%", objectFit: "contain", margin: "0px", padding: "0px", marginBottom: "30px"}}></img>
            </div>


          </div>

          {/* b */}

          <div
            className = "row"
            style = {{display: "flex", flexDirection: "row", marginBottom: "30px", overflow: "hidden"}}
          >
            <div
              className = "col"
            >
              <div
                className = "title-container"
              >
                <img src = {require("./assets/2.png")} style = {{width: "30px", height: "30px", objectFit: "contain", margin: "0px", padding: "0px", marginRight: "10px"}}></img>
                <p className = "title">
                  How Co-Op Works 
                </p>
              </div>
              <img src = {require("./assets/staff1.png")} style = {{width: "100%", height: "100%", objectFit: "contain", margin: "0px", padding: "0px"}}></img>
            </div>
          </div>

          <div
            className = "row"
            style = {{display: "flex", flexDirection: "row", marginBottom: "30px"}}
          >
            <div
              className = "col-xl"
            >
              <p className = "content" style = {{marginBottom: "0px"}}>
                Community Isolation Facilities Collaboration and Operation Platform (Co-Op) is a renowned IT solution speedily developed by a small team of Hong Kong Customs officers, with an aim to help infected people in Hong Kong go through their hardships during the isolation period.  It is a paperless one-stop “Cooperative, Healthy and Interoperative” platform that facilitates seamless communication and efficient operation across different areas of the facilities in a contact-free way.  It provides a full package of functions that have handled over 4.4 million requests from the people in need inside the facilities. <br></br> <br></br>
            
                Co-Op has also been adopted by the Hong Kong Government for extensive use at all isolation facilities in Hong Kong.  Co-Op is one of the winners of the Smart Business (Solution for Business and Public Sector Enterprise) Award at the Hong Kong ICT Awards 2022.  <br></br><br></br>
              </p>
              
              <div className = "hidden-new-app-container">
                <img src = {require("./assets/new_app.png")} style = {{width: "100%", height: "100%", objectFit: "contain", margin: "0px", padding: "0px"}}></img>
              </div>
              
              <p className = "content" style = {{marginBottom: "0px"}}>
                Through smartphones, persons under isolation could scan the unique QR code assigned to them to:<br></br><br></br>
              </p>

                  
              <ol style = {{paddingLeft: "1.2em", marginBottom: "30px"}}>
                {
                  steps.map((item, index) => {
                    return (
                      <li className = "content-steps">
                        {item}
                      </li>
                    )
                  })
                }
              </ol>
           

            </div>
       
            <div
              className = "col-xl"
              style = {{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className = "col-xl new-app-image-container"
                style = {{
                  display: "flex",
                  marginBottom: "30px"
                }}
              >
                <img src = {require("./assets/new_app.png")} style = {{width: "100%", height: "100%", objectFit: "contain", margin: "0px", padding: "0px"}}></img>
              </div>

              <div
                className = "col-xl"
                style = {{
                  display: "flex",
                }}
              >
                <img src = {require("./assets/functions.png")} style = {{width: "100%", height: "100%", objectFit: "contain", margin: "0px", padding: "0px"}}></img>
              </div>

            </div>
            
          </div>
          
          <div
            className = "row"
            style = {{display: "flex", flexDirection: "row", marginBottom: "30px"}}
          >
            <div
              className = "col-xl"
            >
              <p className = "content">
                Government authorities could use Co-Op’s data to obtain instant status on the number of persons under isolation and the availability of rooms and resources etc.  This would enable effective allocation of resources across various isolation facilities managed by different workforces, and so to maximise their utilisation and to ensure prompt emergency response.
              </p>
            </div>

            <div
              className = "col-xl"
            >
              <img src = {require("./assets/workers.jpeg")} style = {{width: "100%", height: "100%", objectFit: "contain", margin: "0px", padding: "0px", marginBottom: "30px"}}></img>
            </div>
          </div>

        </div>
      
        <div className="container-fluid left-right-side">

        </div>
      </div>
    
      {/* second part */}
      
      <div
        className = "container-fluid"
        style = {{
          display: "flex",
          position: "relative",
          padding: "0px",
          marginBottom: "30px",
        }}
      >
        <img src = {require("./assets/top_banner3.jpg")} style = {{width: "100%", height: "100%", objectFit: "contain"}}></img>
      </div>
      
      <div
        className = "container-fluid"
        style = {{display: "flex"}}
      >
        <div className="container-fluid left-right-side">

        </div>

        <div className = "container-fluid" style = {{display: "flex", flex: "6", flexDirection: "column"}}>

          {/* c */}
          <div
            className = "row"
            style = {{display: "flex", flexDirection: "row", marginBottom: "30px"}}
          >
            <div
              className = "col-xl"
            >
              <div
                className = "title-container"
              >
                <img src = {require("./assets/3.png")} style = {{width: "30px", height: "30px", objectFit: "contain", margin: "0px", padding: "0px", marginRight: "10px"}}></img>
                <p className = "title">
                  Feedback and Accomplishment
                </p>
              </div>
              <p className = "content">
                Co-Op was highly appreciated by frontline staff for being the highly efficient platform for data sharing among staff and persons under isolation, and for managing many complicated workflows, such as handling meal ordering. <br></br><br></br>

                Co-Op was also greatly appreciated by persons under isolation.  Most comments said they could use their smartphones to access the platform and get what they want easily, such as lodging requests for meals and supplies, and checking the processing status of their requests.  This saved them the hassle of waiting for hotline operators to pick up their calls and follow up on their requests item by item, allowing them to save more time for rest and recovery.<br></br><br></br>

                Since the implementation of Co-Op in March 2022 until suspension of the isolation facilities scheme in February 2023, Co-Op has successfully processed over 4.4 million requests from the persons under isolation.
              </p>
            </div>

            <div
              className = "col-xl"
            >
              <img src = {require("./assets/virus.png")} style = {{width: "100%", height: "100%", objectFit: "contain", margin: "0px", padding: "0px", marginBottom: "30px"}}></img>
            </div>
          </div>

          {/* ict */}

          <div
            className = "row"
            style = {{display: "flex", flexDirection: "row", marginBottom: "30px"}}
          >
            <div
              className = "col"
            >
              <div
                style = {{marginBottom: "30px"}}
              >
                <div
                  className = "title-container"
                  style = {{marginBottom: "30px"}}
                >
                  <img src = {require("./assets/4.png")} style = {{width: "30px", height: "30px", objectFit: "contain", margin: "0px", padding: "0px", marginRight: "10px"}}></img>
                  <p className = "title">
                    ICT Award and Expo
                  </p>
                </div>
                <p className = "content">
                  Co-Op is one of the winners of the Smart Business (Solution for Business and Public Sector Enterprise) Award at the Hong Kong ICT Awards 2022.  The solution was also showcased in the Smart Hong Kong Pavilion at the International ICT Expo (InnoEx 2023) in the Hong Kong Convention and Exhibition Centre, which attracted over 66000 local and overseas visitors from over 140 countries and regions.
                </p>
              </div>

              <Carousel
                indicators = {true}
                interval = {3000}
                variant = {"dark"}
                controls = {true}
                indicators = {false}
              >
                {
                  awards.map((item, index) => {
                    return (
                      <Carousel.Item>
                        <a href = {`${item.url}`} target="_blank">
                          <div
                            className = "carousel-info"
                            style = {{
                              backgroundImage: `url(${item.image})`,
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center center",
                              position: "relative"
                            }}
                          >
                          </div>
                        </a>
                      </Carousel.Item>  
                    )
                  })
                }
              </Carousel>
            </div>
          </div>
                
          {/* media */}

          <div
            className = "row"
            style = {{display: "flex", flexDirection: "row", marginBottom: "30px"}}
          >
            <div
              className = "col"
            >
              <div
                style = {{marginBottom: "30px"}}
              >
                <div
                  className = "title-container"
                  style = {{marginBottom: "30px"}}
                >
                  <img src = {require("./assets/5.png")} style = {{width: "30px", height: "30px", objectFit: "contain", margin: "0px", padding: "0px", marginRight: "10px"}}></img>
                  <p className = "title">
                    Media Coverage 
                  </p>
                </div>
                <p className = "content">
                Co-Op was widely and positively reported by lots of media in press, radio, and TV channels.  This not only reflected citizens’ satisfaction with the services provided by Co-Op, but also promoted the adoption of information and communication technologies (ICTs) and enhanced the image of the government as a whole.
                </p>
              </div>

              <Carousel
                indicators = {true}
                interval = {3000}
                variant = {"dark"}
                controls = {true}
                indicators = {false}
              >
                {
                  news.map((item, index) => {
                    return (
                      <Carousel.Item>
                       {
                        (item?.type == "video") ?
                          <div
                            className = "carousel-info"
                            style = {{
                              backgroundImage: `url(${item.image})`,
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center center",
                              position: "relative"
                            }}
                          >
                            <iframe width="100%" height="100%"
                              src = {`${item.url}`}>
                            </iframe>
                            <div
                              className = "news-container"
                            >
                              <p
                                className = "news-title"
                              >
                                {item.title}
                              </p>
                            </div>
                        </div>
                      :
                      <a href = {`${item.url}`} target="_blank">
                        <div
                          className = "carousel-info"
                          style = {{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            position: "relative"
                          }}
                        >
                          {
                            (item.title == "") ? null :
                          <div
                            className = "news-container"
                          >
                            <p
                              className = "news-title"
                            >
                              {item.title}
                            </p>
                          </div> }
                        </div>
                      </a> }
                      </Carousel.Item>  
                    )
                  })
                }
              </Carousel>
            </div>
          </div>

        </div>
     
        <div className="container-fluid left-right-side">

        </div>
      </div>

    </div>
  );
}

export default App;
