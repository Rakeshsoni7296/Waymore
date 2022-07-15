import { useEffect } from "react";

import "./Pagination.css";

const Pagination = (props) => {
  const limiter = 8;
  let setPageStatus;
  const arr = [];

  for (let i = 0; i < props.len / limiter; i++) {
    arr.push(i + 1);
  }

  useEffect(() => {
    if (document.querySelector(".clicking-req")) {
      document.querySelector(".clicking-req").classList.add("active");
    }
  }, []);

  const removeActiveClass = () => {
    document
      .querySelectorAll(".clicking-req")
      .forEach((el) => el.classList.remove("active"));
  };

  const paginator = (e) => {
    const el = e.target.closest(".named-box");
    removeActiveClass();
    if (el) {
      if (el.dataset.clicked === "+") {
        if (props.pageNo * 1 === arr.length) {
          props.onPageChange(1);
          setPageStatus = 1;
        } else {
          props.onPageChange(props.pageNo * 1 + 1);
          setPageStatus = props.pageNo * 1 + 1;
        }
        document
          .querySelector(`.box--${setPageStatus}`)
          .classList.add("active");
      } else if (el.dataset.clicked === "-") {
        if (props.pageNo * 1 === 1) {
          props.onPageChange(arr.length);
          setPageStatus = arr.length;
        } else {
          props.onPageChange(props.pageNo - 1);
          setPageStatus = props.pageNo - 1;
        }
        document
          .querySelector(`.box--${setPageStatus}`)
          .classList.add("active");
      } else {
        props.onPageChange(el.dataset.clicked);
        el.classList.add("active");
      }
    }
  };

  if(arr.length < 2) return;

  return (
    <div className="number-contianer" onClick={paginator}>
      <div data-clicked={"-"} className="named-box">
        <img
          src="http://localhost:4500/icons/pagination/left-on.svg"
          alt="Left"
        />
      </div>
      {arr.map((el, i) => (
        <div
          key={i + 1}
          data-clicked={el * 1}
          className={`named-box clicking-req box--${i + 1}`}
        >
          {el}
        </div>
      ))}
      <div data-clicked={"+"} className="named-box">
        <img
          src="http://localhost:4500/icons/pagination/right-on.svg"
          alt="Left"
        />
      </div>
    </div>
  );
};

export default Pagination;
