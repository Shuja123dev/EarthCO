import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo/earthco_logo.png'
import avatar1 from '../../assets/images/avatar/1.jpg'
import profilePic from '../../assets/images/profile/profile.png'
import { DataContext } from '../../context/AppData'


const HeaderExp = () => {

    const { loggedUser } = useContext(DataContext);

    console.log(loggedUser);

    // const location = useLocation();
    // useEffect(() => {
    //     const scriptFiles = [
    //         './assets/vendor/global/global.min.js',
    //         './assets/js/custom.js',
    //         './assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js',
    //         './assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css',
    //         './assets/js/dashboard/dashboard-1.js',
    //     ]

    //     scriptFiles.forEach((filePath) => {
    //         const script = document.createElement('script');
    //         script.src = filePath;
    //         script.async = true;

    //         document.body.appendChild(script);
    //     });

    //     return () => {
    //         scriptFiles.forEach((filePath) => {
    //             const script = document.querySelector(`script[src="${filePath}"]`);
    //             if (script) {
    //                 document.body.removeChild(script);
    //             }
    //         });
    //     };
    // }, [location])

    return (
        <>
            <div className="nav-header">
                <NavLink className="brand-logo" style={{ background: '#fff' }}>
                    {/* <svg className="logo-abbr" width="39" height="23" viewBox="0 0 39 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="w3" d="M32.0362 22H19.0466L20.7071 18.7372C20.9559 18.2484 21.455 17.9378 22.0034 17.9305L31.1036 17.8093C33.0753 17.6497 33.6571 15.9246 33.7015 15.0821C33.7015 13.2196 32.1916 12.5765 31.4367 12.4878H23.7095L25.9744 8.49673H30.4375C31.8763 8.3903 32.236 7.03332 32.236 6.36814C32.3426 4.93133 30.9482 4.61648 30.2376 4.63865H28.6955C28.2646 4.63865 27.9788 4.19212 28.1592 3.8008L29.7047 0.44798C31.0903 0.394765 32.8577 0.780573 33.5683 0.980129C38.6309 3.42801 37.0988 7.98676 35.6999 9.96014C38.1513 11.9291 38.4976 14.3282 38.3644 15.2816C38.098 20.1774 34.0346 21.8005 32.0362 22Z" fill="var(--primary)" />
                        <path className="react-w" d="M9.89261 21.4094L0 2.80536H4.86354C5.41354 2.80536 5.91795 3.11106 6.17246 3.59864L12.4032 15.5355C12.6333 15.9762 12.6261 16.5031 12.3842 16.9374L9.89261 21.4094Z" fill="white" />
                        <path className="react-w" d="M17.5705 21.4094L7.67786 2.80536H12.5372C13.0894 2.80536 13.5954 3.11351 13.8489 3.60412L20.302 16.0939L17.5705 21.4094Z" fill="white" />
                        <path className="react-w" d="M17.6443 21.4094L28.2751 0H23.4513C22.8806 0 22.361 0.328884 22.1168 0.844686L14.8271 16.2416L17.6443 21.4094Z" fill="white" />
                        <path className="react-w" d="M9.89261 21.4094L0 2.80536H4.86354C5.41354 2.80536 5.91795 3.11106 6.17246 3.59864L12.4032 15.5355C12.6333 15.9762 12.6261 16.5031 12.3842 16.9374L9.89261 21.4094Z" stroke="white" />
                        <path className="react-w" d="M17.5705 21.4094L7.67786 2.80536H12.5372C13.0894 2.80536 13.5954 3.11351 13.8489 3.60412L20.302 16.0939L17.5705 21.4094Z" stroke="white" />
                        <path className="react-w" d="M17.6443 21.4094L28.2751 0H23.4513C22.8806 0 22.361 0.328884 22.1168 0.844686L14.8271 16.2416L17.6443 21.4094Z" stroke="white" />
                    </svg>
                    <svg className="brand-title" width="47" height="16" viewBox="0 0 47 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.36 15.2C7.2933 15.2 6.3 15.0267 5.38 14.68C4.4733 14.32 3.68 13.82 3 13.18C2.3333 12.5267 1.8133 11.76 1.44 10.88C1.0667 9.99999 0.880005 9.03999 0.880005 7.99999C0.880005 6.95999 1.0667 5.99999 1.44 5.11999C1.8133 4.23999 2.34 3.47999 3.02 2.83999C3.7 2.18666 4.49331 1.68666 5.40001 1.33999C6.30671 0.979988 7.3 0.799988 8.38 0.799988C9.5267 0.799988 10.5733 0.999988 11.52 1.39999C12.4667 1.78666 13.2667 2.36666 13.92 3.13999L12.24 4.71999C11.7333 4.17332 11.1667 3.76666 10.54 3.49999C9.9133 3.21999 9.2333 3.07999 8.5 3.07999C7.7667 3.07999 7.0933 3.19999 6.48 3.43999C5.88 3.67999 5.35331 4.01999 4.90001 4.45999C4.46001 4.89999 4.1133 5.41999 3.86 6.01999C3.62 6.61999 3.5 7.27999 3.5 7.99999C3.5 8.71999 3.62 9.37999 3.86 9.97999C4.1133 10.58 4.46001 11.1 4.90001 11.54C5.35331 11.98 5.88 12.32 6.48 12.56C7.0933 12.8 7.7667 12.92 8.5 12.92C9.2333 12.92 9.9133 12.7867 10.54 12.52C11.1667 12.24 11.7333 11.82 12.24 11.26L13.92 12.86C13.2667 13.62 12.4667 14.2 11.52 14.6C10.5733 15 9.52 15.2 8.36 15.2ZM16.4113 15V0.999988H22.1713C23.4113 0.999988 24.4713 1.19999 25.3513 1.59999C26.2446 1.99999 26.9313 2.57332 27.4113 3.31999C27.8913 4.06666 28.1313 4.95332 28.1313 5.97999C28.1313 7.00669 27.8913 7.89329 27.4113 8.63999C26.9313 9.37329 26.2446 9.93999 25.3513 10.34C24.4713 10.7267 23.4113 10.92 22.1713 10.92H17.8513L19.0113 9.73999V15H16.4113ZM25.5713 15L22.0313 9.91999H24.8112L28.3713 15H25.5713ZM19.0113 10.02L17.8513 8.77999H22.0513C23.1979 8.77999 24.0579 8.53329 24.6312 8.03999C25.2179 7.54669 25.5113 6.85999 25.5113 5.97999C25.5113 5.08666 25.2179 4.39999 24.6312 3.91999C24.0579 3.43999 23.1979 3.19999 22.0513 3.19999H17.8513L19.0113 1.91999V10.02ZM31.0402 15V0.999988H33.1802L39.3002 11.22H38.1802L44.2002 0.999988H46.3402L46.3602 15H43.9002L43.8802 4.85999H44.4002L39.2802 13.4H38.1202L32.9202 4.85999H33.5202V15H31.0402Z" fill="black" />
                    </svg> */}
                    <img style={{ width: '45%', marginLeft: "20%" }} src={logo} alt="" />
                </NavLink>
                <div className="nav-control">
                    <div className="hamburger">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
            <div>
                <div className="header">
                    <div className="header-content" style={{ background: '#000000e6' }}>
                        <nav className="navbar navbar-expand">
                            <div className="collapse navbar-collapse justify-content-between">
                                <div className="header-left">
                                    <div className="input-group search-area">
                                        <span className="input-group-text"><NavLink>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8.78605" cy="8.78605" r="8.23951" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M14.5168 14.9447L17.7471 18.1667" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </NavLink></span>
                                        <input type="text" className="form-control" placeholder="Search" />
                                    </div>
                                </div>
                                <ul className="navbar-nav header-right">
                                    <li className="nav-item dropdown notification_dropdown">
                                        <NavLink className="nav-link " data-bs-toggle="dropdown">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.8067 7.62358L20.1842 6.54349C19.6577 5.62957 18.4907 5.31429 17.5755 5.83869V5.83869C17.1399 6.09531 16.6201 6.16812 16.1307 6.04106C15.6413 5.91399 15.2226 5.59749 14.9668 5.16134C14.8023 4.88412 14.7139 4.56836 14.7105 4.24601V4.24601C14.7254 3.72919 14.5304 3.22837 14.17 2.85764C13.8096 2.48691 13.3145 2.27783 12.7975 2.27805H11.5435C11.037 2.27804 10.5513 2.47988 10.194 2.83891C9.83669 3.19795 9.63717 3.68456 9.63961 4.19109V4.19109C9.6246 5.23689 8.77248 6.07678 7.72657 6.07667C7.40421 6.07332 7.08846 5.98491 6.81123 5.82038V5.82038C5.89606 5.29598 4.72911 5.61126 4.20254 6.52519L3.53435 7.62358C3.00841 8.53636 3.3194 9.70258 4.23 10.2323V10.2323C4.8219 10.574 5.18653 11.2056 5.18653 11.889C5.18653 12.5725 4.8219 13.204 4.23 13.5458V13.5458C3.32056 14.0719 3.00923 15.2353 3.53435 16.1453V16.1453L4.16593 17.2346C4.41265 17.6798 4.8266 18.0083 5.31619 18.1474C5.80578 18.2866 6.33064 18.2249 6.77462 17.976V17.976C7.21108 17.7213 7.73119 17.6515 8.21934 17.7822C8.70749 17.9128 9.12324 18.233 9.37416 18.6716C9.5387 18.9489 9.62711 19.2646 9.63046 19.587V19.587C9.63046 20.6435 10.487 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9089 18.6 15.2682 18.2407C15.6275 17.8814 16.1155 17.6806 16.6236 17.6831C16.9452 17.6917 17.2596 17.7797 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8067 16.1453C21.0618 15.7075 21.1318 15.186 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6718 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8873 19.1603 11.3658 19.4154 10.9279C19.5812 10.6383 19.8214 10.3982 20.111 10.2323V10.2323C21.0161 9.70286 21.3264 8.54346 20.8067 7.63274V7.63274V7.62358Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                <circle cx="12.1751" cy="11.889" r="2.63616" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </NavLink>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <div id="DZ_W_TimeLine02" className="widget-timeline dz-scroll style-1 p-3 height370">
                                                <ul className="timeline">
                                                    <li>
                                                        <div className="timeline-badge primary"></div>
                                                        <NavLink className="timeline-panel text-muted" >
                                                            <span>10 minutes ago</span>
                                                            <h6 className="mb-0">Youtube, a video-sharing website, goes live <strong className="text-primary">$500</strong>.</h6>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-badge info">
                                                        </div>
                                                        <NavLink className="timeline-panel text-muted" >
                                                            <span>20 minutes ago</span>
                                                            <h6 className="mb-0">New order placed <strong className="text-info">#XF-2356.</strong></h6>
                                                            <p className="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-badge danger">
                                                        </div>
                                                        <NavLink className="timeline-panel text-muted" >
                                                            <span>30 minutes ago</span>
                                                            <h6 className="mb-0">john just buy your product <strong className="text-warning">Sell $250</strong></h6>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-badge success">
                                                        </div>
                                                        <NavLink className="timeline-panel text-muted" >
                                                            <span>15 minutes ago</span>
                                                            <h6 className="mb-0">StumbleUpon is acquired by eBay. </h6>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-badge warning">
                                                        </div>
                                                        <NavLink className="timeline-panel text-muted" >
                                                            <span>20 minutes ago</span>
                                                            <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-badge dark">
                                                        </div>
                                                        <NavLink className="timeline-panel text-muted" >
                                                            <span>20 minutes ago</span>
                                                            <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown notification_dropdown">
                                        <NavLink className="nav-link" role="button" data-bs-toggle="dropdown">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </NavLink>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <div id="DZ_W_Notification1" className="widget-media dz-scroll p-3" style={{ height: '380px' }}>
                                                <ul className="timeline">
                                                    <li>
                                                        <div className="timeline-panel">
                                                            <div className="media me-2">
                                                                <img alt="lazy" width="50" src={avatar1} />
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-panel">
                                                            <div className="media me-2 media-info">
                                                                KG
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mb-1">Resport created successfully</h6>
                                                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-panel">
                                                            <div className="media me-2 media-success">
                                                                <i className="fa fa-home"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-panel">
                                                            <div className="media me-2">
                                                                <img alt="lazy" width="50" src={avatar1} />
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-panel">
                                                            <div className="media me-2 media-danger">
                                                                KG
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mb-1">Resport created successfully</h6>
                                                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-panel">
                                                            <div className="media me-2 media-primary">
                                                                <i className="fa fa-home"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-panel">
                                                            <div className="media me-2">
                                                                <img alt="lazy" width="50" src={avatar1} />
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-panel">
                                                            <div className="media me-2 media-info">
                                                                KG
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mb-1">Resport created successfully</h6>
                                                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-panel">
                                                            <div className="media me-2 media-success">
                                                                <i className="fa fa-home"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-panel">
                                                            <div className="media me-2">
                                                                <img alt="lazy" width="50" src={avatar1} />
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-panel">
                                                            <div className="media me-2 media-danger">
                                                                KG
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mb-1">Resport created successfully</h6>
                                                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-panel">
                                                            <div className="media me-2 media-primary">
                                                                <i className="fa fa-home"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <NavLink className="all-notification" >See all notifications <i className="ti-arrow-end"></i></NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown notification_dropdown">
                                        <NavLink className="nav-link bell-link" >
                                            <svg width="20" height="22" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.9026 6.85114L12.4593 10.4642C11.6198 11.1302 10.4387 11.1302 9.59922 10.4642L5.11844 6.85114" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </NavLink>
                                    </li>
                                    <NavLink to='/' style={{ display: 'contents' }}>
                                        <li className="nav-item align-items-center header-border">
                                            <button href='/' className="btn btn-primary btn-sm">Logout</button>
                                        </li>
                                    </NavLink>
                                    <li className="nav-item ps-3">
                                        <div className="dropdown header-profile2">
                                            <NavLink className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div className="header-info2 d-flex align-items-center">
                                                    <div className="header-media">
                                                        <img src={profilePic} alt="" />
                                                    </div>
                                                    <div className="header-info">
                                                        <h6>{loggedUser.userName}</h6>
                                                        <p>{loggedUser.email}</p>
                                                    </div>

                                                </div>
                                            </NavLink>
                                            <div className="dropdown-menu dropdown-menu-end" >
                                                <div className="card border-0 mb-0">
                                                    <div className="card-header py-2">
                                                        <div className="products">
                                                            <img src={profilePic} className="avatar avatar-md" alt="" />
                                                            <div>
                                                                <h6>{loggedUser.userName}</h6>
                                                                <span>Web Designer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body px-0 py-2">
                                                        <NavLink className="dropdown-item ai-icon ">
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9848 15.3462C8.11714 15.3462 4.81429 15.931 4.81429 18.2729C4.81429 20.6148 8.09619 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8733 15.3462 11.9848 15.3462Z" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5229 2.81445 11.9848 2.81445C9.44667 2.81445 7.38857 4.8716 7.38857 7.40969C7.38 9.93922 9.42381 11.9973 11.9524 12.0059H11.9848Z" stroke="var(--primary)" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                            <span className="ms-2">Profile </span>
                                                        </NavLink>
                                                        <NavLink className="dropdown-item ai-icon ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>

                                                            <span className="ms-2">My Project</span><span className="badge badge-sm badge-secondary light rounded-circle text-white ms-2">4</span>
                                                        </NavLink>
                                                        <NavLink className="dropdown-item ai-icon ">
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.9026 8.85114L13.4593 12.4642C12.6198 13.1302 11.4387 13.1302 10.5992 12.4642L6.11844 8.85114" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                            <span className="ms-2">Message </span>
                                                        </NavLink>
                                                        <NavLink className="dropdown-item ai-icon ">
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M14.3888 20.8572C13.0247 22.372 10.8967 22.3899 9.51947 20.8572" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                            <span className="ms-2">Notification </span>
                                                        </NavLink>
                                                    </div>
                                                    <div className="card-footer px-0 py-2">
                                                        <NavLink className="dropdown-item ai-icon ">
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.8066 7.62355L20.1842 6.54346C19.6576 5.62954 18.4907 5.31426 17.5755 5.83866V5.83866C17.1399 6.09528 16.6201 6.16809 16.1307 6.04103C15.6413 5.91396 15.2226 5.59746 14.9668 5.16131C14.8023 4.88409 14.7139 4.56833 14.7105 4.24598V4.24598C14.7254 3.72916 14.5304 3.22834 14.17 2.85761C13.8096 2.48688 13.3145 2.2778 12.7975 2.27802H11.5435C11.0369 2.27801 10.5513 2.47985 10.194 2.83888C9.83666 3.19791 9.63714 3.68453 9.63958 4.19106V4.19106C9.62457 5.23686 8.77245 6.07675 7.72654 6.07664C7.40418 6.07329 7.08843 5.98488 6.8112 5.82035V5.82035C5.89603 5.29595 4.72908 5.61123 4.20251 6.52516L3.53432 7.62355C3.00838 8.53633 3.31937 9.70255 4.22997 10.2322V10.2322C4.82187 10.574 5.1865 11.2055 5.1865 11.889C5.1865 12.5725 4.82187 13.204 4.22997 13.5457V13.5457C3.32053 14.0719 3.0092 15.2353 3.53432 16.1453V16.1453L4.16589 17.2345C4.41262 17.6797 4.82657 18.0082 5.31616 18.1474C5.80575 18.2865 6.33061 18.2248 6.77459 17.976V17.976C7.21105 17.7213 7.73116 17.6515 8.21931 17.7821C8.70746 17.9128 9.12321 18.233 9.37413 18.6716C9.53867 18.9488 9.62708 19.2646 9.63043 19.5869V19.5869C9.63043 20.6435 10.4869 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9088 18.6 15.2681 18.2407C15.6274 17.8814 16.1154 17.6806 16.6236 17.6831C16.9451 17.6917 17.2596 17.7797 17.5389 17.9393V17.9393C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8066 16.1453C21.0617 15.7074 21.1317 15.1859 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6717 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8872 19.1602 11.3658 19.4153 10.9279C19.5812 10.6383 19.8213 10.3981 20.111 10.2322V10.2322C21.0161 9.70283 21.3264 8.54343 20.8066 7.63271V7.63271V7.62355Z" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <circle cx="12.175" cy="11.889" r="2.63616" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                            <span className="ms-2">Settings </span>
                                                        </NavLink>
                                                        <NavLink to='/'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                                            <span className="ms-2">Logout </span>
                                                        </NavLink>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderExp
