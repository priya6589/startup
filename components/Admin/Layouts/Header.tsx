import React from 'react'

const Header = () => {
  return (
    <>
      <div className="navbar-header">
        <div className="d-flex">
          {/* LOGO */}
          <div className="navbar-brand-box">
            <a href="/admin/dashboard/" className="logo logo-dark">
              <span className="logo-sm">
                <img src="/assets/img/logo.png" alt height={22} />
              </span>
              <span className="logo-lg">
                <img src="/assets/images/logo-dark.png" alt height={17} />
              </span>
            </a>
            <a href="/admin/dashboard" className="logo logo-light">
              <span className="logo-sm">
                <img src="/assets/img/logo.png" alt height={22} />
              </span>
              <span className="logo-lg">
                <img src="/assets/images/logo-light.png" alt height={18} />
              </span>
            </a>
          </div>
          <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
            <i className="mdi mdi-menu" />
          </button>
          <div className="d-none d-sm-block">
            <div className="dropdown pt-3 d-inline-block">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Create <i className="mdi mdi-chevron-down" />
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          {/* App Search*/}
          <form className="app-search d-none d-lg-block">
            <div className="position-relative">
              <input type="text" className="form-control" placeholder="Search..." />
              <span className="fa fa-search" />
            </div>
          </form>
          <div className="dropdown d-inline-block d-lg-none ms-2">
            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="mdi mdi-magnify" />
            </button>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
              <form className="p-3">
                <div className="form-group m-0">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify" /></button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="dropdown d-none d-md-block ms-2">
            <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="me-2" src="/assets/images/flags/us_flag.jpg" alt="Header Language" height={16} /> English <span className="mdi mdi-chevron-down" />
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <img src="/assets/images/flags/germany_flag.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle"> German </span>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <img src="/assets/images/flags/italy_flag.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle"> Italian </span>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <img src="/assets/images/flags/french_flag.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle"> French </span>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <img src="/assets/images/flags/spain_flag.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle"> Spanish </span>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <img src="/assets/images/flags/russia_flag.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle"> Russian </span>
              </a>
            </div>
          </div>
          <div className="dropdown d-none d-lg-inline-block">
            <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
              <i className="mdi mdi-fullscreen" />
            </button>
          </div>
          <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="mdi mdi-bell-outline" />
              <span className="badge bg-danger rounded-pill">3</span>
            </button>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
              <div className="p-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h5 className="m-0 font-size-16"> Notifications (258) </h5>
                  </div>
                </div>
              </div>
              <div data-simplebar style={{ "max-height": "230px" }}>
                <a href className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-xs">
                        <span className="avatar-title bg-success rounded-circle font-size-16">
                          <i className="mdi mdi-cart-outline" />
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Your order is placed</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">Dummy text of the printing and typesetting industry.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-xs">
                        <span className="avatar-title bg-warning rounded-circle font-size-16">
                          <i className="mdi mdi-message-text-outline" />
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">New Message received</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">You have 87 unread messages</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-xs">
                        <span className="avatar-title bg-info rounded-circle font-size-16">
                          <i className="mdi mdi-glass-cocktail" />
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Your item is shipped</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">It is a long established fact that a reader will</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-xs">
                        <span className="avatar-title bg-primary rounded-circle font-size-16">
                          <i className="mdi mdi-cart-outline" />
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Your order is placed</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">Dummy text of the printing and typesetting industry.</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-xs">
                        <span className="avatar-title bg-danger rounded-circle font-size-16">
                          <i className="mdi mdi-message-text-outline" />
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">New Message received</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">You have 87 unread messages</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="p-2 border-top">
                <div className="d-grid">
                  <a className="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                    View all
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="rounded-circle header-profile-user" src="/assets/images/users/user-4.jpg" alt="Header Avatar" />
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a className="dropdown-item" href="#"><i className="mdi mdi-account-circle font-size-17 align-middle me-1" /> Profile</a>
              <a className="dropdown-item" href="#"><i className="mdi mdi-wallet font-size-17 align-middle me-1" /> My Wallet</a>
              <a className="dropdown-item d-flex align-items-center" href="#"><i className="mdi mdi-cog font-size-17 align-middle me-1" /> Settings<span className="badge bg-success ms-auto">11</span></a>
              <a className="dropdown-item" href="#"><i className="mdi mdi-lock-open-outline font-size-17 align-middle me-1" /> Lock screen</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-17 align-middle me-1 text-danger" /> Logout</a>
            </div>
          </div>
          <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
              <i className="mdi mdi-cog-outline" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header