"use strict";
exports.id = 263;
exports.ids = [263];
exports.modules = {

/***/ 263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Portfolio)
});

// EXTERNAL MODULE: external "isotope-layout"
var external_isotope_layout_ = __webpack_require__(349);
var external_isotope_layout_default = /*#__PURE__*/__webpack_require__.n(external_isotope_layout_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(104);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/popup/DetailsPopup.js



const DetailsPopup = ({
  open,
  close
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `dizme_tm_modalbox ${open ? "opened" : ""}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "box_inner",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "close",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "#",
          onClick: () => close(),
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "icon-cancel"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "description_wrap",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "popup_details",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "top_image",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "img/thumbs/4-2.jpg",
              alt: "image"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "main",
              "data-img-url": "img/portfolio/6.jpg",
              style: {
                backgroundImage: 'url("img/portfolio/6.jpg")'
              }
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "portfolio_main_title",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "Global Evolution"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                children: "Detail"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {})]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "main_details",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "textbox",
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible."
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: `Mockups are useful both for the creative phase of the project
                  - for instance when you're trying to figure out your user
                  flows or the proper visual hierarchy - and the production
                  phase when they phase when they will represent the target
                  product. Building mockups strikes the ideal balance ease of
                  modification.`
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "detailbox",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "first",
                    children: "Client"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Alvaro Morata"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "first",
                    children: "Category"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: "Detail"
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "first",
                    children: "Date"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "March 07, 2021"
                  })]
                })]
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "additional_images",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "list_inner",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "my_image",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "img/thumbs/4-2.jpg",
                      alt: "image"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/1.jpg",
                      style: {
                        backgroundImage: 'url("img/portfolio/1.jpg")'
                      }
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "list_inner",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "my_image",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "img/thumbs/4-2.jpg",
                      alt: "image"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/2.jpg",
                      style: {
                        backgroundImage: 'url("img/portfolio/2.jpg")'
                      }
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "list_inner",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "my_image",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "img/thumbs/4-2.jpg",
                      alt: "image"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/3.jpg",
                      style: {
                        backgroundImage: 'url("img/portfolio/3.jpg")'
                      }
                    })]
                  })
                })
              })]
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const popup_DetailsPopup = (DetailsPopup);
;// CONCATENATED MODULE: ./src/components/Portfolio.js







const Portfolio = () => {
  (0,external_react_.useEffect)(() => {
    (0,utilits/* dataImage */.CC)();
    (0,utilits/* portfolioHover */.gl)();
  }, []); // Isotope

  const isotope = (0,external_react_.useRef)();
  const {
    0: filterKey,
    1: setFilterKey
  } = (0,external_react_.useState)("*");
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      isotope.current = new (external_isotope_layout_default())(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item"
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false
        }
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  (0,external_react_.useEffect)(() => {
    if (isotope.current) {
      filterKey === "*" ? isotope.current.arrange({
        filter: `*`
      }) : isotope.current.arrange({
        filter: `.${filterKey}`
      });
    }
  }, [filterKey]);

  const handleFilterKeyChange = key => () => {
    setFilterKey(key);
  };

  const activeBtn = value => value === filterKey ? "current" : ""; // Popup


  const {
    0: popup,
    1: setPopup
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "dizme_tm_section",
    id: "portfolio",
    children: [/*#__PURE__*/jsx_runtime_.jsx(popup_DetailsPopup, {
      open: popup,
      close: () => setPopup(false)
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "dizme_tm_portfolio",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "dizme_tm_main_title",
          "data-align": "center",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Gallery"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "portfolio_filter",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `c-pointer ${activeBtn("*")}`,
                onClick: handleFilterKeyChange("*"),
                children: "All"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `c-pointer ${activeBtn("youtube")}`,
                onClick: handleFilterKeyChange("youtube"),
                children: "Youtube"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `c-pointer ${activeBtn("vimeo")}`,
                onClick: handleFilterKeyChange("vimeo"),
                children: "Vimeo"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `c-pointer ${activeBtn("soundcloud")}`,
                onClick: handleFilterKeyChange("soundcloud"),
                children: "Soundcloud"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `c-pointer ${activeBtn("popup")}`,
                onClick: handleFilterKeyChange("popup"),
                children: "Popup"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `c-pointer  ${activeBtn("detail")}`,
                onClick: handleFilterKeyChange("detail"),
                children: "Detail"
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "dizme_tm_portfolio_titles"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "portfolio_list wow fadeInUp",
          "data-wow-duration": "1s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "gallery_zoom grid",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "youtube grid-item",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Mockup Shape",
                  "data-category": "Youtube",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "popup-youtube",
                    href: "https://www.youtube.com/embed/7e90gBu4pas?autoplay=1",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "img/thumbs/42-56.jpg",
                      alt: "image"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/1.jpg"
                    })]
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: "Mockup Shape"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Youtube"
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "vimeo grid-item",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Ave Bottle",
                  "data-category": "Vimeo",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "popup-vimeo",
                    href: "https://player.vimeo.com/video/337293658?autoplay=1",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "img/thumbs/42-34.jpg",
                      alt: "image"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/2.jpg"
                    })]
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: "Ave Bottle"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Vimeo"
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "soundcloud grid-item",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Magic Art",
                  "data-category": "Soundcloud",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "soundcloude_link mfp-iframe audio",
                    href: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "img/thumbs/42-56.jpg",
                      alt: "image"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/3.jpg"
                    })]
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: "Magic Art"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Soundcloud"
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "popup grid-item",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Scott Felix",
                  "data-category": "Popup",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "zoom",
                    href: "img/portfolio/5.jpg",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "img/thumbs/42-56.jpg",
                      alt: "image"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/5.jpg"
                    })]
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: "Blue Lemon"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Popup"
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "popup grid-item",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Art Stone",
                  "data-category": "Popup",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "zoom",
                    href: "img/portfolio/4.jpg",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "img/thumbs/42-34.jpg",
                      alt: "image"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/4.jpg"
                    })]
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: "Art Stone"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Popup"
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "detail grid-item",
              onClick: () => setPopup(true),
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Global Evolution",
                  "data-category": "Detail",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "portfolio_popup",
                    href: "#",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "img/thumbs/42-34.jpg",
                      alt: "image"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/6.jpg"
                    })]
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: "Global Evolution"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Detail"
                  })]
                })]
              })
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "brush_1 wow zoomIn",
        "data-wow-duration": "1s",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "img/brushes/portfolio/1.png",
          alt: "image"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "brush_2 wow fadeInRight",
        "data-wow-duration": "1s",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "img/brushes/portfolio/2.png",
          alt: "image"
        })
      })]
    })]
  });
};

/* harmony default export */ const components_Portfolio = (Portfolio);

/***/ })

};
;