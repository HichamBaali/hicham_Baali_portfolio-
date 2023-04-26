import { useEffect, useState } from "react";
import { aTagClick, fatchData } from "../utilits";
import BlogPopUp from "./popup/BlogPopUp";
const News = () => {
  const data = [
    {
      title:
        "Learn English, be more confident, start now with our amazing team of teachers",
      img: "img/news/1.webp",
      category: "SpeakIzy English Course",
      date: { date: "23", month: "Dec" },
      details: [
        "سجل الآن لتعلم الانجليزية من الصفر هاذي فرصتك باش تتعلم الانجليزية وتزيد من ثقتك في نفسك 😎😎 👈المستوى الأول بحجم ساعي قدره  60 ساعة. 👈الدورة مكثفة جدا، يعني الدراسة كل يوم ما عدا الجمعة والسبت بمعدل 5 حصص في الاسبوع 📆  👈مدة الحصة 120 دقيقة🕒 👈التوقيت مسائي من 20:00 الى 22:00    او من 22:00 الى 00:00 ⏰ 👈منهجية تعتمد على المحادثة والتطبيق والتفاعل من أجل نتيجة جيدة🚀 اضغط على الرابط وسجل الان واستفد من تخفيض الصيف",
      ],
    },
    {
      title: "How to be appreciated for your hard work as a developer",
      img: "img/news/2.webp",
      category: "Branding",
      date: { date: "23", month: "Dec" },
      details: [
        "Dizme is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
        "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
        "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
      ],
    },
    {
      title: "How designers and developers can collaborate better",
      img: "img/news/3.webp",
      category: "Social Media",
      date: { date: "23", month: "Dec" },
      details: [
        "Dizme is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
        "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
        "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
      ],
    },
  ];

  const [popupData, setPopupData] = useState({});
  const [popup, setPopup] = useState(false);
  useEffect(async () => {
    // setData(await fatchData("/static/blog.json"));
    aTagClick();
  }, []);
  return (
    <div className="dizme_tm_section" id="blog">
      <BlogPopUp open={popup} data={popupData} close={() => setPopup(false)} />
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>From My Blog</span>
            <h3>{`Our Recent Updates, Blog, Tips, Tricks & More`}</h3>
          </div>
          <div className="news_list">
            <ul>
              {data &&
                data.map((blog, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/42-29.jpg" alt="image" />
                        <div
                          className="main"
                          data-img-url={blog && blog.img}
                          style={{
                            backgroundImage: `url(${blog && blog.img})`,
                          }}
                        />
                        <div className="date">
                          <h3>{blog && blog.date && blog.date.date}</h3>
                          <span>{blog && blog.date && blog.date.month}</span>
                        </div>
                        <a
                          className="dizme_tm_full_link"
                          href="#"
                          onClick={() => {
                            setPopupData(blog && blog);
                            setPopup(true);
                          }}
                        />
                      </div>
                      <div className="details">
                        <span className="category">
                          <a href="#">{blog.category}</a>
                        </span>
                        <h3 className="title">
                          <a href="#">{blog.title}</a>
                        </h3>
                      </div>
                      <div className="news_hidden_details">
                        <div className="news_popup_informations">
                          <div className="text">
                            {blog.details &&
                              blog.details.map((details, i) => (
                                <p key={i}>{details}</p>
                              ))}
                          </div>
                        </div>
                      </div>
                      <div className="dizme_tm_button mt-4">
                        <a className="anchor" href="#about">
                          <span>About Me</span>
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/1.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default News;
