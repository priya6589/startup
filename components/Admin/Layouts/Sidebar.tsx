import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          {/*- Sidemenu */}
          <div id="sidebar-menu">
            {/* Left Menu Start */}
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title">Main</li>
              <li>
                <a href="index.html" className="waves-effect">
                  <i className="ti-home" /><span className="badge rounded-pill bg-primary float-end">1</span>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="calendar.html" className=" waves-effect">
                  <i className="ti-calendar" />
                  <span>Calendar</span>
                </a>
              </li>
              <li>
                <a href="javascript: void(0);" className="has-arrow waves-effect">
                  <i className="ti-email" />
                  <span>Email</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href="">Inbox</a></li>
                  <li><a href="">Email Read</a></li>
                  <li><a href="">Email Compose</a></li>
                </ul>
              </li>
              <li className="menu-title">Components</li>
              <li>
                <a href="javascript: void(0);" className="has-arrow waves-effect">
                  <i className="ti-package" />
                  <span>UI Elements</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href="">Alerts</a></li>
                  <li><a href="">Buttons</a></li>
                  <li><a href="">Cards</a></li>
                  <li><a href="">Carousel</a></li>
                  <li><a href="">Dropdowns</a></li>
                  <li><a href="">Grid</a></li>
                  <li><a href="">Images</a></li>
                  <li><a href="">Lightbox</a></li>
                  <li><a href="">Modals</a></li>
                  <li><a href="">Session Timeout</a></li>
                  <li><a href="">General</a></li>
                  <li><a href="">Colors</a></li>
                  <li><a href="">Rating</a></li>
                </ul>
              </li>
              <li>
                <a href="javascript: void(0);" className="waves-effect">
                  <i className="ti-receipt" />
                  <span className="badge rounded-pill bg-success float-end">9</span>
                  <span>Forms</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href="">Form Elements</a></li>
                  <li><a href="">Form Validation</a></li>
                  <li><a href="">Form Advanced</a></li>
                  <li><a href="">Form Editors</a></li>
                  <li><a href="">Form File Upload</a></li>
                  <li><a href="">Form Xeditable</a></li>
                  <li><a href="">Form Repeater</a></li>
                  <li><a href="">Form Wizard</a></li>
                  <li><a href="">Form Mask</a></li>
                </ul>
              </li>
              <li>
                <a href="javascript: void(0);" className="has-arrow waves-effect">
                  <i className="ti-pie-chart" />
                  <span>Charts</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href="">Morris Chart</a></li>
                  <li><a href="">Chartist Chart</a></li>
                  <li><a href="">Chartjs Chart</a></li>
                  <li><a href="">Flot Chart</a></li>
                  <li><a href="">Jquery Knob Chart</a></li>
                  <li><a href="">Sparkline Chart</a></li>
                </ul>
              </li>
              <li>
                <a href="javascript: void(0);" className="has-arrow waves-effect">
                  <i className="ti-view-grid" />
                  <span>Tables</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href="">Basic Tables</a></li>
                  <li><a href="">Data Tables</a></li>
                  <li><a href="">Responsive Tables</a></li>
                  <li><a href="">Editable Tables</a></li>
                </ul>
              </li>
              <li>
                <a href="javascript: void(0);" className="has-arrow waves-effect">
                  <i className="ti-face-smile" />
                  <span>Icons</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href="">Material Design</a></li>
                  <li><a href="">Font Awesome</a></li>
                  <li><a href="">Ion Icons</a></li>
                  <li><a href="">Themify Icons</a></li>
                  <li><a href="">Dripicons</a></li>
                  <li><a href="">Typicons Icons</a></li>
                </ul>
              </li>
              <li>
                <a href="javascript: void(0);" className="waves-effect">
                  <i className="ti-location-pin" />
                  <span className="badge rounded-pill bg-danger float-end">2</span>
                  <span>Maps</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href=""> Google Map</a></li>
                  <li><a href=""> Vector Map</a></li>
                </ul>
              </li>
              <li className="menu-title">Extras</li>
              <li>
                <a href="javascript: void(0);" className="has-arrow waves-effect">
                  <i className="ti-layout" />
                  <span>Layouts</span>
                </a>
                <ul className="sub-menu" aria-expanded="true">
                  <li>
                    <a href="javascript: void(0);" className="has-arrow">Vertical</a>
                    <ul className="sub-menu" aria-expanded="true">
                      <li><a href="">Light Sidebar</a></li>
                      <li><a href="">Compact Sidebar</a></li>
                      <li><a href="">Icon Sidebar</a></li>
                      <li><a href="">Boxed Layout</a></li>
                      <li><a href="">Colored Sidebar</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript: void(0);" className="has-arrow">Horizontal</a>
                    <ul className="sub-menu" aria-expanded="true">
                      <li><a href="">Horizontal</a></li>
                      <li><a href="">Light Topbar</a></li>
                      <li><a href="">Boxed Layout</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript: void(0);" className="has-arrow waves-effect">
                  <i className="ti-archive" />
                  <span> Authentication </span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href="">Login 1</a></li>
                  <li><a href="">Login 2</a></li>
                  <li><a href="">Register 1</a></li>
                  <li><a href="">Register 2</a></li>
                  <li><a href="">Recover Password 1</a></li>
                  <li><a href="">Recover Password 2</a></li>
                  <li><a href="">Lock Screen 1</a></li>
                  <li><a href="">Lock Screen 2</a></li>
                </ul>
              </li>
              <li>
                <a href="javascript: void(0);" className="has-arrow waves-effect">
                  <i className="ti-support" />
                  <span> Extra Pages </span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href="#">Timeline</a></li>
                  <li><a href="#">Invoice</a></li>
                  <li><a href="#">Directory</a></li>
                  <li><a href="#">Starter Page</a></li>
                  <li><a href="#">Error 404</a></li>
                  <li><a href="#">Error 500</a></li>
                  <li><a href="">Pricing</a></li>
                  <li><a href="">Gallery</a></li>
                  <li><a href="">Profile</a></li>
                  <li><a href="">Maintenance</a></li>
                  <li><a href="">Coming Soon</a></li>
                  <li><a href="">FAQs</a></li>
                </ul>
              </li>
              <li>
                <a href="javascript: void(0);" className="has-arrow waves-effect">
                  <i className="ti-bookmark-alt" />
                  <span> Email Templates </span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href="">Basic Action Email</a></li>
                  <li><a href="">Alert Email</a></li>
                  <li><a href="">Billing Email</a></li>
                </ul>
              </li>
              <li>
                <a href="javascript: void(0);" className="has-arrow waves-effect">
                  <i className="ti-more" />
                  <span>Multi Level</span>
                </a>
                <ul className="sub-menu" aria-expanded="true">
                  <li><a href="javascript: void(0);">Level 1.1</a></li>
                  <li><a href="javascript: void(0);" className="has-arrow">Level 1.2</a>
                    <ul className="sub-menu" aria-expanded="true">
                      <li><a href="javascript: void(0);">Level 2.1</a></li>
                      <li><a href="javascript: void(0);">Level 2.2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Sidebar */}
        </div>
      </div>
    </>
  )
}

export default Sidebar